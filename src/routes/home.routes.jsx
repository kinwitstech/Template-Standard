import { createRoute } from "@tanstack/react-router";

import { rootRouteWrapper } from "./rootRouteWrapper";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "@/components/Layout";
import Menu from "../pages/Menu";
import Stories from "../pages/Stories";

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

export const contactUsRoute = createRoute({
  path: "/contact",
  getParentRoute: () => homeLayoutRoute,
  component: Contact,
});

export const menuRoute = createRoute({
  path: "/menu",
  getParentRoute: () => homeLayoutRoute,
  component: Menu,
});

export const storiesRoute = createRoute({
  path: "/stories",
  getParentRoute: () => homeLayoutRoute,
  component: Stories,
});

homeLayoutRoute.addChildren([
  homeIndexRoute,
  aboutUsRoute,
  contactUsRoute,
  menuRoute,
  storiesRoute,
]);
