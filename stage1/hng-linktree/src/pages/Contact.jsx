import React from "react";

const Contact = () => {
  return (
    <div className="w-5/6 my-16 md:w-1/2 mx-auto">
      <h1 className="text-3xl mb-4">Contact Me</h1>
      <p className=" mb-12">
        Hi there, contact me to ask me about anything you have in mind
      </p>
      <div>
        <form action="" className="flex flex-col">
          <div className="md:flex gap-6">
            <div className="flex flex-col md:w-1/2">
              <label className="mb-2" htmlFor="">
                First Name
              </label>
              <input
                className="border-[#D0D5DD] border rounded-lg px-3 py-2 mb-6"
                type="text"
                name="firstName"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex flex-col md:w-1/2">
              <label className="mb-2" htmlFor="">
                Last Name
              </label>
              <input
                className="border-[#D0D5DD] border rounded-lg px-3 py-2 mb-6"
                type="text"
                name="lastName"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <label className="mb-2" htmlFor="">
            Email
          </label>
          <input
            className="border-[#D0D5DD] border rounded-lg px-3 py-2 mb-6"
            type="email"
            name="email"
            id="email"
            placeholder="yourname@email.com"
          />

          <label className="mb-2" htmlFor="">
            Message
          </label>
          <textarea
            className="border-[#D0D5DD] border rounded-lg px-3 py-2 mb-6"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>

          <div className="flex items-center gap-3 mb-8">
            <input type="checkbox" name="" id="" className="rounded-md" />
            <label htmlFor="">
              You agree to providing your name to Treasure-Praise who may
              contact you
            </label>
          </div>

          <button
            className="bg-[#1570EF] font-bold text-white rounded-lg py-3"
            type="submit"
            id="btn__submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
