import React from 'react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const VolunteerModal = ({ isOpen, onClose, onSuccess }: VolunteerModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer Form submitted');
    onSuccess();
  };

  const inputClasses =
    "w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors";
  const labelClasses = "block text-sm font-medium text-zinc-300 mb-1";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-zinc-800 rounded-lg shadow-2xl shadow-red-900/20 w-full max-w-lg border border-zinc-700 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-800/80 backdrop-blur-sm z-10 p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close volunteer form"
          >
            ✕
          </button>
          <h2
            id="modal-title"
            className="font-display text-2xl font-bold text-red-400 text-center"
          >
            Apply to be a Volunteer
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-6 pt-0">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name *
            </label>
            <input type="text" id="name" name="name" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="college" className={labelClasses}>
              College/Organization *
            </label>
            <input type="text" id="college" name="college" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="linkedin" className={labelClasses}>
              LinkedIn Profile URL *
            </label>
            <input type="url" id="linkedin" name="linkedin" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number *
            </label>
            <input type="tel" id="phone" name="phone" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address *
            </label>
            <input type="email" id="email" name="email" required className={inputClasses} />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Become a Volunteer
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerModal;
