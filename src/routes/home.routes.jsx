import { createRoute } from "@tanstack/react-router";

import { rootRouteWrapper } from "./rootRouteWrapper";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "@/components/Layout";

export const homeLayoutRoute = createRoute({
  id: "homeLayout",
  getParentRoute: () => rootRouteWrapper,
  component: Layout,
});

export const homeIndexRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "/",
  component: Home,
});

export const aboutUsRoute = createRoute({
  path: "/about",
  getParentRoute: () => homeLayoutRoute,
  component: About,
});

homeLayoutRoute.addChildren([
  homeIndexRoute,
  aboutUsRoute,
]);
