// import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

// const Registration = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Later connect with backend (Node / MongoDB)
//     console.log("Registration submitted");
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-lg shadow-2xl bg-base-100">
//         <div className="card-body">

//           {/* Header */}
//           <h2 className="text-3xl font-bold text-center text-primary">
//             Create an Account
//           </h2>
//           <p className="text-center text-base-content/70 mb-6">
//             Join DropTify as a Rider or Merchant
//           </p>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Full Name */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Full Name</span>
//               </label>
//               <div className="relative">
//                 <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Phone Number</span>
//               </label>
//               <div className="relative">
//                 <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="tel"
//                   placeholder="01XXXXXXXXX"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Role */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Register As</span>
//               </label>
//               <select className="select select-bordered w-full" required>
//                 <option value="">Select role</option>
//                 <option value="merchant">Merchant</option>
//                 <option value="rider">Rider</option>
//                 <option value="customer">Customer</option>
//               </select>
//             </div>

//             {/* Password */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Create a password"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Confirm Password</span>
//               </label>
//               <div className="relative">
//                 <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Confirm your password"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="form-control">
//               <label className="cursor-pointer flex items-center gap-2">
//                 <input type="checkbox" className="checkbox checkbox-sm" required />
//                 <span className="text-sm">
//                   I agree to the{" "}
//                   <span className="text-primary font-semibold">Terms & Conditions</span>
//                 </span>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <div className="form-control mt-6">
//               <button className="btn btn-primary w-full">
//                 Register
//               </button>
//             </div>
//           </form>

//           {/* Footer */}
//           <p className="text-center text-sm mt-4">
//             Already have an account?{" "}
//             <a href="/login" className="text-primary font-semibold hover:underline">
//               Login
//             </a>
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Registration;



// new code ......


import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Demo credentials for development
  const demoCredentials = {
    fullName: "Ahsan Reaz",
    email: "demo@droptify.com",
    phone: "01712345678",
    role: "merchant",
    password: "demo1234",
    confirmPassword: "demo1234"
  };

  // Initialize react-hook-form
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  
  // Watch password for confirmation validation
  const password = watch("password");

  // Handle form submission - data comes as object
  const onSubmit = (data) => {
    console.log("Registration data object:", data);
    
    // In development mode, log to console with styling
    if (import.meta.env.DEV) {
      console.group('🔧 Development Registration Data');
      console.log('👤 Name:', data.fullName);
      console.log('📧 Email:', data.email);
      console.log('📱 Phone:', data.phone);
      console.log('🎭 Role:', data.role);
      console.log('🔑 Password:', data.password);
      console.log('📦 Full object:', JSON.stringify(data, null, 2));
      console.groupEnd();
    }
    
    // For now, just show alert with the data
    alert(`Registration submitted!\nName: ${data.fullName}\nEmail: ${data.email}\nRole: ${data.role}`);
    
    // TODO: Connect to backend API
  };

  // Fill form with demo credentials
  const fillDemoCredentials = () => {
    reset(demoCredentials);
    console.log("Demo credentials filled:", demoCredentials);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Social registration handlers
  const handleGoogleRegistration = () => {
    console.log("Google registration clicked");
    alert("Google registration - Firebase integration required");
  };

  const handleFacebookRegistration = () => {
    console.log("Facebook registration clicked");
    alert("Facebook registration - Firebase integration required");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        
        {/* Development Mode Banner */}
        {import.meta.env.DEV && (
          <div className="bg-blue-100 border-l-4 border-blue-500 p-3 mx-6 mt-4 rounded">
            <div className="flex items-center">
              <div className="text-blue-700">
                <strong>🛠️ Development Mode</strong>
                <p className="text-sm mt-1">
                  Demo credentials available
                </p>
                <button 
                  onClick={fillDemoCredentials}
                  className="text-xs text-blue-600 hover:text-blue-800 underline mt-1"
                >
                  Click to fill demo credentials
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary">
            Create an Account
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Join DropTify as a Rider or Merchant
          </p>

          {/* Social Registration Buttons */}
          <div className="space-y-3 mb-6">
            <button 
              type="button"
              onClick={handleGoogleRegistration}
              className="btn btn-outline w-full gap-2 hover:bg-red-50"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Sign up with Google
            </button>
            
            <button 
              type="button"
              onClick={handleFacebookRegistration}
              className="btn btn-outline w-full gap-2 hover:bg-blue-50"
            >
              <FaFacebook className="text-blue-600 text-lg" />
              Sign up with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="divider text-base-content/50 text-sm">OR REGISTER WITH EMAIL</div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  {...register("fullName", { 
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    }
                  })}
                  placeholder={demoCredentials.fullName}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.fullName && (
                <span className="label-text-alt text-red-500 mt-1">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                  placeholder={demoCredentials.email}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.email && (
                <span className="label-text-alt text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  {...register("phone", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^01[3-9]\d{8}$/,
                      message: "Please enter a valid Bangladeshi phone number (01XXXXXXXXX)"
                    }
                  })}
                  placeholder={demoCredentials.phone}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.phone && (
                <span className="label-text-alt text-red-500 mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Role */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Register As</span>
              </label>
              <select 
                {...register("role", { required: "Please select a role" })}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>Select role</option>
                <option value="merchant">Merchant</option>
                <option value="rider">Rider</option>
                <option value="customer">Customer</option>
              </select>
              {errors.role && (
                <span className="label-text-alt text-red-500 mt-1">
                  {errors.role.message}
                </span>
              )}
            </div>

            {/* Password with visibility toggle */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                  placeholder={demoCredentials.password}
                  className="input input-bordered w-full pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="flex justify-between mt-1">
                {errors.password && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {import.meta.env.DEV && (
                  <span className="label-text-alt text-gray-500">
                    Demo: {demoCredentials.password}
                  </span>
                )}
              </div>
            </div>

            {/* Confirm Password with visibility toggle */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: value => value === password || "Passwords do not match"
                  })}
                  placeholder={demoCredentials.confirmPassword}
                  className="input input-bordered w-full pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="label-text-alt text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="form-control">
              <label className="cursor-pointer flex items-start gap-3">
                <input 
                  type="checkbox" 
                  {...register("terms", { 
                    required: "You must accept the terms and conditions"
                  })}
                  className="checkbox checkbox-sm mt-1" 
                />
                <span className="text-sm text-left">
                  I agree to the{" "}
                  <a href="/terms" className="text-primary font-semibold hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-primary font-semibold hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.terms && (
                <span className="label-text-alt text-red-500 mt-1">
                  {errors.terms.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Create Account
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center text-sm mt-6 pt-4 border-t">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign In
              </Link>
            </p>
            
            {/* Development Info */}
            {import.meta.env.DEV && (
              <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                <p className="text-gray-600">
                  <strong>💡 Development Tip:</strong> Check browser console for form data object
                </p>
                <div className="mt-1 text-gray-500 text-[10px]">
                  Demo: {demoCredentials.email} / {demoCredentials.password}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;