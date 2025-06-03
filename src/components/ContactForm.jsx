import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zsb938g",
      "template_ivw5vig",
      form.current,
      "VkpiR85bBoibshk4d"
    ).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Something went wrong.");
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-6 space-y-4 bg-gradient-to-b from-transparent via-gray-500 to-transparent rounded-lg">
      <h2 className="text-2xl font-bold text-white text-center">Contact Me</h2>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 rounded bg-gradient-to-r bg-neutral-600 via-neutral-500   text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="4"
        className="w-full px-4 py-2 rounded bg-neutral-600 via-neutral-500  text-white"
      />
      <button
        type="submit"
        className="w-80 rounded-2xl bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800  text-white py-2 px-4  transition font-semibold"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
