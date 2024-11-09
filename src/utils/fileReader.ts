import mammoth from "mammoth";
import PDFParse from 'pdf-parse2';


export const extractTextFromWord = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};


export const extractTextFromPdf = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdfParser = new PDFParse();

  try {
    const pdfData = await pdfParser.loadPDF(arrayBuffer);

    return pdfData?.text || "";  // Return the extracted text
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;  // Rethrow the error for handling outside the function
  }
};

