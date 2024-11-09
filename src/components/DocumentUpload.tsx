import React, { useState } from 'react';

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      // Implement API call for plagiarism detection here
    }
  };

  return (
    <div className="p-5">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">
        Upload and Check
      </button>
    </div>
  );
};

export default DocumentUpload;
