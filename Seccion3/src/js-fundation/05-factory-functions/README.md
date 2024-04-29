# Factory Functions

Una factory funcion es una funcion que crea otras funciones (es todo)

# Patrón adaptador

imagina que estás usando uuid en toda la aplicación, pero en algun momento necesitas cambiar esta librería por otra, esto se volvería muy dificil si es que esta funcion ese está usando en muchos lugares al mismo tiempo. ¿Que podemos hacer?

Pues necesitamos crear un [adaprtador](../../public/get-age.plugin.js), para que en dado caso que nosotros cambiemos de libería esta se más sencilla de cambiar.