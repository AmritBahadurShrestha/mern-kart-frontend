
import LoginForm from '../../components/forms/login.form'

const Login = () => {
  return (
    <main className="h-full w-full flex justify-center items-center bg-white">
      <div className="min-h-[420px] w-[95%] sm:w-[420px] border border-gray-200 p-8 rounded-xl bg-gray-50 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Login</h1>

        {/* LogIn Form */}
          <LoginForm/>

        {/* Link To SignUp */}
        <div className="py-4">
          <p className="text-center">
            Don&apos;t have an account ? <span className="text-violet-700 cursor-pointer">Sign Up</span>
          </p>
        </div>

      </div>
    </main>
  );
};

export default Login;
