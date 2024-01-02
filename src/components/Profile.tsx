'use client';
import ArrowSquare from '../../public/icons/arrow-square.svg';
import GitHub from '../../public/icons/github.svg';
import Building from '../../public/icons/building.svg';
import People from '../../public/icons/people.svg';
import Image from 'next/image';
import { ApiContext } from '@/contexts/ApiContext';
import { useContext } from 'react';

export function Profile() {
  const { apiData } = useContext(ApiContext);

  return (
    <div className="flex items-center justify-center">
      <main className="max-w-[864px] bg-brand-base-profile -mt-[106px] rounded-lg p-8 ">
        <div className="flex">
          <img
            src={apiData?.avatar_url}
            width={40}
            height={40}
            alt=""
            className="min-w-36 min-h-36 mr-8 rounded-lg "
          />
          <div>
            <div className=" flex justify-between mb-2">
              <h1 className="text-2xl">{apiData?.name}</h1>
              <div
                className="flex text-brand-blue font-bold gap-2 mb-4 border-b-2 border-brand-base-profile
                hover:border-b-brand-blue
               file:cursor-pointer"
              >
                <a href={apiData?.html_url} className="text-sm" target="blank">
                  GITHUB
                </a>

                <Image
                  src={ArrowSquare}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
              </div>
            </div>
            <div>
              <p className="pl-4">{apiData?.bio}</p>
            </div>
            <div className="flex gap-6 mt-6">
              <div className="flex gap-2 items-center">
                <Image
                  src={GitHub}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                {apiData?.login}
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={Building}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                {apiData?.company}
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={People}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                {apiData?.followers}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
