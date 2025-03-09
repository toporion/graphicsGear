import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-[800px] h-[500px] flex rounded-lg overflow-hidden shadow-lg">
        {/* Left Side */}
        <div className="w-[40%] bg-orange-500 flex flex-col items-center justify-center p-6 relative">
          {/* Profile Image */}
          <div className="relative w-32 h-32 bg-white rounded-full overflow-hidden border-4 border-white">
            {preview ? (
              <img src={preview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <img src="https://via.placeholder.com/150" alt="Default" className="w-full h-full object-cover" />
            )}
          </div>

          {/* Headline */}
          <h2 className="text-4xl font-bold text-white mt-4">Join Us Today</h2>

          {/* Subtext */}
          <p className="text-white mt-2 text-center">Create an account and explore the best opportunities.</p>
        </div>

        {/* Right Side - Form */}
        <div className="w-[60%] bg-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" {...register("name")} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" {...register("email")} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input type="password" {...register("password")} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-gray-700">Profile Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
