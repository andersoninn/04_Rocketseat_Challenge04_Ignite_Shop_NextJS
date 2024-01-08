import { FetchContextType, IssuesDataType } from '@/@types/types';
import { api } from '@/lib/axios';
import { ReactNode, createContext, use, useEffect, useState } from 'react';

interface FetchContextProviderProps {
   children: ReactNode;
}

export const FetchContextApi = createContext({} as FetchContextType);

export function FetchContextProvider({ children }: FetchContextProviderProps) {
   const [issues, setIssues] = useState<IssuesDataType | undefined>();

   async function fetchIssuesAPI(query?: string) {
      const response = await api.get(
         `search/issues?q=${
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

   return (
      <FetchContextApi.Provider value={{ issues, fetchIssuesAPI }}>
         {children}
      </FetchContextApi.Provider>
   );
}
