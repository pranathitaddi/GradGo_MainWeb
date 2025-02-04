export default function AboutUs() {
  return (
    <div className="min-h-screen p-8">
      <div className=" min-h-screen flex flex-col items-center justify-center p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gray-600 text-white text-xl font-semibold px-4 py-1 rounded-full inline-block mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl font-bold text-white">
            Let’s talk about your project
          </h1>
          <p className="text-gray-300 mt-2">
            Drop us a line through the form below and we’ll get back to you
          </p>
        </div>

        {/* Form */}
        <form className="w-full max-w-2xl bg-transparent space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Job Role and Company Domain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Job Role"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company Domain"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Please tell us a bit about your goals, What are you hoping to achieve with GradGo"
            rows="4"
            className="w-full px-4 py-3 rounded-2xl bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
