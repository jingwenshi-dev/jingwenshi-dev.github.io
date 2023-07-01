'use client'

import Link from "next/link";
import {Button, Nav} from '@douyinfe/semi-ui';
import { IconHome, IconCode, IconMail, IconSemiLogo, IconSun, IconMoon } from '@douyinfe/semi-icons';
import {useState} from "react";

function DarkMode() {

  const [isDark, setIsDark] = useState(false);

  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      setIsDark(false);
    } else {
      body.setAttribute('theme-mode', 'dark');
      setIsDark(true);
    }
  };

  return (
    <Button icon={isDark ? <IconSun /> : <IconMoon />} onClick={switchMode}>
    </Button>
  );
}

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

      mode={'horizontal'}

      header={{
        logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
        text: 'JS'
      }}

      items={[
        { itemKey: "Home", text: "Home", icon: <IconHome  /> },
        { itemKey: "Projects", text: "Projects", icon: <IconCode /> },
        { itemKey: "ContactMe", text: "Contact Me", icon: <IconMail /> }
      ]}

      footer={
        <DarkMode />
      }

    ></Nav>
  );
};

export default NavBar;