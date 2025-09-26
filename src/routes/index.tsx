import { lazy, Suspense } from "react";
import { Loader } from "../module/core/Loader";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Layout } from "../module/core/Layout";
import { LayoutAdmin } from "../module/core/LayoutAdmin";

const Home = lazy(() => import("../screens/Home"));
const Login = lazy(() => import("../screens/Login"));
const CreateProduct = lazy(() => import("../screens/CreateProduct"));
const Product = lazy(() => import("../screens/Product"));
const ShowCart = lazy(() => import("../screens/ShowCart"));
const DetailProductoById = lazy(() => import("../screens/DetailProductoById"));
// const CreateProduct = lazy(() => import("../screens/CreateProduct"));
export default function NavigatorRouter() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen grid place-content-center">
          <Loader className="h-[4rem] w-[4rem]" />
        </div>
      }
    >
      <RouterRoutes>
        <Route path={"/login"} element={<Login />} />
        <Route element={<LayoutAdmin />}>
          <Route path={"/dashboard/setting"} element={<CreateProduct />} />
        </Route>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<ShowCart />} />
          <Route path={"/product"} element={<Product />} />
          <Route path="/product/:id" element={<DetailProductoById />} />
        </Route>
      </RouterRoutes>
    </Suspense>
  );
}
