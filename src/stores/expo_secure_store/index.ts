// For Expo Secure Store.
import * as SecureStore from 'expo-secure-store';

const getSecureData = async (item: string) => {
  try {
    let value = await SecureStore.getItemAsync(item);
    return value;
  } catch (error: any) {
    throw new Error(error);
  }
};

const storeSecureData = async (key: string, item: string): Promise<boolean> => {
  try {
    await SecureStore.setItemAsync(key, item);
    return true;
  } catch (error) {
    return false;
  }
};

const removeSecureData = async (key: string): Promise<boolean> => {
  try {
    await SecureStore.deleteItemAsync(key);
    return true;
  } catch (error) {
    return false;
  }
};

export { getSecureData, removeSecureData, storeSecureData };
