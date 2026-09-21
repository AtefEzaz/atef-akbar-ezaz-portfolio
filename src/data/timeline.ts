import type { EducationItem, ExperienceItem } from "../types";

export const education: EducationItem[] = [
  {
    school: "North South University",
    credential: "B.Sc. in Computer Science & Engineering",
    period: "2020 \u2013 2025",
  },
  {
    school: "Milestone College",
    credential: "Higher Secondary Certificate (HSC)",
    period: "2019",
  },
  {
    school: "Bhola Govt. High School",
    credential: "Secondary School Certificate (SSC)",
    period: "2017",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Educational Consultant",
    org: "Phoenix Post Graduation Academy",
    period: "2023",
    points: ["Maintained the organization\u2019s website."],
  },
];

export const highlights = [
  {
    title: "Published research",
    detail:
      'Co-authored "Accident Prone Area Detection in Dhaka Metropolitan City Using Machine Learning Models," presented at the 5th International Conference, 2024.',
    link: "https://ieeexplore.ieee.org/document/10578490",
    linkLabel: "View on IEEE Xplore",
  },
  {
    title: "DB Hackathon \u2014 Database Design Challenge",
    detail: "NSU ACM Student Chapter, in collaboration with the BUET ESRD Lab.",
  },
  {
    title: "NSU Computer & Engineering Club",
    detail: "Former member (NSU CEC).",
  },
];
