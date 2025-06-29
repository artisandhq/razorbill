import type { FC } from "react";

import { NavBar, Space, TabBar } from "antd-mobile";
import {
  FilterOutline,
  SearchOutline,
  StarOutline,
  BankcardOutline,
  HistogramOutline,
  FileOutline,
  SetOutline,
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
      title: "Trans",
      icon: <FileOutline />,
    },
    {
      key: "/stats",
      title: "Stats",
      icon: <HistogramOutline />,
    },
    {
      key: "/accounts",
      title: "Accounts",
      icon: <BankcardOutline />,
    },
    {
      key: "/settings",
      title: "Settings",
      icon: <SetOutline />,
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
