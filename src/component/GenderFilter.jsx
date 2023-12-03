import React from "react";
import { Select, Space } from "antd";
const GenderFilter = ({ setGender }) => {
  const handleChange = (value) => {
    setGender(value);
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
            value: "Female",
            label: "Female",
          },
          {
            value: "Male",
            label: "Male",
          },
        ]}
      />
    </Space>
  );
};
export default GenderFilter;
