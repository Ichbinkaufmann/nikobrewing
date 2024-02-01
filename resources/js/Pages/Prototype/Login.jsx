import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { Link, Head } from "@inertiajs/react";

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
                    >
                        Niko Brewing E-Commerce
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-200 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div class="grid h-16 place-items-center">
                                <div class="p-4 border">
                                    <img
                                        src="/images/NikoBrewingLogo.svg"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Log In to your account
                            </h1>
                            <form className="space-y-4 md:space-y-4" action="#">
                                <div>
                                    <InputLabel
                                        forInpurt="email"
                                        value="Email"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInpurt="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                    {/* <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-white border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                /> */}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-100 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                className="text-gray-800 dark:text-gray-700"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <Link href={route("prototype.beer")}>
                                    <button
                                        type="submit"
                                        class="w-full text-black mt-2 bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Sign in
                                    </button>
                                </Link>
                                {/* <Button type="button" variant="primary">
                                <span>Start Shopping</span>
                            </Button> */}
                                <div className="flex items-center justify-center">
                                    <p>Don't have an account yet?</p>
                                </div>
                                <Link href={route("prototype.register")}>
                                    <button
                                        type="submit"
                                        class="w-full text-white mt-4 bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Create a new Account
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
