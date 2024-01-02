'use client';
import { CommentsArea } from '@/components/CommentsArea';
import { Header } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { SearchForm } from '@/components/SearchForm';
import { ApiContextProvider } from '@/contexts/ApiContext';

export default function Home() {
  return (
    <>
      <Header />
      <ApiContextProvider>
        <Profile />
        <SearchForm />
        <CommentsArea />
      </ApiContextProvider>
    </>
  );
}
