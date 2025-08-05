import axiosInstance from "./axiosInstance";
import {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  ApiError,
  ProfileResponse,
  VerifyData,
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
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw (
      (error.response?.data as ApiError) || { message: "Registration failed" }
    );
  }
};

export const verifyEmail = async (
  verifyData: VerifyData
): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/verify-email",
      verifyData
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw (
      (error.response?.data as ApiError) || { message: "Registration failed" }
    );
  }
};

export const updateProfile = async (
  profileData: FormData
): Promise<ProfileResponse> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.put<ProfileResponse>(
      "/auth/profile",
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw (
      (error.response?.data as ApiError) || { message: "Profile update failed" }
    );
  }
};

export const forgotPassword = async (
  email: string
): Promise<{ message: string }> => {
  const response = await axiosInstance.post(`/auth/forgot-password`, {
    email,
  });

  const data = await response.data;
  if (!response.data) throw new Error(data.message || "Something went wrong");

  return data;
};

// services/auth.ts
export const resetPassword = async (
  token: string,
  password: string
): Promise<{ message: string }> => {
  const response = await axiosInstance.post(`/auth/reset-password`, {
    token,
    password,
  });

  const data = await response.data;
  if (!response.data) throw new Error(data.message || "Something went wrong");

  return data;
};
