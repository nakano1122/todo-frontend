"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbsString = (
  pathname: string,
  index: number,
  pathArray: string[]
): string => {
  if (index === 0 && pathname === "dashboard") {
    return "ダッシュボード";
  }

  if (index === 0 && pathname === "task") {
    return "ダッシュボード";
  }

  if (index === 1 && pathArray[0] === "task") {
    return "タスク詳細";
  }

  const pathLabels: Record<string, string> = {
    dashboard: "ダッシュボード",
    task: "タスク",
  };

  return pathLabels[pathname] || pathname;
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((part) => part);

  let breadcrumbItems: Array<{ label: string; href: string }> = [];

  if (pathArray.length === 0 || pathArray[0] === "dashboard") {
    breadcrumbItems = [{ label: "ダッシュボード", href: "/dashboard" }];
  } else if (pathArray[0] === "task" && pathArray.length >= 2) {
    breadcrumbItems = [
      { label: "ダッシュボード", href: "/dashboard" },
      { label: "タスク詳細", href: pathname },
    ];
  } else {
    breadcrumbItems = pathArray.map((part, index) => ({
      label: breadcrumbsString(part, index, pathArray),
      href: `/${pathArray.slice(0, index + 1).join("/")}`,
    }));
  }

  return (
    <>
      <nav className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              return (
                <li key={index} className="flex items-center">
                  {!isLast ? (
                    <Link href={item.href} className="hover:text-gray-700">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-900 font-medium">
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <svg
                      className="w-4 h-4 mx-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
