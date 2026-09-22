import { useEffect, useState } from "react";

export function useTypedText(
  words: readonly string[] | string,
  startDelay = 500,
  typeSpeed = 40,
  deleteSpeed = 30,
  pauseTime = 1500,
) {
  const wordList = Array.isArray(words) ? words : [words];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  // initial delay before typing starts
  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    const currentWord = wordList[wordIndex % wordList.length];

    // finished typing a word -> pause, then start deleting
    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    // finished deleting -> move to next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % wordList.length);
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    started,
    wordIndex,
    wordList,
    typeSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  return text;
}
