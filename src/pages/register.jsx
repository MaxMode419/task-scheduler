import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BASE_URL = "http://localhost:3000";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      toast.success("registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* <!-- Left Side: Editorial Brand Canvas --> */}
        <section className="hidden md:flex md:w-1/2 lg:w-3/5 bg-surface-container relative overflow-hidden items-center justify-center p-12">
          {/* <!-- Background Visual --> */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low via-surface-container to-surface-variant opacity-50"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-primary-container/5 rounded-full blur-[80px]"></div>
          </div>
          {/* <!-- Content Anchor --> */}
          <div className="relative z-10 max-w-lg">
            <div className="mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-primary"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  dataset
                </span>
              </div>
              <span className="font-headline text-2xl font-extrabold tracking-tighter text-primary">
                Kinetic Ledger
              </span>
            </div>
            <h1 className="font-headline text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
              Curate your{" "}
              <span className="text-on-primary-container">time</span> with
              precision.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed font-normal opacity-80">
              Moving beyond the clutter. A sanctuary for focus, built on
              intentional void and high-performance workflow management.
            </p>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-8">
              <div>
                <div className="text-primary font-headline text-3xl font-extrabold tracking-tight">
                  99.8%
                </div>
                <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-1">
                  Focus Retained
                </div>
              </div>
              <div>
                <div className="text-primary font-headline text-3xl font-extrabold tracking-tight">
                  2.4x
                </div>
                <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-1">
                  Output Velocity
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Right Side: Transactional Interaction Canvas --> */}
        <main className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 bg-surface-container-lowest">
          <div className="w-full max-w-md space-y-10">
            {/* <!-- Branding for Mobile --> */}
            <div className="md:hidden flex items-center gap-2 mb-12">
              <span className="material-symbols-outlined text-primary text-3xl">
                dataset
              </span>
              <span className="font-headline text-xl font-bold tracking-tighter text-primary">
                Kinetic Ledger
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
                Initialize Workspace
              </h2>
              <p className="text-on-surface-variant text-sm font-body">
                Enter your credentials to begin your editorial journey.
              </p>
            </div>
            {/* <!-- Form Section --> */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* <!-- Full Name --> */}
              <div className="space-y-2">
                <label
                  className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant ml-1"
                  for="full_name"
                >
                  Full Name
                </label>
                <div className="relative group">
                  <input
                    className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-xl focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-surface-tint text-on-surface placeholder:text-outline"
                    id="full_name"
                    name="full_name"
                    placeholder="Elias Thorne"
                    type="text"
                    value={formData.full_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        full_name: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              </div>
              {/* <!-- Email Address --> */}
              <div className="space-y-2">
                <label
                  className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant ml-1"
                  for="email"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-xl focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-surface-tint text-on-surface placeholder:text-outline"
                    id="email"
                    name="email"
                    placeholder="elias@kinetic.ledger"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.currentTarget.value })
                    }
                  />
                </div>
              </div>
              {/* <!-- Password --> */}
              <div className="space-y-2">
                <label
                  className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant ml-1"
                  for="password"
                >
                  Security Key
                </label>
                <div className="relative group">
                  <input
                    className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-xl focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-surface-tint text-on-surface placeholder:text-outline"
                    id="password"
                    name="password"
                    placeholder="••••••••••••"
                    type={hide ? "password" : "text"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.currentTarget.name]: e.currentTarget.value,
                      })
                    }
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                    type="button"
                    onClick={() => setHide(!hide)}
                  >
                    <span className="material-symbols-outlined text-lg">
                      visibility_off
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- Terms Checkbox (Subtle Pattern) --> */}
              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
                    id="terms"
                    type="checkbox"
                  />
                </div>
                <label
                  className="text-xs text-on-surface-variant leading-relaxed"
                  for="terms"
                >
                  I acknowledge the{" "}
                  <a
                    className="text-primary font-medium hover:underline"
                    href="#"
                  >
                    Editorial Guidelines
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-primary font-medium hover:underline"
                    href="#"
                  >
                    Privacy Architecture
                  </a>{" "}
                  of Kinetic Ledger.
                </label>
              </div>
              {/* <!-- Primary Action --> */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-headline font-bold rounded-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>
                    {loading ? "Creating Account..." : "Create Account"}
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
            {/* <!-- Social/Secondary Auth --> */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-container"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-label bg-surface-container-lowest px-4 text-outline">
                or authenticate with
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 border border-surface-container rounded-xl hover:bg-surface-container-low transition-colors group">
                <img
                  alt="Google Logo"
                  className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all"
                  data-alt="Official Google icon logo in standard multi-color format on white background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMo3T2u8qkH1AVjsAQJfS098KoOXlAAFpLk7SMGKZ_csPH2nlEkm0F99ABCuXeSV23DeU0fPYToqcl5fYGxjSLtjRM8lLgy-DxZA9_wQMNPJsr6fsJXLn_gizzdVRVGd5n2zEAEl-PRORCgewlnB-LtOP4vvm_JEM-_rbL2APZPSH2FfyaV_F_e7A1mT3u6np74h26myEWbZkfZdLPL9cmnXPo_-XmjbQA4nWfSklv1teb53C4CMuSlcaKxxYTjsKt2ybYgvCNUwk"
                />
                <span className="font-label text-xs font-semibold text-on-surface">
                  Google
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 border border-surface-container rounded-xl hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-lg text-on-surface-variant group-hover:text-primary transition-colors">
                  key
                </span>
                <span className="font-label text-xs font-semibold text-on-surface">
                  SSO
                </span>
              </button>
            </div>
            {/* <!-- Footer Link --> */}
            <div className="text-center pt-8">
              <p className="text-on-surface-variant text-sm">
                Already part of the network?
                <Link
                  to="/login"
                  className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- Footer component logic (Semantic Shell) --> */}
          <footer className="mt-auto pt-16 w-full flex flex-col md:flex-row justify-between items-center opacity-40">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-on-surface mb-4 md:mb-0">
              © 2024 Kinetic Ledger. Editorial Efficiency.
            </p>
            <div className="flex gap-6">
              <a
                className="font-inter text-[10px] uppercase tracking-[0.2em] text-on-surface hover:text-black transition-opacity"
                href="#"
              >
                Privacy
              </a>
              <a
                className="font-inter text-[10px] uppercase tracking-[0.2em] text-on-surface hover:text-black transition-opacity"
                href="#"
              >
                Terms
              </a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Register;
