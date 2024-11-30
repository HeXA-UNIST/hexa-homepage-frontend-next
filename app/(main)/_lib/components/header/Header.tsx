import Image from "next/image";

import Link from "next/link";
import styles from "./header.module.css";
// import { useMediaQuery } from "react-responsive";

// import "@css/app/Header.css";

function Header(/* { transparent = false }: { transparent?: boolean } */) {
    //const scrolling = useScrollPosition();
    //   const isMobile = useMediaQuery({
    //     query: "(max-width: 700px)",
    //   });

    // TODO: 나중에 로그인 기능이 생기면 연동하기ㅋ
    //   const isLoggedIn = false;

    //   const height = scrollPosition === 0 ? "74px" : "114px";

    return (
        <header className="fixed top-0 w-full z-50 grid justify-items-center">
            <nav className={styles.animatedHeader}>
                <div className="flex flex-row items-center h-16 p-4 rounded-lg font-medium text-base text-gray-200">
                    <Link
                        className="flex flex-row items-center"
                        href="/"
                    >
                        <Image
                            className="w-8 ml-1 mr-3"
                            src="/images/icon/hexaLogo.png"
                            width={32}
                            height={32}
                            alt="HeXA logo"
                        />
                        <div className=" text-xl font-bold mb-[3px]">HeXA</div>
                    </Link>
                    <div className="flex flex-grow-[1] ml-10">
                        <div className="flex justify-center items-center w-32">
                            <Link
                                className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                href="/activity/projects"
                            >
                                <div className="mb-[3px]">프로젝트</div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center w-32">
                            <Link
                                className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                href="/activity/services"
                            >
                                <div className="mb-[3px]">서비스</div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center w-32">
                            <Link
                                className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                href="/activity/news"
                            >
                                <div className="mb-[3px]">소식</div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center w-32">
                            <Link
                                className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                href="/activity/seminars"
                            >
                                <div className="mb-[3px]">세미나</div>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="ml-auto max-w-2xl flex justify-evenly flex-grow-0">
                                {isLoggedIn ? (
                                    [
                                        <div className="flex justify-center items-center w-32">
                                            <Link
                                                className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                                to="test"
                                            >
                                                <div className="mb-[3px]">
                                                    마이페이지
                                                </div>
                                            </Link>
                                        </div>,
                                        <div>
                                            <div className="box">
                                                <img
                                                    className="profile"
                                                    src={profileimg}
                                                    alt="face"
                                                />
                                            </div>
                                        </div>,
                                    ]
                                ) : (
                                    <div className="flex justify-center items-center w-32">
                                        <Link
                                            className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                            to="/login"
                                        >
                                            <div className="mb-[3px]">
                                                로그인
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div> */}
                </div>
            </nav>

        </header>
    );
}
/*
Header.defaultProps = {
  transparent: false,
};
*/
export default Header;
