import {useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Reuleaux} from "ldrs/react";
import "ldrs/react/Reuleaux.css";
import {setBudgetMode} from "../contexts/BudgetContext";
import AppCard from "../components/AppCard";

export default function Products() {
    const {budget, setBudget} = setBudgetMode();

    const apiUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            setProducts(result);
            setLoading(false);
        });
    }, []);
    return (
        <main className="container">
            <h1 className="text-center">I nostri prodotti: </h1>
            <ul className="row g-2">
                {loading ? (
                    <div className="loader">
                        <Reuleaux size="300" stroke="5" strokeLength="0.15" bgOpacity="0.3" speed="1.2" color="black" />
                    </div>
                ) : (
                    products.map((product) =>
                        (budget ? Number(product.price) < budget : true) ? (
                            <AppCard key={product.id} product={product} />
                        ) : null
                    )
                )}
            </ul>
        </main>
    );
}
