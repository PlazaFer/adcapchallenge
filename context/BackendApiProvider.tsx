import { createContext, useContext, ReactNode } from "react";
import BackendApi from "@/api/api";

const BackendApiContext = createContext(BackendApi);

export const BackendApiProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BackendApiContext.Provider value={BackendApi}>
      {children}
    </BackendApiContext.Provider>
  );
};

export const useBackendApi = () => {
  return useContext(BackendApiContext);
};
