function Newtask() {
  return (
    <>
      <form className="space-y-8">
        {/* <!-- Task Name --> */}
        <div className="space-y-2">
          <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
            Task Name
          </label>
          <input
            className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none"
            placeholder="e.g. Finalize Q4 Editorial Strategy"
            type="text"
          />
        </div>
        {/* <!-- Description --> */}
        <div className="space-y-2">
          <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
            Description
          </label>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none resize-none"
            placeholder="Define the core objectives and expected outcome..."
            rows="3"
          ></textarea>
        </div>
        {/* <!-- Grid for Date, Priority, Project --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
              Due Date
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none"
                type="date"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
              Priority
            </label>
            <select className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none appearance-none">
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
              Project
            </label>
            <select className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-surface-tint transition-all duration-200 outline-none appearance-none">
              <option>Internal Marketing</option>
              <option>Product Development</option>
              <option>Client Onboarding</option>
              <option>Brand Refresh</option>
            </select>
          </div>
        </div>
        {/* <!-- Action Footer --> */}
        <div className="pt-6 flex flex-col md:flex-row gap-4 justify-end">
          <button
            className="px-6 py-3 text-on-surface font-semibold hover:bg-surface-container-high transition-colors rounded-md text-sm order-2 md:order-1"
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-8 py-3 bg-primary text-on-primary font-bold rounded-md shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 text-sm flex items-center justify-center gap-2 order-1 md:order-2"
            type="submit"
          >
            Save Task
            <span
              className="material-symbols-outlined text-sm"
              data-icon="check"
            >
              check
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default Newtask;
