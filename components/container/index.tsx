import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}){
    return (
        <div className="w-full max-w7xl mx-auto px-2">
            {children}
        </div>
       
        //container mx-auto px-4 sm:px-6 lg:px-8
        //w-full max-w7xl mx-auto px-2
        
    )

}
