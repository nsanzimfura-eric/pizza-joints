import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import Lottie from "lottie-react";
import loadingSpinner from "./assets/lotties/loadingSpinner.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <div className="w-full p-0 m-0 pt-10">
        <Header />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.chooseTYpe} element={<Home />} />
          <Route path={routes.addIngredients} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const routes = {
  home: "/",
  chooseTYpe: "chose-type",
  addIngredients: "add-Ingredients",
};
