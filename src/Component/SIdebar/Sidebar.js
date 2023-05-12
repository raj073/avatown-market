import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-full p-4">
      <nav className="space-y-4 text-sm">
        <div className="space-y-1">
          <h2 className="text-xs font-bold">Category</h2>
          <div className="flex flex-col font-medium text-xs space-y-1 ps-3">
            <Link to="/">Full Avatar</Link>
            <Link to="/">Others</Link>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xs font-bold">Contents</h2>
          <div className="flex flex-col font-medium text-xs space-y-1 ps-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                VRChat(Quest)
              </Link>
              <div className="bg-[#75DE73] w-[12px] h-[12px] rounded-full ml-[6px]"></div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                VRChat(PCVR)
              </Link>
              <div className="bg-[#3CD4F5] w-[12px] h-[12px] rounded-full ml-2"></div>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                Others
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xs font-bold">Price</h2>
          <div className="flex flex-col font-medium text-xs space-y-1 ps-3">
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                Under $10
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                $10 to $20
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                $20 to $30
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                $30 to $40
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                $40 to $50
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                $50 to $70
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                $70 & above
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xs font-bold">Polygon amount</h2>
          <div className="flex flex-col font-medium text-xs space-y-1 ps-3">
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                Under △7,500
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                △7,500 to △7,500
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                △10,000 to △15,000
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                △15,000 to △20,000
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                △20,000 to △32,000
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                △32,000 to △70,000
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link to="/" className="ps-[6px]">
                △70,000 & above
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xs font-bold">Auto Upload Support</h2>
          <div className="flex flex-col font-medium text-xs space-y-1 ps-3">
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link className="ps-[6px]">Supported</Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="border-gray-[#6A6A6A] rounded-sm h-3 w-3"
              />
              <Link className="ps-[6px]">Unsupported</Link>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
