
import Logo from '@/public/NovaLogo.png'
import Image from 'next/image'
import Link from 'next/link'
export function Header (){
    return(
        <header className="flex  w-full h-16 bg-white mb-10 " id='home'>
            <div className="container mx-auto flex justify-between items-center h-full ">
                <div className="w-full">
                    <Link href="/">
                        <Image quality={100} priority={true} className=' w-80 h-36 mt-10' src={Logo} alt="logomarca "  />
                    </Link>
                </div>
                <div className="w-1/2 ">
                    <nav className="flex">
                        <Link href="/" className="px-4 py-2 text-gray-800 md:text-xl hover:bg-blue-300  rounded-lg transition-all duration-200">
                            Home
                        </Link>
                        <Link href="/#servicos" className="px-4 py-2 text-gray-800 md:text-xl hover:bg-blue-300 rounded-lg transition-all duration-200">
                            Serviços
                        </Link>
                        <Link href="/#contatos" className="px-4 py-2 text-gray-800 md:text-xl hover:bg-blue-300 rounded-lg transition-all duration-200">
                            Contato
                        </Link>
                    </nav>
                </div>
            </div>
            
        </header>

    )
}