import Image from 'next/image'
import { FC } from 'react'
import { Config } from 'lib/site.config'

export const WorldDescription: FC = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="w-1/2 mt-5 flex flex-col justify-center sm:w-full sm:order-1">
          <Image
            src="/brand1.jpg"
            alt="Brandの画像1"
            quality="85"
            width={500}
            height={500}
            tabIndex={0}
          />
        </div>
        <p
          className="w-1/2 mt-5 flex flex-col justify-center sm:w-full sm:order-6"
          dangerouslySetInnerHTML={{
            __html: `${Config.description1}`,
          }}
        ></p>
        <p
          className="w-1/2 mt-5 flex flex-col justify-center sm:w-full sm:order-6"
          dangerouslySetInnerHTML={{
            __html: `${Config.description2}`,
          }}
        ></p>
        <div className="w-1/2 mt-5 flex flex-col justify-center sm:w-full sm:order-3">
          <Image
            src="/brand2.jpg"
            alt="Brandの画像2"
            quality="85"
            width={500}
            height={500}
            tabIndex={0}
          />
        </div>
        <div className="w-1/2 mt-5 flex flex-col justify-center sm:w-full sm:order-5">
          <Image
            src="/brand3.jpg"
            alt="Brandの画像3"
            quality="85"
            width={500}
            height={500}
            tabIndex={0}
          />
        </div>
        <p
          className="w-1/2 mt-5 flex flex-col justify-center sm:w-full sm:order-6"
          dangerouslySetInnerHTML={{
            __html: `${Config.description3}`,
          }}
        ></p>
      </div>
    </>
  )
}
