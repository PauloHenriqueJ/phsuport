import Image from "next/image"
export default function  Manuntencao(){
    return(
        <main className="w-full h-screen">

        
        <div className="bg-bg-1 h:w-full h-[400px] md:h-[500px] bg-no-repeat bg-contain md:bg-cover opacity-70 rounded-lg hover:opacity-100 hover:scale-95 duration-200">
        </div>

        <h1 className="text-center my-3 md:text-center text-2xl font-bold text-black antialiased md:text-4xl">
        O que é Manutenção Preventiva
      </h1>

      <div className="w-full mx-auto text-wrap text-start md:flex">
        <p className="text-center text-center mx-auto text-wrap  md:my-10 mx-auto md:text-xl tracking-widest">
        A manutenção preventiva é uma ação contínua de controle e monitoramento do computador. Seu objetivo é evitar problemas causados por falta de verificações rotineiras em vários aspectos da máquina, como:

Excesso de Poeira: Limpeza regular de poeira e sujeira acumulada em componentes como ventiladores e dissipadores de calor.
Espaço em Disco: Verificação do espaço disponível no disco rígido e otimização do armazenamento.
Troca de Peças Antigas: Avaliação e substituição de componentes desgastados, como memória RAM, discos rígidos e placas-mãe.
        </p>
        <Image
        
          src=' https://i.imgur.com/KWTfCkJ.jpg'
          width={800}
          height={500}
          quality={100}
          alt="Logo"
          className="my-10 rounded-full md:flex md:w-[500px] h-[350px]"
        />
      </div>

      <h1 className="text-center my-3 md:text-center text-2xl font-bold text-black antialiased md:text-4xl">
      Benefícios da Manutenção Preventiva:
      </h1>

      <p className="text-center text-center mx-auto text-wrap  md:my-10 mx-auto md:text-xl tracking-widest">
      Aumento da Performance: Computadores lentos podem ser otimizados por meio da manutenção preventiva.
Refrigeração Adequada: Garante que os componentes não superaqueçam, prolongando sua vida útil.
Prevenção contra Vírus e Malware: Verificações regulares reduzem o risco de infecção.
        </p>

        <h1 className="text-center my-3 md:text-center text-lg font-bold text-black antialiased md:text-3xl">
        Detecção Precoce de Problemas:
      </h1>

      <p className="text-center text-center mx-auto text-wrap  md:my-10 mx-auto md:text-xl tracking-widest">
      A manutenção regular permite identificar pequenos problemas antes que se tornem grandes. Além disso, o desempenho do computador tende a diminuir com o tempo, e a manutenção ajuda a minimizar esses impactos. <br />

<strong>Prevenção contra Vírus e Malware:</strong> <br />
Mesmo com verificações de segurança, os computadores ainda estão vulneráveis a ameaças. A manutenção preventiva ajuda a proteger contra vírus e malwares, mantendo seu sistema seguro.

Portanto, invista na manutenção preventiva para prolongar a vida útil do seu computador e garantir seu bom funcionamento! 🚀
        </p>




      
        </main>
    )
}