import { ColorAndSize } from 'components/items'
import { Button } from 'components/ui'
import { Detail } from 'lib/Type'
import { useHandleAddItem } from 'lib/hooks/cart'
import { useLoading } from 'lib/hooks/state'
import { FC, useState } from 'react'

type Props = {
  detail: Detail
}

export const ItemDetail: FC<Props> = ({ detail }) => {
  const { handleAddItem } = useHandleAddItem()
  const { loadingState, setLoadingState } = useLoading()
  const [availableState, setAvailableState] = useState<boolean>(true)
  const [variantIdState, setVariantIdState] = useState<string | null>(null)

  return (
    <>
      <div className="flex flex-col pt-5 w-1/2 sm:w-full">
        <p>{detail.vendor}</p>
        <p>{detail.title}</p>
        <p>{detail.price}円</p>
        <br />
        <ColorAndSize detail={detail} setAvailableState={setAvailableState} setVariantIdState={setVariantIdState} />
        <div
          dangerouslySetInnerHTML={{
            __html: `${detail.descriptionHtml}`,
          }}
        />
        {availableState ? (
          <Button
            text="BAGに入れる"
            className="mt-5"
            aria-label="BAGに入れる"
            loading={loadingState}
            shape="square"
            type="button"
            onClick={() => handleAddItem(variantIdState, setLoadingState)}
          ></Button>
        ) : (
          <Button
            text="この組み合わせは売り切れです"
            className="mt-5"
            aria-label="この組み合わせは売り切れです"
            shape="square"
            type="button"
          ></Button>
        )}
      </div>
    </>
  )
}
