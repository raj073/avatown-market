import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AvatarContext = createContext();

const AvatarProvider = ({ children }) => {
  const [avatar, setAvatar] = useState([]);

  //fetch Avatar
  useEffect(() => {
    const fetchAvatar = async () => {
      const response = await fetch("avatar.json");
      const data = await response.json();
      setAvatar(data);
    };
    fetchAvatar();
  });
  return (
    <AvatarContext.Provider value={{ avatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarProvider;
