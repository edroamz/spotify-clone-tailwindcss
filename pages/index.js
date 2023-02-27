import Sidebar from "@/components/sidebar";
import MusicPlayer from "@/components/music-player";
import Header from "@/components/header";
import Content from "@/components/content";

function App() {
  return (
    <>
      <div className="max-w-full w-full h-screen overflow-hidden">
        <div className="flex flex-wrap h-full w-full aside-container">
          <aside className="h-full w-1/4 xl:w-1/6 bg-gray-900 text-gray-200">
            <Sidebar />
          </aside>
          <main className="flex flex-col h-full w-3/4 xl:w-5/6 bg-gray-800 text-gray-200">
            <Header />
            <Content />
          </main>
        </div>
        <div className="w-full bg-gray-700 text-white player-container">
          <MusicPlayer />
        </div>
      </div>
    </>
  );
}

export default App;
