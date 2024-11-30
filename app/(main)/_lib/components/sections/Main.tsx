import ContentArea from "../ContentArea";
import Image from "next/image";

function Main() {
    return (
        <div style={{
            position: "relative"
        }}>
            <div style={{
                zIndex: 1,
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))"
            }}></div>
            <Image src={`/images/bg.png`} alt="HeXA background image" fill={true} style={{
                objectFit: "cover",
            }} />
            <div className="pt-[540px] pb-20 mb-40" >
                <ContentArea>
                    <div className="flex flex-row font-bold text-white justify-end mb-40">
                        <div className="max-w-[18rem]" style={{
                            zIndex: 10
                        }}>
                            <div className="text-center max-w-full text-base bg-neutral-800 rounded-full p-3 mb-2">
                                유니스트 유일무이 해킹 동아리
                            </div>
                            <div className="text-center text-6xl mb-4 leading-tight">
                                HACKERS EXCITING ACADEMY
                            </div>
                        </div>
                        {/* <BannerSlides /> */}
                    </div>
                </ContentArea>
            </div>
        </div>
    );
}

export default Main;