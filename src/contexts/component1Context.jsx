import { createContext, useState } from "react";

export const Component1Context = createContext(null);

const Component1Provider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Component1Context.Provider
      value={{
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </Component1Context.Provider>
  );
};

export default Component1Provider;
