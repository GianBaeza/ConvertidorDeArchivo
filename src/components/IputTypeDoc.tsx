export default function IputTypeDoc({
  handleOnchangeFile,
}: {
  handleOnchangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label htmlFor="file-upload" className="block cursor-pointer relative">
      <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-colors">
        Subir Archivo
      </span>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleOnchangeFile}
      />
    </label>
  );
}
