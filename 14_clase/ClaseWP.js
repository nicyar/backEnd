/* 7 CONCEPTOS PRINCIPALES

1 MODO: production, development

2 ENTRY: archivo de entreada

3 TARGET: objetivo | 

4 OUTPUT: Salida

5 LOADERS: Herramienta para empaquetar archivos diferentes

6 PLUGINS:Herramientas para ejecutar adicionales a la hora de empaquetar

7 COMPATIBILIDAD: 

*/

// para que sean compatibles el webpack con express vamos a instalar otra dependencia npm i -D webpack-node-externals

/* resolve:{
    extensions:['.ts','.js']
} esto quiere decir que le de prioridad a un archivo en este caso al ts sobre el js si tienen el mismo nombre y si solo esta el js ese que lo lea */

// despues en rules el exclude evita una carpeta