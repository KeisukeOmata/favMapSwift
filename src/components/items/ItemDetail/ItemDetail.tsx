import { FC } from 'react'
import { ColorAndSize } from 'components/items'
import { Button } from 'components/ui'
import { Detail } from 'lib/Type'
import s from './ItemDetail.module.css'

type Props = {
  detail: Detail
  availableState: boolean
  colors: string[]
  colorState: string
  idState: string | null
  loadingState: boolean
  mountedState: boolean
  sizes: string[]
  sizeState: string
  theme: string | undefined
  handleAddItem: (itemIdState: string | null) => Promise<void>
  setColorState: (colorState: string) => void
  setMountedState: (mountedState: boolean) => void
  setSizeState: (sizeState: string) => void
}

export const ItemDetail: FC<Props> = ({
  detail,
  availableState,
  colors,
  colorState,
  idState,
  loadingState,
  mountedState,
  sizes,
  sizeState,
  theme,
  handleAddItem,
  setColorState,
  setMountedState,
  setSizeState,
}) => (
  <>
    <div className={s.item}>
      <p>{detail.vendor}</p>
      <p>{detail.title}</p>
      <p>{detail.price}円</p>
      <br />
      <ColorAndSize
        colors={colors}
        colorState={colorState}
        mountedState={mountedState}
        sizes={sizes}
        sizeState={sizeState}
        theme={theme}
        setColorState={setColorState}
        setMountedState={setMountedState}
        setSizeState={setSizeState}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `${detail.descriptionHtml}`,
        }}
      />
      {availableState ? (
        <Button
          className="mt-5"
          aria-label="BAGに入れる"
          loading={loadingState}
          shape="square"
          type="button"
          onClick={() => handleAddItem(idState)}
        >
          BAGに入れる
        </Button>
      ) : (
        <Button
          className="mt-5"
          aria-label="この組み合わせは売り切れです"
          shape="square"
          type="button"
        >
          この組み合わせは売り切れです
        </Button>
      )}
    </div>
  </>
)
