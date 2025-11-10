import React from "react";
import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

const PrivateLayout: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            {/* <Sidebar /> */}
            Sidebar

            <div className="flex-1 flex flex-col">
                {/* Header */}
                Header
                {/* <Header /> */}

                {/* Page Content */}
                <main className="flex-1 p-6 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PrivateLayout;
