import Link from "next/link";

import ContentArea from "../../_lib/components/ContentArea";

import ServiceSummary from "../../_lib/models/service/ServiceSummary";
import { ImageContent } from "../../_lib/components/ImageContent";

function ServiceItem({ serviceData }: { serviceData: ServiceSummary }) {
    return (
        <Link
            href={`/service/${serviceData.serviceId}`}
            className=" overflow-hidden relative flex flex-col min-w-min w-[22rem] h-48 bg-neutral-900 rounded-2xl text-left font-bold"
        >
            <ImageContent
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full blur-sm bg-slate-200 scale-110 origin-center"
                id={serviceData.thumbnail}
            />
            <div className="p-3 z-10">
                <div className="flex flex-row justify-between">
                    <div className=" px-4 py-2 text-white text-base mb-3 rounded-xl bg-opacity-30 bg-zinc-300 border-white border-2 w-fit">
                        {serviceData.title}
                    </div>
                    <div className="px-4 py-2 text-white text-lg mb-3 text-right">
                        Service
                    </div>
                </div>
            </div>
        </Link>
    );
}

async function ServiceView({ serviceList }: { serviceList: ServiceSummary[] }) {
    return (
        <ContentArea>
            <div className="min-h-[40rem]">
                <div className="grid grid-cols-[repeat(3,minmax(350px,auto))] gap-x-6 gap-y-8 mb-28">
                    {serviceList.map((service) => (
                        <ServiceItem
                            key={service.serviceId}
                            serviceData={service}
                        />
                    ))}
                </div>
            </div>
        </ContentArea>
    );
}

export default ServiceView;
