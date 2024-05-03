function StartModal({ onStart }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="flex flex-col bg-main-beige text-main-dark px-16 py-6 sm:px-20 sm:py-12 rounded-lg border-main-pink border-8 mx-6 sm:mx-0">
          <h2 className="text-xl sm:text-3xl mb-4 sm:mb-8 text-center">
            Ready to Play?
          </h2>
          <button
            onClick={onStart}
            className="bg-dark-pink text-main-beige font-semibold rounded-lg px-12 py-2 hover:bg-[#fd5675]"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartModal;
