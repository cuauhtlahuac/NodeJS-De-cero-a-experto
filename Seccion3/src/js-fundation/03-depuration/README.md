# 26. Depuración de aplicaciones de Node

Debemos ser capaces de depurar el código sin necesidad de usar consoles.

Para eso vamos a usar los brake points. En VScode si nos vamos al package.json nos va a mostrar todos los script y poder ejecutarlos en al presionar el link **debug**.

To make this work you need import or require the file to debug, for example, if you need to debug the file [03-depuration](../03-depuration/index.js) you need to import it into [app.js](../../app.js).