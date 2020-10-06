<?php

namespace App\Helpres;

/**
 * Trait HelpersTrait
 * @package App\Helpres
 */
trait HelpersTrait
{


    /**
     * @param array $array
     * @return array|false|string[]
     */
    public function getKeys(array $array){
        $keys = array_keys($array);
        if(is_array($keys))
            return explode(';', $keys[0]);
        else
            return [];
    }

    /**
     * @param array $array
     * @return array|false|string[]
     */
    public function getValues(array $array){
        $values = array_values($array);
        if(is_array($values))
            return explode(';', $values[0]);
        else
            return [];
    }

    /**
     * @param object $array
     * @return array
     */
    public function formatDataCsv(object $array){
        $data = [];
        foreach($array as $key => $item){
            if($key == 0)
                $fields = $this->getKeys($item);

            $values = $this->getValues($item);
            $data[] = array_combine($fields, $values);
        }
        return $data;
    }

}
