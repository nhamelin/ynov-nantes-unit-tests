<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    /*

    public function test_something() {
        $this->assertEquals(42, 42);
    }

    */

    public function test_insert_int()
    {
        $tempTracker = new TempTracker();
        $tempTracker->insert(9);
        $this->assertEquals($tempTracker->get_temps(), [9]);
    }

    public function test_insert_string(){
        $tracker = new TempTracker;

        $this->expectException(\TypeError::class);
        $tracker->insert("test");
    }

    public function test_insert_null(){
        $tracker = new TempTracker;

        $this->expectException(\TypeError::class);
        $tracker->insert();
    }
}