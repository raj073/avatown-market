import React, { useState } from "react";
import { useContext } from "react";
import { AvatarContext } from "../../Contexts/AvatarContext";
import Avatar from "../Avatar/Avatar";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { avatar } = useContext(AvatarContext);
  const items = avatar;
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <Avatar key={item.id} item={item}></Avatar>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 12;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 12);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 12) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[22px] font-medium">All Items</h1>
        <select className="border-[#6A6A6A] border-[1px] rounded-[3px] w-[124px] h-[21px] text-xs font-medium">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Customer Review</option>
          <option>New</option>
          <option>Polygon:Low to High</option>
          <option>Polygon:High to Low</option>
        </select>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        gap-2 max-w-sm mx-auto md:max-w-none md:mx-0 mt-2"
      >
        <Items currentItems={currentItems} />
        <ReactPaginate
          className="flex justify-center items-center p-5 text-2xl font-medium gap-4 ps-[440px]"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Home;
