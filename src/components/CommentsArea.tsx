import { CommitCard } from './CommitCard';

export function CommentsArea() {
  return (
    <>
      <div className="m-auto container max-w-[864px] grid grid-cols-2 justify-center gap-8 mt-12">
        <CommitCard />
        <CommitCard />
        <CommitCard />
        <CommitCard />
        <CommitCard />
        <CommitCard />
      </div>
    </>
  );
}
