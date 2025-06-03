import { useState } from "react";

const ContactMe = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => setShowContacts(!showContacts)}
        className="bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800  text-white hover:text-gray-300 font-semibold py-2 px-4 rounded-xl transition-all duration-300"
      >
        Contact Me
      </button>

      {showContacts && (
        <div className="mt-4 space-y-2 ">
          <a
            href="mailto:kbarjun12@gmail.com"
            className="block text-blue-500 hover:underline"
          >
            📧 kbarjun12@gmail.com
          </a>
          <a
            href="tel:+91 9562080435"
            className="block text-blue-500 hover:underline"
          >
            📞 +91 9562080435
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
