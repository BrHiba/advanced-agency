const images = [
  {
    title: "Web Development",
    image: "" ,
  },
  {
    title: "Mobile Applications",
    image: "",
  },
  {
    title: "E-commerce Development",
    image: "" ,
  },
  {
    title: "Agentic AI",
    image: "" ,
  },
];

function ServicesHighlight() {
  return (
    <section className="relative w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative flex items-end overflow-hidden"
            style={{
              backgroundImage: `url(${img.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition duration-500" />

            {/* Content */}
            <div className="relative z-10 p-10">
              <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesHighlight;
