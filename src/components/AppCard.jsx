import { Link } from "react-router-dom";

export default function AppCard({ product }) {
  return (
    <div className="card text-bg-primary col-6 col-md-4 col-lg-3 p-2">
      <img src={product.image} className="card-img-top object-fit-fill" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted ">{product.category}</h6>
        <p className="card-text">{product.description}</p>
        <Link className="btn btn-primary btn-sm " to={`/single-product/${product.id}`} role="button">
          Show Details
        </Link>
      </div>
    </div>
  );
}
