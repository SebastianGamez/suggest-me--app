// Router
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { SuggestMeRouter } from "./SuggestMeRouter";


const SuggestMeApp = () => {
  
  const [user, setUser] = useState({logged: null, id: null, pleasures: null});

  return (
    
    <>
      
      <UserContext.Provider value={ { user, setUser } } >
        
        <SuggestMeRouter />
        
      </UserContext.Provider>      
      <footer className='root__footer'>©Todos los derechos reservados. </footer>

    </>

  );
  
}

export default SuggestMeApp;