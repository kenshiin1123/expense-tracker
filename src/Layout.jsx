import { Outlet, useLocation } from "react-router";
import NavigationBar from "./components/NavigationBar";
export default function Layout() {
  const location = useLocation();
  return (
    <main className="flex h-svh w-full relative max-sm:pt-15">
      <NavigationBar />
      <div
        className={`p-5 min-sm:ml-auto max-sm:p-2 max-sm:mx-auto max-sm:pb-30 h-fit max-sm:w-full w-[62vw] md:w-[67vw] lg:w-[72vw] xl:w-[77vw] ${
          location.pathname === "/" && "pt-0"
        }`}
      >
        <Outlet />
      </div>
    </main>
  );
}
