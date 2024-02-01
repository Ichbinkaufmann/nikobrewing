import Proccess from "@/Layouts/Proccess/Index";
import ProductCard from "@/Components/ProductCard";
import { Link, Head } from "@inertiajs/react";

export default function Show() {
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
        <>
            <Head>
                <title>Nikko Belgian Beer été - Sansho Saison</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Proccess>
                <div className="col-span-6 mb-2 items-start justify-start flex">
                    <h5 className="mb-2 text-xs text-gray-900 dark:text-black">
                        Nikko Brewing&nbsp;&nbsp;&#9002;
                    </h5>
                    <Link href={route("prototype.beer")}>
                        <h5 className="mb-2 text-xs text-gray-900 dark:text-black">
                            &nbsp;&nbsp; Beer
                        </h5>
                    </Link>
                    <h5 className="mb-2 text-xs text-gray-900 dark:text-black">
                        &nbsp;&nbsp;&#9002;&nbsp;&nbsp; The Nikko Monkey
                    </h5>
                    <h5 className="mb-2 text-xs font-bold text-gray-900 dark:text-black">
                        &nbsp;&nbsp;&#9002;&nbsp;&nbsp; Yuzu Saishon
                    </h5>
                </div>
                <div class="grid grid-cols-12 gap-1 items-center justify-center max-w-screen">
                    <div className="col-span-7  my-1 items-center">
                        <div class="grid grid-cols-6 w-full">
                            <div className="col-span-5 items-center max-h-[450px] justify-center border-solid border-2 border-yellow-500 col-span-5 my-1 w-11/12">
                                <img
                                    src="\images\product\belgiansanshosaison.png"
                                    alt="Product Image"
                                    className="mx-auto max-h-full"
                                />
                            </div>
                            <div className="col-span-1 grid grid-rows-3 grid-flow-col gap-1">
                                <div className="h-4/12 w-full ms-[-40px] border-solid border-2 border-yellow-500 my-1"></div>
                                <div className="h-4/12 w-full ms-[-40px] border-solid border-2 border-yellow-500 my-1"></div>
                                <div className="h-4/12 w-full ms-[-40px] border-solid border-2 border-yellow-500 my-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 my-1 items-start align-top ms-3">
                        <h5 className="mb-2 mt-1 font-superbold font-black text-3xl text-black">
                            Nikko Belgian Beer
                        </h5>
                        <h5 className="mb-2 font-superbold font-black text-3xl text-black">
                            Yuzu Sansho
                        </h5>
                        <h5 className="mb-2 text-base text-black">
                            口当たりはモルト由来の芳醇なコクと甘みが感じられ、ザーツホップの華やかなアロ
                            マと上品な苦味が全体の調和を取ります。ビルスナースタイルのピールです。
                        </h5>
                        <h5 className="mb-1 mt-5 text-xs text-gray-600">
                            ABV: 4.5%
                        </h5>
                        <h5 className="mb-2 text-xs text-gray-600">
                            原材料:苺・麦芽・ホップ
                        </h5>
                        <div className="items-center sm:flex sm:space-x-1 rtl:space-x-reverse">
                            <h5 className="mb-2 font-superbold font-black text-3xl text-black">
                                ¥1,380
                            </h5>
                            <h5 className="mb-2 text-sm text-black">
                                &#40;税込&#41;/330ml
                            </h5>
                        </div>
                        <div class="flex item-center mt-[-10px]">
                            <div className="item-center  align-middle me-2">
                                <h5 className="mb-2 me-2 text-xs text-gray-600 pt-2">
                                    Quantity
                                </h5>
                            </div>
                            <div className="text-center items-center justify-center block">
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button
                                        data-action="decrement"
                                        class=" bg-gray-50 text-black text-center items-center justify-center align-middle hover:text-gray-700 hover:bg-gray-100 h-[21px] w-[21px] rounded-l cursor-pointer outline-none"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        class="outline-none text-center h-[21px] w-6/12 bg-white font-bold text-xs focus:text-black outline-none"
                                        name="quantity"
                                        id="quantity"
                                        defaultValue="1"
                                        disabled
                                    />
                                    <button
                                        data-action="increment"
                                        class="bg-gray-50 text-black items-center hover:text-gray-700 hover:bg-gray-100 h-[21px] w-[21px] rounded-r cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="text-start mt-[-10px]">
                                    <h5 className="ms-10 text-xs text-red-600">
                                        Stock: 9
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-start">
                            <Link href={route("prototype.checkout")}>
                                <button
                                    type="button"
                                    class=" text-white bg-danger hover:bg-dangerhover w-[160px] h-[45px] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mt-2"
                                >
                                    Buy Now
                                </button>
                            </Link>
                            <button
                                type="button"
                                class=" text-white bg-success hover:bg-successhover w-[160px] h-[45px] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mt-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full items-center text-center justify-center">
                    <h5 className="mb-2 mt-12 font-superbold font-black text-2xl text-black">
                        Related Product
                    </h5>
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
                </div>
            </Proccess>
        </>
    );
}
