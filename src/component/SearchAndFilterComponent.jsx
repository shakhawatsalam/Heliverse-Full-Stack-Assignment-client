import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const SearchAndFilterComponent = ({ setSearchTerm }) => {
    const onSearch = (value, _e, info) => {
        console.log(value)
        setSearchTerm(value)
    };
  return (
    <Space direction='vertical'>
      <Search
        placeholder='input search text'
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
export default SearchAndFilterComponent;
