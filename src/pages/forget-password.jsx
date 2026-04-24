import { Link } from "react-router-dom";

function Forgotten() {
  return (
    <>
      <header class="bg-[#f7f9fb] dark:bg-slate-950 text-[#0F172A] dark:text-slate-50 font-manrope tracking-tight font-bold docked full-width top-0 no-border background-shift flat no shadows flex justify-between items-center px-6 py-4 w-full sticky z-50">
        <div class="text-xl font-bold tracking-tighter text-[#0F172A] dark:text-slate-50">
          Kinetic Ledger
        </div>
        <div class="flex items-center gap-4">
          <button class="hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors active:scale-95 duration-200 p-2 rounded-xl">
            <span class="material-symbols-outlined" data-icon="help_outline">
              help_outline
            </span>
          </button>
        </div>
      </header>
      <main class="min-h-[calc(100vh-180px)] flex items-center justify-center px-6 py-12">
        <div class="w-full max-w-md">
          {/* <!-- Focused Card Canvas --> */}
          <div class="bg-surface-container-lowest ambient-shadow rounded-xl p-8 md:p-10">
            <div class="mb-10 text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-container-low mb-6">
                <span
                  class="material-symbols-outlined text-primary text-3xl"
                  data-icon="lock_reset"
                >
                  lock_reset
                </span>
              </div>
              <h1 class="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-3">
                Forgot Password
              </h1>
              <p class="text-on-surface-variant font-body leading-relaxed text-sm">
                Enter the email address associated with your Kinetic Ledger
                account and we'll send you a link to reset your password.
              </p>
            </div>
            <form
              action="#"
              class="space-y-8"
              method="POST"
              onsubmit="return false;"
            >
              <div class="space-y-2">
                <label
                  class="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant ml-1"
                  for="email"
                >
                  Email Address
                </label>
                <div class="relative group">
                  <input
                    class="w-full bg-surface-container-low border-none rounded-md px-4 py-4 text-on-surface placeholder:text-outline transition-all duration-200 focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required=""
                    type="email"
                  />
                  <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-outline group-focus-within:text-surface-tint">
                    <span
                      class="material-symbols-outlined text-xl"
                      data-icon="mail"
                    >
                      mail
                    </span>
                  </div>
                </div>
              </div>
              <button
                class="w-full bg-primary text-on-primary font-headline font-bold py-4 px-6 rounded-md shadow-lg shadow-primary/10 hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
                type="submit"
              >
                <span>Send Reset Link</span>
                <span
                  class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </form>
            <div class="mt-10 pt-8 border-t border-surface-container border-dashed text-center">
              <Link
              to="/"
                class="inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors group"
              >
                <span
                  class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform"
                  data-icon="keyboard_backspace"
                >
                  keyboard_backspace
                </span>
                Back to Login
              </Link>
            </div>
          </div>
          {/* <!-- Contextual Information --> */}
          <div class="mt-8 grid grid-cols-1 gap-4">
            <div class="bg-surface-container-low rounded-xl p-4 flex items-start gap-4">
              <span
                class="material-symbols-outlined text-secondary text-xl mt-0.5"
                data-icon="shield_with_heart"
              >
                shield_with_heart
              </span>
              <div>
                <h3 class="text-xs font-bold font-headline text-on-surface uppercase tracking-wider mb-1">
                  Secure Process
                </h3>
                <p class="text-xs text-on-surface-variant leading-relaxed font-body">
                  For security, reset links are only valid for 60 minutes and
                  can be used once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-[#f7f9fb] dark:bg-slate-950 text-[#0F172A] dark:text-slate-50 font-inter text-xs uppercase tracking-widest opacity-60 full-width bottom-0 no-border tonal-transition flat no shadows flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
        <div class="mb-4 md:mb-0">
          © 2024 Kinetic Ledger. Editorial Efficiency.
        </div>
        <div class="flex gap-8">
          <a
            class="hover:text-black dark:hover:text-white transition-opacity"
            href="#"
          >
            Privacy
          </a>
          <a
            class="hover:text-black dark:hover:text-white transition-opacity"
            href="#"
          >
            Terms
          </a>
          <a
            class="hover:text-black dark:hover:text-white transition-opacity"
            href="#"
          >
            Support
          </a>
        </div>
      </footer>
    </>
  );
}

export default Forgotten;
