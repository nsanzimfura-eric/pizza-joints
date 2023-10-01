import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import Lottie from "lottie-react";
import loadingSpinner from "./assets/lotties/loadingSpinner.json";

function App() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
  }, []);

  console.log(isPageLoading, "test");

  return isPageLoading ? (
    <Lottie animationData={loadingSpinner} />
  ) : (
    <div className="w-full p-0 m-0 pt-10">
      <Header />
      <Home />
    </div>
  );
}

export default App;
