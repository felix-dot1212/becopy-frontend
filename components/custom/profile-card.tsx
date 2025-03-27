import { ProfileCardProps } from "@/types";

const ProfileCard = ({ image, title, subtitle }: ProfileCardProps) => {
  return (
    <div className="flex-1 min-w-[120px] sm:min-w-[150px] bg-gray-50 p-2 rounded-lg">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
        <div>
          <div className="text-sm font-medium truncate">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 