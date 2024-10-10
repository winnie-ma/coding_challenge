export const reverseSentence = (
  sentence: string,
  reverseWords: boolean,
  reverseLetters: boolean
): string => {
  // Edge case: check if the sentence is empty or contains only whitespace
  if (!sentence.trim()) {
    return "Input sentence is empty.";
  }

  let words = sentence.trim().split(" "); // Split by one space

  if (reverseWords) {
    words = words.reverse();
  }

  if (reverseLetters) {
    words = words.map(word => word.split("").reverse().join(""));
  }

  return words.join(" ");
};
