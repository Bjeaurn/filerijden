<?php

class Database {

    // Hold an instance of the class
    private static $instance;
    private static $number_objects = 0;
    private static $queries;
    public $link;
    private $query;

    // A private constructor; prevents direct creation of object
    private function __construct() {
        $host = DB_HOST;
        $db = DB_DATABASE;
        $user = DB_USER;
        $password = DB_PASSWORD;
        $port = (int)DB_PORT;

        $connection_string = "host=".$host." user=".$user." password=".$password." dbname=".$db." port=".$port;

        $this->link = pg_connect($connection_string);
        if ($this->link->connect_error) {
            die("MySQL error: " . mysql_error());
        }
        self::$number_objects++;
        return $this->link;
    }

    // The start method
    public static function start() {
        if (!isset(self::$instance)) {
            $c = __CLASS__;
            self::$instance = new $c;
        }

        return self::$instance;
    }

    public static function get_objects() {
        return self::$number_objects;
    }

    public static function get_queries() {
        return self::$queries;
    }

    public function query($query, $debug = false) {
        self::$queries++;
        $this->query = $query;
        if ($debug != false) {
            echo $this->query;
        }
        if ($result = pg_query($this->link, $this->query)) {
            return $result;
        } else {
            $output = "<p><strong>MySQL error:</strong> " . mysqli_error($this->link) . "<br />";
            $output .= "<strong>Last query:</strong> " . $this->query . "</p>";
            die($output);
        }
    }

    public function prepare($query, $debug = false) {
        self::$queries++;
        $this->query = $query;
        if ($debug != false) {
            echo $this->query;
        }
        try{
            $result = pg_prepare($this->link, $this->query);
            return $result;
        }catch(PDOException $e){
            $output = "<p><strong>Database error:</strong> " . $e->getMessage() . "<br />";
            $output .= "<strong>Last query:</strong> " . $this->query . "</p>";
            die($output);
        }
    }

    public function num_rows($result) {
        return pg_num_rows($result);
    }

    public function affected_rows() {
        return pg_affected_rows($this->link);
    }

    public function insert_id() {
        throw Exception("Postgres does not support affected rows. Use `INSERT RETURNING id` instead!");
        /*if (mysqli_insert_id($this->link)) {
            return mysqli_insert_id($this->link);
        } else {
            return false;
        }*/
    }

    public function fetch_array($result, $type = PGSQL_ASSOC) {
        return pg_fetch_array($result, $type);
    }

    public function instantiate($record, $object) {
        if (!is_object($object)) {
            die("Passed '$object' is not an object.");
        }
        foreach ($record as $attribute => $value) {
            if ($this->has_attribute($attribute, $object)) {
                $object->$attribute = $value;
            }
        }
        return $object;
    }

    private function has_attribute($attribute, $object) {
        $object_vars = get_object_vars($object);
        return array_key_exists($attribute, $object_vars);
    }

    public function close() {
        mysqli_close($this->link);
    }

    // Prevent users to clone the instance
    public function __clone() {
        trigger_error('Clone is not allowed.', E_USER_ERROR);
    }

}

// HELPER FUNCTIONS
function sanitize($value) {
    //$value = mysqli_real_escape_string($value);
    return addslashes($value);
}

function secure($value) {
    return sha1($value);
}

?>
