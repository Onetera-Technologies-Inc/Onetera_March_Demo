import React from "react";
import { Tabs, TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

interface ContentCardsProps {
  items: TabsProps["items"];
}

const ContentCards: React.FC<ContentCardsProps> = ({ items }) => (
  <Tabs onChange={onChange} items={items} />
);

export default ContentCards;
