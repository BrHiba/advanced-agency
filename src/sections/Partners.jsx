function Partners() {
  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Our Partners
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div
            key={i}
            className="h-20 bg-white flex items-center justify-center rounded-lg shadow"
          >
            Logo
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
