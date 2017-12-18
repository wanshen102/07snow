<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_indent_detail".
 *
 * @property integer $id
 * @property integer $indent_id
 * @property integer $goods_id
 * @property string $goods_name
 * @property string $price
 * @property integer $goods_num
 * @property string $goods_photo
 */
class SnowIndentDetail extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_indent_detail';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['indent_id', 'goods_id', 'goods_name', 'price', 'goods_num', 'goods_photo'], 'required'],
            [['indent_id', 'goods_id', 'goods_num'], 'integer'],
            [['price'], 'number'],
            [['goods_name', 'goods_photo'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'indent_id' => 'Indent ID',
            'goods_id' => 'Goods ID',
            'goods_name' => 'Goods Name',
            'price' => 'Price',
            'goods_num' => 'Goods Num',
            'goods_photo' => 'Goods Photo',
        ];
    }
}
