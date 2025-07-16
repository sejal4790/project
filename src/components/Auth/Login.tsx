import React, { useState , useEffect } from 'react';
import logo from '../../assets/Images/logo.jpeg'; // adjust path based on your file structure
import bgImage from '../../assets/Images/Bg_LS.jpeg'; // Adjust the path based on your file location

import { Menu, Search, User, ShoppingCart, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();


    
    // Floating particles animation
    type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  };
  
  const [particles, setParticles] = useState<Particle[]>([]);
  
  
    useEffect(() => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setParticles(newParticles);
    }, []);
 const handleSubmit = () => {
  const usersString = localStorage.getItem("users");

  if (!usersString) {
    alert("No users found. Please signup first.");
    return;
  }

  const users = JSON.parse(usersString);

  if (!mobile || !password) {
    alert("Please fill in all fields");
    return;
  }

  const foundUser = users.find(
    (user: any) => user.mobile === mobile && user.password === password
  );

  if (!foundUser) {
    alert("Invalid mobile or password");
    return;
  }

  // ✅ Login successful
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("user", JSON.stringify(foundUser)); // current logged-in user

  alert("Login successful!");
  navigate("/");
};


  return (
    <div
  className="min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
       




      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 transform rotate-45 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 animate-ping"></div>
      </div>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-amber-800" />
          </button>
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-colors">
            <Search className="w-5 h-5 text-amber-800" />
          </button>
        </div>
        
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <img
                src={logo}className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold text-amber-900">MITHILAMRIT</span>
          
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-colors">
            <User className="w-5 h-5 text-amber-800" />
          </button>
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-colors">
            <ShoppingCart className="w-5 h-5 text-amber-800" />
          </button>
        </div>
      </header>
{/* Main Content */}
<main className="flex items-center justify-center px-4 py-16">
  <div className="w-full max-w-md">
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-200 p-8">
      <h1 className="text-3xl font-bold text-center text-amber-900 mb-8">Login with Mobile</h1>

      <div className="space-y-6">
        {/* Mobile Number Input */}
        <div className="space-y-2">
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
            pattern="[0-9]{10}"
            className="w-full px-4 py-3 border-2 border-amber-800 rounded-xl bg-transparent placeholder-amber-700 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
          />
        </div>
        {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border-2 border-amber-800 rounded-xl bg-transparent placeholder-amber-700 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
          />


        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Continue
        </button>

        {/* Register Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate("/Signup")}  // 👈 Navigate to Signup
            className="text-amber-800 hover:text-amber-600 underline text-sm transition-colors"
          >
            Don’t have an account? Create one
          </button>
        </div>
      </div>
    </div>
  </div>
</main>


      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </button>
        
        {showChat && (
          <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Chat Support</h3>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
              <div className="text-sm text-gray-600">
                <p className="mb-2">👋 Hello! How can I help you today?</p>
                <p className="text-xs text-gray-500">Online now</p>
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}