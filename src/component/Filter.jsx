import React from "react";
import { Select, Space } from "antd";
const Filter = ({ setDomain }) => {
  const handleChange = (value) => {
    setDomain(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue='Domain'
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
            value: "Sales",
            label: "Sales",
          },
          {
            value: "Finance",
            label: "Finance",
          },
          {
            value: "Management",
            label: "Management",
          },
          {
            value: "UI Designing",
            label: "UI Designing",
          },
          {
            value: "Business Development",
            label: "Business Development",
          },
        ]}
      />
    </Space>
  );
};
export default Filter;
