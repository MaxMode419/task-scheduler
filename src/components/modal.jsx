import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const Modal = ({
  setShowModal,
  taskName,
  taskDescription,
  priority,
  project,
  //   dueDate,
  startTime,
  endTime,
  id,
  onDelete,
}) => {
  const navigate = useNavigate();

  const formatDate = (dateTime) => {
    if (!dateTime) return "";

    return new Date(dateTime).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateTime) => {
    if (!dateTime) return "";

    return new Date(dateTime).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete task");
      }
      onDelete?.(id);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-4"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-surface-container-lowest w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-10">
          <div className="mb-8 pr-12">
            <section className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 bg-primary-container/20 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  In Progress
                </span>

                {/* <span className="px-4 py-2 bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase rounded-full">
                  Priority: {priority}
                </span> */}
                <span
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full ${
                    priority?.toLowerCase() === "high"
                      ? "bg-green-100 text-green-700"
                      : priority?.toLowerCase() === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Priority: {priority?.toUpperCase()}
                </span>
              </div>

              {/* <button
                className="p-2 text-gray-500 hover:text-black transition"
                onClick={() => setShowModal(false)}
              >
                X
              </button> */}
            </section>
            <h2 className="font-headline text-3xl font-bold text-on-surface leading-tight">
              {taskName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* <!-- Left Column: Main Info --> */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h4 className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-3">
                  Description
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  {taskDescription}
                </p>
              </section>

              <section>
                <h4 className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-3">
                  Timeline
                </h4>
                <div className="flex items-center gap-3 text-on-surface">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="calendar_today"
                  >
                    calendar_today
                  </span>
                  <div className="mb-2">
                    <p className="text-sm font-bold">
                      Due {formatDate(startTime)}
                    </p>
                    <p className="text-[0.6875rem] text-on-surface-variant">
                      {formatTime(startTime)} - {formatTime(endTime)}
                    </p>
                  </div>
                </div>
              </section>
            </div>
            {/* <!-- Right Column: Meta Info --> */}
            <div className="space-y-8">
              <section>
                <h4 className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-3">
                  Team Members
                </h4>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest overflow-hidden bg-surface-container">
                    <img
                      alt="Team Member"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdcBDYHAP2pkz5B3UJTnF4eGiyRwwoOXlro1LoBhBZGdunLmiO6ytoTVrMJ-Ra0fyVtYXHHGClNUE-vzI0SvTxXNQ2dIWrRLWb8gKwqOC6qqbuqW2dp6PoGgF9Z53CEZv3MniqDQqA4vW-2jTaoPGVFZ5Kb1A0BvKTNWg2XY-SmZ-lMzEp9weml_v8qKr9oW-d2GrIhQBZGCRiobwEocjXqok4zimargDyo1xmiRxtKAqhSWTnqFZu3okpoaeQEH2o5wYTCderlxA"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest overflow-hidden bg-surface-container flex items-center justify-center text-xs font-bold text-primary">
                    JD
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest overflow-hidden bg-surface-container flex items-center justify-center text-xs font-bold text-primary">
                    +2
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <!-- Actions Footer --> */}
          {/* <div className="mt-12 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row gap-4">
            <button className="flex-1 py-3 primary-gradient text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:primary-dim transition-all">
              Mark as Complete
            </button>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-surface-container-low text-on-surface rounded-2xl font-semibold hover:bg-surface-container transition-colors">
                Edit
              </button>
              <button className="px-3 py-3 text-error-dim hover:bg-error-container/10 rounded-2xl transition-colors">
                <span className="material-symbols-outlined" data-icon="delete">
                  delete
                </span>
              </button>
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            <button
              className="w-full bg-surface-container font-headline font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95"
              onClick={() => navigate(`/add-task?action=edit&id=${id}`)}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="edit"
              >
                edit
              </span>
              Edit
            </button>
            <button
              className="w-full bg-error/5 font-headline font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-error hover:bg-error/10 transition-colors active:scale-95"
              onClick={handleDelete}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="delete"
              >
                delete
              </span>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
