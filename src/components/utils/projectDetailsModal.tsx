// import "./projectDetailsModal.css";

const projectDetailsModal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 py-10">
        <div className="bg-white rounded-lg shadow-lg p-6 relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default projectDetailsModal;
