'use client';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

import SummaryBox from '@/components/SummaryBox';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import Loading from '../loading';
import { useRouter } from 'next/navigation';
import { IssuesDetailsType } from '@/@types/types';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Page({ params }: { params: { number: number } }) {
   const router = useRouter();

   const [issuesDetailsData, setIssuesDetailsData] =
      useState<IssuesDetailsType>();

   async function fetchProfileAPI() {
      try {
         const response = await api.get(
            `repos/andersoninn/04_Rocketseat_Challenge04_Git_blog_NextJS/issues/${params.number}`
         );
         console.log(response);
         if (response.status === 200) {
            setIssuesDetailsData(await response.data);
         }
      } catch (err: any) {
         if (err.response.status === 404) {
            router.push('/');
         }
      }
   }

   useEffect(() => {
      fetchProfileAPI();
   }, []);

   return (
      <>
         <SummaryBox>
            <div className="flex justify-between gap-5 min-h-[144px] ">
               <>
                  {!issuesDetailsData && <Loading />}
                  {issuesDetailsData && (
                     <div>
                        <div className="flex justify-between mb-2 min-w-[800px]">
                           <div
                              className="flex text-brand-blue font-bold gap-2 mb-4 border-b-2 border-brand-base-profile
                                    hover:border-b-brand-blue file:cursor-pointer itens-center h-5 "
                           >
                              <FaChevronLeft className="w-4 h-4" />
                              <a
                                 href="http://localhost:3000/"
                                 className="text-sm !leading-[18px]"
                              >
                                 VOLTAR
                              </a>
                           </div>
                           <div
                              className="flex text-brand-blue font-bold gap-2 mb-4 border-b-2 border-brand-base-profile
                                    hover:border-b-brand-blue file:cursor-pointer"
                           >
                              <a
                                 href={issuesDetailsData?.html_url}
                                 className="text-sm !leading-[18px]"
                                 target="blank"
                              >
                                 VER NO GITHUB
                              </a>

                              <FaArrowUpRightFromSquare className="w-4 h-4" />
                           </div>
                        </div>
                        <div>
                           <h1 className="pl-4 text-3xl text-brand-base-title">
                              {issuesDetailsData?.title}
                           </h1>
                        </div>
                        <div className="flex gap-6 mt-6">
                           <div className="flex gap-2 items-center">
                              <FaGithub className="w-4 h-4 text-brand-base-label" />
                              {issuesDetailsData?.user.login}
                           </div>
                           <div className="flex gap-2 items-center ">
                              <FaCalendarDay className="w-4 h-4 text-brand-base-label" />

                              {formatDistanceToNow(
                                 issuesDetailsData?.created_at,
                                 {
                                    addSuffix: true,
                                    locale: ptBR,
                                 }
                              )}
                           </div>
                           <div className="flex gap-2 items-center">
                              <FaComment className="w-4 h-4 text-brand-base-label" />
                              {issuesDetailsData?.comments}
                              <span>Comentários</span>
                           </div>
                        </div>
                     </div>
                  )}
               </>
            </div>
         </SummaryBox>
      </>
   );
}
