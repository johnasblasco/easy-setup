import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";

export const dashboardRoutes = [
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Dashboard /> },
        ],
    },
];
