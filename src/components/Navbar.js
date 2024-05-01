"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-12 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Memory Sack"
            width={180}
            height={80}
            className="cursor-pointer block transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </Link>
        <button
          onClick={toggleModal}
          className="cursor-pointer focus:outline-none relative"
        >
          <Image
            src="/faq.svg"
            alt="Help"
            width={54}
            height={40}
            className="transition-all duration-300 ease-in-out transform active:translate-y-1"
          />
        </button>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-main-beige text-main-dark text-sm sm:text-base px-8 py-6 rounded-lg border-main-pink border-8 max-w-md sm:max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">
              Welcome to Memory Sack!
            </h2>
            <p>
              Get ready to boost your memory in a fun and exciting way! Here at
              Memory Sack, you'll challenge your brain by remembering and
              recalling sequences of words pulled from the magical sack. Whether
              you're a fan of animals, fruits and veggies, countries, or more,
              we've got a category just for you!
            </p>
            <h3 className="pt-4 pb-2 text-base sm:text-lg">
              Here's How to Play:
            </h3>
            <ul>
              <li className="pb-2">
                <span className="text-main-pink font-semibold">
                  Choose Your Category:
                </span>{" "}
                Select from a variety of topics like Countries, Animals, Fruits
                & Veggies, and U.S States.
              </li>
              <li className="pb-2">
                <span className="text-main-pink font-semibold">
                  Watch Carefully:
                </span>{" "}
                Words will appear one by one from the sack at the top of your
                screen.
              </li>
              <li className="pb-2">
                <span className="text-main-pink font-semibold">Memorize:</span>{" "}
                Try to remember each word and the order they appear.
              </li>
              <li className="pb-2">
                <span className="text-main-pink font-semibold">Recall:</span>{" "}
                After the words disappear, you'll see buttons with these words
                at the bottom of the screen. Tap them in the order they were
                shown.
              </li>
              <li>
                <span className="text-main-pink font-semibold">Level Up:</span>{" "}
                Each round gets progressively more challenging as more words are
                added to the sequence.
              </li>
            </ul>

            <div className="flex justify-center mt-4">
              <button
                onClick={toggleModal}
                className="sm:px-8 px-16 py-2 rounded-lg bg-dark-pink text-main-beige font-semibold hover:bg-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
