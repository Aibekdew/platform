import LayoutSite from "../../app/layout";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = async ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
