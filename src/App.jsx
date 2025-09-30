import { useState } from 'react';
// Hapus import reactLogo dan viteLogo karena tidak digunakan di tampilan baru
// import reactLogo from './assets/react.svg' 
// import viteLogo from '/vite.svg' 
import './App.css'; // Pertahankan jika ada gaya khusus yang masih diperlukan

function App() {
  // Ganti state 'count' dengan state untuk formulir login
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handler untuk memperbarui state saat input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handler untuk simulasi submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    alert(`Mencoba login dengan Email: ${formData.email} dan Password: ${formData.password}`);
    // Di sini Anda dapat menambahkan logika autentikasi yang sebenarnya
  };

  return (
    // Wadah utama: Memastikan tampilan berada di tengah layar penuh
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      
      {/* Wadah Kartu Login: flex max-w-2xl untuk layout 2 kolom */}
      <div className="flex max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        
        {/* Kolom Kiri: Placeholder Gambar (600 x 500) */}
        <div className="hidden md:flex w-1/2 bg-gray-300 items-center justify-center p-8">
          <span className="text-gray-600 text-3xl font-semibold">600 &times; 500</span>
        </div>

        {/* Kolom Kanan: Formulir Login */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            {/* Input Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Masukkan email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                required
              />
            </div>

            {/* Input Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Masukkan password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                required
              />
            </div>

            {/* Tombol Login */}
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;