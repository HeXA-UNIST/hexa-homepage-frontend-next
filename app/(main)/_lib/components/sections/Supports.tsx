// import "@css/home/Supports.css";
import Link from "next/link";
import Image from "next/image";
import ContentFrame from "../ContentFrame";

function Supports() {
    return (
        <div className="supports-area">
            <ContentFrame
                title="지원"
                subTitle="HeXA는 다양한 곳으로부터 지원받고 있어요."
                // icon="💎"
            >
                <div className="flex flex-warp flex-row gap-5">
                    <Link href="https://www.mobis.co.kr/kr/index.do" aria-label="link" className="w-36 h-36 overflow-hidden rounded-3xl flex justify-center items-center bg-white">
                        <Image className="p-2 w-full h-auto" src="/images/supports/Hyundai_Mobis_Logo.png" width={144} height={144} alt="" />
                    </Link>
                    <Link href="https://savehome.kr/about" aria-label="link" className="w-36 h-36 overflow-hidden rounded-3xl flex justify-center items-center bg-white">
                        <Image className="p-2 w-full h-auto" src="/images/supports/jipjikyeo.png" width={144} height={144} alt="" />
                    </Link>
                    {/* <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a>
                    <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a>
                    <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a>
                    <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a> */}
                </div>
            </ContentFrame>
        </div>
    );
}

export default Supports;
