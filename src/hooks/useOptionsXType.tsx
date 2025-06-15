import { useMemo } from "react";

type TipoArchivo = "png" | "jpg" | "jpeg" | "webp" | "pdf" | "txt" | "csv";

const conversionOptions: Record<TipoArchivo, string[]> = {
  png: ["jpg", "webp", "pdf", "base64"],
  jpg: ["png", "webp", "pdf", "base64"],
  jpeg: ["png", "webp", "pdf", "base64"],
  webp: ["png", "jpg", "pdf", "base64"],
  pdf: ["png", "jpg", "txt", "base64"],
  txt: ["pdf", "csv", "base64"],
  csv: ["txt", "xlsx", "pdf", "json", "base64"],
};

interface UseOptionsXTypeProps {
  tipoDeArchivo: string;
}

export default function useOptionsXType({
  tipoDeArchivo,
}: UseOptionsXTypeProps) {
  const tipodeArchivoProps = tipoDeArchivo.toLowerCase() as TipoArchivo;

  const options = useMemo(
    () => conversionOptions[tipodeArchivoProps] || [],
    [tipodeArchivoProps]
  );

  return options;
}
