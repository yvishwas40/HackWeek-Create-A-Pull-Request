import { Outlet } from 'react-router-dom';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function App() {
  return (
    <div className="">
      <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
          <div className="App">
            {/* Other components */}
            <Main />
            {/* Other components */}
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;