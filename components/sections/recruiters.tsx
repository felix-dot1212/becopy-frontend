import { Recruiter } from "@/types";
import ProfileCard from "../custom/profile-card";

interface RecruitersProps {
  recruiters: Recruiter[];
}

const Recruiters = ({ recruiters }: RecruitersProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="font-semibold mb-4">Top Recruiters</h3>
      <div className="flex flex-wrap gap-2">
        {recruiters.map((recruiter) => (
          <ProfileCard
            key={recruiter.company}
            title={recruiter.company}
            subtitle={recruiter.openings}
          />
        ))}
      </div>
    </div>
  );
};

export default Recruiters; 