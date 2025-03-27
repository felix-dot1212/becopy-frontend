import { Briefcase } from "lucide-react";
import { ARTICLES } from "@/constants";

const Articles = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2 flex items-center">
        <Briefcase className="h-6 w-6 mr-2 text-[#0284DA]" /> Latest Articles
      </h3>
      <div className="space-y-2">
        {ARTICLES.map((article) => (
          <div key={article} className="text-sm hover:bg-gray-50 p-2 rounded cursor-pointer">
            {article}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles; 