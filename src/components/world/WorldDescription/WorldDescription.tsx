import Image from 'next/image'
import { FC } from 'react'
import { Config } from 'lib/site.config'
import s from './WorldDescription.module.css'

export const WorldDescription: FC = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className={s.order1}>
          <Image
            src={Config.image1}
            alt="Brandの画像1"
            quality="85"
            width={500}
            height={500}
            tabIndex={0}
          />
        </div>
        <p
          className={s.order2}
          dangerouslySetInnerHTML={{
            __html: `${Config.description1}`,
          }}
        ></p>
        <p
          className={s.order4}
          dangerouslySetInnerHTML={{
            __html: `${Config.description2}`,
          }}
        ></p>
        <div className={s.order3}>
          <Image
            src={Config.image2}
            alt="Brandの画像2"
            quality="85"
            width={500}
            height={500}
            tabIndex={0}
          />
        </div>
        <div className={s.order5}>
          <Image
            src={Config.image3}
            alt="Brandの画像3"
            quality="85"
            width={500}
            height={500}
            tabIndex={0}
          />
        </div>
        <p
          className={s.order6}
          dangerouslySetInnerHTML={{
            __html: `${Config.description3}`,
          }}
        ></p>
      </div>
    </>
  )
}
