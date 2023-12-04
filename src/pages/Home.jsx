import React, { useState } from "react";
import UserCard from "../component/UserCard";
import { useGetAllUserQuery } from "../redux/user/userApi";
import Pagination from "../component/Pagination";
import PaginationComponent from "../component/Pagination";
import SearchAndFilterComponent from "../component/SearchAndFilterComponent";
import Filter from "../component/Filter";
import GenderFilter from "../component/GenderFilter";
import AvailableFilter from "../component/AvailableFilter";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { Button, message, Space } from "antd";

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  //* arg
  const query = {};

  // * state declaration
  const messagess = useSelector((state) => state.team.message);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [available, setAvailable] = useState("All");
  console.log(messagess);
  if (messagess) {
    messageApi.open({
      type: "error",
      content: messagess,
    });
  }

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  if (domain.length > 0 && domain !== "All") {
    query["domain"] = domain;
  }
  if (gender.length > 0 && gender !== "All") {
    query["gender"] = gender;
  }
  if (available !== "All") {
    query["available"] = available;
  }

  const { data, isLoading } = useGetAllUserQuery({
    ...query,
  });
  const userData = data?.data;
  //* Function
  const onPaginationSizeChange = (page, pageSize) => {
    console.log("Page:", page);
    console.log("PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  return (
    <>
      {contextHolder}
      <div className='text-center mt-6 text-4xl'>User's Card</div>
      <div className=' flex justify-center gap-6 mt-6'>
        <SearchAndFilterComponent setSearchTerm={setSearchTerm} />
        <Filter setDomain={setDomain} />
        <GenderFilter setGender={setGender} />
        <AvailableFilter setAvailable={setAvailable} />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center mt-10'>
        {userData?.map((user) => (
          <UserCard key={user?._id} user={user} />
        ))}
      </div>
      <PaginationComponent
        onPaginationSizeChange={onPaginationSizeChange}
        pageSize={size}
        totalPages={data?.meta?.total}
        showSizeChanger={true}
      />
    </>
  );
};

export default Home;
