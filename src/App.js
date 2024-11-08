import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import Background from "./Assets/background.png";
import { auth, db } from "./firebase";
import './index.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [item, setItem] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Akun Terdaftar")
    } catch (error) {
      alert(error.message);
    }
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Akun Berhasil Login")
    } catch (error) {
      alert(error.message);
    }
  }

  const handleAddItem = async () => {
    if (item){
      await addDoc(collection(db, "items"), {name: item});
      setItem('');
      alert("Item Berhasil Ditambahkan")
    } else {
      alert("Silahkan Isi Nama Barang");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})`, }}>
      <div className="bg-[#282651]/50 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl text-white font-bold text-center mb-4 cursor-default">FIREBASE ADD DATA</h1>
        
        <div className="mb-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#282651] mb-3"/>
          <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#282651]"/>
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-black absolute right-10 mt-5 transform -translate-y-1/2">
            {showPassword ? "hide" : "Show"}
          </button>
        </div>

        <div className="flex justify-between mb-4">
        <button onClick={handleSignup} className="w-[48%] bg-[#e1934e] text-white py-2 rounded-lg hover:bg-[#c97f41] transition-colors duration-200">
          Daftar
        </button>
        <button onClick={handleLogin} className="w-[48%] bg-[#dd4c21] text-white py-2 rounded-lg hover:bg-[#b53b1a] transition-colors duration-200">
          Login
        </button>
        </div>

        <h2 className="text-xl text-white font-semibold text-center mb-4 cursor-default">Tambahkan Barang</h2>
        <div className="mb-4">
          <input type="text" placeholder="Add an item" value={item} onChange={(e) => setItem(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#282651]"/>
        </div>

        <button onClick={handleAddItem}className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-[#282651] transition-colors duration-200">
          Tambahkan
        </button>
      </div>
    </div>
  );
};

export default App;