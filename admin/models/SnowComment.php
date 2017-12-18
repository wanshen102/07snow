<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_comment".
 *
 * @property integer $com_id
 * @property string $com_content
 * @property integer $user_id
 * @property string $com_time
 * @property integer $g_id
 */
class SnowComment extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_comment';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'g_id'], 'integer'],
            [['com_time'], 'safe'],
            [['com_content'], 'string', 'max' => 10]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'com_id' => 'Com ID',
            'com_content' => 'Com Content',
            'user_id' => 'User ID',
            'com_time' => 'Com Time',
            'g_id' => 'G ID',
        ];
    }
}
