<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_goods".
 *
 * @property integer $goods_id
 * @property string $goods_name
 * @property integer $goods_number
 * @property string $goods_weight
 * @property string $market_price
 * @property string $goods_imgs
 * @property string $goods_desc
 * @property string $goods_img
 * @property integer $is_hot
 * @property integer $is_new
 * @property integer $give_integral
 * @property integer $category_id
 * @property integer $shop_price
 * @property integer $state
 */
class SnowGoods extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_goods';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['goods_number', 'is_hot', 'is_new', 'give_integral', 'category_id', 'shop_price', 'state'], 'integer'],
            [['goods_desc'], 'string'],
            [['goods_name', 'goods_imgs', 'goods_img'], 'string', 'max' => 255],
            [['goods_weight', 'market_price'], 'string', 'max' => 11]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'goods_id' => 'Goods ID',
            'goods_name' => 'Goods Name',
            'goods_number' => 'Goods Number',
            'goods_weight' => 'Goods Weight',
            'market_price' => 'Market Price',
            'goods_imgs' => 'Goods Imgs',
            'goods_desc' => 'Goods Desc',
            'goods_img' => 'Goods Img',
            'is_hot' => 'Is Hot',
            'is_new' => 'Is New',
            'give_integral' => 'Give Integral',
            'category_id' => 'Category ID',
            'shop_price' => 'Shop Price',
            'state' => 'State',
        ];
    }
}
