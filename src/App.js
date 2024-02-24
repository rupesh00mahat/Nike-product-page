import ContentImage from "./components/content-image";
import ContentText from "./components/content-text";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="nike-content">
        <ContentText />
        <ContentImage />
      </div>
    </div>
  );
}

export default App;
