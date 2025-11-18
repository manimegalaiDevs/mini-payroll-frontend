
const StaffDetailsForm = () => {
    return (
        <div>
            {/* Grid 2 cols */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium">First Name</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">NIC</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Employee Number</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>
            </div>

            <div className="mt-6">
                <label className="text-sm font-medium">Contact Number</label>
                <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
            </div>

            {/* Province / District / Divisional */}
            <div className="grid grid-cols-3 gap-6 mt-6">
                <div>
                    <label className="text-sm font-medium">Province</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select Province</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">District</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select District</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Divisional Secretariat</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select Divisional Secretariat</option>
                    </select>
                </div>
            </div>

            <div className="mt-6">
                <label className="text-sm font-medium">Address</label>
                <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
            </div>
        </div>
    );
};

export default StaffDetailsForm;
