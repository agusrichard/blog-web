import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'

import Home from './routes/home'
import Login from './routes/auth/login'
import NotFound from './routes/notfound'
import Register from './routes/auth/register'
import Layout from './components/layout/layout.components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
