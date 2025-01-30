import { useState, useRef, useEffect } from 'react';

export const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(null);

  useEffect(() => {
    const closeDropDown = e => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target)
      ) {
        setDropDownState(false);
      }
    };

    document.addEventListener('mousedown', closeDropDown);
    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>bogura helpline</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-between gap-10">
          {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
            <li key={index} className="group flex cursor-pointer flex-col">
              {item}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div ref={dropDownMenuRef} className="relative md:hidden">
          <button
            onClick={() => setDropDownState(!dropDownState)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropDownState && (
            <ul className="absolute right-0 top-11 w-[200px] flex flex-col bg-[#393E46] rounded-lg text-base z-10">
              {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
