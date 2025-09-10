"use client";

import SwiperGallery from "@/components/swiperGallary";
import { Key, User, Loader2, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
     const router = useRouter()
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data.success) {
                toast.success(" Login successful");
                // TODO: redirect after login, e.g.:
                router.push("/dashboard-home")
            } else {
                toast.error(` ${data.message}`);
            }
        } catch {
            toast.error("⚠️ Server error, try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="bg-gray-200 justify-between flex w-full h-screen">
                <section className="md:w-1/2 h-full overflow-hidden rounded-r-[10rem] ">
                    <SwiperGallery />
                </section>
                <section className="md:w-1/2 items-center justify-center flex">
                    <div className="flex flex-col gap-8 md:w-lg">
                        <h1 className="text-3xl font-semibold">Welcome Back!</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2 font-medium">
                                <label>Email</label>
                                <div className="border shadow-gray-700 bg-white flex gap-2 items-center px-3 rounded-full">
                                    <User />
                                    <input
                                        name="Email"
                                        placeholder="Enter the Admin Email"
                                        className="w-full px-4 py-3 h-full border-0 outline-0"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 font-medium">
                                <label>Password</label>
                                <div className="border shadow-gray-700 bg-white flex gap-2 px-3 items-center rounded-full">
                                    <Key />
                                    <input
                                        name="Password"
                                        placeholder="Enter the Admin Password"
                                        className="w-full px-4 py-3 h-full border-0 outline-0"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-full mt-6 py-3 w-full text-white font-medium bg-accent-foreground flex items-center justify-center"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : "Login"}
                            </button>
                        </form>
                    </div>
                </section>
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}
