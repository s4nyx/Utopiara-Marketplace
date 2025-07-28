// types/leaflet-minimap.d.ts
declare module "leaflet-minimap" {
    import * as L from "leaflet";
  
    interface MiniMapOptions extends L.ControlOptions {
      toggleDisplay?: boolean;
      minimized?: boolean;
      position?: L.ControlPosition;
      width?: number;
      height?: number;
      zoomLevelOffset?: number;
      zoomLevelFixed?: number;
      aimingRectOptions?: L.PathOptions;
      shadowRectOptions?: L.PathOptions;
      showText?: string;
    }
  
    class MiniMap extends L.Control {
      constructor(layer: L.Layer, options?: MiniMapOptions);
    }
  
    export default MiniMap;
  }
  