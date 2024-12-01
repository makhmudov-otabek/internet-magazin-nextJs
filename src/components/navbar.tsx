import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-4 w-full shadow-sm">
      <Link href="/">
        <img src="./logo.svg" alt="logo" />
      </Link>

      <div className="flex justify-between items-center space-x-2 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">
            Product
          </Link>
        </nav>
        <button className="button bg-blue-600 border-transparent text-white hover:bg-transparent hover:border-blue-600 hover:text-black">
          Log in
        </button>
        <button className="button  border-blue-600 text-black hover:bg-blue-600 hover:border-transparent hover:text-white">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
