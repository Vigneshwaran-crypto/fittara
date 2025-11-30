import React, { forwardRef, useState, Ref } from "react";
import { useParams } from "react-router-dom";

type UserParams = {
  id: string;
  age: string;
  DOB?: string;
};

const RealFc: React.FC = () => {
  const { DOB, age, id } = useParams<UserParams>(); //this always must be string
  const [myName, setMyName] = useState<string>("");

  const numId = Number(id);

  const numDb: number | null = DOB ? Number(DOB) : null;

  //   Array
  let ages: Array<number> = [1, 2, 3];
  let nms: string[] = ["ji", "helo"];

  //   tuple
  let tps: [string, number, bigint] = ["vig", 10, 1963871683761726317n];

  // any

  let rand: unknown;

  rand = "hello";
  rand = 10;

  // if(typeof rand === "string") rand.

  return <h1>Hello</h1>;
};

export default RealFc;
