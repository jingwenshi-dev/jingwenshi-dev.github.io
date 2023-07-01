'use client'

import Link from "next/link";
import { Nav } from '@douyinfe/semi-ui';
import { IconHome, IconCode, IconMail } from '@douyinfe/semi-icons';

const NavBar = () => {
  return (
    <Nav
      renderWrapper = {({ itemElement, isSubNav, isInSubNav, props }) => {
        const routerMap = {
          Home: "/",
          Projects: "/projects",
          ContactMe: "/contact",
        };

        return (
          <Link href={routerMap[props.itemKey]} style={{ textDecoration: "none" }}>
            {itemElement}
          </Link>
        );
      }}

      items={[
        { itemKey: "Home", text: "Home", icon: <IconHome  /> },
        { itemKey: "Projects", text: "Projects", icon: <IconCode /> },
        { itemKey: "ContactMe", text: "Contact Me", icon: <IconMail /> }
      ]}
    ></Nav>
  );
};

export default NavBar;