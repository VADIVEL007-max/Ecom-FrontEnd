import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Loader2, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      await register(payload);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-5 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      
      {/* Background Grid & Lighting Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size[4rem_4rem] [mask-radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/2 translate-x-1/2 translate-y-1/2 w-600 h-350 bg-black blur-[14px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Benefits Checklist */}
        <div className="lg:col-span-6 hidden lg:flex flex-col justify-between p-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Fast & Free Registration
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
              Join thousands of smart shoppers <span className="text-emerald-400">today.</span>
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Exclusive Member Pricing</h4>
                  <p className="text-xs text-slate-400">Unlock special discounts and flash sale access directly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">1-Click Express Checkout</h4>
                  <p className="text-xs text-slate-400">Save addresses & preferences for ultra-fast ordering.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Easy Order Management & Returns</h4>
                  <p className="text-xs text-slate-400">Track shipments and process returns with zero hassle.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800/80 flex items-center gap-6">
            <div>
              <p className="text-2xl font-black text-white">4.9/5</p>
              <p className="text-xs text-slate-400">Customer Rating</p>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <p className="text-2xl font-black text-emerald-400">50K+</p>
              <p className="text-xs text-slate-400">Active Members</p>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Card */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md bg-stone-900 border border-slate-800/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-emerald-500/5 relative">
            
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-lg">
                  B
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white">BuySmart</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight mt-4">Create your account</h1>
              <p className="text-slate-400 text-xs mt-1">Get started in less than 60 seconds.</p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium text-center">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase tracking-wider"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-xs text-slate-400 mt-6 pt-5 border-t border-slate-800/80">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-400 font-bold hover:underline ml-1">
                Sign in
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;