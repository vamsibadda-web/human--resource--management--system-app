 
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";


import { users } from "../Data/Users";
 
type LoginForm = {
  email: string;
  password:string;
};
 
function LoginScreen() {
  const {register,handleSubmit,formState:{errors}} = useForm<LoginForm>()
  const navigate = useNavigate()
  const onSubmit = (data : LoginForm) => {
    const foundUser = users.find(
      (user) => user.Email === data.email &&
      user.password === data.password
    )
    if(foundUser){
      localStorage.setItem("user", JSON.stringify(foundUser))
      navigate("/")
      alert("Successful Submitted")
    }
    else {
      alert("Invalid Credentials")
    }
  }
 
 
  return (
    <div className="flex items-center justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm p-8 bg-white shadow-xl rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">
          Login
        </h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Email
          </label>
 
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "name is required",
            })}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400" />
            {errors.email && (
              <p>{errors.email.message}</p>
            )}
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            password
          </label>
 
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "name is required",
            })}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
            {errors.password && (
              <p>{errors.password.message}</p>
            )}
        </div>
 
        <button
          type="submit"
          className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700" >
          Login
        </button>
      </form>
    </div>
  );
}
 
export default LoginScreen;
 