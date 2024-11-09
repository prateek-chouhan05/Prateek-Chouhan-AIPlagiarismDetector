/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CloseIcon } from "../assets/svg";
import { extractTextFromPdf, extractTextFromWord } from "../utils/fileReader";

const UserScreen: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setResults(null);
    const uploadedFile = event.target.files?.[0];

    if (
      uploadedFile &&
      (uploadedFile.type === "application/pdf" ||
        uploadedFile.type === "application/msword" ||
        uploadedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFile(uploadedFile);
    } else {
      alert("Please upload a PDF or Word document.");
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleAnalyze = async () => {
    setIsLoading(true);
    let text = "";
    if (!file) {
      alert("Please upload a file");
      return;
    }

    try {
      if (file.type === "application/pdf") {
        text = await extractTextFromPdf(file);
        console.log("PDF Text:", text);
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        text = await extractTextFromWord(file);
      } else {
        console.log("Unsupported file type");
      }
      const options = {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${"import.meta.env.VITE_OPENAI_"}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      };
      console.log("🚀 ~ handleAnalyze ~ options:", options)

      const response = await fetch(
        "https://api.gowinston.ai/v2/plagiarism",
        options
      );
      const data = await response.json();
      console.log(data);

      setResults(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred while analyzing the file.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-200">
      <Header />
      <main className="flex-grow flex flex-col items-center p-8">
        <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Dashboard
          </h1>
          <p className="mb-6 text-gray-300 text-sm sm:text-base">
            Upload a document (PDF, Word) to check for plagiarism.
          </p>

          <div className="relative w-full mb-4">
            {file ? (
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded-lg">
                <span className="text-gray-300">{file.name}</span>
                <CloseIcon
                  className="xl:w-6 xl:h-6 w-4 h-4 cursor-pointer"
                  fill="white"
                  onClick={handleRemoveFile}
                />
              </div>
            ) : (
              <label className="cursor-pointer w-full flex flex-col items-center border border-gray-500 rounded-lg py-2 hover:bg-gray-700">
                <span className="text-gray-400">Choose file</span>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf, .doc, .docx"
                />
              </label>
            )}
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!file || isLoading}
            className="w-full px-4 py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isLoading ? "Analyzing..." : "Analyze Document"}
          </button>

          {results && (
            <div className="mt-8 p-6 bg-gray-700 rounded-lg shadow-inner border border-gray-600 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">
                Plagiarism Report
              </h2>
              <p className="text-gray-300 mb-4">
                Plagiarism detected:{" "}
                <span className="font-bold">{results.result.score}%</span>
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">
                Sources:
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {results.sources.map((source: any, index: number) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      {source.title}
                    </a>
                    <p className="text-gray-300">
                      Plagiarism Score:{" "}
                      <span className="font-bold">{source.score}%</span>
                    </p>
                    <p className="text-gray-300">
                      Plagiarism Found:
                      <ul className="list-inside list-decimal">
                        {source.plagiarismFound.map((item: any, i: number) => (
                          <li key={i} className="text-gray-300">
                            {item.sequence} (Index: {item.startIndex}-
                            {item.endIndex})
                          </li>
                        ))}
                      </ul>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserScreen;
