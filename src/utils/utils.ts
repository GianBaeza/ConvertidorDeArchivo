import type { ChangeEvent } from "react";

export const detectarTipoArchivo = (e: ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files || files.length === 0) return undefined;
  return files[0].name.split(".")[1];
};
