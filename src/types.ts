export interface LineContext {
  line: string;
  surrounding: string;
  language: string;
  fileName: string;
}

export interface Suggestion {
  original: string;
  improved: string;
  explanation: string;
}
