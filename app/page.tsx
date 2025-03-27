"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Search, FolderOpen, Folder, FileCode, Briefcase, Trophy, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import CodeCard from "@/components/custom/code-card";
import ChatGPTCard from "@/components/custom/chatgpt-card";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import CodeDialog from "@/components/dialog/code-dialog";

import { CATEGORIES, CONTRIBUTORS, RECRUITERS, ARTICLES, LANGUAGES, SAMPLE_CODES } from "@/constants";
import Sidebar from "@/components/layout/sidebar";

import Recruiters from "@/components/sections/recruiters";
import Contributors from "@/components/sections/contributors";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    CATEGORIES.length > 0 ? [CATEGORIES[0].name] : []
  );
  const [showDialog, setShowDialog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Basic Programs");
  const [selectedProgram, setSelectedProgram] = useState("Hello World");


  useEffect(() => {
    if (showDialog && selectedLanguage.length > 0) {
      setIsOpen(true);
    }
  }, [showDialog]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleProgramSelect = (category: string, program: string) => {
    setSelectedCategory(category);
    setSelectedProgram(program);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="pt-20">
        <div className="flex flex-col xl:flex-row w-full relative min-h-[calc(100vh-5rem)]">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            onSelectProgram={handleProgramSelect}
          />
          <div
            className="flex-1 xl:ml-64 p-4 xl:p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <CodeCard
                code={SAMPLE_CODES[selectedCategory][selectedProgram].java}
                language="c"
                title={selectedProgram}
              />
              <CodeCard
                code={SAMPLE_CODES[selectedCategory][selectedProgram].python}
                language="python"
                title={selectedProgram}
              />
              <CodeCard
                code={SAMPLE_CODES[selectedCategory][selectedProgram].html}
                language="html"
                title={selectedProgram}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <ChatGPTCard language={selectedLanguage} clickFunc={setSelectedLanguage} showDialog={setShowDialog} />
              <div className="lg:col-span-2 space-y-6 flex flex-col grid grid-rows-2">
                <Contributors contributors={CONTRIBUTORS} />
                <Recruiters recruiters={RECRUITERS} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CodeDialog
        open={isOpen} onOpenChange={(open: boolean) => {
          setIsOpen(open);
          if (!open) {
            setShowDialog(false);
            setSelectedLanguage("");
          }
        }}
        language={selectedLanguage}
        code={selectedLanguage === "c" ? SAMPLE_CODES[selectedCategory][selectedProgram].java :
          selectedLanguage === "python" ? SAMPLE_CODES[selectedCategory][selectedProgram].python :
            SAMPLE_CODES[selectedCategory][selectedProgram].html}
        title="Hello World"
      />
    </div>
  );
}