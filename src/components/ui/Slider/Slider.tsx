import cn from 'classnames'
import { useKeenSlider } from 'keen-slider/react'
import { Children, FC, isValidElement, useState } from 'react'

import s from './Slider.module.css'

export const Slider: FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slidesPerView: 1,
    mounted: () => setMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <div className={s.root}>
      <button className={cn(s.leftControl, s.control)} onClick={slider?.prev} aria-label="前の画像を表示する" />
      <button className={cn(s.rightControl, s.control)} onClick={slider?.next} aria-label="次の画像を表示する" />
      <div
        ref={ref}
        className="h-full transition-opacity duration-150 keen-slider"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${child.props.className ? `${child.props.className} ` : ''}keen-slider__slide`,
              },
            }
          }
          return child
        })}
      </div>
      {slider && (
        <div className={cn(s.positionIndicatorsContainer)}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                aria-label={`${idx}枚目の画像を表示する`}
                key={idx}
                className={cn(s.positionIndicator, {
                  [s.positionIndicatorActive]: currentSlide === idx,
                })}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
              >
                <div className={s.dot} />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
