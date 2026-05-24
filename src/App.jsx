
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Products from "./pages/Products.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./assets/DefaultLayout.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { BudgetProvider } from "./contexts/BudgetContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";



function App() {
  return (
    <ThemeProvider>
    <BudgetProvider>
      
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/*" element= {<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </BudgetProvider>
    </ThemeProvider>
  );
}

export default App;
