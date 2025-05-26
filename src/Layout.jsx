import { Outlet, useLocation } from "react-router";
import NavigationBar from "./components/NavigationBar";
export default function Layout() {
  const location = useLocation();
  return (
    <main className="flex h-svh w-full relative max-sm:pt-15">
      <NavigationBar />
      <div
        className={`p-5 min-sm:ml-auto max-sm:pb-30 max-sm:w-[100%] min-sm:w-[60%] md:w-[66%] lg:w-[72%] h-fit ${
          location.pathname === "/" && "pt-0"
        }`}
      >
        <Outlet />
      </div>
    </main>
  );
}
