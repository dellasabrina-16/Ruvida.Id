export default function StarRating({ rating = 5, maxRating = 5, size = "sm" }) {
  const sizeClass = size === "sm" ? "text-sm" : "text-base";
  return (
    <div className={`flex gap-0.5 ${sizeClass}`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
