import { useRef, useState } from "react";
import { Tabs, Swiper } from "antd-mobile";
import type { SwiperRef } from "antd-mobile/es/components/swiper";
import "./PeriodTabs.css";

const tabItems = [
  { key: "fruits", title: "水果" },
  { key: "vegetables", title: "蔬菜" },
  { key: "animals", title: "动物" },
];

function PeriodTabs() {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={(key) => {
          const index = tabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          swiperRef.current?.swipeTo(index);
        }}
      >
        {tabItems.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
      <Swiper
        direction="horizontal"
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index);
        }}
      >
        <Swiper.Item>
          <div className="content">菠萝</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className="content">西红柿</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className="content">蚂蚁</div>
        </Swiper.Item>
      </Swiper>
    </>
  );
}

export default PeriodTabs;
