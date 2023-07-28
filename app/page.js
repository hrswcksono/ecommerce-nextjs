import Image from "next/image";
import Content from "./components/Content";
import CategoryNavbar from "./components/CategoryNavbar";
import TopNavbar from "./components/TopNavbar";

export default function Home() {
  return (
    <main className="w-full items-center justify-between bg-white h-screen">
      <>
        <TopNavbar />
        <CategoryNavbar />
        <Content />
      </>
    </main>
  );
}