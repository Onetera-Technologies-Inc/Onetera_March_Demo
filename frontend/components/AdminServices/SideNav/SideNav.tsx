import { useState } from "react";
import { Menu, MenuProps } from "antd";

interface SideNavProps {
  setCurrentKey: React.Dispatch<React.SetStateAction<string>>;
  items: MenuProps["items"]; // Assuming items is of type MenuProps['items']
}

const SideNav: React.FC<SideNavProps> = ({ setCurrentKey, items }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick: MenuProps["onClick"] = (e) => {
    setCurrentKey(e.key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // return (
  //   <div>
  //     <Menu
  //       defaultSelectedKeys={["1"]}
  //       defaultOpenKeys={["sub1"]}
  //       mode="inline"
  //       theme="dark"
  //       items={items}
  //     />
  //   </div>
  // );
  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
};

export default SideNav;
