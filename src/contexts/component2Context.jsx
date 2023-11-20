import { createContext, useState } from "react";

export const Component2Context = createContext(null);

const Component2Provider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Component2Context.Provider
      value={{
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </Component2Context.Provider>
  );
};

export default Component2Provider;
