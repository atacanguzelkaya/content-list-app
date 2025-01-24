import { ContentFilterProps } from "../models/ContentFilterProps";

const ContentFilter = ({
  searchTerm,
  setSearchTerm,
  setSelectedCategory,
  categories,
}: ContentFilterProps) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        placeholder="Başlığa göre arama..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 m-2 border-2 rounded-lg w-full max-w-xs border-purple-500 hover:border-purple-700 bg-transparent text-white"
      />
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 m-2 border-2 rounded-lg border-purple-500 bg-transparent hover:bg-purple-700 focus:bg-purple-700 text-white"
      >
        <option value="">Tüm Kategoriler</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContentFilter;
