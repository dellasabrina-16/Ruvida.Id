import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function CategoryCard({ category }) {
  const {
    name,
    description,
    icon,
    bgColor,
    count,
    countLabel,
    startPrice,
    rating,
    href,
    isCustom,
  } = category;

  return (
    <Link
      to={href}
      className={`block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${isCustom ? "bg-primary text-white" : "bg-white"}`}
    >
      {/* Gambar / Icon area */}
      <div
        className={`${bgColor} ${isCustom ? "bg-primary-light" : ""} h-44 flex items-center justify-center`}
      >
        <span className="text-5xl">{icon}</span>
      </div>

      {/* Konten */}
      <div className="p-5">
        {/* Badge count */}
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isCustom ? "bg-teal-800 text-teal-300" : "bg-gray-100 text-gray-600"}`}
        >
          {count ? `${count} ${countLabel}` : countLabel}
        </span>

        <h3
          className={`font-bold text-lg mt-2 mb-1 ${isCustom ? "text-white" : "text-gray-900"}`}
        >
          {name}
        </h3>
        <p
          className={`text-sm leading-relaxed mb-3 ${isCustom ? "text-gray-300" : "text-gray-500"}`}
        >
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-semibold ${isCustom ? "text-accent-teal" : "text-accent-teal"}`}
          >
            {startPrice} →
          </span>
          {rating && <StarRating rating={rating} />}
        </div>
      </div>
    </Link>
  );
}
