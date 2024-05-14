import { HiOutlineMail } from "react-icons/hi";
import { TbClockHour8 } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";






export default function Footer(){
    return (
        <footer id="contatos" className="bg-black text-white p-4 w-auto  mx-auto">
            <h1 className="font-bold text-3xl text-center md:my-5">Contatos</h1>

            <div className=" flex flex-col gap-2  md:flex-row justify-between md:items-center">
                
                <p className="text-xl"> 
                <HiOutlineMail size={30} color="#fff"/>
                    <a href="mailto:ph.jesus@gmail.com" className="hover:text-blue-300"> 
                    Email: ph.jesus@gmail.com
                    </a>
                </p>
                <p>
                <FaWhatsapp size={25} color="#fff"/>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987202769" target="_blank" className="hover:text-blue-300"> 
                    Telefone: 71987202769
                    </a>
                </p>

                <p>
                    <TbClockHour8 size={25} color="#fff"/>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987202769" target="_blank" className="hover:text-blue-300"> 
                    Segunda a Sexta das <strong className="text-green-600">08:00 às 18:00</strong>
                    </a>
                </p>
            
            </div>


        </footer>
    )
}