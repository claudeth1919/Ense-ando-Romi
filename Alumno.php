<?php
  $mysqli = mysqli_connect("localhost", "root", "", "kapibara");
  $sql= "SELECT * FROM alumnos";
  $resultado = mysqli_query($mysqli, $sql);
  while($row=$resultado->fetch_array(MYSQLI_ASSOC)) $arreglo[]=array_map('utf8_encode', $row);
  echo json_encode($arreglo, JSON_FORCE_OBJECT);
?>
