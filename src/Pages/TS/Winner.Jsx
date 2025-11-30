import React, { forwardRef, useImperativeHandle, useRef } from 'react';


const CustInp = forwardRef((props,ref)=>{


    const inpRef = useRef(null);



    useImperativeHandle(ref,()=>({
        focus:inpRef.current?.focus(),
        clear:inpRef.current?.focus()
    }))

    return(
        <input ref={inpRef} />
    )

})



const Winner=(props)=> {
    const parentInpRef = useRef(null);
    return (
        <div>
            <CustInp ref={parentInpRef} />
            hello
        </div>
    );
}

export default Winner;