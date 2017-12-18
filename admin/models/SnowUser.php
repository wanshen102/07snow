<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_user".
 *
 * @property integer $user_id
 * @property string $user_name
 * @property string $user_pwd
 * @property string $user_email
 * @property string $birthday
 * @property string $user_money
 * @property integer $pay_points
 * @property integer $rank_points
 * @property integer $address_id
 * @property string $reg_time
 * @property string $last_time
 * @property integer $last_ip
 * @property string $user_rank
 * @property integer $parent_id
 * @property string $user_qq
 * @property string $user_iphone
 * @property string $message
 * @property string $user_radio
 * @property integer $yao_id
 * @property string $image
 * @property string $user_yzm
 * @property integer $ro_rank
 */
class SnowUser extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_money'], 'number'],
            [['pay_points', 'rank_points', 'address_id', 'last_ip', 'parent_id', 'yao_id', 'ro_rank'], 'integer'],
            [['reg_time', 'last_time'], 'safe'],
            [['user_name', 'user_pwd', 'user_email'], 'string', 'max' => 20],
            [['birthday'], 'string', 'max' => 225],
            [['user_rank', 'user_iphone', 'message', 'image', 'user_yzm'], 'string', 'max' => 255],
            [['user_qq', 'user_radio'], 'string', 'max' => 32]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_id' => 'User ID',
            'user_name' => 'User Name',
            'user_pwd' => 'User Pwd',
            'user_email' => 'User Email',
            'birthday' => 'Birthday',
            'user_money' => 'User Money',
            'pay_points' => 'Pay Points',
            'rank_points' => 'Rank Points',
            'address_id' => 'Address ID',
            'reg_time' => 'Reg Time',
            'last_time' => 'Last Time',
            'last_ip' => 'Last Ip',
            'user_rank' => 'User Rank',
            'parent_id' => 'Parent ID',
            'user_qq' => 'User Qq',
            'user_iphone' => 'User Iphone',
            'message' => 'Message',
            'user_radio' => 'User Radio',
            'yao_id' => 'Yao ID',
            'image' => 'Image',
            'user_yzm' => 'User Yzm',
            'ro_rank' => 'Ro Rank',
        ];
    }
}
