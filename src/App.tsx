import { useState, ChangeEvent } from "react";
import "./App.css";
import CardContainter from "./components/CardContainter";
import SelectType from "./components/SelectType";
import IputTypeDoc from "./components/IputTypeDoc";
import { detectarTipoArchivo } from "./utils/utils";
import type { TiposDeArchivo } from "./interface/Interface";
import Loader from "./ui/loader";

type EstadosDeCarga = "" | "subiendo" | "cargando" | "exito" | "error";

function App() {
  const [tipoDeArchivoSubido, setTipoArchivoSubido] =
    useState<TiposDeArchivo>("");
  const [tipoDeArchivoAConvertir, setTipoDeArchivoAConvertir] = useState("");
  const [estadosDeCarga, setEstadosDeCarga] = useState<EstadosDeCarga>("");

  const handleChangeTiposArchivo = (value: string) => {
    setTipoDeArchivoAConvertir(value);
    console.log("Tipo de archivo seleccionado:", value);
  };

  const handleOnchangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const tipoArchivo = detectarTipoArchivo(e);
    setTipoArchivoSubido(tipoArchivo);

    const archivoSubido = e.target.files?.[0];
    if (!archivoSubido) return;

    const file = new FileReader();
    file.readAsDataURL(archivoSubido);

    file.onloadstart = () => setEstadosDeCarga("subiendo");
    file.onprogress = () => setEstadosDeCarga("cargando");
    file.onloadend = () => setEstadosDeCarga("exito");
    file.onerror = () => setEstadosDeCarga("error");

    file.onload = () => {
      const resultArchivo = file.result;
      console.log("Resultado del archivo:", resultArchivo);
    };
  };

  console.log("Estados de carga:", estadosDeCarga);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <CardContainter style="flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">
          Tipo De Archivo {tipoDeArchivoSubido}
        </h1>
        {estadosDeCarga !== "" && estadosDeCarga !== "exito" && <Loader />}
        <SelectType
          onChange={handleChangeTiposArchivo}
          tipoDeArchivoSubido={tipoDeArchivoSubido}
        />
        <IputTypeDoc handleOnchangeFile={handleOnchangeFile} />
      </CardContainter>
    </div>
  );
}

export default App;
