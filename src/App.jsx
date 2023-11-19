import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize:"16px",
            maxWidth:"500px",
            padding:"16px 24px",
            background: "var(--primary-color)",
            color: "var(--secondary-color)",
          },
        }}
      />
    </div>
  );
}

export default App;
