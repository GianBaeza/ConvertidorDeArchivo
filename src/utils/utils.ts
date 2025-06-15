export const detectarTipoArchivo = (e) => {
  console.log("Archivo subido:", e.target.files[0]);
  return e.target.files[0].name.split(".")[1];
};
