"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-700">Globetrotter</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/quiz" className="text-gray-700 hover:text-blue-600">
                Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/challenge"
                className="text-gray-700 hover:text-blue-600"
              >
                Challenge
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
