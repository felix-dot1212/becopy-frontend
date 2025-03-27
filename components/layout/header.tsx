import { Check, Dot, Twitter, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header = ({ isSidebarOpen, toggleSidebar }: HeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-[#0284DA] flex flex-col grid grid-cols-2 sm:grid sm:grid-cols-3 gap-4 p-4">
      <div className="flex items-center sm:items-left sm:text-lg sm:font-bold sm:text-3xl sm:place-items-center sm:ps-4">
        <div className="flex items-center">
          <h1 className="text-[#f2d898]">&lt;Be&gt;</h1>
          <h1 className="text-[#7ad1f4]">Copy</h1>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center space-x-6">
        <p className="text-[#ffd633] flex items-center">
          <Dot className="w-8 h-8" />100% Free
        </p>
        <p className="text-[#00ff55] flex items-center">
          <Check className="w-6 h-6 pe-2" />100+ Codes
        </p>
        <p className="text-[#ffd633] flex items-center">
          <Dot className="w-8 h-8" />350 Live
        </p>
      </div>
      <div className="flex items-center justify-end text-white">
        <Twitter className="hidden sm:block w-10 h-10 pe-4" />
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden text-white ml-2"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export default Header;