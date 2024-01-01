'use client';
import ArrowSquare from '../../public/icons/arrow-square.svg';
import GitHub from '../../public/icons/github.svg';
import Building from '../../public/icons/building.svg';
import People from '../../public/icons/people.svg';
import Avatar from '../../public/icons/avatar.svg';
import Image from 'next/image';

export function Profile() {
  return (
    <div className="flex items-center justify-center">
      <main className="max-w-[864px] bg-brand-base-profile -mt-[106px] rounded-lg p-8 ">
        <div className="flex">
          <Image
            src={Avatar}
            alt=""
            className="min-w-36 min-h-36 mr-8 rounded-lg"
          />
          <div>
            <div className=" flex justify-between mb-2">
              <h1 className="text-2xl">Cameron Williamson</h1>
              <div className="flex text-brand-blue font-bold gap-2">
                <span className="text-sm ">GITHUB</span>

                <Image
                  src={ArrowSquare}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
              </div>
            </div>
            <div>
              <p className="pl-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati asperiores accusamus, praesentium necessitatibus
                repellendus consequatur amet, est quibusdam facilis dolor fugit,
                eius aut?
              </p>
            </div>
            <div className="flex gap-6 mt-6">
              <div className="flex gap-2 items-center">
                <Image
                  src={GitHub}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                camerowll
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={Building}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                Rocketseat
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={People}
                  alt=""
                  className="w-4 h-4 text-brand-blue"
                />
                32 seguidores
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

{
  /* 
  <div className="flex justify-between bg-green-500">
                    
                    
                  </div>

        <div className="flex justify-between bg-red-400 w-[700px]">
          
         
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptate sapiente rerum, soluta molestias laudantium praesentium
            omnis quas aperiam fuga consequatur repellat commodi architecto quod
            dolorem, corrupti velit laborum aut?
          </p>
        </div>
  
  
  
  <div className=" flex">
  
  <div className="ml-8">
    <div className="flex justify-between  bg-red-500">
      
      
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
      corrupti?
    </p>
  </div>
</div> */
}
{
  /* <div className="flex">
  <div className="bg-green-500">
    <span>o</span> <p>cameronwll</p>
  </div>
  <div className="bg-green-600">
    <span>o</span> <p>Rockettseat</p>
  </div>
  <div className="bg-green-700">
    <span>o</span> <p>32 seguidores</p>
  </div>
</div> */
}
