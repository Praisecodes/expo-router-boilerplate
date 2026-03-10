import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (item: string) => {
  try {
    let value = await AsyncStorage.getItem(item);
    return value;
  } catch (error: any) {
    throw new Error(error);
  }
};

const storeData = async (key: string, item: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, item);
    return true;
  } catch (error) {
    return false;
  }
};

const removeData = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

export { getData, removeData, storeData };
