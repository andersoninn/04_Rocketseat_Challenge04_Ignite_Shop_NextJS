'use client';
import { CommentsArea } from '@/components/CommentsArea';
import { Header } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { SearchForm } from '@/components/SearchForm';
import { FetchContextProvider } from '@/contexts/APIcontext';

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <FetchContextProvider>
        <SearchForm />
        <CommentsArea />
      </FetchContextProvider>
    </>
  );
}
