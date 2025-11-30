import React from "react"
type GProp = {name:String,age?:number}


const Greet:React.FC<GProp> = ({name,age})=>{
return <h1>Hello {name} {age && `(Age: ${age})`}</h1>;
}