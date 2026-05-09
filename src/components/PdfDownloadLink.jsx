export default function PdfDownloadLink({ href, downloadName, children, className = "", variant = "button" }) {
  const base =
    variant === "button"
      ? "inline-flex items-center gap-2 rounded-md bg-industrial-700 px-4 py-2 text-sm font-semibold text-white hover:bg-industrial-800"
      : "text-sm font-semibold text-industrial-700 hover:underline";

  return (
    <a
      href={href}
      download={downloadName}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
