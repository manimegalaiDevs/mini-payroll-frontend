import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const PrivateLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex">
            <div className="fixed left-0 top-0 h-screen z-40">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>

            <div
                className={`flex-1 min-h-screen bg-[#F7F9FC] transition-all duration-300
                ${collapsed ? "ml-[104px]" : "ml-[256px]"}
            `}
            >
                <div className="sticky top-0 z-30 bg-white">
                    <Header />
                </div>

                {/* PAGE CONTENT */}
                <div className="bg-white">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;
