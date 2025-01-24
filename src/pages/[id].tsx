import { useRouter } from "next/router";
import { useState } from "react";
import contentData from "../data/dummy.json";

const ContentDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = contentData.find((content) => content.id === String(id));

  if (!content) {
    return <p>İçerik Bulunamadı.</p>;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const getBackgroundStyle = () => {
    const isBlue = mousePosition.x < window.innerWidth / 2;
    return isBlue
      ? "bg-blue-500 shadow-[0_0_30px_10px_rgba(59,130,246,0.7)] "
      : "bg-purple-500 shadow-[0_0_30px_10px_rgba(128,90,213,0.7)]";
  };

  return (
    <div className="relative">
      <button
        onClick={() => router.push('/')}
        className="absolute top-4 left-4 flex items-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
      >
        <span className="text-xl mr-2">←</span> Geri
      </button>

      <div className="flex justify-center items-center mx-10 py-60">
        <div
          onMouseMove={handleMouseMove}
          className={`p-8 rounded-lg shadow-lg border-2 border-gray-300 transform transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:border-transparent ${getBackgroundStyle()}`}
        >
          <h1 className="text-3xl font-bold text-center mb-4">{content.title}</h1>
          <p className="text-xl font-bold text-center">{content.category}</p>
          <br />
          <hr />
          <br />
          <p className="text-xl text-center mb-4">{content.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;