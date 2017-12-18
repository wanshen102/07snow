<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "snow_role".
 *
 * @property integer $ro_id
 * @property integer $ro_rank
 * @property string $ro_desc
 */
class SnowRole extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'snow_role';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ro_rank'], 'integer'],
            [['ro_desc'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ro_id' => 'Ro ID',
            'ro_rank' => 'Ro Rank',
            'ro_desc' => 'Ro Desc',
        ];
    }
}
