import { Outlet } from "react-router";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";


export const DefaultLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};
