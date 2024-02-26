import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LinkTree from './pages/LinkTree'
import NotFound from './pages/NotFound'


function App() {
  return (
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="*" element={<NotFound />} />
        <Route path='links' element={<LinkTree />}/>
      </Routes>
  )
}


function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

export default WrappedApp
