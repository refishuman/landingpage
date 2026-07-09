import { Outlet } from "react-router";
import Header from "./pages/main-page/Header";
import Footer from "./pages/main-page/Footer";

export default function Shell() {
  return (
    <>
      <div className="flex flex-col min-h-dvh bg-bg text-text items-center">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )

}