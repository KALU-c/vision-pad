import { Tldraw } from "tldraw";
import 'tldraw/tldraw.css';

const TlDraw = () => {
  return (
    <main style={{ position: 'fixed', inset: 0 }}>
      <Tldraw />
    </main>
  )
}

export default TlDraw
