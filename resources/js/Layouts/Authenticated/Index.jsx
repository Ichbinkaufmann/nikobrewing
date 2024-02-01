import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "@/Layouts/Authenticated/Topbar";

export default function Authenticated({ children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden font-montserrat lg:block">
                {/* Start of Sidebar */}
                {/* End of Sidebar */}

                {/* Start of Content */}

                <div className="py-5 flex ml-[280px] mr-[280px] flex-col gap-[50px]">
                    {/* Start of Topbar */}
                    <Topbar />
                    {/* End of Topbar */}
                    <main>{children}</main>
                </div>

                {/* End of Content */}
            </div>
        </>
    );
}
