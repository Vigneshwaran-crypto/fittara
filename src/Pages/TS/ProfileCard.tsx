import React from "react";
type User = { id: number; name: string; age: string };
type ProfileProps = { user: User; onMessage?: (id: number) => void };

const ProfileCard = ({ user, onMessage }: ProfileProps) => {
  const greet = (nm: string) => {
    return <h1>Hello</h1>;
  };

  type gProp = { name: string; age?: number };
  // const tGreet = ({name,age}:gProp)=>{
  //   return <h1>{`Hello ${age&&"Age :"+age}`}</h1>
  // }

  const tGreet = (name: string, age: number) => {
    return <h1>{`Hello ${age && "Age :" + age}`}</h1>;
  };

  const calGe = () => {
    tGreet("vig", 10);
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.age}</p>
      <button onClick={() => onMessage?.(user.id)}>Message</button>
    </div>
  );
};

export default ProfileCard;
