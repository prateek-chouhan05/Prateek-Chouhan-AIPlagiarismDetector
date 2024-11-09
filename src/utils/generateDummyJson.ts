// Generated from ChatGPT
type ScanInformation = {
  service: string;
  scanTime: string;
  inputType: string;
};

type Result = {
  score: number;
  sourceCounts: number;
  textWordCounts: number;
  totalPlagiarismWords: number;
  identicalWordCounts: number;
  similarWordCounts: number;
};

type PlagiarismFound = {
  startIndex: number;
  endIndex: number;
  sequence: string;
};

type Source = {
  score: number;
  canAccess: boolean;
  totalNumberOfWords: number;
  plagiarismWords: number;
  identicalWordCounts: number;
  similarWordCounts: number;
  url: string;
  author: string;
  description: string;
  title: string;
  publishedDate: string;
  source: string;
  citation: boolean;
  plagiarismFound: PlagiarismFound[];
  is_excluded: boolean;
  similarWords: string[];
};

type Index = {
  startIndex: number;
  endIndex: number;
};

type DummyJSON = {
  status: number;
  scanInformation: ScanInformation;
  result: Result;
  sources: Source[];
  similarWords: string[];
  indexes: Index[];
  citations: string[];
  text: string;
  credits_used: number;
  credits_remaining: number;
};

function getRandomTextSequence(text: string, maxLength: number): { sequence: string; startIndex: number; endIndex: number } {
  const startIndex = Math.floor(Math.random() * (text.length - maxLength));
  const endIndex = startIndex + Math.min(maxLength, text.length - startIndex);
  return { sequence: text.slice(startIndex, endIndex), startIndex, endIndex };
}

export const generateDummyJSON = (inputText: string): DummyJSON => {
  const wordCount = inputText.split(" ").length;

  const dummyJSON: DummyJSON = {
    status: 200,
    scanInformation: {
      service: "plagiarism",
      scanTime: new Date().toISOString(),
      inputType: "text",
    },
    result: {
      score: Math.floor(Math.random() * 100),
      sourceCounts: Math.floor(Math.random() * 10) + 1,
      textWordCounts: wordCount,
      totalPlagiarismWords: Math.floor(Math.random() * wordCount),
      identicalWordCounts: Math.floor(Math.random() * wordCount / 2),
      similarWordCounts: Math.floor(Math.random() * wordCount / 2),
    },
    sources: Array.from({ length: 3 }, (_, index) => ({
      score: Math.floor(Math.random() * 30),
      canAccess: true,
      totalNumberOfWords: wordCount,
      plagiarismWords: Math.floor(Math.random() * wordCount / 2),
      identicalWordCounts: Math.floor(Math.random() * wordCount / 2),
      similarWordCounts: Math.floor(Math.random() * wordCount / 2),
      url: `https://example.com/source${index + 1}`,
      author: `@author${index + 1}`,
      description: `Description for source ${index + 1}`,
      title: `Title of Source ${index + 1}`,
      publishedDate: "unknown",
      source: `example.com`,
      citation: false,
      plagiarismFound: Array.from({ length: 2 }, () => {
        const { sequence, startIndex, endIndex } = getRandomTextSequence(inputText, 50);
        return { startIndex, endIndex, sequence };
      }),
      is_excluded: false,
      similarWords: [],
    })),
    similarWords: [],
    indexes: Array.from({ length: 5 }, () => {
      const { startIndex, endIndex } = getRandomTextSequence(inputText, 50);
      return { startIndex, endIndex };
    }),
    citations: [],
    text: inputText,
    credits_used: Math.floor(Math.random() * 500),
    credits_remaining: Math.floor(Math.random() * 3000),
  };

  return dummyJSON;
};

// Example usage
const inputText = "Sample input text to generate dummy JSON with realistic plagiarism sequences.";
const dummyOutput = generateDummyJSON(inputText);
console.log(JSON.stringify(dummyOutput, null, 2));
