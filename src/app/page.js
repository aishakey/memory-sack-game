import Image from "next/image";
import CategoryButtons from "@/components/CategoryButtons";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-12 sm:px-0 md:-mt-20 pb-6">
      <Image src="/hero-sack.png" alt="Sack" width={460} height={200} />
      <CategoryButtons />
    </div>
  );
}

export default HomePage;
