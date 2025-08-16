import { Route, Routes } from 'react-router'
import ExcalidrawPage from './pages/Excalidraw'
import Home from './pages/Home'
import TldrawPage from './pages/TlDraw'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='tldraw' element={<TldrawPage />} />
      <Route path='excalidraw' element={<ExcalidrawPage />} />
    </Routes>
  )
}

export default App
