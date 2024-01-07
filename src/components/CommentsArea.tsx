'use client';
import { useContext, useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { FetchContextApi } from '@/contexts/ApiContext';
import Skeleton from './Skeleton';
import { useRouter } from 'next/navigation';

export function CommentsArea() {
  const router = useRouter();

  const { issues, teste1, setTeste1 } = useContext(FetchContextApi);

  return (
    <>
      {/* <div className='mt-12'>{!issues && <Loading />}</div> */}
      <div className="m-auto container max-w-[864px] grid grid-cols-2 justify-center gap-8 mt-12">
        {!issues && <Skeleton />}

        {issues?.items.map((i) => (
          <div
            className="bg-brand-base-post w-[416px] min-h-64 rounded-lg p-8 m-auto border-2 border-brand-base-background hover:border-brand-base-label"
            key={i.id}
            onClick={() => {
              router.push('fetch'), setTeste1(i.url);
            }}
          >
            {useEffect(() => {
              console.log(teste1);
            }, [teste1])}
            <div className="flex gap-4 justify-between">
              <h1 className="text-xl font-bold text-brand-base-title">
                {i.title}
              </h1>
              <span className="text-brand-base-span text-sm min-w-14">
                {formatDistanceToNow(i.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <p className="mt-5 text-brand-base-text text-md">{i.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
