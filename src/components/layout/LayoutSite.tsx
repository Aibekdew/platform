import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main className={scss.children}>{children}</main>
    </div>
  );
};
export default LayoutSite;
