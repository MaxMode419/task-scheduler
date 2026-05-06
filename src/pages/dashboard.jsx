import { Link, Navigate, useNavigate } from "react-router-dom";
import TaskSection from "../task-container/task-section";
import { useAuthContext } from "../providers/auth-provider";
import { useEffect, useState } from "react";

function Dashboard() {
  const { signout } = useAuthContext();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const highPriorityCount = tasks.filter(
    (task) => task?.priority?.toLowerCase() === "high",
  ).length;

  const { user } = useAuthContext();

  const handleTaskDelete = (deletedTaskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== deletedTaskId),
    );
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const { id: userId } = user;
      try {
        const res = await fetch(`http://localhost:3000/tasks?userId=${userId}`);
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <aside className="bg-slate-100 dark:bg-slate-900 h-screen w-64 fixed left-0 top-0 flex flex-col p-4 gap-2 z-40">
        <div className="mb-8 px-4 py-2">
          <h1 className="text-lg font-black text-slate-900 dark:text-white font-headline">
            Workspace
          </h1>
          <p className="font-manrope uppercase tracking-widest text-[10px] font-semibold text-slate-500">
            Editorial Efficiency
          </p>
        </div>
        {/* <Nav /> */}
        <nav className="flex flex-col gap-1 flex-1">
          <Link to="/">
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg px-4 py-3 shadow-sm active:translate-x-1 duration-150 cursor-pointer">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-manrope uppercase tracking-widest text-[10px] font-semibold">
                Dashboard
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-manrope uppercase tracking-widest text-[10px] font-semibold">
              Calendar
            </span>
          </div>
          <Link to="/add-task">
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer">
              <span className="material-symbols-outlined">folder</span>
              <span className="font-manrope uppercase tracking-widest text-[10px] font-semibold">
                Projects
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">history</span>
            <span className="font-manrope uppercase tracking-widest text-[10px] font-semibold">
              Archive
            </span>
          </div>
        </nav>
        <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 pt-4">
          <button
            className="mb-4 bg-primary text-on-primary rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-headline font-bold text-sm shadow-sm hover:opacity-90 active:scale-95 transition-all"
            onClick={() => navigate("/add-task")}
          >
            <span
              className="material-symbols-outlined"
              //   style="font-variation-settings: 'FILL' 1;"
            >
              add
            </span>
            New Task
          </button>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">help</span>
            <span className="font-manrope uppercase tracking-widest text-[10px] font-semibold">
              Help
            </span>
          </div>
          <div
            onClick={signout}
            className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-manrope uppercase tracking-widest text-[10px] font-semibold">
              Sign Out
            </span>
          </div>
        </div>
      </aside>
      {/* <!-- Main Content Stage --> */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col relative">
        {/* <!-- TopAppBar Component --> */}
        <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-3xl docked full-width top-0 sticky z-50 shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex justify-between items-center px-6 py-4 w-full max-w-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">
              Precision &amp; Flow
            </span>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input
                className="bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-surface-tint/20 w-64 transition-all outline-none"
                placeholder="Search tasks..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors active:scale-95 duration-200 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors active:scale-95 duration-200 rounded-full">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ml-2 shadow-sm">
              <img
                alt="User profile"
                className="h-full w-full object-cover"
                data-alt="Close-up portrait of a professional man in a clean office setting, soft natural lighting, minimalist background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfXbk_KM5E81gp3DK8TOBLE2wadYuCBDLOdL6wXNMiW03Kha9k-BflrM5nHRcvvugx4kk6edUg9aCWVxP374K4vkHXe40vdegSkIJDWHMO2Q3-wRj8qQYTpGv7c4xAL71tgftZATCTN0emqLOu0Et38SRtGClIW94EaxDg9XDxfvZSSOmq5syA7BthVtDpub17lLDlmCzczbehZ6nLQeBT0LkVR0T5sOYcTS816Jgc_dlfQvh8bsXY07vCi0EqgrnPsNOmToJP-UE"
              />
            </div>
          </div>
        </header>
        {/* <!-- Content Canvas --> */}
        <div className="p-10 flex flex-col gap-10 max-w-6xl mx-auto w-full">
          {/* <!-- Hero Header Section --> */}
          <section className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">
                Good Morning, {user?.full_name}.
              </h2>
              <p className="text-on-surface-variant font-body mt-2">
                You have {highPriorityCount} high priority tasks requiring your
                focus today.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-5 py-2.5 rounded-xl bg-surface-container-highest text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-colors">
                Today
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
                Upcoming
              </button>
            </div>
          </section>
          {/* <!-- Bento Grid - Task Categories --> */}
          <section className="grid grid-cols-12 gap-6">
            {/* <!-- Main Task Feed (Editorial Style) --> */}
            <div className="col-span-8 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline font-bold text-lg tracking-tight px-2">
                  Active Tasks
                </h3>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant opacity-60">
                  Sort by Priority
                </span>
              </div>

              {loading ? (
                <p>Loading tasks...</p>
              ) : (
                <TaskSection tasks={tasks} onDelete={handleTaskDelete} />
              )}
            </div>
            {/* <!-- Right Sidebar / Bento Secondary --> */}
            <div className="col-span-4 flex flex-col gap-6">
              {/* <!-- Project Stats Card --> */}
              <div className="bg-primary p-8 rounded-xl text-on-primary flex flex-col justify-between h-[240px] relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-extrabold tracking-tight">
                    Active Projects
                  </h3>
                  <p className="text-primary-fixed-dim text-sm mt-1">
                    Across 4 departments
                  </p>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-6xl font-black font-headline tracking-tighter italic">
                    12
                  </span>
                  <button className="bg-on-primary text-primary px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest">
                    View All
                  </button>
                </div>
                {/* <!-- Decorative Abstract Background --> */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-on-primary-container opacity-20 blur-3xl -mr-16 -mt-16 group-hover:opacity-40 transition-opacity"></div>
              </div>
              {/* <!-- Upcoming Calendar Peek --> */}
              <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                  <h3 className="font-headline font-bold text-on-surface">
                    Tomorrow
                  </h3>
                  <span className="text-xs font-bold text-surface-tint">
                    Oct 24
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="w-1 h-10 bg-surface-tint rounded-full"></div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">
                        Editorial Pitch Meeting                      </p>
                      <p className="text-xs text-on-surface-variant">
                        09:00 AM — 10:30 AM
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 h-10 bg-on-tertiary-container rounded-full"></div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">
                        Project Kinetic Launch
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        02:00 PM — 04:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Productivity Visual --> */}
              <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-4 shadow-[0_12px_40px_rgba(25,28,30,0.06)]">
                <h3 className="font-headline font-bold text-on-surface text-sm">
                  Focus Momentum
                </h3>
                <div className="h-24 w-full relative flex items-end gap-1">
                  <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[40%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[60%]"></div>
                  <div className="flex-1 bg-primary rounded-t-sm h-[90%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[30%]"></div>
                  <div className="flex-1 bg-primary rounded-t-sm h-[75%]"></div>
                  <div className="flex-1 bg-primary rounded-t-sm h-[85%]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[50%]"></div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-center opacity-60">
                  Daily Completion Velocity
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
