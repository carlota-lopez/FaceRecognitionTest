# FaceRecognitionTest

Instrucciones para probar el backend que no ha sido posible conectar con el frontend:

1- Abrir el archivo HTML de la carpeta test.
2- En el id del empleado --> Seleccionar un id del empleado del que se quiera realizar el reconocimiento facial (carpeta de fotos/fotos_clientes ---> ejemplo Employeeid = 100)
3- Adjuntar una de las fotos (seria la foto con la que el usuario se querria autentificar), se adjuntaria en el html una fotos de la carpeta fotos/fotos_prueba ---->
  Si por ejemplo se adjuntaran las foto compare-1.jpg o compare-11.jpg ----> respuesta seria un json que devolveria "green" ---> AUTENTIFICACION CORRECTA
  Si por ejemplo se adjuntara cualquier otra foto (por ejemplo la de la chica: compare-2.jpg) ---> devolveria un json "red" ---> AUTENTIFICACION INCORRECTA
