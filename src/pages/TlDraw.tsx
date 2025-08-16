import Navbar from "@/components/Navbar";
import { Tldraw } from "tldraw";
import 'tldraw/tldraw.css';

const TlDraw = () => {
  return (
    <main className="flex flex-col h-dvh">
      <Navbar />
      <div className="flex-1 fixed inset-0 top-6">
        <Tldraw persistenceKey="tldraw-1" />
      </div>
    </main>
  )
}

export default TlDraw
