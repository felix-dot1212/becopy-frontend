"use client";

import { useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/constants";

import Category from "@/components/sections/sidebar/category";
import DailyQuiz from "@/components/sections/sidebar/daily-quiz";
import Articles from "@/components/sections/sidebar/articles";
import { Button } from "../ui/button";

interface SidebarProps {
  isSidebarOpen: boolean;
  expandedCategories: string[];
  toggleCategory: (name: string) => void;
  onSelectProgram: (category: string, program: string) => void;
}

const Sidebar = ({
  isSidebarOpen,
  expandedCategories,
  toggleCategory,
  onSelectProgram
}: SidebarProps) => {
  useEffect(() => {
    if (CATEGORIES.length > 0 && expandedCategories.length === 0) {
      toggleCategory(CATEGORIES[0].name);
    }
  }, []);

  return (
    <div className={`
      fixed xl:fixed inset-y-0 left-0 z-40 overflow-y-auto
      w-64 bg-white border-r border-gray-200
      transform transition-transform duration-300 ease-in-out 
      top-20 xl:top-20
      h-[calc(100vh-5rem)]
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
    `}>
      <div className="h-full flex flex-col overflow-auto">

        {/* Search Bar */}
        <div className="shrink-0 p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search programs..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories Section */}
        <Category
          expandedCategories={expandedCategories}
          toggleCategory={toggleCategory}
          onSelectProgram={onSelectProgram}
        />

        {/* Bottom Section */}
        <div className="shrink-0 p-4 space-y-4 border-t border-gray-200">
          <div className="flex justify-center">
            <Button
              className="text-[#0284DA] outline-hidden bg-white hover:bg-white hover:text-[#0284FF]"
              onClick={() => window.location.assign('/categories')}
            >
              Browse All
            </Button>
          </div>
          <DailyQuiz />
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
