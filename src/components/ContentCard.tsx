import Link from "next/link";
import { ContentCardProps } from "../models/ContentCardProps";

const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <div
      key={content.id}
      className="border p-4 rounded hover:shadow-lg transform transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
    >
      <Link href={`/${content.id}`}>
        <h2 className="text-xl font-bold text-purple-600 hover:text-gray-300">
          {content.title}
        </h2>
      </Link>
      <p className="text-sm text-gray-300">{content.category}</p>
      <p>{content.description}</p>
    </div>
  );
};

export default ContentCard;