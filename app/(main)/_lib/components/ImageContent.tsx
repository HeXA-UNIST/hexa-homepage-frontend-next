import WebConstants from "../../../_constants/web_constants";
import Image from "next/image";

import { IAttachment } from "../models/seminar/Seminar";

export async function ImageContent({ id, className }: { id: number; className: string }) {
    const path = `${WebConstants.API_URL}/attachment?attachmentId=${id}`;
    return <Image className={className} src={path} width={310} height={340} alt="" />;
}

export function FileDownload({
    attachment,
    className,
}: {
    attachment: IAttachment;
    className: string;
}) {
    // const [downloadUrl, setDownloadUrl] = useState<string>("/");

    // const handleDownload = async () => {
    //     // const params = {
    //     //     attachmentId: attachment.fileId,
    //     // };
    //     try {
    //         // const res = await axios.get(`${WebConstants.API_URL}/attachment`, {
    //         //     params,
    //         //     responseType: "blob",
    //         // });
    //         const link = document.createElement("a");
    //         const url = `${WebConstants.API_URL}/attachment?attachmentId=${attachment.fileId}`;
    //         link.href = url;
    //         link.setAttribute("download", attachment.fileName);
    //         document.body.appendChild(link);
    //         link.click();
    //         link.remove();
    //     } catch (err) {
    //         console.error("파일 다운로드 실패:", err);
    //     }
    // };

    return (
        <div className={className}>
            <a href={`${WebConstants.API_URL}/attachment?attachmentId=${attachment.fileId}`} download={attachment.fileName}>
                {attachment.fileName}
            </a>
        </div>
    );
}
