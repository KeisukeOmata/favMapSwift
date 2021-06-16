import Image from 'next/image'
import { FC } from 'react'
import { Config } from 'lib/site.config'

export const Description: FC = () => (
  <>
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col sm:order-1 justify-center pt-6 w-1/2 sm:w-full">
        <Image
          src={Config.image1}
          alt="Brandの画像1"
          quality="85"
          width={500}
          height={500}
          tabIndex={0}
          blurDataURL={Config.image1}
          placeholder="blur"
        />
      </div>
      <p
        className="flex flex-col sm:order-2 justify-center pt-6 w-1/2 sm:w-full"
        dangerouslySetInnerHTML={{
          __html: `${Config.description1}`,
        }}
      ></p>
      <p
        className="flex flex-col sm:order-4 justify-center pt-6 w-1/2 sm:w-full"
        dangerouslySetInnerHTML={{
          __html: `${Config.description2}`,
        }}
      ></p>
      <div className="flex flex-col sm:order-3 justify-center pt-6 w-1/2 sm:w-full">
        <Image
          src={Config.image2}
          alt="Brandの画像2"
          quality="85"
          width={500}
          height={500}
          tabIndex={0}
          blurDataURL={Config.image2}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col sm:order-5 justify-center pt-6 w-1/2 sm:w-full">
        <Image
          src={Config.image3}
          alt="Brandの画像3"
          quality="85"
          width={500}
          height={500}
          tabIndex={0}
          blurDataURL={Config.image3}
          placeholder="blur"
        />
      </div>
      <p
        className="flex flex-col sm:order-6 justify-center pt-6 w-1/2 sm:w-full"
        dangerouslySetInnerHTML={{
          __html: `${Config.description3}`,
        }}
      ></p>
    </div>
  </>
)
