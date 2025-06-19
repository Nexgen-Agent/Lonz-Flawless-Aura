const products = [
  { name: "Glow Soap", price: "R129", desc: "Fades marks, hydrates skin" },
  { name: "Whitening Cream", price: "R189", desc: "Targets acne & spots" },
  { name: "Glow Lotion", price: "R159", desc: "Hydrates, smoothens, glows" },
];

export default function Shop() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <h2 className="text-3xl font-semibold text-aura mb-6 text-center">Shop Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-charcoal p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl text-aura font-semibold mb-2">{product.name}</h3>
            <p className="text-white/80 mb-2">{product.desc}</p>
            <span className="block text-aura font-bold">{product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}