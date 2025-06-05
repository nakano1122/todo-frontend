"use client";

import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";

const tags = [
  "緊急",
  "重要",
  "仕事",
  "個人",
  "完了済み",
  "進行中",
];

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const filteredTags = tags
    .filter((tag) => tag.includes(query) && tag !== query)
    .slice(0, 5);

  return (
    <div className="rounded-xl">
      <div className="rounded-xl bg-gray-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs />
          <div className="flex flex-col items-center">
            <div className="relative sm:w-md md:w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="タスクの検索..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              {focused && filteredTags.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {filteredTags.map((tag) => (
                    <li
                      key={tag}
                      onMouseDown={() => {
                        setQuery(tag);
                        setFocused(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
