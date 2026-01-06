// import { useForm } from "react-hook-form";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { Link } from "react-router";

// const Login = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // later connect with backend (Node / API)
//     console.log("Login submitted");
//     console.log("Email:", e.target.email.value);
//     console.log("Password:", e.target.password.value);
//   };

//   const {register} =useForm()
//   // const onSubmit = data => console.log(data);

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md shadow-2xl bg-base-100">
        
//         {/* Header */}
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center text-primary">
//             Login to DropTify
//           </h2>
//           <p className="text-center text-base-content/70 mb-4">
//             Access your rider or merchant dashboard
//           </p>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Email */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   {...register("email")}
//                   placeholder="Enter your email"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
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
//                   {...register("password")}
//                   placeholder="Enter your password"
//                   className="input input-bordered w-full pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex justify-between items-center text-sm">
//               <label className="cursor-pointer flex items-center gap-2">
//                 <input type="checkbox" className="checkbox checkbox-sm" />
//                 Remember me
//               </label>
//               <a href="#" className="text-primary hover:underline">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Button */}
//             <div className="form-control mt-6">
//               <button className="btn btn-primary w-full">
//                 Login
//               </button>
//             </div>
//           </form>

//           {/* Footer */}
//           <p className="text-center text-sm mt-4">
//             Don’t have an account?{" "}
//             {/* <a href="/register" className="text-primary font-semibold hover:underline">
//               Register
//             </a> */}
//             <div>
//                 <button className="btn btn-sm"><Link to="/registration">Register</Link></button>
//             </div>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;


////new code

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const demoCredentials = {
    email: "demo@droptify.com",
    password: "demo1234"
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login data object:", data);
    
    // Using import.meta.env.MODE for Vite
    if (import.meta.env.MODE === 'development') {
      console.group('🔧 Development Login Data');
      console.log('📧 Email:', data.email);
      console.log('🔑 Password:', data.password);
      console.log('📦 Full object:', JSON.stringify(data, null, 2));
      console.groupEnd();
    }
    
    alert(`Login submitted!\nEmail: ${data.email}\nPassword: ${data.password}`);
  };

  const fillDemoCredentials = () => {
    reset(demoCredentials);
    console.log("Demo credentials filled:", demoCredentials);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    alert("Google login - Firebase integration required");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    alert("Facebook login - Firebase integration required");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        
        {/* Development Mode Banner - Fixed for Vite */}
        {import.meta.env.DEV && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mx-6 mt-4">
            <div className="flex items-center">
              <div className="text-yellow-700">
                <strong>🛠️ Development Mode</strong>
                <p className="text-sm mt-1">
                  Demo: <strong>{demoCredentials.email}</strong> / <strong>{demoCredentials.password}</strong>
                </p>
                <button 
                  onClick={fillDemoCredentials}
                  className="text-xs text-yellow-600 hover:text-yellow-800 underline mt-1"
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
            Login to DropTify
          </h2>
          <p className="text-center text-base-content/70 mb-4">
            Access your rider or merchant dashboard
          </p>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button 
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full gap-2 hover:bg-red-50"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Continue with Google
            </button>
            
            <button 
              type="button"
              onClick={handleFacebookLogin}
              className="btn btn-outline w-full gap-2 hover:bg-blue-50"
            >
              <FaFacebook className="text-blue-600 text-lg" />
              Continue with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="divider text-base-content/50 text-sm">OR LOGIN WITH EMAIL</div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
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

            {/* Password Field with Toggle */}
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
                      value: 4,
                      message: "Password must be at least 4 characters"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="cursor-pointer flex items-center gap-2">
                <input 
                  type="checkbox" 
                  {...register("rememberMe")}
                  className="checkbox checkbox-sm" 
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center text-sm mt-6 pt-4 border-t">
            <p className="text-base-content/70">
              Don't have an account?{" "}
              <Link to="/registration" className="text-primary font-semibold hover:underline">
                Create Account
              </Link>
            </p>
            {/* Development Info */}
            {import.meta.env.DEV && (
              <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                <p className="text-gray-600">
                  <strong>💡 Development Tip:</strong> Check browser console for form data object
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;