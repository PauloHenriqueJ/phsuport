import { SubMenu } from "@/components/header/submenu";
import Image from "next/image";
import Link from "next/link";

import Img2 from "@/public/img3.png";
import { ServiceProps } from "./utils/types/services";
import { ItemService } from "@/components/servicos";
import Footer from "@/components/footer";
import { Container } from "@/components/container";

async function getServiceData() {
  try {
    const res = await fetch(`https://my-json-server.typicode.com/PauloHenriqueJ/apiphsuport/servicos`, {
      next: { revalidate: 320 },
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const data: ServiceProps[] = await getServiceData();

  return (
    
    <main className="w-full h-screen">
    
      <SubMenu />
      <div className="bg-bg-2 h:w-full h-[300px] md:h-[500px] bg-no-repeat rounded-lg bg-contain md:bg-cover opacity-70 hover:opacity-100 hover:scale-95 duration-200">
        <h1 className=" flex text-white text-lg md:text-4xl font-bold pt-9 tracking-widest text-wrap text-center ">
          
          Transforme a sua frustração em solução - onde quer que você esteja,
          nós cuidamos do seu computador. Confie na nossa expertise para manter
          seu mundo digital funcionando sem problemas!
        </h1>
        <Link
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987202769"
          target="_blank"
        >
          <button
            className="flex text-center items-center justify-center bg-green-500 rounded-lg mx-auto mt-2  text-white text-2xl px-1 p-2
         md:mt-40 hover:bg-slate-200 hover:text-black
"
          >
            Agende sua visita
          </button>
        </Link>
      </div>
      <Container>

      <h1 className="text-center my-2 md:text-center text-4xl font-bold text-black antialiased md:text-5xl">
        Sobre
      </h1>

      <div className="w-full mx-auto text-wrap text-start md:flex md:flex-grow">
        <p className="text-center text-start mx-4 text-wrap  md:my-10 mx-auto md:text-xl tracking-widest">
          Ofereço serviços de manutenção para computadores e notebooks
          diretamente no conforto da sua residência ou empresa. Nosso objetivo é
          fornecer suporte eficiente e conveniente para atender às necessidades
          dos usuários domésticos e corporativos. Temos parcerias com várias
          lojas, o que nos permite adquirir peças e componentes de alta qualidade
          a preços acessíveis. Dessa forma, conseguiremos oferecer aos clientes a
          conveniência de não precisarem se deslocar até uma loja para comprar
          os produtos necessários para a manutenção de seus equipamentos. Ao
          escolher os nossos serviços, os clientes podem contar com um atendimento
          personalizado, soluções eficazes para problemas de computadores e
          notebooks, e a garantia de que seus dispositivos serão reparados por
          um profissional qualificado. Nossa missão é garantir que os clientes
          tenham uma experiência tranquila e sem complicações ao lidar com
          questões técnicas relacionadas a seus equipamentos de informática.
        </p>
        <Image
          src={Img2}
          width={800}
          height={500}
          quality={100}
          alt="Logo"
          className="my-10 rounded-full md:flex md:w-[500px] h-[350px]"
        />
      </div>

      <div dir="servicos">
        <h1 className="text-2xl text-center items-center justify-center md:text-3xl font-bold">
          CONHEÇA NOSSOS SERVIÇOS
        </h1>

        <section className=" grid gap-7 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <ItemService key={item.id} service={item} />
          ))}
        </section>
      </div>
      </Container>

      <Footer />
     
    </main>
   
  );
}
