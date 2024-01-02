'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

interface APIData {
  name: string;
  avatar_url: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  public_repos: number;
  html_url: string;
}

interface ApiContextType {
  apiData?: APIData;
}

interface ApiDataProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext({} as ApiContextType);

export function ApiContextProvider({ children }: ApiDataProviderProps) {
  const [apiData, setApiData] = useState<apiData>();

  async function loadAPI() {
    const response = await fetch('https://api.github.com/users/andersoninn');
    const data = await response.json();

    console.log(data);
    setApiData(data);
  }

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <ApiContext.Provider value={{ apiData }}>{children}</ApiContext.Provider>
  );
  <p></p>;
}
