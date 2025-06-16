import { useMemo } from "react";
import { conversionOptions } from "../utils/constantes";
import type { TiposDeArchivo } from "../interface/Interface";

interface UseOptionsXTypeProps {
  tipoDeArchivo: string;
}

export default function useOptionsXType({
  tipoDeArchivo,
}: UseOptionsXTypeProps) {
  const tipodeArchivoProps = tipoDeArchivo.toLowerCase() as TiposDeArchivo;

  const options = useMemo(
    () => conversionOptions[tipodeArchivoProps] || [],
    [tipodeArchivoProps]
  );

  return options;
}
