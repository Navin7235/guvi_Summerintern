<?php
require_once('connection.php');

if(isset($_POST)){

	$firstname 		= $_POST['firstname'];
	$lastname 		= $_POST['lastname'];
	$email 			= $_POST['email'];
        $phone          	= $_POST['phone'];
        $dob             	= $_POST['dob'];
        $age             	= $_POST['age'];
	    $password 		= sha1($_POST['password']);
        $password2 		= sha1($_POST['password2']);

		$sql = "INSERT INTO users (firstname, lastname, email, phone,dob,age, password,password2 ) VALUES(?,?,?,?,?,?,?,?)";
		$stmtinsert = $db->prepare($sql);
		$result = $stmtinsert->execute([$firstname, $lastname, $email, $phone,$dob,$age,$password,$password2]);
	      if($result){
			echo 'Successfully saved.';
		}else{
			echo 'There were erros while saving the data.';
		} 
    }else{
	echo 'No data';
}
?>