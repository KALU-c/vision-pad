import { Route, Routes } from 'react-router'
import ExcaliDraw from './pages/Excalidraw'
import Home from './pages/Home'
import TlDraw from './pages/TlDraw'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='tldraw' element={<TlDraw />} />
      <Route path='excalidraw' element={<ExcaliDraw />} />
    </Routes>
  )
}

export default App
