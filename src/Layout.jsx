import { Outlet, useLocation } from "react-router";
import NavigationBar from "./components/NavigationBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "sonner";
export default function Layout() {
  const location = useLocation();
  const darkmode = useSelector((state) => state.global.darkmode);
  const enableToast = useSelector((state) => state.global.enableToast);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkmode) {
      body.classList.add("bg-black");
      body.classList.add("text-white");
    } else {
      body.classList.remove("bg-black");
      body.classList.remove("text-white");
    }
  }, [darkmode]);

  return (
    <main className={`flex h-svh w-full relative max-sm:pt-15`}>
      <NavigationBar />
      <div
        className={`p-5 min-sm:ml-auto max-sm:p-2 max-sm:mx-auto max-sm:pb-30 h-fit max-sm:w-full w-[62vw] md:w-[67vw] lg:w-[72vw] xl:w-[77vw] ${
          location.pathname === "/" && "pt-0"
        }`}
      >
        <Outlet />
      </div>
      {enableToast && <Toaster position="top-right" />}
    </main>
  );
}
