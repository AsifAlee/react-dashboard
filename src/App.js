import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

const App = () => {

  return (
    <div>
      <input type="checkbox"  id="nav-toggle"/>
      <Sidebar />
      <Navbar />
      <Main />
    </div>

  );
}

export default App;
