'use client';
import ArrowSquare from '../../public/icons/arrow-square.svg';
import GitHub from '../../public/icons/github.svg';
import Building from '../../public/icons/building.svg';
import People from '../../public/icons/people.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';

interface ProfileApiDataType {
  name: string;
  avatar_url: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  public_repos: number;
  html_url: string;
}

export function Profile() {
  const [profileApiData, setProfileApiData] = useState<ProfileApiDataType>();

  async function fetchProfileAPI() {
    const response = await api.get('/users/andersoninn');

    setProfileApiData(response.data);
  }

  useEffect(() => {
    fetchProfileAPI();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <main className="max-w-[864px] bg-brand-base-profile -mt-[106px] rounded-lg p-8 ">
        <div className="flex">
          <img
            src={profileApiData?.avatar_url}
            width={40}
            height={40}
            alt=""
            className="min-w-36 min-h-36 mr-8 rounded-lg "
          />
          <div>
            <div className=" flex justify-between mb-2">
              <h1 className="text-2xl">{profileApiData?.name}</h1>
              <div
                className="flex text-brand-blue font-bold gap-2 mb-4 border-b-2 border-brand-base-profile
                hover:border-b-brand-blue
               file:cursor-pointer"
              >
                <a
                  href={profileApiData?.html_url}
                  className="text-sm"
                  target="blank"
                >
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
              <p className="pl-4">{profileApiData?.bio}</p>
            </div>
            <div className="flex gap-6 mt-6">
              <div className="flex gap-2 items-center">
                <Image
                  src={GitHub}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                {profileApiData?.login}
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={Building}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                {profileApiData?.company}
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={People}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                {profileApiData?.followers}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
