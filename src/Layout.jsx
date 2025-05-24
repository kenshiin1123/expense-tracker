import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
export default function Layout() {
  return (
    <main className="flex h-svh w-full relative">
      <NavigationBar />
      <div className=" p-5 md:p-10 min-sm:ml-auto max-sm:pb-30 max-sm:w-[100%] min-sm:w-[60%] md:w-[70%] lg:w-[75%] h-fit">
        <Outlet />
      </div>
    </main>
  );
}
