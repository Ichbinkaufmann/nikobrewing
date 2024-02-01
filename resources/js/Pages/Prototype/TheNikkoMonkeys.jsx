import Authenticated from "@/Layouts/Authenticated/Index";
import ProductCard from "@/Components/ProductCard";
import { Link, Head } from "@inertiajs/react";
import { useState, useRef } from "react";

export default function TheNikkoMonkeys() {
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
                <title>The Nikko Monkeys</title>
            </Head>
            <Authenticated>
                <div class="grid grid-cols-12 gap-4 max-w-screen">
                    <div className="col-span-6  items-start justify-start flex">
                        <h5 className="mb-2 text-xs text-gray-900 dark:text-black">
                            Nikko Brewing&nbsp;&nbsp;
                        </h5>
                        <Link href={route("prototype.beer")}>
                            <h5 className="mb-2 text-xs text-gray-900 dark:text-black">
                                &#9002;&nbsp;&nbsp; Beer &nbsp;&nbsp;
                            </h5>
                        </Link>
                        <Link href={route("prototype.the-nikko-monkeys")}>
                            <h5 className="mb-2 text-xs font-bold text-gray-900 dark:text-black">
                                &#9002;&nbsp;&nbsp; The Nikko Monkeys
                            </h5>
                        </Link>
                    </div>
                    <div className="col-span-6 flex align-middle items-end justify-end me-2">
                        <button
                            type="button"
                            class=" text-black bg-gray-50 hover:bg-gray-100 w-auto h-[45px] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mt-2"
                            onClick={triggerDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mx-auto mt-[-5px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                                />
                            </svg>
                        </button>
                        <div
                            className="bg-white rounded-2xl text-black border border-gray-200 font-medium flex flex-col gap-1 absolute z-[999] right-[300px] top-[180px] visibly-hidden min-w-[180px] overflow-hidden"
                            ref={dropdownTarget}
                        >
                            <Link
                                href={route("prototype.beer")}
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                All
                            </Link>
                            <Link
                                href={route("prototype.the-nikko-monkeys")}
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                The Nikko Monkeys
                            </Link>
                            <Link
                                href={route("prototype.nikko-belgian-beer")}
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Nikko Belgian Beer
                            </Link>
                            <Link
                                href={route("prototype.special-packages")}
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Special Packages
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-1 items-center justify-center max-w-screen">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Authenticated>
        </>
    );
}
