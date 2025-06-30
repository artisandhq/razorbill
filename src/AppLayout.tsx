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
import { Outlet, useLocation, useNavigate } from "react-router";

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

const BottomTabBar: FC = () => {
  const { pathname } = location;
  const navigate = useNavigate();

  const setRouteActive = (value: string) => {
    navigate(value);
    console.log("setRouteActive", value);
  };

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

function App() {
  // for changing the title dynamically based on the current route
  const location = useLocation();

  // for the right side of the NavBar
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
        <NavBar backIcon={false} back={search} right={right}>
          {/* if the URL location is '/', then print "Transactions", otherwise print use tabs.title */}
          {tabs.find((e) => e.key === location.pathname)?.title === "Trans"
            ? "Transactions"
            : tabs.find((e) => e.key === location.pathname)?.title}
        </NavBar>
      </div>
      <div className="body">
        {/* This is where the routed components will be rendered */}
        <Outlet />
      </div>
      <div className="bottom">
        <BottomTabBar />
      </div>
    </div>
  );
}

export default App;
