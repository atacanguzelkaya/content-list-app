import ContentList from "@/components/ContentList";

export default function Home() {
  return (
    <div className="mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center transform text-purple-500">İçerik Listesi</h1>
      <ContentList />
    </div>
  );
}