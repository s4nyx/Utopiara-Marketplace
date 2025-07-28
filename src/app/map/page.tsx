"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import L, { LatLngBoundsExpression, Point } from "leaflet";

// Dynamically import MapContainer, TileLayer, Marker, Popup, and Control with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Dynamically import MiniMap
const MiniMap = dynamic(
  () =>
    import("react-leaflet").then((mod) => {
      const { useMap } = mod;
      let index = 0;
      return function MiniMapComponent() {
        const map = useMap();
        // Load Leaflet.MiniMap dynamically on the client side
        import("leaflet-minimap").then((MiniMapModule) => {
          const MiniMapLayer = L.tileLayer("/geo/{z}/{x}/{y}.png", {
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            tms: true,
            noWrap: true,
          });
          index = index + 1;
          const miniMap = new MiniMapModule.default(MiniMapLayer, {
            toggleDisplay: true,
            position: "topleft",
            minimized: false,
            width: 200,
            showText: "Utopiara Mini Map",
            height: 250,
            zoomLevelOffset: -5,
          });
          if (index === 1) map.addControl(miniMap);
        });
        return null;
      };
    }),
  { ssr: false }
);

interface SidebarProps {
  isOpen: boolean;
  cell: { id: string; center: [number, number] } | null;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, cell, onClose }) => {
  return (
    <div
      className={`fixed top-[88px] right-0 h-[calc(100vh-4rem)] z-[2000] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Cell Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <HamburgerIcon classname="w-6 h-6" />
          </button>
        </div>
        {cell ? (
          <div>
            <p>
              <strong>Cell ID:</strong> {cell.id}
            </p>
            <p>
              <strong>Latitude:</strong> {cell.center[0].toFixed(4)}
            </p>
            <p>
              <strong>Longitude:</strong> {cell.center[1].toFixed(4)}
            </p>
          </div>
        ) : (
          <p>No cell selected</p>
        )}
      </div>
    </div>
  );
};

const Label: React.FC = () => {
  return (
    <div className="z-[2000] absolute left-2 top-[470px] w-[200px] p-4 h-[300px] bg-white rounded-4xl flex flex-col justify-between items-start text-sm">
      <div>FOR SALE</div>
      <div>SOLD</div>
      <div>MY LAND</div>
      <div className="w-full border-b-[1px]"></div>
      <div>LEGENDARY</div>
      <div>VIP</div>
      <div className="w-full border-b-[1px]"></div>
      <div>OZA QUEST</div>
      <div>GRAND ACADEMY</div>
      <div>WINKEY CODEX</div>
      <div>MAYA QEST</div>
      <div>LANDMARK</div>
      <div>MYSTERIOUS AREA</div>
    </div>
  );
};

const mockMark: [number, number][] = [
  [1, 3],
  [1, 5],
  [2, 3],
  [33, 34],
  [33, 35],
  [33, 37],
  [34, 36],
];

const GridLayer = dynamic(
  () =>
    import("react-leaflet").then((mod) => {
      const { useMap } = mod;
      return function GridLayerComponent({
        onCellClick,
      }: {
        onCellClick: (cell: { id: string; center: [number, number] }) => void;
      }) {
        const map = useMap();
        const center: [number, number] = [-50, -60];
        const gridSize = 50;
        const cellSizePixels = 30;

        const gridCells = useMemo(() => {
          const cells = [];
          const zoom = map.getZoom();
          const centerLatLng = L.latLng(center);
          const centerPixel = map.project(centerLatLng, zoom);

          const totalSizePixels = gridSize * cellSizePixels;
          const startX = centerPixel.x - totalSizePixels / 2;
          const startY = centerPixel.y - totalSizePixels / 2;

          for (let i = 0; i < gridSize; i++) {
            //i:row j:col
            for (let j = 0; j < 1.35 * gridSize; j++) {
              const southWestPixel = new Point(
                startX + j * cellSizePixels,
                startY + (i + 1) * cellSizePixels
              );
              const northEastPixel = new Point(
                startX + (j + 1) * cellSizePixels,
                startY + i * cellSizePixels
              );

              const southWest = map.unproject(southWestPixel, zoom);
              const northEast = map.unproject(northEastPixel, zoom);
              const bounds: LatLngBoundsExpression = [
                [southWest.lat, southWest.lng],
                [northEast.lat, northEast.lng],
              ];

              const centerLatLng = [
                (southWest.lat + northEast.lat) / 2,
                (southWest.lng + northEast.lng) / 2,
              ] as [number, number];

              const isMark = mockMark.some(
                ([row, col]) => row === i && col === j
              );

              cells.push({
                bounds,
                id: `cell-${i}-${j}`,
                center: centerLatLng,
                isMark,
              });
            }
          }
          return cells;
        }, [map, center, gridSize, cellSizePixels]);

        const zoom = map.getZoom();
        const baseIconSize = 20;
        const iconSize = baseIconSize * (zoom / 3);

        return (
          <>
            <style>
              {`
                .custom-marker div {
                  background-color: red;
                  width: ${iconSize}px;
                  height: ${iconSize}px;
                  transition: background-color 0.3s ease;
                }
                .custom-marker div:hover {
                  background-color: grey;
                }
              `}
            </style>
            {gridCells.map((cell) => (
              <mod.Rectangle
                key={cell.id}
                bounds={cell.bounds}
                pathOptions={{
                  color: "#B3B3B3BB",
                  weight: 1,
                  fillOpacity: 0.1,
                }}
                eventHandlers={{
                  click: () => {
                    if (cell.isMark) onCellClick(cell);
                  },
                }}
              >
                {cell.isMark && (
                  <Marker
                    eventHandlers={{
                      click: () => {
                        if (cell.isMark) onCellClick(cell);
                      },
                    }}
                    position={[cell.center[0], cell.center[1]]}
                    icon={L.divIcon({
                      className: "custom-marker",
                      html: `<div></div>`,
                      iconSize: [iconSize, iconSize],
                      iconAnchor: [10, 10],
                    })}
                  >
                    <Popup>A marker at center.</Popup>
                  </Marker>
                )}

                <Popup>Cell {cell.id}</Popup>
              </mod.Rectangle>
            ))}
          </>
        );
      };
    }),
  { ssr: false }
);

import "leaflet/dist/leaflet.css";
import "leaflet-minimap/dist/Control.MiniMap.min.css";
import { HamburgerIcon } from "@/components/svgs/HamburgerIcon";

const Map: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{
    id: string;
    center: [number, number];
  } | null>(null);

  // Define the maximum bounds for navigation
  const maxBounds: LatLngBoundsExpression = [
    [-180, -200], // Southwest corner (lat, lng)
    [60, 180], // Northeast corner (lat, lng)
  ];

  const handleCellClick = (cell: { id: string; center: [number, number] }) => {
    setSelectedCell(cell);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    setTimeout(() => setSelectedCell(null), 300);
  };

  return (
    <div className="h-screen w-screen relative">
      <Label />
      <div className="h-[calc(100vh-112px)] w-screen">
        <MapContainer
          center={[0, 0]}
          zoom={3}
          style={{ height: "100%", width: "100%" }}
          className="rounded-lg shadow-md"
          maxBounds={maxBounds}
          maxBoundsViscosity={1.0}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="/geo/{z}/{x}/{y}.png"
            tms={true}
            noWrap={true}
          />
          <GridLayer onCellClick={handleCellClick} />
          <MiniMap />
        </MapContainer>
        <Sidebar
          isOpen={sidebarOpen}
          cell={selectedCell}
          onClose={handleCloseSidebar}
        />
      </div>
    </div>
  );
};

export default Map;
