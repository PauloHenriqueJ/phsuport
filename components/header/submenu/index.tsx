import { Container } from "@/components/container";

export function SubMenu (){
    return (
        <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
                <ul className="flex  text-white gap-5  items-center justify-center ">
                    <li className="text-black text-center justify-center bg-blue-300 rounded-lg p-0.5 hover:font-bold">
                        <a href="/manuntencao">Manuntenção preventiva</a>
                    </li>
                    
                    <li className="text-black text-center justify-center bg-blue-300 rounded-lg p-0.5 hover:font-bold" >
                        <a href="/automacao">Automação residencial</a>
                    </li>
                </ul>
                <div className="border-b mb-1 border-slate-200 my-4"></div>
            
        </div>
        </Container>
    )
}