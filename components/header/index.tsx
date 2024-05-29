
import Logo from '@/public/novaLogo1.png'
import Image from 'next/image'
import Link from 'next/link'
export function Header (){
    return(
        <header className="flex  w-full h-16 bg-white mb-10" id='home'>
            <div className="container mx-auto flex items-center h-full ">
                <div className="w-full">
                    <Link href="/">
                        <Image quality={100} priority={true} className='hidden md:flex w-80 h-40 mt-20' src={Logo} alt="logomarca "  />
                    </Link>
                </div>
                <div className="w-1/2 flex  mx-24 items-center justify-center ">
                    <nav className="flex items-start justify-start ">
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