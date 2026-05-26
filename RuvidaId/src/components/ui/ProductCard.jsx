import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const {
    name,
    description,
    icon,
    bgColor,
    price,
    priceUnit,
    rating,
    badge,
    badgeColor,
    href,
  } = product;

  return (
    <Link
      to={href || "#"}
      className="block bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      {/* header warna */}
      <div
        className={`${bgColor} h-36 flex items-center justify-center relative`}
      >
        {badge && (
          <span
            className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}`}
          >
            {badge}
          </span>
        )}
        <span className="text-4xl">{icon}</span>
      </div>

      {/* konten */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-accent-teal font-semibold text-sm">
            {price}
            <span className="text-gray-400 text-xs">{priceUnit}</span> →
          </span>
          {rating && <StarRating rating={rating} />}
        </div>
      </div>
    </Link>
  );
}
