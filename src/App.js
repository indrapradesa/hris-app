import './App.css';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Paage</h1>
      </div>
    </div>
  );
}

export default App;
