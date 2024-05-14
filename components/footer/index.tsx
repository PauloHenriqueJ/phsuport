import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { TbClockHour8 } from "react-icons/tb";





export default function Footer(){
    return (
        <footer id="contato" className="bg-black text-white p-4 w-1/2  mx-auto">
            <h1 className="font-bold text-3xl text-center md:my-5">Contatos</h1>
            <div className=" flex flex-col gap-2  md:flex-row md:justify-between md:gap-3 md:items-center">
                <HiOutlineMail size={30} color="#fff"/>
                <p className="text-xl"> 
                    <a href="mailto:ph.jesus@gmail.com" className="hover:text-blue-300"> 
                    Email: ph.jesus@gmail.com
                    </a>
                </p>
                <p>
                <FaPhone size={25} color="#fff"/>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987202769" target="_blank" className="hover:text-blue-300"> 
                    Telefone: 71987202769
                    </a>
                </p>

                <p>
                    <TbClockHour8 size={25} color="#fff"/>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987202769" target="_blank" className="hover:text-blue-300"> 
                    Horário de funcionamento: Segunda a Sexta das 08:00 às 18:00
                    </a>
                </p>
               

        
            </div>


        </footer>
    )
}