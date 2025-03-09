import { Home } from './pages/Home'
import { Auth } from './pages/Auth/Auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './redux/Auth/Action'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((store) => store.auth);
  useEffect(() => {
    if (!auth.user && auth.jwt) {
      dispatch(getUser())
    }
  }, [auth.jwt])

  return (
    <>
      <div>
        {!auth.user ? <Auth /> : <Home />}
      </div>
    </>
  )
}

export default App
