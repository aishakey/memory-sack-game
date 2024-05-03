"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { fetchData } from "@/data/gameData";
import StartModal from "@/components/StartModal";
import FeedbackModal from "@/components/FeedbackModal";

function GamePage() {
  const { category } = useParams();
  const router = useRouter();
  const [allWords, setAllWords] = useState([]);
  const [currentWords, setCurrentWords] = useState([]);
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [remainingWords, setRemainingWords] = useState([]);
  const [showStartModal, setShowStartModal] = useState(true);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (currentRound > 0) {
      let roundWords = allWords.slice(0, currentRound);
      setCurrentWords(roundWords);
      setSelectedWords([]);
      setWordIndex(0);
      setRemainingWords([]);
    }
  }, [currentRound, allWords]);

  useEffect(() => {
    if (wordIndex < currentWords.length && currentRound > 0) {
      const timeoutId = setTimeout(() => {
        setDisplayedWord(currentWords[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (wordIndex >= currentWords.length) {
      setTimeout(() => {
        setDisplayedWord("");
        setRemainingWords(shuffleArray([...currentWords]));
      }, 1000);
    }
  }, [wordIndex, currentWords]);

  const handleNextRound = () => {
    setShowFeedbackModal(false);
    if (feedbackMessage.startsWith("You are")) {
      setCurrentRound(currentRound + 1);
    }
  };

  const handleSelectWord = (word) => {
    const newRemaining = remainingWords.filter((w) => w !== word);
    const newSelected = [...selectedWords, word];
    setSelectedWords(newSelected);
    setRemainingWords(newRemaining);
  };

  const handleDeselectWord = (word) => {
    const newSelected = selectedWords.filter((w) => w !== word);
    const newRemaining = [...remainingWords, word];
    setSelectedWords(newSelected);
    setRemainingWords(newRemaining);
  };

  const startGame = () => {
    if (category) {
      const categoryWords = fetchData(category);
      setAllWords(shuffleArray(categoryWords));
      setCurrentRound(1);
      setShowStartModal(false);
    }
  };

  const confirmSequence = () => {
    if (JSON.stringify(selectedWords) === JSON.stringify(currentWords)) {
      setFeedbackMessage("You are correct!");
      setShowFeedbackModal(true);
    } else {
      setFeedbackMessage("Oops...Game over");
      setShowFeedbackModal(true);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center -mt-24">
      {showStartModal && <StartModal onStart={startGame} />}
      {showFeedbackModal && (
        <FeedbackModal
          visible={showFeedbackModal}
          message={feedbackMessage}
          // onClose={handleNextRound}
          onClose={() => {
            setShowFeedbackModal(false);
            if (feedbackMessage.startsWith("You are correct")) {
              setCurrentRound(currentRound + 1);
            }
          }}
        />
      )}

      {/* Word in the cloud */}
      <div className="relative">
        <Image src="/cloud.png" alt="Cloud" width={180} height={90} />
        {displayedWord && (
          <div className="cloud-word absolute text-xl font-bold text-main-pink center">
            {displayedWord}
          </div>
        )}
      </div>
      <div className="-mt-2">
        <Image src="/single-sack.png" alt="Sack" width={240} height={120} />
      </div>

      {/* Answer Frame */}
      <div
        className="w-full -mt-4 max-w-3xl border-b-4 border-main-beige bg-[#FA9FB0] pb-2 -pt-2 mb-5 overflow-x-auto flex gap-2"
        style={{ height: "50px" }}
      >
        {selectedWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleDeselectWord(word)}
            className="bg-main-beige text-sm border-2 border-main-pink rounded-lg px-4 py-2 shadow-md"
            style={{ height: "40px", lineHeight: "20px" }}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Words Frame */}
      {/* spacing between rows */}
      <div
        className="w-full text-main-dark max-w-3xl bg-[#FFB3BF] border-4 border-main-beige rounded-lg p-5 flex flex-wrap justify-start items-start gap-2"
        style={{ height: "240px", overflowY: "auto" }}
      >
        {remainingWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleSelectWord(word)}
            className="bg-main-beige text-sm border-2 border-main-pink rounded-lg px-4 py-2 shadow-md"
            style={{ height: "40px", lineHeight: "20px" }}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Confirm Button */}
      <button
        onClick={confirmSequence}
        className="bg-dark-pink text-main-beige rounded-lg font-semibold w-full max-w-3xl py-2 mt-4 hover:bg-[#fd5675]"
      >
        Confirm
      </button>
    </div>
  );
}

export default GamePage;
