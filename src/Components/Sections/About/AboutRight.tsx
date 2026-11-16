import Link from "next/link";
import { MapPin, GraduationCap, BadgeCheck, Download, Eye } from "lucide-react";
import aboutData from "@/data/about.json";
import cvData from "@/data/cv.json";

const iconMap: Record<string, React.ReactNode> = {
  location:      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />,
  education:     <GraduationCap className="w-4 h-4 text-primary mt-0.5 shrink-0" />,
  certification: <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />,
};

export default function AboutRight() {
  return (
    <div className="flex flex-col gap-6">

      {/* Description */}
      <div className="flex flex-col gap-3">
        {aboutData.description.map((para, i) => (
          <p key={i} className="text-para leading-relaxed">{para}</p>
        ))}
      </div>

      {/* Info list */}
      <ul className="flex flex-col gap-3">
        {aboutData.info.map((item) => (
          <li key={item.key} className="flex items-start gap-3">
            {iconMap[item.key]}
            <p className="text-para text-sm">
              <span className="text-white font-medium">{item.label}:</span>{" "}
              {item.value}
            </p>
          </li>
        ))}
      </ul>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {aboutData.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-1 py-4 rounded-xl bg-white/5 border border-white/10"
          >
            <span className={`text-xl font-bold ${stat.highlight ? "text-primary" : "text-white"}`}>
              {stat.value}
            </span>
            <span className="text-para text-xs">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* CV Buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <Link
          href={cvData.downloadUrl}
          download
          className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/80 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download CV
        </Link>
        <Link
          href={cvData.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-primary text-primary text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/10 transition-colors"
        >
          <Eye className="w-4 h-4" />
          View CV
        </Link>
      </div>

    </div>
  );
}
