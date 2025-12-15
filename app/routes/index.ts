import { useRoutes } from "react-router-dom";
import { dashboardRoutes } from "./dashboard.routes";

export default function AppRoutes() {
    return useRoutes([
        ...dashboardRoutes,
    ]);
}
