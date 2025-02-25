export default function Home() {
  return (

    <div className="h-screen w-screen grid items-center justify-center bg-gray-100">
      <main className="w-96 rounded-xl overflow-hidden shadow-lg border border-red-300 bg-white">
        {/* Imagen */}
        <img
          className="w-full h-48 object-cover"
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Paisaje"
        />

        {/* Contenido */}
        <section className="px-3 text-left">
          <h1 className="text-xl font-bold text-gray-900">Red Heaven</h1>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>

          {/* Etiquetas */}
          <section className="m-4 flex justify-start gap-2">
            <span className="bg-red-400 text-white text-xs font-semibold px-3 py-1 rounded-full">#tailwind</span>
            <span className="bg-red-400 text-white text-xs font-semibold px-3 py-1 rounded-full">#frontendeverything</span>
          </section>
        </section>
      </main>
    </div>
  );
};

