import React from "react";

import { useContext } from "react";
import { AvatarContext } from "../../Contexts/AvatarContext";
import Avatar from "../Avatar/Avatar";

const Home = () => {
  const { avatar } = useContext(AvatarContext);
  console.log(avatar);
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
        {avatar.map((singleAvatar) => {
          return (
            <Avatar key={singleAvatar.id} singleAvatar={singleAvatar}></Avatar>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
