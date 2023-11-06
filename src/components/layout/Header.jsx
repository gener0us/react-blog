import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-purple-600 py-3 shadow-md">
      <nav>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex gap-5">
            <Link to="/" className="menu-item">
              Home
            </Link>
            <Link to="/blogs" className="menu-item">
              Blogs
            </Link>
            <Link to="/users" className="menu-item">
              Users
            </Link>
          </div>
          <div className="ml-5 flex items-center justify-end w-[30%]">
            <input
              type="search"
              className="rounded border border-solid border-purple-300 bg-transparent placeholder:text-lg  placeholder:text-white px-3 py-[0.5rem]"
              placeholder="Search"
            />
            <span
              className="text-neutral-200 ml-4"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
