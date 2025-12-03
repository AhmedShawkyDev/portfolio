
"use client";
export default function DownloadButton() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Ahmed_Shawky.pdf";
    link.download = "Ahmed_Shawky.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      Download PDF
    </button>
  );
}
