import React, { useEffect, useRef } from "react";

type UserCardProps = {
  user: { id: number; name: string; role?: string };
  highlight?: boolean;
  onSelect: (id: number) => void;
  className?: string;
  children: React.ReactNode;
};

const UserCard = ({
  user,
  highlight,
  onSelect,
  className,
  children,
}: UserCardProps) => {
  const domAcc = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(iden<number>(3));
  }, []);

  const iden = <T,>(value: T): T => {
    return value;
  };

  return (
    <div
      className={className}
      onClick={() => onSelect?.(user.id)}
      style={{ backgroundColor: highlight ? "yellow" : "white" }}
    >
      <h3>{user.name}</h3>
      <h6>{user.id}</h6>

      <p>{user.role || "No Role Assigned"}</p>

      {children}
    </div>
  );
};

export default UserCard;
