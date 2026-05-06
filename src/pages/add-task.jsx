import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../providers/auth-provider";
import { toast } from "sonner";

function Newtask() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const startRef = useRef(null);
  const endRef = useRef(null);
  const {
    user: { id: userId },
  } = useAuthContext();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [priority, setPriority] = useState("low");
  const [project, setProject] = useState("Internal Marketing");

  const action = searchParams.get("action");
  const taskId = searchParams.get("id");
  const isEditMode = action === "edit" && Boolean(taskId);

  useEffect(() => {
    if (!isEditMode) return;

    const loadTask = async () => {
      try {
        const res = await fetch(`http://localhost:3000/tasks/${taskId}`);
        if (!res.ok) {
          throw new Error("Failed to load task");
        }
        const data = await res.json();
        setTaskName(data.taskName || "");
        setTaskDescription(data.taskDescription || "");
        setDueDate(data.dueDate || "");
        setStartTime(data.startTime || "");
        setEndTime(data.endTime || "");
        setPriority(data.priority || "low");
        setProject(data.project || "Internal Marketing");
      } catch (err) {
        console.error(err);
        toast.error("Unable to load task for editing");
        navigate("/");
      }
    };

    loadTask();
  }, [isEditMode, taskId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      taskName,
      taskDescription,
      dueDate,
      startTime,
      endTime,
      priority,
      project,
      userId,
    };
    try {
      const url = isEditMode
        ? `http://localhost:3000/tasks/${taskId}`
        : "http://localhost:3000/tasks";
      const method = isEditMode ? "PATCH" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      toast.success(isEditMode ? "Task updated" : "Task created");
      navigate("/");
    } catch (err) {
      console.error("Error saving task:", err);
      toast.error("Error creating task");
    }
  };
  return (
    <>
      <nav className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-3xl docked full-width top-0 sticky z-50 shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex justify-between items-center px-6 py-4 w-full max-w-full">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
            Precision &amp; Flow
          </span>
          <div className="hidden md:flex gap-6">
            <Link
              className="text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors px-2 py-1 rounded"
              to="/"
            >
              Dashboard
            </Link>
            <a
              className="text-slate-900 dark:text-slate-50 font-bold border-b-2 border-slate-900 dark:border-slate-50 px-2 py-1"
              href="#"
            >
              Projects
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors px-2 py-1 rounded"
              href="#"
            >
              Calendar
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-200 ease-in-out">
            <span
              className="material-symbols-outlined text-slate-900"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-200 ease-in-out">
            <span
              className="material-symbols-outlined text-slate-900"
              data-icon="settings"
            >
              settings
            </span>
          </button>
          <img
            alt="User profile"
            className="w-8 h-8 rounded-full bg-surface-container-high border-none"
            data-alt="Close up portrait of a professional woman in business attire with a neutral gray background, soft lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzPop8tWXuSartreiw2TjOEpHReLq74H33-FqnBOhD_ne03BS6w7HeW-QPVZH686EE8uZJVsy54923jr_v6xQ9nzIJ1s6xCyZSZ3OStSB_4-WruRviX0AxtAJTIAgn4IxKMmZ4xYUG3e6vCsd2vDbhe_UHJ6LBv67NBzfGRHFuUaqTW1cn_AUTUjp9ydztHvCwQ5EJHJQ-8pnetYIrjSzVqWeJUkrpHGf6TfBL1LQP_q62-qEAyzGNyc4Qa52OUHsvdpGR1bpiJI4"
          />
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        {/* <!-- New Task Container (Large Modal Style) --> */}
        <div className="w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] overflow-hidden flex flex-col md:flex-row">
          {/* <!-- Left Side: Visual/Contextual Anchor --> */}
          <div className="hidden md:flex w-1/3 bg-surface-container-low p-8 flex-col justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-on-surface mb-2">
                Workspace
              </h2>
              <p className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">
                Editorial Efficiency
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-surface-container-lowest rounded-lg">
                <span
                  className="material-symbols-outlined text-primary mb-2"
                  data-icon="lightbulb"
                >
                  lightbulb
                </span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Defining a clear task name and priority helps the system
                  optimize your focus flow for the day.
                </p>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="history"
                >
                  history
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Last Task: Editorial Review
                </span>
              </div>
            </div>
            <div className="h-32 w-full rounded-lg overflow-hidden grayscale opacity-40">
              <img
                alt="Minimalist Office"
                className="w-full h-full object-cover"
                data-alt="Ultra minimalist bright white office space with a single clean wooden desk, large window, and architectural shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3fvwxyDq0R7qO2ByGL5fIN0UjF13hSnsKJHai3_G4ePVZCxtEqU1Jfio2dkz3gXW5AOvOn2PrRym8g_JJzWnxmB9TPQVRid0FVCELsBTS9D9CFBLbombFPGONxLVBrjCSiNZZtF7DTHueef5vPQK4QwZ6FEkVcz8VxPt3KfQuAHCyUYWsN-PFcW6r9VG3EB81VPXmQpqoFeCLiPsY4aDiwdY6uRIQwAi8b1Kbql-U6xkdfgd6agqgJr9cOpZl0IVNYK2XmNSOQkI"
              />
            </div>
          </div>
          {/* <!-- Right Side: Form --> */}
          <div className="flex-grow p-8 md:p-12">
            <header className="mb-10">
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">
                {isEditMode ? "Edit Task" : "Create New Task"}
              </h1>
              <p className="text-on-surface-variant mt-1">
                Fill in the details to anchor this item in your flow.
              </p>
            </header>
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* <!-- Task Name --> */}
              <div className="space-y-2">
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                  Task Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none"
                  placeholder="e.g. Finalize Q4 Editorial Strategy"
                  required
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              {/* <!-- Description --> */}
              <div className="space-y-2">
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none resize-none"
                  placeholder="Define the core objectives and expected outcome..."
                  required
                  rows="3"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.currentTarget.value)}
                ></textarea>
              </div>
              {/* <!-- Grid for Date, Priority, Project --> */}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <div
                  className="space-y-2"
                  onClick={() => {
                    if (!inputDateRef.current) return;

                    inputDateRef.current.showPicker();
                  }}
                >
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                    Due Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none"
                      required
                      type="datetime-local"
                      ref={inputDateRef}
                      value={dueDate}
                      onChange={(e) => setDueDate(e.currentTarget.value)}
                    />
                  </div>
                </div> */}

                <div
                  class="space-y-2"
                  onClick={() => {
                    startRef.current?.showPicker();
                  }}
                >
                  <label class="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                    Start Time
                  </label>

                  <input
                    type="datetime-local"
                    class="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint outline-none transition-all"
                    required
                    ref={startRef}
                    value={startTime}
                    onChange={(e) => setStartTime(e.currentTarget.value)}
                  />
                </div>

                {/* End Date & Time */}
                <div
                  class="space-y-2"
                  onClick={() => {
                    endRef.current?.showPicker();
                  }}
                >
                  <label class="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                    End Time
                  </label>

                  <input
                    type="datetime-local"
                    class="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint outline-none transition-all"
                    required
                    ref={endRef}
                    value={endTime}
                    onChange={(e) => setEndTime(e.currentTarget.value)}
                  />
                </div>

                <div class="md:col-span-2 space-y-2">
                  <label class="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={priority}
                    class="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none appearance-none"
                    required
                    onChange={(e) => setPriority(e.currentTarget.value)}
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <div class="md:col-span-2 space-y-2">
                  <label class="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                    Project
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={project}
                    required
                    class="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none appearance-none"
                    onChange={(e) => setProject(e.currentTarget.value)}
                  >
                    <option>Internal Marketing</option>
                    <option>Product Development</option>
                    <option>Client Onboarding</option>
                    <option>Brand Refresh</option>
                  </select>
                </div>
              </div>
              {/* <!-- Action Footer --> */}
              <div class="pt-6 flex flex-col md:flex-row gap-4 justify-end">
                <button
                  class="px-6 py-3 text-on-surface font-semibold hover:bg-surface-container-high transition-colors rounded-md text-sm order-2 md:order-1"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button
                  class="px-8 py-3 bg-primary text-on-primary font-bold rounded-md shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 text-sm flex items-center justify-center gap-2 order-1 md:order-2"
                  type="submit"
                >
                  {isEditMode ? "Update Task" : "Save Task"}
                  <span
                    class="material-symbols-outlined text-sm"
                    data-icon="check"
                  >
                    check
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* <!-- SideNavBar (Contextual Hidden on focused Task creation, but represented for system integrity) -->
<!-- Suppressed based on "Task-Focused" rule: Hide the shell to prioritize the content canvas -->
<!-- Mobile Bottom Navigation (Suppressed for focused journey) --> */}
      <footer className="p-8 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant/40">
          Precision &amp; Flow © 2024 • Workspace Excellence
        </p>
      </footer>
    </>
  );
}
export default Newtask;
