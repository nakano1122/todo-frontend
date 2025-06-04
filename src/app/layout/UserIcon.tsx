"use client";

import { useState } from "react";

const UserIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="flex items-center p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </button>

      {/* ユーザモーダル */}
      {isModalOpen && (
        <>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => e.preventDefault()}
            >
              プロフィール
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => e.preventDefault()}
            >
              設定
            </a>
            <hr className="my-1" />
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => e.preventDefault()}
            >
              ログアウト
            </a>
          </div>

          {/* モーダルが開いている時の背景オーバーレイ */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsModalOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default UserIcon;
