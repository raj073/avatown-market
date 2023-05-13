import React from "react";
import { useParams } from "react-router-dom";
import avatarJson from "../../AvatarJson/avatar.json";
import { FaCartPlus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";
import { IoDownloadOutline } from "react-icons/io5";

const AvatarDetails = () => {
  const { id } = useParams();

  //get the single avatar based on the avatar id
  const singleAvatar = avatarJson.find((item) => {
    return item.id === parseInt(id);
  });

  //Destructuring Product
  const { title, price, rating, avatarName, pc, image, description } =
    singleAvatar;

  //if product not found
  if (!singleAvatar) {
    return (
      <section>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            <h2 className="text-center text-xl font-semibold mt-4">
              Product is Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="">
      <div className="flex justify-between border-b-2 mb-5 mt-3">
        <h1 className="font-semibold text-2xl pb-3">Avatar Details View</h1>
      </div>
      <div className="rounded-lg shadow-md md:flex">
        <img
          src={image}
          alt="Boat"
          className="rounded-t-lg 
       md:w-1/3 w-1/2 h-1/2 md:rounded-l-lg md:rounded-tl-lg"
        />

        <div className="p-6 md:w-2/3 w-1/2 h-1/2">
          <h2 className="mb-5 font-bold text:lg md:text-2xl hover:text-blue-500">
            {title}
          </h2>
          <h2 className="mb-5 text-[#6A6A6A] text-base font-medium">
            {description}
          </h2>

          <div className="flex justify-between mb-4">
            <div className="flex justify-center items-center">
              <AiFillStar
                size={30}
                className="text-base text-orange-500"
              ></AiFillStar>
              <AiFillStar
                size={30}
                className="text-base text-orange-500"
              ></AiFillStar>
              <AiFillStar
                size={30}
                className="text-base text-orange-500"
              ></AiFillStar>
              <AiFillStar
                size={30}
                className="text-base text-orange-500"
              ></AiFillStar>
              <AiFillStar
                size={30}
                className="text-base text-orange-500"
              ></AiFillStar>
              <span className="text-xl ps-2 font-medium text-[#6A6A6A]">
                {rating}
              </span>
            </div>
            <VscHeart className="text-pink-600 text-3xl font-bold"></VscHeart>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-medium">Price:</span> &nbsp;&nbsp;
              <span className="text-lg font-medium">$</span>
              <span className="font-medium text-3xl">{price}</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#3CD4F5] w-[17px] h-[17px] rounded-full"></div>
              <h1 className="text-[11px] font-medium ps-2">{pc}</h1>
            </div>
          </div>

          {/* Avatar */}
          <div className="border-b-2 mt-3"></div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://i.ibb.co/vYRVqL3/VRC-image-A-F.png"
                alt="Avatar"
              />
              <p className="text-[#6A6A6A] text-base font-medium">
                {avatarName}
              </p>
            </div>
            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white md:font-bold text-xs md:text-base 
              py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded ml-12 md:m-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarDetails;
