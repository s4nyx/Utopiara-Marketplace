import axiosInstance from "./axiosInstance";
import { ApiResponse } from "./types";

export const getAvailableNFTLands = async (
  page: number = 1,
  limit: number = 10
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get("/nfts/nftlands/available", {
      params: { page, limit },
    });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to fetch NFT lands");
  }
};
