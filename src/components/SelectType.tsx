import useOptionsXType from "../hooks/useOptionsXType";
import type { TiposDeArchivo } from "../interface/Interface";

interface SelectTypeProps {
  onChange: (value: string) => void;
  tipoDeArchivoAConvertir: string;
  tipoDeArchivoSubido: TiposDeArchivo | "";
}

export default function SelectType({
  onChange,
  tipoDeArchivoAConvertir,
  tipoDeArchivoSubido,
}: SelectTypeProps) {
  const options = useOptionsXType({ tipoDeArchivo: tipoDeArchivoSubido });
  return (
    <label htmlFor="tipoFile" className="flex items-center gap-2">
      <select
        name="tipoArchivo"
        className="h-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Seleccionar tipo de archivo"
        onChange={(e) => onChange(e.target.value)}
        value={tipoDeArchivoAConvertir}
        disabled={!tipoDeArchivoSubido}
      >
        <option value="" disabled className="text-gray-500">
          {" "}
          Seleccione
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
