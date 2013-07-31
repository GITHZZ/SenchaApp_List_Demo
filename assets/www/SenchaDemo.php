<?php
	$mysql_server_name='127.0.0.1';
	$mysql_username='root';
	$mysql_password='';
	$mysql_database='bizapp';
	$con = mysql_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
	if(!$con){
		die('Could not connect:'.mysql_error());	
	}else{
		//echo('connect success');
	}
	
	/*select database*/
	mysql_select_db($mysql_database,$con);
	/*get data table*/
	$q="SELECT*FROM senchaDemo";
	mysql_query("SET NAMES GB2313");
	$rs=mysql_query($q,$con);
	
	if(!$rs){
		die("Valid result");
	}else{
		//echo"success to get data!!";
	}
	
	//array
	$arr=array();
	
   	while($row=mysql_fetch_row($rs)){
   		$arr[]=array("id"=>$row[0],"firstName"=>$row[1],"lastName"=>$row[2]);
   	}
	echo  json_encode($arr);
   	mysql_free_result($rs);//close data 
	mysql_close($con);
?>