import { Link } from 'react-router';
import RegisterForm from '../../components/forms/register.form'

const Register = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-white">
      <div className="min-h-[520px] w-[95%] sm:w-[420px] border border-gray-200 p-8 rounded-xl bg-gray-50 shadow-lg mt-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Register</h1>

        {/* Register Form */}
        <RegisterForm/>

                {/* Link To SignUp */}
        <div className="py-4">
          <p className="text-center">
            Don&apos;t have an account ? <Link to={'/login'}>
            <span className="text-violet-700 cursor-pointer">Sign Up</span>
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
};

export default Register;
