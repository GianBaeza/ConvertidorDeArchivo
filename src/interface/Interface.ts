export interface SelectTypeOption {
  label: string;
  value:
    | "pdf"
    | "doc"
    | "docx"
    | "rtf"
    | "ppt"
    | "pptx"
    | "jpeg"
    | "png"
    | "jfif"
    | "xls"
    | "xlsx"
    | "txt";
}
export type TiposDeArchivo =
  | "png"
  | "jpg"
  | "jpeg"
  | "webp"
  | "pdf"
  | "txt"
  | "csv"
  | "";
export type SelectTypeProps = SelectTypeOption[];
