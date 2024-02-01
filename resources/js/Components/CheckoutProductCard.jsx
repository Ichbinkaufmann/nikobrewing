export default function CheckoutProductCard() {
    return (
        <div className="w-full h-[150px] align-middle items-center  bg-abitgrey border-b-2  border-gray-300">
            <div class="grid grid-cols-12 gap-1 items-center justify-center max-w-screen">
                <div className="col-span-3 my-1 items-center">
                    <img
                        src="\images\product\package6mix.png"
                        alt="checkout product"
                        className="ms-2 pt-4"
                    />
                </div>
                <div className="col-span-6 text-start my-1 ms-10 items-start block">
                    <h5 className="text-lg mb-3 font-superbold text-black">
                        The Nikko Monkeys - Pale ALe
                    </h5>
                    <h5 className="text-xs mb-3  text-black">330ml</h5>
                    <h5 className="text-xs font-bold text-gray-500">
                        Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
                    </h5>
                </div>
                <div className="col-span-3 my-1 items-center">
                    <div class="grid grid-cols-3 gap-1 items-center text-center justify-center max-w-screen">
                        <div className="col-span-2">
                            <h5 className="text-lg font-superbold text-black">
                                ¥690
                            </h5>
                        </div>
                        <div className="col-span-1">
                            <button
                                type="button"
                                className=" rounded-full border-2 hover:bg-gray-200 hover:shadow-xl border-black me-4"
                            >
                                <img
                                    src="\images\bin.svg"
                                    className="p-1"
                                    alt="delete"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
