import React from 'react'
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

const LeftNavMenuItem = ({text , icon , className , action }) => {

  return (
    <div className={'text-white/[0.8] text-sm font-semibold cursor-pointer  h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ' +className}
    onClick={action}
    >
      <span className='text-lg mr-6'> {icon}</span>
       {text}

      </div>
  )
}

export default LeftNavMenuItem