import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-8 fixed top-0 left-0 w-full">
      <Link href="/" passHref>
        <div className="bg-[rgb(44,62,80)] rounded-full py-6 px-14 shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
          <span className="cursor-pointer text-white text-xl font-bold">
            Home
          </span>
        </div>
      </Link>
      <Link href="/add" passHref>
        <ul className="bg-[rgb(44,62,80)] rounded-full py-6 px-14 shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
          <li>
            <span className="cursor-pointer text-white text-xl font-bold">
              Add
            </span>
          </li>
        </ul>
      </Link>
    </nav>
  );
};

export default Navbar;
