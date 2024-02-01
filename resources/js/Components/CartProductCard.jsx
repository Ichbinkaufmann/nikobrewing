export default function CartProductCard() {
    function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        );
        const target = document.getElementById("quantity");
        let value = target.value;
        if (value > 1) {
            value--;
        }
        target.value = value;
    }

    function increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        );
        const target = document.getElementById("quantity");
        let value = target.value;
        if (value < 10) {
            value++;
        }
        target.value = value;
    }

    const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
    );

    decrementButtons.forEach((btn) => {
        btn.addEventListener("click", decrement);
    });

    incrementButtons.forEach((btn) => {
        btn.addEventListener("click", increment);
    });
    return (
        <div className="w-full h-[200px] align-middle items-center  bg-abitgrey border-b-2  border-gray-300">
            <div class="grid grid-cols-12 gap-1 items-center justify-center max-w-screen">
                <div className="col-span-3 flex items-center">
                    <input
                        id="cart-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 ms-2 me-1 mt-[-20px] text-black bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-50 dark:border-black"
                    />
                    <img
                        src="\images\product\package6mix.png"
                        alt="checkout product"
                        className="ms-2"
                    />
                </div>
                <div className="col-span-6 text-start my-8 ms-16 items-start block">
                    <h5 className="text-lg mb-3 font-superbold text-black">
                        The Nikko Monkeys - Pale Ale
                    </h5>
                    <h5 className="text-xs mb-3  text-black">330ml</h5>

                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <h5 className="text-xs me-5 font-bold text-gray-500">
                            Quantity&nbsp;
                        </h5>
                        <button
                            data-action="decrement"
                            class=" bg-gray-50 text-black text-center items-center justify-center align-middle hover:text-gray-700 hover:bg-gray-100 h-[21px] w-[21px] rounded-l cursor-pointer outline-none"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            class="outline-none text-center h-[21px] w-[70px] bg-white font-bold text-xs focus:text-black outline-none"
                            name="quantity"
                            id="quantity"
                            defaultValue="1"
                        />
                        <button
                            data-action="increment"
                            class="bg-gray-50 text-black items-center hover:text-gray-700 hover:bg-gray-100 h-[21px] w-[21px] rounded-r cursor-pointer"
                        >
                            +
                        </button>
                    </div>
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
