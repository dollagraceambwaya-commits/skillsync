"use client";

import { useState } from "react";

export default function Sidebar() {
  return (
    <nav className="bg-gray-900 h-screen px-4 py-8 w-64">
      <h2 className="text-2xl font-bold text-white">SkillSync</h2>
      <ul className="mt-8 space-y-4">
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Discover
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Opportunities
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            My Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Community
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
