<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    /*
    
    public function test_something()
    {
        $this->assertEquals(1337, 1337);
    }

    */

    public function test_failure()
    {
        $this->expectError(PHPUnit\Framework\Error\Error::class);
        flatten("test");
    }

    public function test_empty()
    {
        $this->assertEquals(flatten([null]), [null]);
    }

    public function test_3Level(){
        $this->assertEquals(flatten([
            [9, ["N", "J"]], ["Test1", "Test2"]]), 
            [9, "N", "J", "Test1", "Test2"]);
    }
}