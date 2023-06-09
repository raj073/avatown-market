import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { AvatarContext } from "../../Contexts/AvatarContext";

const Avatar = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { avatar } = useContext(AvatarContext);
  //Destructuring Product
  const { id, title, price, rating, avatarName, pc, image, description } = item;
  return (
    <div className="flex justify-center items-center">
      <div className="container flex justify-center">
        <div>
          <div className="relative transition duration-500 rounded-lg">
            <Link className="hover:cursor-pointer" to={`/avatar/${id}`}>
              <img
                className="rounded-lg w-[250px] h-[250px]"
                src={image}
                alt=""
              />

              <div>
                <h1 className="text-left text-base">{title}</h1>
              </div>
            </Link>
            {/* Review Option */}
            <div className="flex justify-between">
              <div className="flex justify-center items-center">
                <AiFillStar className="text-base text-orange-500"></AiFillStar>
                <AiFillStar className="text-base text-orange-500"></AiFillStar>
                <AiFillStar className="text-base text-orange-500"></AiFillStar>
                <AiFillStar className="text-base text-orange-500"></AiFillStar>
                <AiFillStar className="text-base text-orange-500"></AiFillStar>
                <span className="text-xs ps-2 font-medium text-[#6A6A6A]">
                  {rating}
                </span>
              </div>
              <VscHeart className="text-[#6A6A6A] text-lg"></VscHeart>
            </div>
            {/* Avatar Option */}
            <div className="flex items-center">
              <img
                className="w-[21px] h-[21px] rounded-full"
                src="https://i.ibb.co/vYRVqL3/VRC-image-A-F.png"
                alt="avatar"
              />
              <h1 className="text-[#6A6A6A] text-[10px] font-medium ps-2">
                {avatarName}
              </h1>
            </div>
            <div>
              <span className="text-[12px] font-medium">$</span>
              <span className="font-medium text-2xl">{price}</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#3CD4F5] w-[17px] h-[17px] rounded-full"></div>
              <h1 className="text-[11px] font-medium ps-2">{pc}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[11px] text-black font-medium w-[215px] h-8">
                {description}
              </h1>
              <IoDownloadOutline className="text-xl text-[#6A6A6A]"></IoDownloadOutline>
            </div>
            <button
              onClick={() => addToCart(avatar, id)}
              className="absolute flex justify-center items-center top-2 right-2 w-[52px] h-6 bg-blue-600 rounded-lg cursor-pointer"
            >
              <FaCartPlus className="text-white ps-1"></FaCartPlus>
              <span className="text-xs text-center text-white ps-1 pr-1 font-medium">
                Add
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
