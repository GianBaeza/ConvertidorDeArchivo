import { memo } from "react";

interface Props {
  valorSeleccionado: string;
}

const InputTypeDoc = memo(({ valorSeleccionado }: Props) => {
  //   const [mostrarError, setMostrarError] = useState(false);
  console.log("RENDERIZO INPUT");

  return (
    <label htmlFor="file-upload" className="block cursor-pointer">
      <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-colors">
        Subir Archivo
      </span>
      <input
        id="file-upload"
        type="file"
        accept={valorSeleccionado}
        className="hidden"
        disabled={!valorSeleccionado}
      />
      {/* {mostrarError && (
        <p className="text-red-300">Por favor seleccione un tipo</p>
      )} */}
    </label>
  );
});

export default InputTypeDoc;
