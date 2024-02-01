import { useState, useRef } from "react";
import { Link, Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

export default function Topbar({ name }) {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("visibly-hidden");
        } else {
            dropdownTarget.current.classList.add("visibly-hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Head>
            <div className="flex justify-between items-center cursor-pointer">
                <Link href={route("prototype.beer")}>
                    <img
                        src="/images/NikoBrewingLogo.svg"
                        alt=""
                        className="max-w-[200px]"
                    />
                </Link>
                <a className="text-xs" href="#">
                    About Us
                </a>
                <Link href={route("prototype.beer")}>
                    <h5 className="text-xs font-bold">Beer</h5>
                </Link>
                <a className="text-xs" href="#">
                    FAQs
                </a>
                <a className="text-xs" href="#">
                    Contact Us
                </a>
                <TextInput
                    type="text"
                    name="search"
                    id="searchbar"
                    className="border-black focus:border-black max-h-7 top-search"
                    placeholder="Search"
                />
                <div className="flex items-center gap-4">
                    {/* Profile */}
                    <div className="collapsible-dropdown flex flex-col gap-2 relative">
                        <button
                            onClick={triggerDropdown}
                            type="submit"
                            className="flex text-xs justify-center items-center w-full text-black bg-white"
                        >
                            <img
                                src="/images/user.svg"
                                alt=""
                                className="mr-2"
                            />{" "}
                            Welcome, User
                        </button>
                        <div
                            className="bg-gray-50 rounded-2xl shadow-md text-black  font-medium flex flex-col gap-1 absolute z-[999] right-[-30px] top-[30px] visibly-hidden min-w-[180px] overflow-hidden"
                            ref={dropdownTarget}
                        >
                            <a
                                href="#!"
                                className="transition-all text-xs hover:bg-sky-100 p-4"
                            >
                                Profile
                            </a>
                            <a
                                href="#!"
                                className="transition-all text-xs hover:bg-sky-100 p-4"
                            >
                                Settings
                            </a>
                            <Link
                                href={route("logout")}
                                method="post"
                                // as="button"
                                className="transition-all text-xs hover:bg-sky-100 p-4"
                            >
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
                <Link>
                    <button
                        type="submit"
                        className="flex text-xs justify-center items-center w-full text-black bg-white"
                    >
                        <img src="/images/cart.svg" alt="" className="mr-2" />{" "}
                        Cart
                    </button>
                </Link>
                <style jsx="true">
                    {`
                        .top-search {
                            background-image: url("/images/search.svg");
                            background-repeat: no-repeat;
                            background-position-y: center;
                            background-position-x: 10px;
                            border: solid black 1px;
                        }

                        .visibly-hidden {
                            display: none;
                        }
                    `}
                </style>
            </div>
        </>
    );
}
