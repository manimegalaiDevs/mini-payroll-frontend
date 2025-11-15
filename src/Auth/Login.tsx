import React, { useState } from "react";
import { CircleUser, Lock, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./queries";
import { userStore } from "./Store";
import { Loader2 } from "lucide-react";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const loginMutation = useLogin();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!userId.trim() || !password.trim()) {
            setError("User ID and Password are required");
            return;
        }

        loginMutation.mutate(
            { login_user_id: userId, password },
            {
                onSuccess: (data) => {
                    console.log("Login successful:", data);

                    if (data.loggedIn) {
                        console.log("Does control come here");
                        userStore.value = data?.user || null; // store user globally
                        window.location.reload();
                    } else {
                        setError("Invalid credentials");
                    }
                },
                onError: (err: any) => {
                    const msg =
                        err?.response?.data?.message ||
                        "Unable to login. Please try again.";
                    setError(msg);
                },
            }
        );
    };

    // For TanStack Query v5:
    const isLoading = loginMutation.status === "pending";

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div
                style={{ backgroundColor: "#EFF6FF" }}
                className="w-dvw md:w-[550px] min-h-[500px] p-16 space-y-8 bg-white rounded-xl shadow-2xl transition-all duration-300 border border-gray-100"
            >
                <h1 className="text-2xl font-semibold text-gray-900 text-left">
                    Login
                </h1>

                <form autoComplete="on" onSubmit={handleLogin} className="space-y-8 mt-12">
                    {/* User ID */}
                    <div>
                        <label className="text-lg font-medium text-gray-700 block mb-2 flex items-center space-x-2">
                            <CircleUser className="w-5 h-5" />
                            <span className="text-xl">User ID</span>
                        </label>
                        <input
                            name="username"
                            autoComplete="username"
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            placeholder="Enter User ID here..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-lg"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-lg font-medium text-gray-700 block mb-2 flex items-center space-x-2">
                            <Lock className="w-5 h-5 text-gray-500" />
                            <span className="text-xl">Password</span>
                        </label>
                        <input
                            autoComplete="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password here..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-lg"
                        />
                        <div className="text-right mt-2">
                            <button
                                type="button"
                                className="text-sm font-medium text-[#154579] flex items-center ml-auto transition-colors duration-150"
                            >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Reset Password
                            </button>
                        </div>
                    </div>

                    {/* Error message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Submit button */}
                    <button
                        type="submit"
                        style={{ backgroundColor: "#154579" }}
                        className="w-full flex justify-center items-center py-3
                         px-4 rounded-lg shadow-md text-xl font-medium
                         hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-indigo-500 transition duration-150 ease-in-out 
                          transform hover:scale-[1.005] text-white"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Loader2 className="w-5 h-5 mr-2 animate-spin text-white" />
                        )}
                        {!isLoading && "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
