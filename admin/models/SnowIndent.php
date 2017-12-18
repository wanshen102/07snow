<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_indent".
 *
 * @property integer $id
 * @property integer $user_id
 * @property string $indent_no
 * @property string $add_time
 * @property string $total_price
 * @property string $pay_type
 * @property string $express
 * @property string $address
 * @property string $phone
 * @property string $best_time
 * @property integer $status
 */
class SnowIndent extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_indent';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'status'], 'integer'],
            [['add_time'], 'safe'],
            [['total_price'], 'number'],
            [['indent_no'], 'string', 'max' => 30],
            [['pay_type', 'express'], 'string', 'max' => 255],
            [['address'], 'string', 'max' => 60],
            [['phone'], 'string', 'max' => 15],
            [['best_time'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'indent_no' => 'Indent No',
            'add_time' => 'Add Time',
            'total_price' => 'Total Price',
            'pay_type' => 'Pay Type',
            'express' => 'Express',
            'address' => 'Address',
            'phone' => 'Phone',
            'best_time' => 'Best Time',
            'status' => 'Status',
        ];
    }
}
