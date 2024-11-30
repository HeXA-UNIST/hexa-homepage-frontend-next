"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from 'next/navigation'
import Link from "next/link";

function SideBarItem({ label, url }: { label: string; url: string }) {
  const pathname = usePathname();

  const isSelected = pathname === url;

  return (
    <Link href={url}><button
      className={`
    rounded-md text-base flex flex-row justify-between items-center gap-1 px-1.5 py-2
    ${isSelected
          ? "bg-[#1B83BE] text-white hover:bg-white hover:text-black"
          : "text-stone-400 hover:bg-[#1B83BE] hover:text-white hover:bg-opacity-30"
        }
    `}
      type="button"
    >
      <div>{label}</div>
      {isSelected && <MdKeyboardArrowRight className="text-base" />}
    </button></Link>
  );
}

export function AdminSideBar() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-white text-2xl font-bold text-left">
        HEXA
        <br />
        관리자 페이지
      </div>
      <div className="w-full flex flex-col gap-1">
        <SideBarItem label="프로젝트" url="/admin/project" />
        <SideBarItem label="뉴스" url="/admin/news" />
        <SideBarItem label="세미나" url="/admin/seminar" />
        <SideBarItem label="서비스" url="/admin/service" />
      </div>
    </div>
  );
}
