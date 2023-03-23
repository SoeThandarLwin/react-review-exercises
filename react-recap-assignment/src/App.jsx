import './App.css'
import FavoriteSites from './components/FavoriteSites'
import Profile from './components/profile'
import Gallery from './components/Gallery'
import './Styles/test.css'
import './Styles/Profile.css'

function App() {

  return (
    <div className='App'>
      <div className='test'>
        <FavoriteSites />
        <Profile />
        <Gallery />
      </div>
      
    </div>
  )
}

export default App
