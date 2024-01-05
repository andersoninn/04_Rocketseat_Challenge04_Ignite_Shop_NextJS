'use client';
import { CommentsArea } from '@/components/CommentsArea';
import { Profile } from '@/components/Profile';
import { SearchForm } from '@/components/SearchForm';
import { FetchContextProvider } from '@/contexts/ApiContext';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
   return (
      <>
         <Profile />
         <Suspense fallback={<Loading />}>
            <FetchContextProvider>
               <SearchForm />

               <CommentsArea />
            </FetchContextProvider>
         </Suspense>
      </>
   );
}
