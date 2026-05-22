
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Products from "./pages/Products.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./assets/DefaultLayout.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { BudgetProvider } from "./contexts/BudgetContext.jsx";



function App() {
  return (
/* 


BONUS

 Trasformare la modalità budget in un vero e proprio filtro:

Trasformate il booleano budgetMode in un valore numerico maxPrice (es.30, 50ecc). Il valore di partenza deve essere null .
Nel componente navbar al posto del bottone inserite un campo input di tipo number. Questo campo deve essere legato al valore maxPrice del context
Nella pagina prodotti, verranno mostrati soltanto i prodotti con price <= maxPrice
‼️Se max price è null o comunque non è settato, devono essere visualizzati tutti i prodotti
*/
    <BudgetProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/*" element= {<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </BudgetProvider>
  );
}

export default App;
