import { Contributor } from "@/types";
import ProfileCard from "../custom/profile-card";

interface ContributorsProps {
  contributors: Contributor[];
}

const Contributors = ({ contributors }: ContributorsProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="font-semibold mb-4">Top Contributors</h3>
      <div className="flex flex-wrap gap-2">
        {contributors.map((contributor) => (
          <ProfileCard
            key={contributor.name}
            title={contributor.name}
            subtitle={contributor.contributions}
          />
        ))}
      </div>
    </div>
  );
};

export default Contributors; 