import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
export default function Layout() {
  return (
    <main className="flex h-svh w-full">
      <NavigationBar />
      <div className="p-10 w-[75%] h-fit">
        <Outlet />
      </div>
    </main>
  );
}
