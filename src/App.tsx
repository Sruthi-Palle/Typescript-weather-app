import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout";
import { ThemeProvider } from "./components/context/theme-provider";
import CityPage from "./components/pages/CityPage";
import WeatherDashboard from "./components/pages/WeatherDashboard";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
