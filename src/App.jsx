import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Works from "./Works/Works";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Footer />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  textAlign: "center",
                  fontSize: "32px",
                  paddingTop: "10%",
                  backgroundColor: "grey",
                  height: "70vh",
                }}
              >
                <p>
                  <a href="/home">Click Here</a>
                </p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
