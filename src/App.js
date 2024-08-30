import "./App.css"
import Sidebar from './Components/LayOut/SideBar/SideBar';
import Mainbar from './Components/LayOut/Main/Main';

function App() {
  return (
    <div className="Main_container">
     <Mainbar/>
     <Sidebar/>
    </div>
  );
}

export default App;
