import React, { useState, useEffect, useRef } from "react";
import { List, Avatar } from "antd";
import { SendOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("antd").then((mod) => mod.Input), {
  ssr: false,
});
const Button = dynamic(() => import("antd").then((mod) => mod.Button), {
  ssr: false,
});

const initialMessages = [
  { id: 1, sender: "admin", content: "Hi ! How can we assist you today?" },
];

const adminResponses = ["Admin mess", "Admin-msg2", "Admin-msg3"];

const UserInteractions = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      content: userInput,
    };

    setMessages([...messages, newUserMessage]);

    if (responseIndex < adminResponses.length) {
      const adminMessage = {
        id: messages.length + 2,
        sender: "admin",
        content: adminResponses[responseIndex],
      };

      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, adminMessage]);
        setResponseIndex(responseIndex + 1);
      }, 1000);
    }

    setUserInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ height: "80vh", overflow: "auto", padding: "20px" }}>
      <List
        dataSource={messages}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor:
                      item.sender === "admin" ? "#f56a00" : "#87d068",
                  }}
                />
              }
              title={item.sender.toUpperCase()}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <div ref={messagesEndRef} />
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onPressEnter={handleSendMessage}
        placeholder="Type your message here..."
        suffix={
          <Button
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            type="text"
          />
        }
      />
    </div>
  );
};

export default UserInteractions;
