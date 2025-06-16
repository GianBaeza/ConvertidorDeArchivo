import { useState, type ChangeEvent } from "react";
import "./App.css";
import CardContainter from "./components/CardContainter";
import SelectType from "./components/SelectType";
import IputTypeDoc from "./components/IputTypeDoc";
import { detectarTipoArchivo } from "./utils/utils";
import Loader from "./ui/Loader";
import { servicios } from "./services/services";
import { conversionOptions } from "./utils/constantes";
import type { TiposDeArchivo } from "./interface/Interface";
import { ToastContainer, toast } from "react-toastify";
import { Notificaciones } from "./utils/notificaciones";

type EstadosDeCarga = "" | "subiendo" | "cargando" | "exito" | "error";

function App() {
  const [tipoDeArchivoSubido, setTipoArchivoSubido] = useState<
    TiposDeArchivo | ""
  >("");
  const [tipoDeArchivoAConvertir, setTipoDeArchivoAConvertir] = useState("");
  const [estadosDeCarga, setEstadosDeCarga] = useState<EstadosDeCarga>("");
  const [archivoSubido, setArchivoSubido] = useState<File | null>(null);
  const [urlConvertido, setUrlConvertido] = useState<string | null>(null);

  const handleChangeTiposArchivo = (value: string) => {
    setTipoDeArchivoAConvertir(value);
    setUrlConvertido(null);
  };

  const handleOnchangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const tipoArchivo = detectarTipoArchivo(e);
    if (
      !conversionOptions[
        tipoArchivo.toLowerCase() as keyof typeof conversionOptions
      ]
    ) {
      Notificaciones.info(
        "El tipo de archivo subido no es compatible para la conversión."
      ); // SI EL TIPO DE ARHIVO SUBIDO NO ES COMPATIBLE NO SIGUE EL CURSO , MOSTRAR LOS TIPOS COMPATIBLES
      return;
    }

    setTipoArchivoSubido(tipoArchivo);
    const file = e.target.files?.[0];
    if (!file) return;
    setArchivoSubido(file);

    setEstadosDeCarga("subiendo");
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadstart = () => setEstadosDeCarga("subiendo");
    fileReader.onprogress = () => setEstadosDeCarga("cargando");
    fileReader.onloadend = () => setEstadosDeCarga("exito");
    fileReader.onerror = () => setEstadosDeCarga("error");
  };

  const handleConvertirArchivo = async () => {
    if (!archivoSubido || !tipoDeArchivoSubido || !tipoDeArchivoAConvertir) {
      Notificaciones.info(
        "Debes subir un archivo y seleccionar el tipo a convertir."
      );
      return;
    }

    setEstadosDeCarga("cargando");
    setUrlConvertido(null);

    try {
      const URL_DONWLOAD = await servicios.ConvertirArchivo({
        archivo: archivoSubido,
        tipoSubido: tipoDeArchivoSubido,
        AConvertir: tipoDeArchivoAConvertir,
      });
      setUrlConvertido(URL_DONWLOAD);

      setEstadosDeCarga("exito");
      Notificaciones.exito("Archivo convertido exitosamente.");
    } catch (error) {
      console.error("Error al convertir archivo:", error);
      setEstadosDeCarga("error");
    }
  };

  const estaCargando =
    estadosDeCarga === "subiendo" || estadosDeCarga === "cargando";

  const downloadArchivo = () => {
    if (!urlConvertido) return;
    const link = document.createElement("a");
    link.href = urlConvertido;
    link.download = `archivo_convertido.${tipoDeArchivoAConvertir}`;
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div
      className={
        "w-screen h-screen  flex items-center justify-center rounded-lg shadow-lg"
      }
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CardContainter
        style={`flex flex-col bg-card  justify-center items-center gap-4  rounded-3xl shadow-lg ${
          !tipoDeArchivoSubido && "pt-32"
        }`}
      >
        <h1 className="text-md text-center text-wrap bg-trasparent  md:text-4xl font-bold text-white">
          Convertir Archivo
        </h1>
        <p className="text-gray-100 text-sm text-center text-wrap">
          Subí tu archivo. Vamos a detectar su tipo automáticamente y podrás
          elegir a qué formato convertirlo entre las opciones disponibles.
        </p>

        <IputTypeDoc handleOnchangeFile={handleOnchangeFile} />
        <p className="text-sm  right-27 top-5 text-gray-400">
          {archivoSubido?.name}
        </p>

        {estaCargando && <Loader />}
        <main
          className={` w-full p-4 rounded-lg flex flex-col md:flex-row  ${
            tipoDeArchivoSubido && "shadow-md bg-white"
          } flex justify-center items-center gap-4 `}
        >
          {tipoDeArchivoSubido && (
            <h5 className="text-lg font-semibold text-gray-500">
              Convertir de{" "}
              {tipoDeArchivoSubido
                ? tipoDeArchivoSubido.toUpperCase()
                : "PNG, JPG..."}{" "}
              a:
            </h5>
          )}
          {tipoDeArchivoSubido && (
            <SelectType
              onChange={handleChangeTiposArchivo}
              tipoDeArchivoAConvertir={tipoDeArchivoAConvertir}
              tipoDeArchivoSubido={tipoDeArchivoSubido}
            />
          )}
          {tipoDeArchivoSubido && (
            <button
              className=" text-gray-500 py-2 px-6 rounded "
              onClick={handleConvertirArchivo}
              disabled={
                estaCargando || !archivoSubido || !tipoDeArchivoAConvertir
              }
            >
              Convertir
            </button>
          )}
        </main>
        {estadosDeCarga === "exito" && urlConvertido && (
          <button onClick={downloadArchivo}>Download Archivo</button>
        )}
        {estadosDeCarga === "error" && (
          <div className="mt-4 text-red-600 font-bold">
            Error al convertir el archivo.
          </div>
        )}
      </CardContainter>
    </div>
  );
}

export default App;
