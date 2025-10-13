import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 md:flex md:justify-between md:items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 1"
            className="w-full h-48 object-cover rounded shadow"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 2"
            className="w-full h-48 object-cover rounded shadow"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 3"
            className="w-full h-48 object-cover rounded shadow"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 4"
            className="w-full h-48 object-cover rounded shadow"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 5"
            className="w-full h-48 object-cover rounded shadow"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 6"
            className="w-full h-48 object-cover rounded shadow"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 space-y-4 md:grid md:grid-cols-4 md:gap-4 md:space-y-0 text-center">
          {/* Paket Basic (Kolom 1 - 1 unit) */}
          <div className="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition duration-300 md:col-span-1">
            <div className="font-bold text-xl mb-2">Basic</div>
            <div className="text-3xl font-extrabold text-gray-800">Rp 50rb</div>
            <p className="text-sm text-gray-600 mt-4">Fitur Dasar</p>
          </div>

          {/* Paket Pro (Kolom 2 - 2 unit & Background Berbeda) */}
          <div className="bg-blue-600 text-white p-8 rounded shadow-xl md:col-span-2 transform md:scale-105 transition duration-500">
            <div className="font-bold text-sm uppercase mb-2">Paling Populer</div>
            <div className="font-bold text-3xl mb-2">Pro</div>
            <div className="text-5xl font-extrabold">Rp 100rb</div>
            <p className="text-sm mt-4">Semua fitur Basic + Fitur Pro</p>
            <button className="mt-6 bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100">Pilih Paket</button>
          </div>

          {/* Paket Premium (Kolom 3 - 1 unit) */}
          <div className="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition duration-300 md:col-span-1">
            <div className="font-bold text-xl mb-2">Premium</div>
            <div className="text-3xl font-extrabold text-gray-800">Rp 200rb</div>
            <p className="text-sm text-gray-600 mt-4">Semua fitur Pro + Premium</p>
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen grid md:grid-cols-12 md:grid-rows-[auto_1fr_auto] gap-0">
          
          {/* Header (Full Width pada semua ukuran) */}
          <header className="bg-gray-300 p-4 md:col-span-12">Header</header>
          
          {/* Sidebar (Full Width di bawah md, 3 kolom di atas md) */}
          <aside className="bg-gray-200 p-4 md:col-span-3">Sidebar</aside>
          
          {/* Main Content (Full Width di bawah md, 9 kolom di atas md) */}
          <main className="bg-white p-4 border md:col-span-9">Content</main>
          
          {/* Footer (Full Width pada semua ukuran) */}
          <footer className="bg-gray-300 p-4 md:col-span-12">Footer</footer>
          
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center rounded-lg shadow-md">
          
          {/* Gambar Produk */}
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 flex-shrink-0"
          />
          
          {/* Teks Produk */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Nama Produk Keren</h3>
            <p className="text-sm text-gray-600">
              Deskripsi produk singkat yang menjelaskan manfaat atau fitur utama.
            </p>
            <span className="text-blue-600 font-semibold mt-1 block">Rp 500.000</span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
