import type { TiposDeArchivo } from "../interface/Interface";

export const conversionOptions: Record<TiposDeArchivo, string[]> = {
  png: ["jpg", "webp", "pdf", "base64"],
  jpg: ["png", "webp", "pdf", "base64"],
  jpeg: ["png", "webp", "pdf", "base64"],
  webp: ["png", "jpg", "pdf", "base64"],
  pdf: ["png", "jpg", "txt", "base64"],
  txt: ["pdf", "csv", "base64"],
  csv: ["txt", "xlsx", "pdf", "json", "base64"],
};
