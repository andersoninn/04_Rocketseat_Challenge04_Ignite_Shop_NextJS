import { useEffect, useState } from 'react';
import { CommitCard } from './CommitCard';
import { searchFormSchema } from './SearchForm';

export function CommentsArea() {
  const [issuesData, setIssuesData] = useState();

  async function loadApiIssues() {
    const response = await fetch(
      'https://api.github.com/search/issues?q=repo:andersoninn/04_Rocketseat_Challenge04_Git_blog_NextJS'
    );
    const data = await response.json();

    setIssuesData(data);
    console.log(data);
  }

  useEffect(() => {
    loadApiIssues();
  }, []);

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
