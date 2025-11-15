import { Search, Pencil, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const StaffListPage = () => {
    return (
        <div className="p-6">
            {/* Page title + Add button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Staff Details Management</h1>

                <Link
                    to="/staff/add"
                    className="px-4 py-2 bg-[#0d3b78] text-white rounded-md shadow hover:bg-[#0b2f63] flex items-center gap-2"
                >
                    <Plus size={18} /> Add New Staff
                </Link>
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
                    .map((_, i) => (
                        <div className="border rounded-xl p-5 flex items-center justify-between bg-white shadow-sm">
                            {/* Left section */}
                            <div className="flex items-start gap-4">
                                {/* Avatar */}
                                <img
                                    src="https://via.placeholder.com/60"
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                {/* Staff Info */}
                                <div>
                                    <h2 className="font-semibold text-lg">John Doe</h2>

                                    <div className="text-sm text-gray-600 space-y-1">
                                        <p>NIC: 123383GSDG</p>
                                        <p>Employee no: EN214397h</p>
                                    </div>
                                </div>
                            </div>

                            {/* Middle section */}
                            <div className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm text-gray-700">
                                <p>
                                    <span className="font-semibold">Contact:</span> 243979475
                                </p>
                                <p>
                                    <span className="font-semibold">Division:</span> Colombo
                                </p>

                                <p>
                                    <span className="font-semibold">Station:</span> GH Hospital
                                </p>
                                <p>
                                    <span className="font-semibold">Address:</span> 123 Main Street, Colombo
                                </p>

                                <p>
                                    <span className="font-semibold">District:</span> Colombo
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
