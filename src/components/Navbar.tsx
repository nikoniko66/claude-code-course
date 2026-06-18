"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-white font-semibold text-lg">
              Claude Code 講座
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              特徴
            </a>
            <a
              href="#curriculum"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              カリキュラム
            </a>
            <a
              href="#pricing"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              料金
            </a>
            <a
              href="#faq"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              今すぐ受講する
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                特徴
              </a>
              <a
                href="#curriculum"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                カリキュラム
              </a>
              <a
                href="#pricing"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                料金
              </a>
              <a
                href="#faq"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                今すぐ受講する
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
