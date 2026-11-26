import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-5">
      <div className="z-50 mx-auto mt-5 flex h-[70px] w-full max-w-[860px] items-center justify-between rounded-base border-2 border-border bg-white px-5 text-text dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText w400:h-[unset] w400:flex-col w400:gap-3 w400:py-3">
        <Link
          className="text-3xl font-heading w500:text-2xl w400:text-xl"
          href="/"
        >
          iZem
        </Link>
        <div className="flex items-center gap-2 text-lg w500:text-base w400:text-sm">
          <Link className="text-base w400:text-sm hover:underline" href="/about">
            about
          </Link>
          <a
            href="https://www.instagram.com/izem__music/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://open.spotify.com/artist/2dJpwMtmOBr9ad4D7vRf2r"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M7 9.5c3.5-1 7-.7 10 1" />
              <path d="M7.5 12.8c2.8-.8 5.6-.5 8 .8" />
              <path d="M8 15.8c2.2-.6 4.3-.4 6 .6" />
            </svg>
          </a>
          {/* <a className="w400:mr-7" href="/tags">
            Tags
          </a> */}
          {/* <ThemeSwitcher client:load /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
