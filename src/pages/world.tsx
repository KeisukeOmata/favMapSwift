/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Image from 'next/image'
import { useCart } from '../hooks/useCart'
import cn from 'classnames'
import s from '../styles/pages/world.module.scss'
import { ContentWrapper } from '../components/layouts/ContentWrapper'

export default function World() {
  const { fetchCart } = useCart()
  fetchCart()
  return (
    <>
      <section className={s.worldCategories}>
        <ContentWrapper>
          <div className={s.worldSectionTitleContainer}>
            <h2>World</h2>
          </div>
          <div className={s.items}>
            <div className={cn(s.item, s.order1)}>
              <Image
                src="/brand.webp"
                alt="World"
                quality="85"
                width={500}
                height={500}
                // 遅延読み込みしない
                loading={'eager'}
              />
            </div>
            <div className={cn(s.item, s.order2)}>
              <div className={s.item__date}>
                あらゆるものに縛られ、抑圧される社会と一線を画し、自分自身を取り戻すための服。
                その人自身のアイデンティティからなる白昼夢のように、持つ人の個性に合わせて表情が変化するアイテムを展開。
              </div>
            </div>
            <div className={cn(s.item, s.order4)}>
              <div className={s.item__date}>
                国内外から厳選されたヴィンテージアイテムと、再構築され新たなアイテムとして生まれ変わった
                一点物を取り扱う Vintage Select Bland。
              </div>
            </div>
            <div className={cn(s.item, s.order3)}>
              <Image
                src="/brand2.jpg"
                alt="World2"
                quality="85"
                width={500}
                height={500}
                // 遅延読み込みしない
                loading={'eager'}
              />
            </div>
            <div className={cn(s.item, s.order5)}>
              <Image
                src="/brand3.webp"
                alt="World"
                quality="85"
                width={500}
                height={500}
                // 遅延読み込みしない
                loading={'eager'}
              />
            </div>
            <div className={cn(s.item, s.order6)}>
              <div className={s.item__date}>
                10年後も美しいBAGを目指して使い込むほどに艶を増す上質な本革を使用。
                MADE IN
                JAPANにこだわり、優れた職人によって作られたシンプルで長く寄り添う小物を展開。
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
    </>
  )
}
