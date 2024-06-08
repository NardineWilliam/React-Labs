import { useState } from "react";

const useTimer =(initialTimer=10)=>{
    const [timer,setTimer] = useState(initialTimer);
    const dec=()=>{
        if(timer>0){
            setTimer(old=>old-1)
        }
    }

    const reset = ()=>{
        setTimer(initialTimer)
    }
   return [timer,dec,reset]
}

export default useTimer;