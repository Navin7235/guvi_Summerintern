<?php

session_start();

if(isset($_GET['logout'])){
		session_destroy();
		unset($_SESSION);
		echo 1;
	}

else if(isset($_GET['getDetails'])){
		echo json_encode($_SESSION);
	}
else{

require_once('connection.php');

$email = $_POST['email'];
$password = sha1($_POST['password']);

$sql = "SELECT firstname FROM users WHERE email = ? AND password = ? LIMIT 1";
$stmtselect  = $db->prepare($sql);
$result = $stmtselect->execute([$email, $password]);

if($result){
	$user = $stmtselect->fetch(PDO::FETCH_ASSOC);
	if($stmtselect->rowCount() > 0){
		$_SESSION['userlogin'] = $user;
		echo '1';
	}else{
		echo 'There no user for that combo';		
	}
}else{
	echo 'There were errors while connecting to database.';
}

}
?>