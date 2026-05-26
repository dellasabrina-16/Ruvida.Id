export default function PricingCard({ plan }) {
  const {
    name,
    subtitle,
    price,
    priceNote,
    ctaText,
    ctaStyle,
    isPopular,
    icon,
  } = plan;

  const buttonClass = {
    primary: "bg-white text-primary font-bold hover:bg-gray-100",
    teal: "bg-accent-teal text-white font-bold hover:bg-teal-400",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  }[ctaStyle];

  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl
      ${isPopular ? "bg-primary text-white shadow-2xl scale-105" : "bg-white border border-gray-100 text-gray-800"}`}
    >
      {/* Badge Populer */}
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-teal text-white text-xs font-bold px-3 py-1 rounded-full">
          POPULER
        </span>
      )}

      <div className="text-3xl">{icon}</div>
      <h3
        className={`font-bold text-lg ${isPopular ? "text-white" : "text-gray-900"}`}
      >
        {name}
      </h3>
      <p
        className={`text-sm leading-relaxed ${isPopular ? "text-gray-300" : "text-gray-500"}`}
      >
        {subtitle}
      </p>

      <div>
        <div
          className={`text-2xl font-extrabold ${isPopular ? "text-white" : "text-primary"}`}
        >
          {price}
        </div>
        {priceNote && (
          <div
            className={`text-xs mt-0.5 ${isPopular ? "text-gray-400" : "text-gray-400"}`}
          >
            {priceNote}
          </div>
        )}
      </div>

      <button
        className={`mt-auto py-2.5 rounded-lg text-sm transition-colors ${buttonClass}`}
      >
        {ctaText}
      </button>
    </div>
  );
}
