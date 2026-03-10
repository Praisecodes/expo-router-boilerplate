import Axios, { AxiosError } from 'axios';
import { toast } from 'sonner-native';
import { getSecureData, storeSecureData } from '../stores/expo_secure_store';
import {
  EXPO_PUBLIC_ACCESS_TOKEN_KEY,
  EXPO_PUBLIC_BASE_URL,
  EXPO_PUBLIC_REFRESH_TOKEN_KEY
} from './env';

const ApiClient = Axios.create({
  baseURL: EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

ApiClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getSecureData(EXPO_PUBLIC_ACCESS_TOKEN_KEY);

    if (!!accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiClient.interceptors.response.use(
  async (response) => {
    if (!!response?.data?.access) {
      await storeSecureData(EXPO_PUBLIC_ACCESS_TOKEN_KEY, response.data.access);
    }
    if (!!response?.data?.refresh) {
      await storeSecureData(EXPO_PUBLIC_REFRESH_TOKEN_KEY, response.data.refresh);
    }

    return response;
  },
  (error: AxiosError) => {
    console.log("API Error:", JSON.stringify(error.response?.data, null, 2));
    const statusCode = error.response?.status ?? 0;
    const errorData = error.response?.data as IErrorResponse;

    if (statusCode <= 0) {
      toast.error("Network error. Please check your internet connection.");
      return Promise.reject(error);
    }

    switch (statusCode) {
      default:
        toast.error(errorData?.message ?? "Something went wrong");
    }

    return Promise.reject(error);
  }
)

export default ApiClient;
