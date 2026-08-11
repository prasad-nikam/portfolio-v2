import { Outlet } from "react-router";
import { Navigation } from "@/features/navigation/components/Navigation";
import { Footer } from "@/features/footer/components/Footer";

export function MainLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
