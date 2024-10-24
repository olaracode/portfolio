import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingNavBar from "./components/FloatingNav";
import App from "./App";
import NotFound from "./components/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <FloatingNavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
