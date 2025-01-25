import { useState } from "react";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

function Login() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [view,setView] = useState(true)

    const viewPassword = ()=>{
      setView(!view)
    }

    const handleValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitValue = async (e) => {
        e.preventDefault();

        // Basic validation: Check if the required fields are not empty
        if (!state.email || !state.password) {
            setError("Email and password are required.");
            return;
        }

        setLoading(true); // Set loading state to true

        try {
            const getData = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(state),  // Ensure the request body is valid
            });

            const result = await getData.json();
            console.log(result); // Log the server's response

            if (result.message === "login successfull") {
                setData(result);
                setError(null);
            } else {
                setError(result.message || "Login failed");
            }
        } catch (error) {
            setError("Server error");
            console.error(error); // Log error for debugging
        } finally {
            setLoading(false); // Set loading to false after request completes
        }
    };

    return (
        <>
            <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
                <a href="#">
                    <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                            </svg>
                        </div>
                       Student Login
                    </div>
                </a>
                <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                    <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
                    <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div className="flex flex-col p-6">
                            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                            <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <form>
                                <div>
                                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div className="flex justify-between">
                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email</label>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleValue}
                                            autoComplete="off"
                                            className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div className="flex justify-between">
                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                                        </div>
                                        <div className="flex items-center">
                                        <input
                                                type={view?"password":"text"}~
                                                name="password"
                                                onChange={handleValue}
                                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                            />
                                            <span onClick={viewPassword}>{view ? <LuEyeClosed/>:<LuEye/>}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" name="remember" className="outline-none focus:outline focus:outline-sky-300" />
                                        <span className="text-xs">Remember me</span>
                                    </label>
                                    <a className="tex-sm font-medium text-foreground underline" href="/forgot-password">Forgot password?</a>
                                </div>
                                <div className="mt-4 flex items-center justify-end gap-x-2">
                                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/register">Register</a>
                                    <button
                                        onClick={submitValue}
                                        className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                                        type="submit"
                                        disabled={loading} // Disable button while loading
                                    >
                                        {loading ? "Logging in..." : "Log in"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {data && <div><h1>Login Successful</h1></div>}
            {error && <div className="error">{error}</div>} {/* Show error if any */}
        </>
    );
}

export default Login;
