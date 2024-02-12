import { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "3", <ContainerOutlined />),

  getItem("Services", "sub1", <MailOutlined />, [
    getItem("Affordable Housing", "5"),
    getItem("Permits", "6"),
    getItem("Transportation", "7"),
    getItem("Recreation", "8"),
  ]),

  getItem("Applications", "sub2", <AppstoreOutlined />, [
    getItem("All Applications", "9"),
    getItem("Pending", "10"),
    getItem("Processed", "11"),
  ]),
];

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default SideNav;
