<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_login".
 *
 * @property integer $login_id
 * @property string $login_name
 * @property string $login_pwd
 * @property string $login_email
 */
class SnowLogin extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_login';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['login_name', 'login_pwd', 'login_email'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'login_id' => 'Login ID',
            'login_name' => 'Login Name',
            'login_pwd' => 'Login Pwd',
            'login_email' => 'Login Email',
        ];
    }
}
