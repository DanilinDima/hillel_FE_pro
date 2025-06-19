import { Outlet } from "react-router";
import Header from "../components/Header";
import "../pages/css/Main.css"

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}