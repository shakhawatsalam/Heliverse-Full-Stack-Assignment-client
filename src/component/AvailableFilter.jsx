import React from "react";
import { Select, Space } from "antd";
const AvailableFilter = ({ setAvailable }) => {
  const handleChange = (value) => {
    console.log(value);
    setAvailable(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue='Gender'
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "All",
            label: "All",
          },
          {
            value: true,
            label: "Available",
          },
          {
            value: false,
            label: "Not Available",
          },
        ]}
      />
    </Space>
  );
};
export default AvailableFilter;
