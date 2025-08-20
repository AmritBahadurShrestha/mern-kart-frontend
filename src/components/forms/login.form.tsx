import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { LoginSchema } from "../../schema/auth.schema";
import type { ILoginData } from "../../types/auth.types";
import Input from "../common/inputs/input";
import { login } from "../../api/auth.api";
import { useState } from "react";

const LoginForm = () => {
  // State

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
    mode: "all",
  });

  const onSubmit = async (data: ILoginData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      console.log(data);
      await login(data);
    } catch (error: any) {
      console.log(error);
      setError(error?.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mt-8 flex flex-col gap-6">
            {/* Email Field */}
            <Input
              label="Email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />

            {/* Password Field */}
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="••••••••••••••••••••••"
              required
            />

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            {/* Success Message */}
            {success && (
              <p className="text-green-500 text-sm font-medium">
                Login successful 🎉
              </p>
            )}

            {/* Sign In Button */}
            <div className="w-full mt-2">
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-blue-600 py-3 rounded-md text-white font-semibold text-lg hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-md ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500"
                }`}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
