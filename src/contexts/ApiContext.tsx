import { api } from '@/lib/axios';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  use,
  useEffect,
  useState,
} from 'react';

interface IssuesDataType {
  total_count: number;
  items: {
    id: number;
    title: string;
    body: string;
    created_at: string;
    url: string;
  }[];
}

interface FetchContextType {
  issues?: IssuesDataType;
  fetchIssuesAPI: (query?: string) => Promise<void>;
  teste1?: string;
  setTeste1: Dispatch<SetStateAction<string>>;
}

interface FetchContextProviderProps {
  children: ReactNode;
}

export const FetchContextApi = createContext({} as FetchContextType);

export function FetchContextProvider({ children }: FetchContextProviderProps) {
  const [issues, setIssues] = useState<IssuesDataType | undefined>();

  const [teste1, setTeste1] = useState<IssuesDataType | undefined>();

  async function fetchIssuesAPI(query?: string) {
    const response = await api.get(
      `https://api.github.com/search/issues?q=${
        query !== undefined ? query : ''
      }+repo:andersoninn/04_Rocketseat_Challenge04_Git_blog_NextJS`
    );

    //IT'S NOT THE BEST WAY, BUT IT'S A UNIQUE WAY THAT HAS WORKED.

    //    },
    //    // params: {
    //    //   q: query ?? '',
    //    // }
    //  });
    const resp = await response.data;

    setIssues(resp);
  }

  useEffect(() => {
    fetchIssuesAPI();
  }, []);

  // useEffect(() => {
  //   {
  //     issues?.items.map((i) => setTeste1(i.url));
  //   }
  // }, [issues]);

  return (
    <FetchContextApi.Provider
      value={{ issues, fetchIssuesAPI, teste1, setTeste1 }}
    >
      {children}
    </FetchContextApi.Provider>
  );
}
