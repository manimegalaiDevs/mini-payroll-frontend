import StaffAddingPage from "./components/StaffAddingPage";
import StaffListPage from "./components/StaffListPage";
import { staffPageSignal } from "./store";

export const StaffDetailsIndex = () => {
    // Reading the signal here makes it reactive
    const current = staffPageSignal.value;

    return current === "StaffList"
        ? <StaffListPage />
        : <StaffAddingPage />;
};
