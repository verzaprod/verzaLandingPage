import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
