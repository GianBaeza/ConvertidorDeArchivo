import Alert from "@mui/material/Alert";
export default function SimpleAlert({ text }: { text?: string }) {
  return (
    <Alert icon={2} severity="success">
      {text || "Archivo convertido exitosamente!"}
    </Alert>
  );
}
