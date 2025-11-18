import React from "react";
import {
    ChevronLeft,
    ChevronRight,
    LayoutGrid,
    Users,
    DollarSign,
    Clock,
    CalendarCheck,
    Calendar,
    UserCog,
    Activity,
    Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface Props {
    collapsed: boolean;
    setCollapsed: (val: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ collapsed, setCollapsed }) => {
    const { pathname } = useLocation();

    const menuItems = [
        { name: "Dashboard", icon: <LayoutGrid size={20} />, path: "/dashboard" },
        { name: "Staff Details", icon: <Users size={20} />, path: "/staff-details" },
        { name: "Designation", icon: <DollarSign size={20} />, path: "/designation" },
        { name: "Extra Duty Claim", icon: <Clock size={20} />, path: "/extra-duty" },
        { name: "Duty Details", icon: <CalendarCheck size={20} />, path: "/duty-details" },
        { name: "Leave Details", icon: <Calendar size={20} />, path: "/leave-details" },
        { name: "Day Off & PH Claim", icon: <Calendar size={20} />, path: "/ph-claim" },
        { name: "User Management", icon: <UserCog size={20} />, path: "/user-management" },
        { name: "User Activity", icon: <Activity size={20} />, path: "/user-activity" },
        { name: "Dropdown Management", icon: <Settings size={20} />, path: "/dropdown" },
    ];

    return (
        <div className="relative">
            <div
                className={`h-screen bg-white border-r transition-all duration-300
                ${collapsed ? "w-[104px]" : "w-[256px]"}`}
            >
                <div className="flex flex-col">
                    <div className={`${collapsed ? "w-[60px]" : "w-[170px]"} h-[40px] rounded m-auto mb-4 mt-4 bg-[#C4C4C4]`}>
                        <div className="w-full h-full flex items-center justify-center font-bold text-lg">
                            LOGO
                        </div>
                    </div>

                    {/* LOGGED IN BOX */}
                    <div
                        className={`rounded ${collapsed ? "w-[60px]" : "w-[170px]"} h-[84px] flex items-center m-auto mt-4 mb-4 p-2`}
                        style={{
                            background: "#F5F8FD",
                        }}
                    >
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="user"
                            className="w-8 h-8 rounded-full"
                        />
                        {!collapsed && (
                            <div className="ml-2 leading-tight text-sm flex flex-col gap-2">
                                <p className="text-gray-600">Logged in as:</p>
                                <p className="font-semibold -mt-1 text-gray-900">
                                    John Samcoson
                                </p>
                                <p className="-mt-1 text-gray-900">
                                    Super Admin
                                </p>
                            </div>
                        )}
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-1 p-4 pr-0">
                        {menuItems.map((item, i) => {
                            const active = pathname === item.path;

                            return (
                                <Link key={i} to={item.path}>
                                    <div
                                        className={`relative flex items-center p-2 rounded-lg cursor-pointer
                                            hover:bg-gray-100 transition
                                            ${active ? "bg-[#F5F8FD]" : ""}
                                        `}
                                    >
                                        {/* Left icon */}
                                        <div
                                            className={`${active ? "text-[#154579]" : ""
                                                }`}
                                        >
                                            {item.icon}
                                        </div>

                                        {/* Menu name */}
                                        {!collapsed && (
                                            <span
                                                className={`ml-3 text-sm ${active
                                                    ? "text-[#154579] font-semibold"
                                                    : "text-gray-700"
                                                    }`}
                                            >
                                                {item.name}
                                            </span>
                                        )}

                                        {/* BLUE RIGHT MARKER */}
                                        {active && (
                                            <div className="absolute right-0 w-[6px] h-full bg-[#154579] rounded-l-lg"></div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FLOATING COLLAPSE BUTTON (TOP: 100px) */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute top-[100px] z-50 bg-white shadow-lg rounded-full p-2 transition-all duration-300"
                style={{
                    left: collapsed ? "90px" : "235px",
                }}
            >
                {collapsed ? (
                    <ChevronRight size={20} />
                ) : (
                    <ChevronLeft size={20} />
                )}
            </button>
        </div>
    );
};

export default Sidebar;
