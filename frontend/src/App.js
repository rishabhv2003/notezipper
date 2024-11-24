import './App.css';
import './bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./screens/LandingPage";


function App() {
  return (
    <>
      <Header />
        <main style={{minHeight: "93vh"}}>
            <LandingPage />
        </main>
      <Footer />
    </>
  )
}

export default App;
