import { api } from '@/lib/axios';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface IssuesDataType {
  total_count: number;
  items: {
    id: number;
    title: string;
    body: string;
    created_at: string;
  }[];
}

interface FetchContextType {
  issues?: IssuesDataType;
  fetchIssuesAPI: (query?: string) => Promise<void>;
}

interface FetchContextProviderProps {
  children: ReactNode;
}

export const FetchContextApi = createContext({} as FetchContextType);

export function FetchContextProvider({ children }: FetchContextProviderProps) {
  const [issues, setIssues] = useState<IssuesDataType | undefined>();

  async function fetchIssuesAPI(query?: string) {
    const response = await api.get(
      '/search/issues?q=repo:andersoninn/04_Rocketseat_Challenge04_Git_blog_NextJS',
      {
        params: {
          q: `${query}+ repo:andersoninn/04_Rocketseat_Challenge04_Git_blog_NextJS`,
        },
      }
    );
    setIssues(await response.data);
  }

  useEffect(() => {
    fetchIssuesAPI();
  }, []);

  useEffect(() => {
    // console.log(issues?.items);
    // console.log(issues?.items[0].title);
  }, [issues]);

  return (
    <FetchContextApi.Provider value={{ issues, fetchIssuesAPI }}>
      {children}
    </FetchContextApi.Provider>
  );
}
