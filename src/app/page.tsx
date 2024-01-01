import { CommitCard } from '@/components/CommitCard';
import { Header } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { SearchForm } from '@/components/SeachForm';

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <SearchForm />
      <div className="md:grid grid-cols-2">
        <CommitCard />
        <CommitCard />
      </div>
    </>
  );
}
