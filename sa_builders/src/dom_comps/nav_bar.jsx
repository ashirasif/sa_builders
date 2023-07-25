

function NavBar({cont}) {

         
    return (
        <div className="nav-bar w-full container flex flex-row text-white justify-evenly gap-5">
        
            {Object.keys(cont).map(key => 
              
                <a href={cont[key]} key={key} className="basis-auto">{key}</a>

            )}        

        </div>
    )
}


export default NavBar
