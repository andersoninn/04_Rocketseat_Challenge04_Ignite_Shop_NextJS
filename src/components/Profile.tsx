'use client';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';
import { MdPeopleAlt } from 'react-icons/md';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';

import Loading from '@/app/loading';

import SummaryBox from './SummaryBox';

import { ApiData } from '@/@types/types';

export function Profile() {
   const [profileApiData, setProfileApiData] = useState<ApiData>();

   async function fetchProfileAPI() {
      const response = await api.get(
         'https://api.github.com/users/andersoninn'
      );

      setProfileApiData(response.data);
   }

   useEffect(() => {
      fetchProfileAPI();
   }, []);

   return (
      <SummaryBox>
         <div className="flex justify-between gap-5 min-h-[144px] ">
            {!profileApiData && <Loading />}
            {profileApiData && (
               <>
                  <Image
                     src={profileApiData?.avatar_url}
                     width={144}
                     height={144}
                     alt=""
                     style={{ objectFit: 'cover' }}
                     className="rounded-lg"
                  />

                  <div>
                     <div className=" flex justify-between mb-2">
                        <h1 className="text-2xl">{profileApiData?.name}</h1>
                        <div
                           className="flex text-brand-blue font-bold gap-2 mb-4 border-b-2 border-brand-base-profile
                                    hover:border-b-brand-blue file:cursor-pointer"
                        >
                           <a
                              href={profileApiData?.html_url}
                              className="text-sm"
                              target="blank"
                           >
                              GITHUB
                           </a>

                           <FaArrowUpRightFromSquare className="w-4 h-4" />
                        </div>
                     </div>
                     <div>
                        <p className="pl-4">{profileApiData?.bio}</p>
                     </div>
                     <div className="flex gap-6 mt-6">
                        <div className="flex gap-2 items-center">
                           <FaGithub className="w-4 h-4 text-brand-base-label" />
                           {profileApiData?.login}
                        </div>
                        <div className="flex gap-2 items-center ">
                           <FaBuilding className="w-4 h-4 text-brand-base-label " />
                           {profileApiData?.company}
                        </div>
                        <div className="flex gap-2 items-center">
                           <MdPeopleAlt className="w-4 h-4 text-brand-base-label" />
                           {profileApiData?.followers} seguidores
                        </div>
                     </div>
                  </div>
               </>
            )}
         </div>
      </SummaryBox>
   );
}
