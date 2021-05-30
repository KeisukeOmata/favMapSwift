import { FC, useState } from 'react'
import { ColorAndSize } from 'components/items'
import { Button } from 'components/ui'
import { Detail } from 'lib/Type'
import s from './ItemDetail.module.css'

type Props = {
  detail: Detail
  loadingState: boolean
  handleAddItem: (variantIdState: string | null) => Promise<void>
}

export const ItemDetail: FC<Props> = ({
  detail,
  loadingState,
  handleAddItem,
}) => {
  const [availableState, setAvailableState] = useState<boolean>(true)
  const [variantIdState, setVariantIdState] = useState<string | null>(null)

  return (
    <>
      <div className={s.item}>
        <p>{detail.vendor}</p>
        <p>{detail.title}</p>
        <p>{detail.price}円</p>
        <br />
        <ColorAndSize
          detail={detail}
          setAvailableState={setAvailableState}
          setVariantIdState={setVariantIdState}
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
            onClick={() => handleAddItem(variantIdState)}
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
}
