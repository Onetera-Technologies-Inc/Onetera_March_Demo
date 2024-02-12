import React from "react";
import { Tabs, TabsProps } from "antd";

interface ContentCardsProps {
  items: TabsProps["items"];
  activeTabKey: string;
  setActiveTabKey: (key: string) => void;
}

const ContentCards: React.FC<ContentCardsProps> = ({
  items,
  activeTabKey,
  setActiveTabKey,
}) => {
  const onChange = (key: string) => {
    setActiveTabKey(key);
  };

  return <Tabs onChange={onChange} activeKey={activeTabKey} items={items} />;
};

export default ContentCards;
