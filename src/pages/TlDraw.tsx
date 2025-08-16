import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/theme-provider";
import { Tldraw } from "tldraw";
import 'tldraw/tldraw.css';

const TlDraw = () => {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col h-dvh">
      <Navbar />
      <div className="flex-1 fixed inset-0 top-8">
        <Tldraw persistenceKey="tldraw-1" inferDarkMode={theme === "dark"} />
      </div>
    </main>
  )
}

export default TlDraw
