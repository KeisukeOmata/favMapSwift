/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PageSEO, ContentWrapper } from 'components/layouts'
import { useFetchCart, useInitializeCart } from 'lib/hooks/cart'
import { Config } from 'lib/site.config'

export default function Legal() {
  useInitializeCart()
  useFetchCart()
  return (
    <>
      <PageSEO title="legal" path="/legal" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2 pb-12">
        <ContentWrapper>
          <div className="under-line flex py-1.5">
            <h2 id="heading" tabIndex={-1}>
              特定商取引法に基づく表示
            </h2>
          </div>
          <div className="mt-5">
            <p>・販売者の名称</p>
            <p>{Config.name}</p>
            <br></br>
            <p>・販売者の連絡先</p>
            <p>{Config.emailAddress}</p>
            <br></br>
            <p>・商品の価格</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '各商品ごとに表示。<br>特に記載のない商品は税込み価格表示です。',
              }}
            ></p>
            <br></br>
            <p>・商品の引き渡し時期</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '原則3営業日以内に発送いたします。<br>発送後の追跡については各物流業者に委ねます。',
              }}
            ></p>
            <br></br>
            <p>・送料</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '日本国内一律 送料無料（但し、当社指定の配送方法に限ります。）<br>キャンセルの場合は往復の配送料を実費で請求させて頂きますことをご了承くださいませ。<br>※海外発送については商品購入ページに準ず。 「日本国内一律送料無料」は弊社負担で購入されたお客様へ提供しているサービスとなります。',
              }}
            ></p>
            <br></br>
            <p>・代金引換手数料</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '1万円以下 300円、3万円以下 400円、10万円以下 600円、10万円以上 1000円',
              }}
            ></p>
            <br></br>
            <p>・その他オプションによる手数料</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  'クレジットカード等の分割手数料及び支払手数料、銀行振込等の支払い手数料などはお客様負担です。',
              }}
            ></p>
            <br></br>
            <p>・支払方法</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  'クレジットカード決済、コンビニ決済、PayPay<br>その他、購入時の支払い方法選択画面で選択可能な決済方法 ​(海外からのご注文に関しましてはクレジットカード決済のみのご対応とさせて頂きます。)',
              }}
            ></p>
            <br></br>
            <p>・支払期限</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '代金引換：商品お受け取り時に配送業者へお支払い頂きます。<br>クレジットカード、PayPal：商品注文時点でお支払い頂きます（請求日に関しては各クレジットカード会社様にお尋ねくださいますようお願いいたします。）',
              }}
            ></p>
            <br></br>
            <p>・商品の引き渡し時期</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '原則お支払いいただきました7営業日以内に発送いたします。<br>尚、予約商品・入荷待ち商品に関しましては商品ページの記載に準じます。',
              }}
            ></p>
            <br></br>
            <p>・返品についての特約事項</p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  '当社の商品の特性上、基本的にお客様都合でのご返品はお断りさせていただいております。<br>商品には万全を期しておりますが、万が一ご到着の商品に下記に当てはまる商品がございましたら、至急交換対応させて頂きますので商品到着後7日以内にご連絡頂きますようお願いいたします。<br>・ご注文頂いた商品と届いた商品が異なっている場合<br>・到着時既に破損・汚損している場合（商品説明欄にヴィンテージ表記のあるものを除きます。）<br><br>ご連絡時点で在庫のない商品に関しましては速やかに返金対応させて頂きます。<br><br>物流センターに委託をしている関係で、注文確定後のキャンセルは基本的にお受け出来ません。<br>やむを得ない理由でキャンセルを希望される方は注文状況なども合わせて確認をさせて頂きますのでお電話にてご連絡ください。<br><br>配送準備完了後のキャンセルは物流センターのキャンセル料100円（税込）がかかる場合がございます。<br>キャンセル手数料が発生した場合は実費で請求させて頂きますのでご了承くださいませ。<br><br>お客様長期不在等の理由で発送が完了しなかった商品、イメージ違いや注文間違いなど、お客様都合での返品の場合【 物流資材・返送手数料として1,500円（税込）＋ 往復送料実費（弊社送りの配送分を含む）】をご負担いただきます。<br><br>「通常配送料無料」は弊社負担で購入されたお客様へ提供しているサービスとなります。<br>キャンセルの場合は往復の配送料を実費で請求させて頂きますことをご了承くださいませ。<br><br>また、下記の条件に該当する場合は、如何なる場合も返品交換をお受けすることが出来ませんのでご注意ください。<br>・商品の一部であるプライスタグ、外箱、付属の袋などを破損・紛失してしまった商品<br>・ご使用になられた商品 ・お客様の下で破損・汚損が生じた商品<br>・お客様の下で加工・リフォームされた商品<br>・お客様のご指示の下で加工・リフォームされた商品（オーダーメイドもの、名入れ加工もの等）<br>・「返品不可」と商品ページに記載のある商品（オーダーメイドもの、名入れ加工もの、衛生用品など）',
              }}
            ></p>
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
