import React, { useContext } from "react";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";

const LeftNav = () => {
  const { selectCategories , setSelectCategories, mobileMenu } =
    useContext(Context);
    const navigate = useNavigate() ;

  let clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);

      case "home":
        return setSelectCategories(name);

      case "menu":
        return false;

      default:
        break;
    }
  };

  return (
    <div
      className={
        "md:block w-[240px] overflow-y-auto h-full py-4 bg-black fixed z-10  md:translate-x-0 translate-x-[-240px] transition-all  " +( mobileMenu ? "translate-x-0" : "translate-x-[-240px] ")
      }
    >
      <div className="flex-px-5 flex-col">
        {categories.map((val, id) => {
          return (
            <React.Fragment key={id}>
              <LeftNavMenuItem
                text={val.type == "home" ? "Home" : val.name}
                icon={val.icon}
                action={() => {
                                clickHandler(val.name , val.type)
                                navigate("/")
                  }}
                className={selectCategories === val.name ? "bg-white/[0.15]" : ""}
              />
              {val.divider && <hr className="my-5 border-white/[0.2] " />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2] " />
        <div className=" text-white/[0.5] text-[12px]  text-left px-3">
          Clone by: Rahul Kandwal.
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
