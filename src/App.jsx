import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Index from "./pages/portfolio";
import Project from "./pages/portfolio/slug";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import CreateOrUpdate from "./pages/dashboard/upload/index";
import Update from "./pages/dashboard/upload/update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Index />} />
        <Route path="/portfolio/:slug" element={<Project />} />
        <Route path="/dashboard/" exact element={<Dashboard />} />
        <Route path="/dashboard/upload" element={<CreateOrUpdate />} />
        <Route path="/dashboard/update/:slug" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
