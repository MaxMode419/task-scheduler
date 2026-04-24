import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthContext } from "../providers/auth-provider";

const BASE_URL = "http://localhost:3000";

function Signin() {
  const { setUser, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      // console.log('is authentiated')
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users?email=${formData.email}`);
      const data = await res.json();
      setUser(data[0])

      toast.success("Login successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* <!-- Abstract Background Elements --> */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-on-primary-container/10 blur-[120px]"></div>
      <div className="w-full max-w-[480px] z-10">
        {/* <!-- Brand Anchor --> */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span
                className="material-symbols-outlined text-surface-container-lowest"
                data-icon="token"
              >
                token
              </span>
            </div>
          </div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-primary mb-2">
            Precision &amp; Flow
          </h1>
          <p className="font-body text-on-surface-variant tracking-normal">
            Editorial efficiency for the modern architect.
          </p>
        </div>
        {/* <!-- Login Card --> */}
        <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_12px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block font-headline font-bold text-[10px] uppercase tracking-widest text-on-surface-variant mb-3 px-1"
                for="email"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-surface-tint focus:ring-0 px-4 py-4 rounded-lg font-body transition-all duration-200 placeholder:text-outline"
                  id="email"
                  name="email"
                  placeholder="name@workspace.com"
                  required=""
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.currentTarget.value })
                  }
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="alternate_email"
                  >
                    alternate_email
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3 px-1">
                <label
                  className="block font-headline font-bold text-[10px] uppercase tracking-widest text-on-surface-variant"
                  for="password"
                >
                  Password
                </label>
                <Link
                  to="/forget-password"
                  className="font-label text-[10px] font-semibold uppercase tracking-widest text-on-primary-container hover:text-surface-tint transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-surface-tint focus:ring-0 px-4 py-4 rounded-lg font-body transition-all duration-200 placeholder:text-outline"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required=""
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.currentTarget.value,
                    })
                  }
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="lock_open"
                  >
                    lock_open
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full hero-gradient text-surface-container-lowest font-headline font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                Sign In
                <span
                  className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-surface-container-highest"></div>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-outline">
              or authenticate with
            </span>
            <div className="h-[1px] flex-1 bg-surface-container-highest"></div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-low rounded-lg font-label font-semibold text-on-surface text-sm hover:bg-surface-container-high transition-colors active:scale-95">
              <img
                alt="Google"
                className="w-4 h-4"
                data-alt="Official Google G logo in a minimalist vector style with primary colors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0seNAIDyrPosjR-tzAFwc4zusjzYWnGU-4fZ7W06Jn39iCzYvPe7LRT0NN9jTFnovOQfW-M4M9uCkAzf3NIk-RfjvHFlKKvGaeMM22DZtEK1XWBob0EQFmL0C9CaJmL2KjLAShP_MQnK4KMsKHUkfv8y-9xaH2ofcRirdHAkbumhwB6DezTx1G3v7NYqYiBcerJGR-icowQEzKNNQuUM-cTsxnKtSJBbq2cWyCCb2E_7gUYAMMruIlnItp3B4RQw5FaJlbyX1WIk"
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-low rounded-lg font-label font-semibold text-on-surface text-sm hover:bg-surface-container-high transition-colors active:scale-95">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="apple"
                data-weight="fill"
                // style="font-variation-settings: 'FILL' 1;"
              >
                ios
              </span>
              Apple
            </button>
          </div>
        </div>
        {/* <!-- Footer Footer Link --> */}
        <div className="mt-8 text-center">
          <p className="font-body text-on-surface-variant text-sm">
            Don't have an account?
            <Link
              to="/register"
              className="font-bold text-primary hover:text-on-primary-container transition-colors underline underline-offset-4 decoration-outline-variant"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Signin;
