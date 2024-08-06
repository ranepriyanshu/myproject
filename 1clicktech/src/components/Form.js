import React, { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10 "
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="First Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="mailId">
              Mail ID
            </label>
            <input
              type="email"
              id="mailId"
              name="mailId"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Mail ID"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="college">
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="College"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="branch">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Branch"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="graduationYear">
              Graduation Year
            </label>
            <input
              type="text"
              id="graduationYear"
              name="graduationYear"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Graduation Year"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="experience">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Experience"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="currentCtc">
              Current CTC
            </label>
            <input
              type="text"
              id="currentCtc"
              name="currentCtc"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Current CTC"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="expectedCtc">
              Expected CTC
            </label>
            <input
              type="text"
              id="expectedCtc"
              name="expectedCtc"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Expected CTC"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700" htmlFor="portfolioLink">
              Portfolio Link
            </label>
            <input
              type="text"
              id="portfolioLink"
              name="portfolioLink"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Portfolio Link"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700" htmlFor="resume">
              Resume Upload
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-custom-green mt-10 py-3 px-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default Form;
