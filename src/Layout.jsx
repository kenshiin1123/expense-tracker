import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
export default function Layout() {
  return (
    <main className="flex h-svh w-full relative">
      <NavigationBar />
      <div className="p-10 min-sm:ml-auto max-sm:w-[100%] min-sm:w-[80%] h-fit">
        <Outlet />
      </div>
    </main>
  );
}
