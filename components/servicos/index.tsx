import Link from "next/link"
import Image from "next/image"
import { BiSolidWrench } from "react-icons/bi"
import { ServiceProps } from "@/app/utils/types/services"

interface ServiceCardProps {
    service: ServiceProps
}

export function ItemService({service}: ServiceCardProps){
    return (
        
        <div id="servicos">
        <section className="w-full bg-slate-100 rounded-lg p-4 mb-5">
         <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
            <Image
            className="rounded-lg object-cover"
            src={service.image}
            alt={service.nome}
            quality={100}
            fill={true}
            sizes="(max-width:768px) 100vw, (max-height:1200px) 33vw"
            />
         </div>

         <div className="flex items-center justify-center flex-col">
            <p className="text-md md:text-lg font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">{service.nome}</p>
            <span className="text-black">{service.descricao}</span>
            <BiSolidWrench size={20} color="#000"/>
         </div>
        </section>
        </div>
    )
}