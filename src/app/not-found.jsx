import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center pt-28 h-screen text-center">
      <p className="text-lg text-darkest-custom pt-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 bg-dark-pink text-white font-semibold py-2 px-4 rounded-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
