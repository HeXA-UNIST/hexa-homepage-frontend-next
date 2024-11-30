import { AdminSideBar } from "../_lib/views/SideBar";
import NotificationPopup from "../_lib/views/NotificationPopup";

import "./globals.css";

export default function AdminRouter({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO : 관리자 페이지 레이아웃을 메인 화면의 outlet이 되록록 할 때 h-screen을 h-full로 변경해야 합니다.
  return (
    <html>
      <body className="w-full h-screen min-h-0 min-w-0 relative flex flex-row gap-12 p-10">
        <nav className="h-full w-64 relative">
          <AdminSideBar />
        </nav>
        <main className="flex-1 h-full relative">
          {children}
        </main>
        <NotificationPopup />
      </body>
    </html>
  );
}
