import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, LogOut } from "lucide-react";
import { useLogout } from "./queries";
import { userStore } from "./store";

const Header: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoutMutation = useLogout();

    const handleLogout = () => {
        logoutMutation.mutate(undefined, {
            onSuccess: () => {
                userStore.value = null;   // clear global user
                window.location.href = "/"
            },
            onError: (err: any) => {
                console.error("Logout failed:", err);
            }
        });
    };
    // Close dropdown when clicking outside
    useEffect(() => {
        function handler(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpenMenu(false);
            }
        }
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    return (
        <header className="h-[75px] bg-white border-b flex items-center justify-end gap-6 px-6">
            {/* LEFT AREA */}
            <div>
                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
                    <input
                        type="text"
                        placeholder="Search type of keywords"
                        className="ml-2 bg-transparent outline-none text-sm w-full"
                    />
                    <Search size={18} className="text-gray-500" />
                </div>
            </div>

            {/* RIGHT AREA */}
            <div className="flex items-center gap-4">
                {/* Profile Dropdown */}
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg cursor-pointer"
                    >
                        <img
                            src="https://i.pravatar.cc/100"
                            className="w-8 h-8 rounded-full"
                            alt="profile"
                        />
                        <div className="text-sm text-gray-700 font-medium">
                            John Samcoson
                        </div>
                        <ChevronDown size={18} className="text-gray-600" />
                    </button>

                    {/* DROPDOWN MENU */}
                    {openMenu && (
                        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-2 z-50">
                            <button
                                className="flex items-center gap-2 w-full px-3 py-2 text-left rounded hover:bg-gray-100 text-red-600"
                                onClick={() => {
                                    handleLogout();
                                }}
                            >
                                <LogOut size={18} />
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
