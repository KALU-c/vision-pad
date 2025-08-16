import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import TlDraw from './pages/TlDraw'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='tldraw' element={<TlDraw />} />
    </Routes>
  )
}

export default App
