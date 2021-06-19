/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Head } from 'components/ui'
import { Config } from 'lib/site.config'

export default function Privacy() {
  return (
    <>
      <PageSEO
        title="privacy"
        path="/privacy"
        ogImageUrl={Config.defaultOGImage}
      />
      <div className="pt-2">
        <ContentWrapper>
          <Head id={'head'} head={'プライバシーポリシー'} />
          <div className="pt-5">
            <p>
              お客様が、当ウェブサイトを利用する場合または商品の購入をする場合、下記「お客様情報の取扱規定（プライバシーポリシー）」を熟読のうえ、内容に同意していただく必要があります。
              <br></br>
              お客様が当社のコンテンツをご利用及び商品購入時点で本規約および別途定める利用規約の内容を全て了解・承認したものとみなします。
            </p>
            <br></br>
            <p>1. お客様情報について</p>
            <p>
              お客様情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、その他の記述等により特定の個人を識別することが出来るものを言います。
              <br></br>
              これには他の情報と照合することが出来、それにより特定の個人を識別できる事となるものを含みます。
            </p>
            <br></br>
            <p>2. お客様情報の利用目的について</p>
            <p>
              当方は、<br></br>(1)売買取引における当方の債務を履行するため、
              <br></br>(2)売買取引におけるアフターサービスを実施するため、
              <br></br>(3)お客様に特別なサービスや新商品等をご案内すること、
              <br></br>
              (4)前記(3)のご案内のため、メールマガジン・DM・各種お知らせ等を送信・送付することを目的とし、お客様情報を利用させていただきます。これらの利用目的以外には、下記3に記載する場合または事前にお客様に同意をいただいた場合を除き、利用致しません。
            </p>
            <br></br>
            <p>3. お客様情報の第三者への委託について</p>
            <p>
              当方は、利用目的の達成に必要な範囲内において、お客様情報の全部又は一部を委託する場合があります。
            </p>
            <br></br>
            <p>4. お客様情報の第三者への提供について</p>
            <p>
              当方は、事前にお客様の同意を得ることなしでお客様情報を第三者に提供しません。
            </p>
            <br></br>
            <p>5. お客様情報の共同利用について</p>
            <p>
              当方は、以下に記載する会社との間で、ECサイトの運営、及び商品の配送などの物流に利用する目的でお客様情報を共同利用いたします。
              <br></br>
              <br></br>・共同して利用するお客様情報の項目<br></br>
              お客様の氏名、住所、電話番号、メールアドレス、購入された商品情報など
              <br></br>・共同して利用する者の範囲<br></br>Shopify Japan
              株式会社とその関連会社（ECツール 「shopify」運営会社）<br></br>
              <br></br>利用する者の利用目的<br></br>
              ・当方とお客様の間の売買取引のうち、商品の配送など、当方が委託した業務を行うため
              <br></br>・お客様に特別なサービスや新商品等をご案内するため
              <br></br>・お客様に対するアフターサービスを実施するため<br></br>{' '}
              ・購入時の確認及びお知らせの送信のため<br></br>
              ・その他、Shopify、ECサイトの運用のため
            </p>
            <br></br>
            <p>お客様情報の管理について責任を有する者</p>
            <p>{Config.responsibleParty}</p>
            <p>
              Shopify Japan 株式会社とその関連会社（ECツール
              「shopify」運営会社）
            </p>
            <br></br>
            <p>6. クッキーの使用について</p>
            <p>
              本サービスは、お客様のコンピュータの記憶装置に、「クッキー」と呼ばれるテキストファイルを送付し、保存・利用させていただくことがございます。
              <br></br>
              「クッキー」を使用する事により具体的には、例えば、興味をお持ちであろう分野のコンテンツを表示する事ができるというメリットがあります。
              <br></br>
              お客様は、「クッキー」を受け取る前にブラウザが警告を出す様に設定しておく事により、お客様の判断で「クッキー」を受け取る事を拒否できますが、本サービスがご利用になれない場合があります。
            </p>
            <br></br>
            <p>7. お客様情報のお問い合わせについて</p>
            <p>
              当ウェブサイトの特定商取引法に関する表記内にある「事業者の名称および連絡先」までご連絡ください。
            </p>
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
