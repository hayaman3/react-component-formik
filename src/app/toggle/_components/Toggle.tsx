import { useState, ChangeEvent } from "react";

export default function ToggleSwitch() { 
  const [switchState, setSwitchState] = useState(true);  
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("---", e.target.checked);
    setSwitchState(!switchState);
  }
  return (    
      <input 
        id="checkbox" 
        type="checkbox" 
        checked={switchState}
        onChange={handleOnChange} />    
  );
}
}
