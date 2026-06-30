import { createBrowserRouter } from "react-router";
import AuthScreen from "../pages/AuthScreen";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./screens/Dashboard";
import Discover from "./screens/Discover";
import Projects from "./screens/Projects";
import Applications from "./screens/Applications";
import Messages from "./screens/Messages";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthScreen,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "discover", Component: Discover },
      { path: "projects", Component: Projects },
      { path: "applications", Component: Applications },
      { path: "messages", Component: Messages },
      { path: "notifications", Component: Notifications },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
    ],
  },
]);