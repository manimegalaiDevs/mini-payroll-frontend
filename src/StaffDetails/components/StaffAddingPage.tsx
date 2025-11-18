import { useState } from "react";
import { staffPageSignal } from "../store.ts";
import StaffDetailsForm from "./StaffDetailsForm.tsx";
import SalaryDetailsForm from "./SalaryDetailsForm.tsx";
import { ChevronLeft } from "lucide-react";

const StaffAddingPage = () => {
    const [showSalaryForm, setShowSalaryForm] = useState(false);

    return (
        <div className="p-8 w-full bg-white relative">
            <div className="flex items-center justify-between z-10 bg-white sticky top-[75px]">
                <h2 className="text-lg font-semibold mb-6">Staff Detail</h2>
                <div className="flex items-center justify-end mb-6 cursor-pointer"
                    onClick={() => (staffPageSignal.value = "StaffList")}
                >
                    <ChevronLeft size={18} className="text-[#0d3b78]" />
                    <span className="text-[#0d3b78] font-medium text-sm">Back</span>
                </div>
            </div>

            {/* Staff Details */}
            <StaffDetailsForm />

            {/* Add / Remove Salary */}
            {!showSalaryForm ? (
                <button
                    className="text-[#0d3b78] font-medium text-sm mt-4"
                    onClick={() => setShowSalaryForm(true)}
                >
                    + Add Salary & Designation Details
                </button>
            ) : (
                <button
                    className="text-red-600 font-medium text-sm mt-4"
                    onClick={() => setShowSalaryForm(false)}
                >
                    – Remove Salary & Designation Details
                </button>
            )}

            {/* Salary Section */}
            {showSalaryForm && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-6">Salary Details</h2>
                    <SalaryDetailsForm />
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-10">
                <button
                    className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                    onClick={() => (staffPageSignal.value = "StaffList")}
                >
                    Cancel
                </button>

                <button className="px-6 py-2 rounded-lg bg-[#0d3b78] text-white hover:bg-blue-900">
                    Save
                </button>
            </div>
        </div>
    );
};

export default StaffAddingPage;
