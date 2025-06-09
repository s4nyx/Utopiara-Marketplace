import axiosInstance from "./axiosInstance";
import {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  ApiError,
  ProfileResponse,
  ProfileData,
} from "./types";

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw (error.response?.data as ApiError) || { message: "Login failed" };
  }
};

export const register = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/register",
      userData
    );
    return response.data?.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw (
      (error.response?.data as ApiError) || { message: "Registration failed" }
    );
  }
};

export const updateProfile = async (
  profileData: ProfileData
): Promise<ProfileResponse> => {
  try {
    const response = await axiosInstance.put<ProfileResponse>(
      "/auth/profile",
      profileData
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw (
      (error.response?.data as ApiError) || { message: "Profile update failed" }
    );
  }
};
