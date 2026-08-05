import { Outlet } from "react-router";
import { Navigation } from "@/features/navigation/components/Navigation";

export function MainLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </>
  );
}
