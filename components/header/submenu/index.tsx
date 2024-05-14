export function SubMenu (){
    return (
        <div className="flex w-full h-10 mx-8">
            
                <ul className="flex  text-white gap-5  items-center ">
                    <li className="text-black bg-blue-300 rounded-lg p-1 hover:font-bold">
                        <a href="/manuntencao">Manuntenção preventiva</a>
                    </li>
                    
                    <li className="text-black bg-blue-300 rounded-lg p-1 hover:font-bold" >
                        <a href="/automacao">Automação residencial</a>
                    </li>
                </ul>
                <div className="border-b mb-1"></div>
            
        </div>
    )
}