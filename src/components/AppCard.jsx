import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function AppCard({ product }) {
  const { mode } = useTheme();
  return (
    <div className={`card col-md-6 col-lg-4 p-2 g-2 ` + (mode === "light" ? ("") : ("dark-mode"))}>
      <img src={product.image} className="card-img-top object-fit-fill" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2">{product.category}</h6>
        <p className="card-text">{product.description}</p>
        <Link className="btn btn-primary btn-sm " to={`/single-product/${product.id}`} role="button">
          Show Details
        </Link>
      </div>
    </div>
  );
}
