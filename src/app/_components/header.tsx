import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-5">
      <div className="z-50 mx-auto mt-5 flex h-[70px] w-full max-w-[860px] items-center justify-between rounded-base border-2 border-border bg-white px-5 text-text dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText w400:h-[unset] w400:flex-col w400:gap-3 w400:py-3">
        <Link
          className="text-3xl font-heading w500:text-2xl w400:text-xl"
          href="/"
        >
          Beat Hacking
        </Link>
        <div className="flex items-center text-lg w500:text-base w400:text-sm">
          <a className="mr-10 w400:mr-7" href="/tags">
            Tags
          </a>
          <a className="mr-10 w400:mr-7" href="/about">
            About
          </a>

          {/* <ThemeSwitcher client:load /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
