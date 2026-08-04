import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";

import { MainLayout } from "@/app/layouts/MainLayout";
import HomePage from "@/features/home/pages/HomePage";
import { NotFoundPage } from "@/features/not-found/pages/NotFoundPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
