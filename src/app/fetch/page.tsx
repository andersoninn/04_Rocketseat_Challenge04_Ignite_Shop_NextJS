'use client';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

import SummaryBox from '@/components/SummaryBox';
import { useContext, useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { ProfileApiDataType } from '@/components/Profile';
import Loading from '../loading';
import { FetchContextApi } from '@/contexts/ApiContext';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const { issues, teste1 } = useContext(FetchContextApi);

  const [issuesDetailsData, setIssuesDetailsData] =
    useState<ProfileApiDataType>();

  async function fetchProfileAPI() {
    const response = await api.get(`${teste1 !== undefined ? teste1 : ''}`);

    setIssuesDetailsData(response.data);
   
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
                      className="text-sm !leading-[18px]"
                      onClick={() => router.push('http://localhost:3000/')}
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
                  <p className="pl-4">{issuesDetailsData?.bio}</p>
                </div>
                <div className="flex gap-6 mt-6">
                  <div className="flex gap-2 items-center">
                    <FaGithub className="w-4 h-4 text-brand-base-label" />
                    {issuesDetailsData?.login}
                  </div>
                  <div className="flex gap-2 items-center ">
                    <FaCalendarDay className="w-4 h-4 text-brand-base-label" />
                    {issuesDetailsData?.company}
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaComment className="w-4 h-4 text-brand-base-label" />
                    {issuesDetailsData?.followers}
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
