import type { FC } from "react";

import { NavBar, Space, TabBar } from "antd-mobile";
import {
  AppOutline,
  FilterOutline,
  MessageOutline,
  SearchOutline,
  StarOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

import "./App.css";
import { Outlet, useNavigate } from "react-router";

const Bottom: FC = () => {
  const { pathname } = location;
  const navigate = useNavigate();

  const setRouteActive = (value: string) => {
    navigate(value);
    console.log("setRouteActive", value);
  };

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/message",
      title: "消息",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

function App() {
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <StarOutline />
        <FilterOutline />
      </Space>
    </div>
  );

  const search = (
    <div style={{ fontSize: 24 }}>
      <SearchOutline />
    </div>
  );

  return (
    <div className="app">
      <div className="top">
        <NavBar backIcon={false} back={search} right={right} >
          配合路由使用
        </NavBar>
      </div>
      <div className="body">
        {/* This is where the routed components will be rendered */}
        <Outlet />
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default App;
