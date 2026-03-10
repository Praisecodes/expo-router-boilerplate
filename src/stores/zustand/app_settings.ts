import { create } from "zustand";

interface IUseAppSettings {
  adminSettings: IAdminSettings | null;
  setAdminSettings: (adminSettings: IAdminSettings) => void;
  userPreferences: IUserPreferences | null;
  setUserPreferences: (userPreferences: IUserPreferences) => void;
}

const useAppSettings = create<IUseAppSettings>()(set => ({
  adminSettings: null,
  userPreferences: null,
  setAdminSettings: (adminSettings) => set(() => ({ adminSettings })),
  setUserPreferences: (userPreferences) => set(() => ({ userPreferences })),
}));

export default useAppSettings;
