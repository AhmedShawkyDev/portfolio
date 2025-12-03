export const DownloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/public/Ahmed_Shawky.pdf";
  link.download = "Ahmed_Shawky.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

<button onClick={DownloadPDF} className="px-4 py-2 bg-green-500 text-white rounded">
  Download PDF
</button>