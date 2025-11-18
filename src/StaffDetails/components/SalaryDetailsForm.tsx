const SalaryDetailsForm = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <label className="text-sm font-medium">Department</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select Department</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Position</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select Position</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Post Level</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select Post Level</option>
                    </select>
                </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-6 mt-6">
                <div>
                    <label className="text-sm font-medium">Post Start Date</label>
                    <input type="date" className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Station</label>
                    <select className="w-full mt-1 p-3 rounded-lg bg-gray-100">
                        <option>Select Divisional Secretariat</option>
                    </select>
                </div>
            </div>

            {/* Row 3 */}
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

            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                    <label className="text-sm font-medium">Station Head</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Programme Name</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                    <label className="text-sm font-medium">Project</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Object Code</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                    <label className="text-sm font-medium">Basic Salary (Rs.)</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Weekly Duty Hours</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>
            </div>

            {/* Row 7 */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                    <label className="text-sm font-medium">Hourly Overtime Rate (Rs.)</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" />
                </div>

                <div>
                    <label className="text-sm font-medium">Holiday Calculate Rate</label>
                    <input className="w-full mt-1 p-3 rounded-lg bg-gray-100" defaultValue="20" />
                </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-6">
                <input type="checkbox" />
                <label className="text-sm font-medium">Is Current Position</label>
            </div>
        </>
    );
};

export default SalaryDetailsForm;
