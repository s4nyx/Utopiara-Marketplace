export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  token: string;
  user: {
    email: string;
    name?: string;
  };
}

export interface ApiError {
  message: string;
}

export interface ProfileData {
  username: string;
  email: string;
  userAvatar?: string;
  userBanner?: string;
  bio?: string;
  walletAddresses?: string[];
  urls?: string[];
}

export interface ProfileResponse {
  user: {
    username: string;
    email: string;
    userAvatar?: string;
    userBanner?: string;
    bio?: string;
    walletAddresses?: string[];
    urls?: string[];
  };
}
