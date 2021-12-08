
import './App.css';
import Profile from './Component/Profile/ProfilePhoto.js'
import Name from './Component/Profile/FullName.js'
import Adress from './Component/Profile/Address'
import Nav from './Component/Entete'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Profile/>
      <Name/>
      <Adress/>

    </div>
  );
}

export default App;
