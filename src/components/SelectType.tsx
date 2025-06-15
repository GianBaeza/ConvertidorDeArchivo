import useOptionsXType from "../hooks/useOptionsXType";
import type { TiposDeArchivo } from "../interface/Interface";

interface SelectTypeProps {
  onChange: (value: string) => void;
  tipoDeArchivoSubido: TiposDeArchivo;
}

export default function SelectType({
  onChange,
  tipoDeArchivoSubido,
}: SelectTypeProps) {
  const options = useOptionsXType({ tipoDeArchivo: tipoDeArchivoSubido });
  return (
    <label htmlFor="tipoFile" className="flex flex-col gap-2">
      Convertir a:
      <select
        name="tipoArchivo"
        className="h-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Seleccionar tipo de archivo"
        onChange={(e) => onChange(e.target.value)}
        value={tipoDeArchivoSubido}
        disabled={!tipoDeArchivoSubido}
      >
        <option value="" disabled>
          {options.length > 0 ? "Seleccionar tipo de archivo" : "Subir Archivo"}
        </option>
        {options.map((nombre, index) => (
          <option key={index} value={nombre}>
            {String(nombre)}
          </option>
        ))}
      </select>
    </label>
  );
}
