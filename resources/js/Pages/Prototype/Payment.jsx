import Proccess from "@/Layouts/Proccess/Index";
import { Link, Head } from "@inertiajs/react";

export default function Payment() {
    return (
        <>
            <Proccess>
                <Head>
                    <title>Payment Completed</title>
                </Head>
                <div className="w-max-screen item center text-center justify-center align-middle border-t-2 border-t-gray-100">
                    <h5 className="mb-2 mt-1 mx-auto font-superbold font-black text-3xl text-black mt-36">
                        Thank You!
                    </h5>
                    <h5 className="mb-2 mt-1 mx-auto font-superbold font-black text-3xl text-black">
                        Your Payment Has Been Processed
                    </h5>
                    <img
                        src="\images\checked.svg"
                        className="mx-auto w-[217px] h-[217px] mt-10"
                        alt="Checked"
                    />
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
                            <h5 className=" underline underline-offset-2 text-xs font-bold">
                                Continue Shopping
                            </h5>
                        </button>
                    </Link>
                </div>
            </Proccess>
        </>
    );
}
