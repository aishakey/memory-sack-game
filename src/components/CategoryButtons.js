import Image from "next/image";
import Link from "next/link";

function CategoryButtons() {
  return (
    <div className="bg-main-beige p-4  sm:-mt-6 max-w-[382px] w-full rounded-lg shadow-lg sm:mx-0">
      <h2 className="text-center text-xl sm:text-2xl text-main-pink mb-4">
        Choose Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <Link href="/game/countries" passHref>
            <div
              className="bg-gradient-countries p-6 rounded-lg flex items-center justify-center cursor-pointer group"
              style={{ width: "140px", height: "70px" }}
            >
              <Image
                src="/world.svg"
                alt="Globe"
                width={60}
                height={60}
                className="transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
              />
            </div>
          </Link>
          <span className="mt-1 text-main-dark font-medium">Countries</span>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/game/fruits" passHref>
            <div
              className="bg-gradient-fruits p-6 rounded-lg flex items-center justify-center cursor-pointer group"
              style={{ width: "140px", height: "70px" }}
            >
              <Image
                src="/lemon.svg"
                alt="Lemon"
                width={60}
                height={60}
                className="transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
              />
            </div>
          </Link>
          <span className="mt-1 text-main-dark font-medium">
            Fruits & Veggies
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/game/animals" passHref>
            <div
              className="bg-gradient-animals p-6 rounded-lg flex items-center justify-center cursor-pointer group"
              style={{ width: "140px", height: "70px" }}
            >
              <Image
                src="/mouse.svg"
                alt="Mouse"
                width={60}
                height={60}
                className="transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
              />
            </div>
          </Link>
          <span className="mt-1 text-main-dark font-medium">Animals</span>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/game/sports" passHref>
            <div
              className="bg-gradient-sports p-6 rounded-lg flex items-center justify-center cursor-pointer group"
              style={{ width: "140px", height: "70px" }}
            >
              <Image
                src="/ball.svg"
                alt="Ball"
                width={60}
                height={60}
                className="transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
              />
            </div>
          </Link>
          <span className="mt-1 text-main-dark font-medium">Sports</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryButtons;
