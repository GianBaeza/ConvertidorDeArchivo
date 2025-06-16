export default function IputTypeDoc({
  handleOnchangeFile,
}: {
  handleOnchangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className=" flex items-center justify-center w-full h-16 pt-5 md:pt-0">
      <label htmlFor="file-upload" className="block cursor-pointer relative">
        <span className="bg-gray-100 border border-dashed border-gray-300 rounded-lg hover:bg-gray-200 transition-colors p-5 ">
          Subir Archivo
        </span>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleOnchangeFile}
        />
      </label>
    </div>
  );
}
