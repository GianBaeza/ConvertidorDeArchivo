import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageState {
  archivoSubido: File | null;
  tipoDeArchivoSubido: string;
  setArchivoSubido: (file: File | null) => void;
}
export const useStorage = create<
  StorageState,
  [["zustand/persist", StorageState]]
>(
  persist(
    (set) => ({
      archivoSubido: null,
      tipoDeArchivoSubido: "",
      setArchivoSubido: (file: File | null) => set({ archivoSubido: file }),
    }),
    { name: "storageArchivos" }
  )
);
