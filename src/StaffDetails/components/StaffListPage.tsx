import { Search, Pencil, ArrowRight, Plus, User } from "lucide-react";
import { staffPageSignal } from "../store";
import { useSignals } from "@preact/signals-react/runtime";

const StaffListPage = () => {
    useSignals();
    return (
        <div className="p-6">
            {/* Page title + Add button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Staff Details Management</h1>

                <button

                    className="px-4 py-2 bg-[#0d3b78] text-white rounded-md shadow hover:bg-[#0b2f63] flex items-center gap-2"
                    onClick={() => {
                        staffPageSignal.value = "StaffAdding";
                    }}
                >
                    <Plus size={18} /> Add New Staff
                </button>
            </div>

            {/* Search box */}
            <div className="mb-6 relative">
                <input
                    type="text"
                    placeholder="Search by name or employee number..."
                    className="w-full bg-[#F5F8FD] border rounded-xl px-12 py-3 outline-none"
                />
                <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                />
            </div>

            {/* Staff List */}
            <div className="space-y-5">
                {Array(6)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="border rounded-xl p-5 flex items-center justify-between bg-white shadow-sm">
                            {/* Left section */}
                            <div className="flex items-start gap-4">
                                {/* <img
                                    src="https://via.placeholder.com/60"
                                    className="w-[40px] h-[40px] rounded-full object-cover"
                                /> */}
                                <div className="w-[40px] h-[40px] rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#0d3b78]">
                                    <User size={20} />
                                </div>

                                {/* Staff Info */}
                                <div>
                                    <h2 className="font-medium text-base">John Doe</h2>

                                    <div className="text-sm text-gray-600 space-y-1">
                                        <p>
                                            <span className="text-black">NIC:</span>{" "}
                                            <span className="text-gray-600 font-normal">123383GSDG</span>
                                        </p>
                                        <p>
                                            <span className="text-black">Employee no:</span>{" "}
                                            <span className="text-gray-600 font-normal">EN214397h</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Middle section */}
                            <div className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm text-gray-700">
                                <p>
                                    <span className="text-black">Contact:</span>{" "}
                                    <span className="text-gray-600 font-normal">243979475</span>
                                </p>
                                <p>
                                    <span className="text-black">Division:</span>{" "}
                                    <span className="text-gray-600 font-normal">Colombo</span>
                                </p>
                                <p>
                                    <span className="text-black">Station:</span>{" "}
                                    <span className="text-gray-600 font-normal">GH Hospital</span>
                                </p>
                                <p>
                                    <span className="text-black">Address:</span>{" "}
                                    <span className="text-gray-600 font-normal">123 Main Street, Colombo</span>
                                </p>
                                <p>
                                    <span className="text-black">District:</span>{" "}
                                    <span className="text-gray-600 font-normal">Colombo</span>
                                </p>
                            </div>

                            {/* Right Action Buttons */}
                            <div className="flex items-center gap-4">
                                <button className="p-2 border rounded-md hover:bg-gray-100">
                                    <Pencil size={18} />
                                </button>

                                <button className="p-2 border rounded-md hover:bg-gray-100">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default StaffListPage;
