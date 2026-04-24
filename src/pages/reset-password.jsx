function Reset() {
  return (
    <>
      <header className="bg-[#f7f9fb] dark:bg-slate-950 flex justify-between items-center px-6 py-4 w-full top-0">
        <div className="text-xl font-bold tracking-tighter text-[#0F172A] dark:text-slate-50 font-headline">
          Kinetic Ledger
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-slate-200/50 dark:hover:bg-slate-800/50 p-2 rounded-xl transition-colors active:scale-95 duration-200">
            help_outline
          </button>
        </div>
      </header>
      {/* <!-- Main Content: Task-Focused Auth Canvas --> */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[480px] space-y-10">
          {/* <!-- Branding/Instructional Header --> */}
          <div className="text-center space-y-3">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">
              Reset Password
            </h1>
            <p className="text-on-surface-variant font-body text-lg">
              Choose a strong, unique password to secure your account.
            </p>
          </div>
          {/* <!-- Form Card: Tonal Layering --> */}
          <div className="bg-surface-container-lowest ambient-shadow rounded-xl p-8 md:p-12 space-y-8">
            <form className="space-y-6">
              {/* <!-- New Password Field --> */}
              <div className="space-y-2">
                <label
                  className="block font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold"
                  for="new_password"
                >
                  New Password
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline">
                    lock
                  </span>
                  <input
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent pl-10 pr-4 py-4 text-on-surface placeholder:text-outline transition-all focus:bg-surface-container-lowest font-body"
                    id="new_password"
                    name="new_password"
                    placeholder="••••••••"
                    required=""
                    type="password"
                  />
                </div>
              </div>
              {/* <!-- Confirm Password Field --> */}
              <div className="space-y-2">
                <label
                  className="block font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold"
                  for="confirm_password"
                >
                  Confirm New Password
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline">
                    verified_user
                  </span>
                  <input
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent pl-10 pr-4 py-4 text-on-surface placeholder:text-outline transition-all focus:bg-surface-container-lowest font-body"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="••••••••"
                    required=""
                    type="password"
                  />
                </div>
              </div>
              {/* <!-- Password Requirements (Visual Feedback) --> */}
              <div className="bg-surface-container-low rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[16px] text-surface-tint"
                    data-weight="fill"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    check_circle
                  </span>
                  <span className="text-xs font-label text-on-surface-variant">
                    At least 12 characters long
                  </span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <span className="material-symbols-outlined text-[16px] text-outline">
                    circle
                  </span>
                  <span className="text-xs font-label text-on-surface-variant">
                    Include a special character (&amp;, $, @)
                  </span>
                </div>
              </div>
              {/* <!-- Action Button --> */}
              <button
                className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
                type="submit"
              >
                <span>Reset Password</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
            {/* <!-- Support Link --> */}
            <div className="text-center">
              <button className="text-on-surface-variant hover:text-primary text-sm font-label transition-colors">
                Need help? Contact support
              </button>
            </div>
          </div>
          {/* <!-- Graphic Element (Editorial Aesthetic) --> */}
          <div className="relative h-24 overflow-hidden rounded-xl bg-surface-container-low group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-on-primary-container/10 opacity-50"></div>
            <div className="flex items-center justify-center h-full space-x-8">
              <span className="material-symbols-outlined text-4xl text-surface-variant">
                security
              </span>
              <span className="material-symbols-outlined text-4xl text-surface-variant">
                vpn_key
              </span>
              <span className="material-symbols-outlined text-4xl text-surface-variant">
                shield
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface opacity-30">
                Encrypted Infrastructure
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Footer: Responsive & Minimalist --> */}
      <footer className="bg-[#f7f9fb] dark:bg-slate-950 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
          <div className="font-inter text-xs uppercase tracking-widest opacity-60 text-[#0F172A] dark:text-slate-50 mb-6 md:mb-0">
            © 2024 Kinetic Ledger. Editorial Efficiency.
          </div>
          <div className="flex gap-8">
            <a
              className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-black dark:hover:text-white transition-opacity"
              href="#"
            >
              Privacy
            </a>
            <a
              className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-black dark:hover:text-white transition-opacity"
              href="#"
            >
              Terms
            </a>
            <a
              className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-black dark:hover:text-white transition-opacity"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Reset;
