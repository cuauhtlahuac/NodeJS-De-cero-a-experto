# Event Loop and code execution


[A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)

Javascript por defecto es: Blocking and single threaded.

Call stack en node

    1. Global() // Main  -  Se parece al objeto global Window
    2. La siguiente línea la registra, la ejecuta y la elimina
    3. Asi para todas las lineas de código "sync"


Libuv (esta encargado de las tareas "async")

Aquí se quedan en modo de espera las funciones _asincronas_, esperan a que las funciones _síncronas_ del call stack normal de node terminen de ejecutarse, una vez ejecutadas, se pasan al call stack en orden como se fueron apilando y que **ya estén completados** al call stack _síncrono_.