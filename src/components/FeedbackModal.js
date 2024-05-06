function FeedbackModal({ visible, message, onClose, roundsCompleted }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="flex flex-col bg-main-beige text-main-dark px-16 py-6 sm:px-20 sm:py-12 rounded-lg border-main-pink border-8 mx-6 sm:mx-0">
        <h2 className="text-xl sm:text-3xl mb-4 sm:mb-8 text-center">
          {message}
        </h2>
        {message.startsWith("You are correct") ? (
          <button
            onClick={onClose}
            className="bg-dark-pink text-main-beige font-semibold rounded-lg px-12 py-2 hover:bg-[#fd5675]"
          >
            Next Round
          </button>
        ) : (
          <p className="text-center mt-2 text-dark-pink font-semibold sm:text-xl">
            Rounds Completed:{" "}
            <span className="text-main-dark">{roundsCompleted}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default FeedbackModal;
