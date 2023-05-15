import "./App.css";
import Sidebar from "./components/side/Sidebar";
import Topbar from "./components/header/Topbar";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footerr";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
