import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div id="contact">
      <div className="mt-20 p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white underline decoration-secondary decoration-8 underline-offset-8">
          Contact Me:
        </h1>
        <p className="mx-auto max-w-prose	py-4">
          Feel free to reach out — I'm always open to collaboration, questions,
          or just a tech chat!
        </p>

        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/prathamesh-gokulkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 hover:bg-base-300 transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/prathamgokulkar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 hover:bg-base-300 transition"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>

          <a
            href="https://github.com/prathamgokulkar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 hover:bg-base-300 transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:prathamgokulkar@gmail.com"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 hover:bg-base-300 transition"
          >
            <MdEmail />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
