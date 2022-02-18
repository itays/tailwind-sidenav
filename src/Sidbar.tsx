import React from "react";
import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow-lg">
      <SideBarIcon icon={<FaFire size={28} />} />
      <SideBarIcon icon={<BsPlus size={32} />} />
      <SideBarIcon icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon icon={<FaPoo size={20} />} />
    </div>
  );
}

const SideBarIcon = ({ icon }: any) => (
  <div className="sidebar-icon">{icon}</div>
);

export default Sidebar;
