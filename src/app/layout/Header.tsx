import Link from "next/link";
import SearchBox from "./SearchBox";
import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-blue-500 py-4 flex flex-col gap-4 shadow-sm">
      <div className="py-2 px-4 rounded-xl bg-gray-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/dashboard"
              className="text-3xl font-bold text-blue-500"
            >
              TaskFlow
            </Link>
          </div>
          <UserIcon />
        </div>
      </div>
      <SearchBox />
    </div>
  );
};

export default Header;
