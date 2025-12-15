import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";

export const dashboardRoutes = [
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Dashboard /> },
        ],
    },
];
