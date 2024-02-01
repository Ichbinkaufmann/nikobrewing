import { Link } from "@inertiajs/react";

export default function ProductCard() {
    return (
        <div className="col-span-3 my-1 mx-auto items-center">
            <Link href={route("prototype.show")}>
                <div className="w-12/12 h-[410px] align-middle dark:drop-shadow-md duration-300 hover:drop-shadow-xl mt-[35px] p-2 items-center text-center bg-white border shadow sm:p-4 dark:border-gray-50 rounded-[11px]">
                    <div className="items-center justify-center sm:flex px-5 sm:space-y-0 sm:space-x-6  mt-4 rtl:space-x-reverse">
                        <img src="\images\product\packagemonkey.png" alt="" />
                    </div>

                    <h5 className="text-lg mt-3 font-superbold text-black">
                        Nikko Belgian Beer
                    </h5>
                    <h5 className="mb-2 text-lg mt-[-5px] font-superbold text-black">
                        été - Sansho Saison
                    </h5>
                    <div className="items-center mt-3 justify-center sm:flex sm:space-x-1 rtl:space-x-reverse">
                        <h5 className="mb-2 font-superbold font-black text-xl text-black">
                            ¥1,380
                        </h5>
                        <h5 className="mb-2 text-xs text-black">
                            &#40;税込&#41;/330ml
                        </h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}
