import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
