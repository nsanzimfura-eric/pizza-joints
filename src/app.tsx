import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import Lottie from "lottie-react";
import loadingSpinner from "./assets/lotties/loadingSpinner.json";
import ChooseType from "./components/ChooseType/ChooseType";
import { routes } from "./components/utils/routes";

function App() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
  }, []);

  return isPageLoading ? (
    <Lottie animationData={loadingSpinner} />
  ) : (
    <Router>
      <div className="w-full h-screen flex flex-col gap-2 justify-start items-center p-0 m-0">
        <Header />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.chooseType} element={<ChooseType />} />
          <Route path={routes.addIngredients} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
