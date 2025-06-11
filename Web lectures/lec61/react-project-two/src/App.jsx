import UserCard from "./components/UserCard"
import "./App.css"
import piyushpic from './assets/me1.jpg'
import prithvipic from './assets/prithviraj.webp'
import maharanapic from './assets/maharana.webp'

function App() {
  

  return (
    <div className="container">
      <h1>Hello Jii</h1>
      <div className="card-container">
        <UserCard name="Piyush Rao" img={piyushpic}/>
        <UserCard name="Maharana Pratap" img={prithvipic}/>
        <UserCard name="Prithvi Raj Chauhan" img={maharanapic}/>
      </div>

    </div>
  )
}

export default App
