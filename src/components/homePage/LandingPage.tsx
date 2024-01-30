import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
    
function LandingPage() { 

    const [text, setText] = useState('having fun'); 

    useEffect(() => {
        const texts = ['doing', 'having fun', 'playing'];
        let index = 0;
        const intervalId = setInterval(() => {
          index = (index + 1) % texts.length;
          setText(texts[index]);
        }, 1000); // Change text every 2 seconds
    
        return () => clearInterval(intervalId); // Clean up on component unmount
      }, []); 

  return (
    <> 
        <h1 className="m-0 fw-bold">Learn by {text} </h1>  
            <h4 className="mb-4">Your Digital Learning Companion</h4> 
            <div className=""> 
                <NavLink to="/getting-started">
                    <button className="btn btn-primary m-1">Comenzar ahora</button> 
                </NavLink>
                    <button className="btn btn-success m-1">WhatsApp</button>
        </div> 
    </>
  );
}

export default LandingPage;