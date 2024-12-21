import { lazy } from "react";

export const Home = lazy(() => import("./Home/Home.jsx"));
export const DoctorsPage = lazy(() => import("./DoctorsPage/DoctorsPage.jsx"));
export const ContactPage = lazy(() => import("./ContactPage/ContactPage.jsx"));
export const NotFound = lazy(() => import("./NotFound/NotFound.jsx"));
export const ProductsPage = lazy(() => import("./ProductsPage/ProductsPage.jsx"));
export const ProductSingle = lazy(() => import("./ProductSingle/ProductSingle.jsx"));
export const Checkout = lazy(() => import("./Checkout/Checkout.jsx"));
export const Cart = lazy(() => import("./Cart/Cart.jsx"));

