import { Container } from "@/components/container";
import { SubMenu } from "@/components/header/submenu";
import Image from "next/image";
import Link from "next/link";

export default function Automacao() {
  return (
   
    <main className="w-full h-screen">
      <SubMenu/>
     
      <div className="bg-bg-3 h:w-full h-[300px] md:h-[500px] bg-no-repeat rounded-lg bg-contain md:bg-cover opacity-70 hover:opacity-100 hover:scale-95 duration-200"></div>
      <Container>
      <h1 className="text-center my-3 md:text-center text-2xl font-bold text-black antialiased md:text-4xl">
      
        Casa inteligente
      </h1>
      <p className="text-center text-center antialiased mx-auto text-wrap  md:my-10 mx-auto md:text-xl tracking-widest">
        Com dispositivos conectados, você pode automatizar tarefas diárias, como
        ligar e desligar luzes, ajustar a temperatura e até preparar um café,
        economizando tempo e esforço. Controle por voz permite que você execute
        ações com comandos simples. Economia de Recursos: A automação
        inteligente ajuda a economizar energia, desligando dispositivos quando
        não estão em uso. Termostatos inteligentes ajustam a temperatura com
        base na presença e preferências, economizando na conta de energia.
        Segurança Aprimorada: Câmeras de segurança, fechaduras digitais e
        alarmes podem ser monitorados remotamente.
      </p>

      <h1 className="text-2xl text-center my-3">Algumas automações </h1>

      <div className="grid grid-col md:grid-cols-3 lg:grid-cols-4 mx-10 my-auto gap-2 items-center justify-between ">

        <div className=" relative mb-2 hover:opacity-100 hover:scale-95 duration-200">
            <a href="https://youtube.com/shorts/i2wGEZRIr2E?si=-7NaHHSsENh8Jq0e" target="_blank">
                <Image
                    src="https://i.imgur.com/x8y8MqY.jpg"
                  
                    
                    alt="Automação residencial"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </a>
        </div>

        <div className=" relative mb-2 hover:opacity-100 hover:scale-95 duration-200">
            <a href="https://youtube.com/shorts/6gzy8Oh-yaU?si=Oz1bXO9SBqui8acF" target="_blank">
                <Image
                    src="https://i.imgur.com/ziLvyOs.jpg"
                  
                    
                    alt="Automação residencial"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </a>
        </div>

        <div className=" relative mb-2 hover:opacity-100 hover:scale-95 duration-200">
            <a href="https://youtube.com/shorts/GGGLrXob-8I?feature=share" target="_blank">
                <Image
                    src="https://i.imgur.com/7ikUZdb.jpg"
                    
                    
                    alt="Automação residencial"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </a>
        </div>

      </div>
      </Container>

      <ul className="text-center gap-2 justify-between">
        <li className="text-lg tracking-normal antialiased md:text-xl">Defina o horário de ligar e desligar suas lâmpadas </li>
        <li className="text-lg tracking-normal antialiased md:text-xl">Ligue seus equipamentos de onde estiver  </li>
        <li className="text-lg tracking-normal antialiased md:text-xl"> Monitore sua casa com câmeras inteligentes </li>
        <li className="text-lg tracking-normal antialiased md:text-xl">Receba uma notificação por sensor de presença </li>


      </ul>
    </main>
  
  );
}
