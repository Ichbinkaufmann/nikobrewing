import Proccess from "@/Layouts/Proccess/Index";
import { Link, Head } from "@inertiajs/react";
import CheckoutProductCard from "@/Components/CheckoutProductCard";

export default function Checkout() {
    return (
        <>
            <Proccess>
                <Head>
                    <title>Order Confirmation</title>
                </Head>
                <div class="grid grid-cols-12 max-h-screen max-w-full overflow-y-hidden  border-t-2 border-t-gray-100">
                    <div className="col-span-8 bg-abitgrey mx-0 h-[100vh] items-center">
                        <div className="text-start h-[100px] ms-5 border-b-2 border-gray-300 mt-0">
                            <h5 className="mb-5 mt-8 font-superbold  text-3xl text-black">
                                Checkout
                            </h5>
                        </div>
                        <div class="grid grid-rows-12 grid-flow-col">
                            <CheckoutProductCard />
                            <CheckoutProductCard />
                        </div>
                    </div>
                    <div className="col-span-4 items-start block align-top">
                        <div className="text-start h-[100px] ms-5 border-b-2 border-gray-300 mt-0">
                            <h5 className="mb-5 mt-8 font-superbold  text-3xl text-black">
                                Total
                            </h5>
                        </div>
                        <div className="text-start h-[60px] mb-5 ms-5">
                            <h5 className=" py-5  font-superbold   text-xl text-black">
                                Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                ¥690
                            </h5>
                        </div>
                        <div className="text-start h-[65px] block ms-5 border-b-2 border-gray-300 mt-0">
                            <h5 className=" font-superbold  text-xl text-black">
                                Shipping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                ¥0
                            </h5>
                        </div>
                        <div className="text-start h-[60px] mb-5 ms-5">
                            <h5 className=" py-5  font-superbold   text-xl text-black">
                                Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                ¥690
                            </h5>
                        </div>
                        <div className="text-start h-[65px] flex ms-5 border-b-2 border-gray-500 mt-0">
                            <h5 className="text-base text-gray-500">
                                DISCOUNT
                                CODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-7 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </div>
                        <div className="w-max-screen item center text-center justify-center align-middle border-t-2 border-t-gray-100">
                            <Link href={route("prototype.payment")}>
                                <button
                                    type="submit"
                                    className="flex text-xs mt-10 justify-center h-8 max-w-[300px] mx-auto items-center w-full rounded-sm text-black border border-black bg-white"
                                >
                                    <h5 className="text-base font-bold">
                                        PAYMENT
                                    </h5>
                                </button>
                            </Link>
                            <Link href={route("prototype.beer")}>
                                <button
                                    type="submit"
                                    className="flex text-xs mt-10 justify-center items-center w-full text-black bg-white"
                                >
                                    <img
                                        src="/images/left_arrow.svg"
                                        alt=""
                                        className="mr-2"
                                    />{" "}
                                    &nbsp;&nbsp;&nbsp;
                                    <h5 className=" underline underline-offset-2 text-base font-bold">
                                        Back to Cart
                                    </h5>
                                </button>
                            </Link>
                            <Link href={route("prototype.beer")}>
                                <button
                                    type="submit"
                                    className="flex text-xs mt-5 justify-center items-center w-full text-black bg-white"
                                >
                                    <img
                                        src="/images/left_arrow.svg"
                                        alt=""
                                        className="mr-2"
                                    />{" "}
                                    &nbsp;&nbsp;&nbsp;
                                    <h5 className=" underline underline-offset-2 text-base font-bold">
                                        Continue Shopping
                                    </h5>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Proccess>
        </>
    );
}
