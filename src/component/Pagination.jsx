import React from "react";
import { Pagination } from "antd";
const onChange = (pageNumber) => {
  console.log("Page: ", pageNumber);
};

const PaginationComponent = ({
  onPaginationSizeChange,
  totalPages,
  showSizeChanger,
}) => (
  <>
    <div className='flex justify-center mt-10'>
      <Pagination
        showQuickJumper
        defaultCurrent={2}
        pageSizeOptions={[10, 20, 30]}
        total={totalPages}
        showSizeChanger={showSizeChanger}
        onChange={onPaginationSizeChange}
      />
    </div>
  </>
);
export default PaginationComponent;
