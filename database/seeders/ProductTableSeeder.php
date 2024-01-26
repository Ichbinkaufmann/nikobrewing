<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products =[
            [
                'name' => 'Special Package 3 Bottle Set - Mix',
                'description' => 'Premium Lager、Pale Ale、Belgian Blonde',
                'category' => 'Special Package',
                'ABV' => 'Varies',
                'ingredients' => 'Varies in each bottle',
                'stock' => 10,
                'picture' => 'images\product\package3mix.png',
                'price' => 2040,
            ],
            [
                'name' => 'Special Package 3 Bottle Set - Belgian Beer',
                'description' => 'Belgian Blonde, Belgian White, Strawberry Ale',
                'category' => 'Special Package',
                'ABV' => 'Varies',
                'ingredients' => 'Varies in each bottle',
                'stock' => 10,
                'picture' => 'images\product\package3belgian.png',
                'price' => 2040,
            ],
            [
                'name' => 'Special Package 6 Bottle Set',
                'description' => 'Nikko Monkeys : Premium Lager, Pale Ale <br> Nikko Belgian Beer : Belgian Blonde, Belgian White, Strawberry Ale, Yuzu Saison',
                'category' => 'Special Package',
                'ABV' => 'Varies',
                'ingredients' => 'Varies in each bottle',
                'stock' => 10,
                'picture' => 'images\product\package6mix.png',
                'price' => 3640,
            ],
            [
                'name' => 'Special Package Nikko Belgian Beer',
                'description' => '2本セット ベルジャンシリーズ',
                'category' => 'Special Package',
                'ABV' => 'Varies',
                'ingredients' => 'Varies in each bottle',
                'stock' => 10,
                'picture' => 'images\product\package2belgian.png',
                'price' => 1380,
            ],
            [
                'name' => 'Special Package Nikko Monkeys',
                'description' => '2本セット モンキーズシリーズ',
                'category' => 'Special Package',
                'ABV' => '4%',
                'ingredients' => '4%',
                'stock' => 10,
                'picture' => 'images\product\packagemonkey.png',
                'price' => 1380,
            ],
            [
                'name' => 'Nikko Belgian Beer été - Sansho Saison',
                'description' => '奥日光で採れた山椒の新葉飲みを使用した香り高いハーブセゾン 山椒の新葉を感じていただけるよう、フルーティでグラッシーな厳選ホップを 使用し、飲み口がドライながらも、 芳香なアロマを感じられるように致しました。',
                'category' => 'Nikko Belgian Beer',
                'ABV' => '6%',
                'ingredients' => '・山椒・ホップ',
                'stock' => 10,
                'picture' => 'images\product\belgiansanshosaison.png',
                'price' => 440,
            ],
            [
                'name' => 'Nikko Belgian Beer Hiver - Yuzu Saison',
                'description' => '宇都宮産の宮柚子を使用したベルジャン・フルーツビールです。 使用する柚子は単細胞溶液加工にて一次加工を行い、柚子本来の風味と苦味 を表現したビールです。',
                'category' => 'Nikko Belgian Beer',
                'ABV' => '5.5%',
                'ingredients' => '・ゆず果汁・ホップ',
                'stock' => 10,
                'picture' => 'images\product\belgianyuzusaison.png',
                'price' => 550,
            ],
            [
                'name' => 'Nikko Belgian Beer Trois - Strawberry Ale',
                'description' => 'いちごを原料全体の75%以上使用。苺本来の持つ程よい酸味を活かした、まるで 甘酸っぱいをかじったようなちょっぴりビターテイストのフルーツビール',
                'category' => 'Nikko Belgian Beer',
                'ABV' => '4.5%',
                'ingredients' => '・麦芽・ホップ',
                'stock' => 10,
                'picture' => 'images\product\belgianstrawberryale.png',
                'price' => 550,
            ],
            [
                'name' => 'Nikko Belgian Beer Deux - Belgian white',
                'description' => '小麦由来の滑らかな口当たりと爽やかな酸味・フルーティなアロマが特徴のベルジャ ンスタイルビール。コリアンダーシードとオレンジピールによるスパイシーなアクセントが 全体を引き締めて心地よい風味をもたらしている。',
                'category' => 'Nikko Belgian Beer',
                'ABV' => '5%',
                'ingredients' => '・ホップ・オレンジビール・コリアンダシード',
                'stock' => 10,
                'picture' => 'images\product\belgianwhite.png',
                'price' => 440,
            ],
            [
                'name' => 'Nikko Belgian Beer Un - Belgian Blonde',
                'description' => 'バナナや洋梨のようなフルーティーなアロマとベルジャンスタイル特有の風味が融合し 上品で複雑な香りに誘われる。モルト由来のコク・爽やかな酸味を有し、 バランスのとれた味わい。',
                'category' => 'Nikko Belgian Beer',
                'ABV' => '6%',
                'ingredients' => '・ホップ・ハーブスパイス・糖類',
                'stock' => 10,
                'picture' => 'images\product\belgianblonde.png',
                'price' => 440,
            ],
            [
                'name' => 'The Nikko Monkeys Premium Lager',
                'description' => '口当たりはモルト由来の芳醇なコクと甘みが感じられ、ザーツホップの華やかなアロ マと上品な苦味が全体の調和を取ります。ビルスナースタイルのピールです。',
                'category' => 'The Nikko Monkeys',
                'ABV' => '5%',
                'ingredients' => '・ホップ・ハーブスパイス',
                'stock' => 10,
                'picture' => 'images\product\monkeypremiumlager.png',
                'price' => 690,
            ],
            [
                'name' => 'The Nikko Monkeys Pale Ale',
                'description' => 'ホップにシトラとシムコーを贅沢に使用した、パッションフルーツの様なアロマと、 フレッシュな柑橋系のフレーバーが爽やかなアメリカンペールエールです。',
                'category' => 'The Nikko Monkeys',
                'ABV' => '4%',
                'ingredients' => '・ホップ・ハーブスパイス',
                'stock' => 10,
                'picture' => 'images\product\monkeypaleale.png',
                'price' => 690,
            ],
        ];

        Product::insert($products);
    }
}