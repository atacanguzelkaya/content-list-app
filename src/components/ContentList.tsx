import { useState, useEffect } from "react";
import contentData from "../data/dummy.json";
import { Content } from "../models/Content";
import ContentFilter from "./ContentFilter";
import ContentCard from "./ContentCard";
import Pagination from "./Pagination";

const ContentList = () => {
  const [filteredContent, setFilteredContent] = useState<Content[]>(contentData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; 

  useEffect(() => {
    let filtered = contentData;

    if (searchTerm) {
      filtered = filtered.filter((content) =>
        content.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (content) => content.category === selectedCategory
      );
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContent.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const categories = Array.from(
    new Set(contentData.map((content) => content.category))
  );

  return (
    <div className="p-4">
      <ContentFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentItems.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ContentList;