'use client'

import Link from "next/link";
import { Nav } from '@douyinfe/semi-ui';

const NavBar = () => {
  return (
    <Nav
      renderWrapper = {({ itemElement, isSubNav, isInSubNav, props }) => {
        const routerMap = {
          Home: "/",
          About: "/about",
          ContactMe: "/contact",
        };

        return (
          <Link href={routerMap[props.itemKey]} style={{ textDecoration: "none" }}>
            {itemElement}
          </Link>
        );
      }}

      items={[
        { itemKey: "Home", text: "Home" },
        { itemKey: "About", text: "About" },
        { itemKey: "ContactMe", text: "Contact Me" }
      ]}
    ></Nav>
  );
};

export default NavBar;