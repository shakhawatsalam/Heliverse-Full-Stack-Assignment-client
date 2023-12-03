import React, { useState } from "react";
import UserCard from "../component/UserCard";
import { useGetAllUserQuery } from "../redux/user/userApi";
import Pagination from "../component/Pagination";
import PaginationComponent from "../component/Pagination";

const Home = () => {
  //* arg
  const query = {};

  // * state declaration
  const [size, setSize] = useState(12);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
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
      <div className='text-center mt-6 text-4xl'>User's Card</div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center mt-10'>
        {userData?.map((user) => (
          <UserCard key={user._id} user={user} />
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
