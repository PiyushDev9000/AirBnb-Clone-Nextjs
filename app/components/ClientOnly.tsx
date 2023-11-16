"use client";
interface ClientOnlyProps {
  children: React.ReactNode;
}

import { useEffect, useState } from "react";

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
