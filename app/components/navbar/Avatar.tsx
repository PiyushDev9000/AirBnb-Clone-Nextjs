"use client";

import Image from "next/image";
import avatar from "../../../public/placeholder/avatar.jpg";
const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={avatar}
    />
  );
};
export default Avatar;
