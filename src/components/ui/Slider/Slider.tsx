import { Children, FC, isValidElement } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import cn from 'classnames'
import s from './Slider.module.css'
import { useCount, useMounted } from 'lib/hooks/state'

export const Slider: FC = ({ children }) => {
  const { count, setCount } = useCount()
  const { mounted, setMounted } = useMounted()

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slidesPerView: 1,
    mounted: () => setMounted(true),
    slideChanged(s) {
      setCount(s.details().relativeSlide)
    },
  })

  return (
    <div className={s.root}>
      <button
        className={cn(s.leftControl, s.control)}
        onClick={slider?.prev}
        aria-label="前の画像を表示する"
      />
      <button
        className={cn(s.rightControl, s.control)}
        onClick={slider?.next}
        aria-label="次の画像を表示する"
      />
      <div
        ref={ref}
        className="keen-slider h-full transition-opacity duration-150"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`,
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
                  [s.positionIndicatorActive]: count === idx,
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
