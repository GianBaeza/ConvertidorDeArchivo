import ConvertApi from "convertapi-js";

export const servicios = {
  ConvertirArchivo: async ({
    archivo,
    tipoSubido,
    AConvertir,
  }: {
    archivo: File;
    tipoSubido: string;
    AConvertir: string;
  }) => {
    try {
      const convertApi = ConvertApi.auth("6n3jD6QRqJAqM9YLecNt6KI16PwCbiPO");
      const params = convertApi.createParams();
      params.add("File", archivo);

      const result = await convertApi.convert(tipoSubido, AConvertir, params);

      const url = result.files[0].Url;
      return url;
    } catch (error) {
      console.error("Error al convertir archivo:", error);
      throw error;
    }
  },
};
