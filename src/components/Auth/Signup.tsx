import React, { useState, useEffect } from 'react';
import { Menu, Search, User, ShoppingCart, MessageCircle, Eye, EyeOff, Shield, CheckCircle, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/logo.jpeg';
import bgImage from '../../assets/Images/Bg_LS.jpeg';
export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [step, setStep] = useState(1);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpTimer, setOtpTimer] = useState(0);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
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

  // Password strength checker
 const checkPasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const navigateToLogin = () => {
  navigate('/login'); // replace with your actual login route
};


  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const startOtpTimer = () => {
    setOtpTimer(60);
    setIsResendEnabled(false);
    
    const timer = setInterval(() => {
      setOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtp = () => {
    if (!fullName || !mobile || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    setStep(2);
    startOtpTimer();
    
    alert(`OTP sent to ${mobile}: ${newOtp}`);
  };

  const verifyOtp = () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    if (otp !== generatedOtp) {
      alert("Invalid OTP. Please try again.");
      return;
    }

    const newUser = {
      fullName,
      mobile,
      password,
      isVerified: true
    };

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setStep(3);
    setTimeout(() => {
      navigateToLogin();
    }, 3000);
  };

  const resendOtp = () => {
    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    setOtp('');
    startOtpTimer();
    alert(`New OTP sent to ${mobile}: ${newOtp}`);
  };

  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(password));
  }, [password]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    if (passwordStrength <= 4) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Fair';
    if (passwordStrength <= 4) return 'Good';
    return 'Strong';
  };

  return (
     <div
  className="min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-amber-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animation: `float 6s ease-in-out infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 transform rotate-45 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-4 bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-all duration-300 transform hover:scale-110">
            <Menu className="w-5 h-5 text-amber-800" />
          </button>
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-all duration-300 transform hover:scale-110">
            <Search className="w-5 h-5 text-amber-800" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
           <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <img src={logo} alt="Mithilamrit Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold text-amber-900">MITHILAMRIT</span>
         
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-all duration-300 transform hover:scale-110">
            <User className="w-5 h-5 text-amber-800" />
          </button>
          <button className="p-2 hover:bg-amber-100 rounded-lg transition-all duration-300 transform hover:scale-110">
            <ShoppingCart className="w-5 h-5 text-amber-800" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center px-2 py-10">
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-200 p-6 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-2xl"></div>
            
            <div className="relative z-10">
              {/* Step 1: Signup Form */}
              {step === 1 && (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4 shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-amber-900 mb-2">Create Account</h1>
                    <p className="text-amber-700 text-lg">Join us and unlock amazing features</p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-amber-800 text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-amber-300 rounded-xl bg-white/70 placeholder-amber-600 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2">
                      <label className="text-amber-800 text-sm font-medium">Mobile Number</label>
                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                          className="w-full px-4 py-3 border-2 border-amber-300 rounded-xl bg-white/70 placeholder-amber-600 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        />
                        {mobile.length === 10 && (
                          <CheckCircle className="absolute right-3 top-3 w-6 h-6 text-green-500" />
                        )}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="text-amber-800 text-sm font-medium">Create Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 border-2 border-amber-300 rounded-xl bg-white/70 placeholder-amber-600 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-amber-600 hover:text-amber-800 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                        </button>
                      </div>
                      {password && (
                        <div className="mt-2">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="flex-1 h-2 bg-amber-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                              />
                            </div>
                            <span className="text-sm text-amber-700">{getPasswordStrengthText()}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="text-amber-800 text-sm font-medium">Confirm Password</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 border-2 border-amber-300 rounded-xl bg-white/70 placeholder-amber-600 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-amber-600 hover:text-amber-800 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                        </button>
                      </div>
                      {confirmPassword && password !== confirmPassword && (
                        <p className="text-red-500 text-sm">Passwords do not match</p>
                      )}
                    </div>

                    {/* Security Features */}
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="w-5 h-5 text-amber-600" />
                        <span className="text-amber-800 font-medium">Security Features</span>
                      </div>
                      <div className="space-y-1 text-sm text-amber-700">
                        <p>✓ End-to-end encryption</p>
                        <p>✓ Two-factor authentication</p>
                        <p>✓ Secure data storage</p>
                      </div>
                    </div>

                    {/* Send OTP Button */}
                    <button
                      type="button"
                      onClick={sendOtp}
                      className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Send OTP</span>
                        <Sparkles className="w-5 h-5" />
                      </span>
                    </button>

                    {/* Already have account */}
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={navigateToLogin}
                        className="text-amber-800 hover:text-amber-600 underline text-sm transition-colors"
                      >
                        Already have an account? Login
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: OTP Verification */}
              {step === 2 && (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4 shadow-lg animate-pulse">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-amber-900 mb-2">Verify Your Number</h1>
                    <p className="text-amber-700 text-lg">
                      We've sent a 6-digit OTP to<br />
                      <span className="font-semibold text-orange-600">+91 {mobile}</span>
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* OTP Input */}
                    <div className="space-y-2">
                      <label className="text-amber-800 text-sm font-medium">Enter OTP</label>
                      <input
                        type="text"
                        placeholder="000000"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-3 border-2 border-amber-300 rounded-xl bg-white/70 placeholder-amber-600 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-center text-2xl font-bold tracking-widest"
                      />
                    </div>

                    {/* Timer */}
                    <div className="text-center">
                      {otpTimer > 0 ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                          <p className="text-amber-700 text-sm">
                            Resend OTP in {otpTimer} seconds
                          </p>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={resendOtp}
                          className="text-orange-600 hover:text-orange-700 underline text-sm transition-colors font-medium"
                        >
                          Resend OTP
                        </button>
                      )}
                    </div>

                    {/* Verify Button */}
                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Verify OTP</span>
                      </span>
                    </button>

                    {/* Back Button */}
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      Back
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <>
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome To Mithilamrit 🎉</h1>
                    <p className="text-amber-700 text-lg mb-6">
                      Your account has been created successfully.<br />
                      <span className="text-green-600 font-semibold">
                        Redirecting to login page...</span>
                    </p>
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-800"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
        
        {showChat && (
          <div className="absolute bottom-16 right-0 w-80 h-96 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl border border-amber-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-amber-800">Chat Support</h3>
              <button
                onClick={() => setShowChat(false)}
                className="text-amber-600 hover:text-amber-800 text-xl"
              >
                ×
              </button>
            </div>
            <div className="h-64 bg-amber-50 rounded-lg p-4 mb-4 overflow-y-auto">
              <div className="text-sm text-amber-700">
                <p className="mb-2">👋 Hello! How can I help you today?</p>
                <p className="text-xs text-amber-600">Online now</p>
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-amber-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-4 py-2 rounded-r-lg transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        )}
      </div>

    <style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
`}</style>

    </div>
  );
}