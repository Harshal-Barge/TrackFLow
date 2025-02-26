import { Home } from './pages/Home'
import { Auth } from './pages/Auth/Auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './redux/Auth/Action'

function App() {

  const dispatch = useDispatch();

  const auth = useSelector((store) => store.auth);
  useEffect(() => {
    if (!auth.user) {
      dispatch(getUser());
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
