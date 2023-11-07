# Event Loop

[A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)

Lo vamos a ver con un ejemplo sencillo.

Imagina que tu abuela va a preparar una sopa y necesita los siguientes ingredientes.

**Callstack**(Pila de ejecución)
Arroz
Carne
Papa
Zanahoria
etc...

**Abuela** = _Event Loop_
Es quien va a tener el control de lo que se va a ejecutar

**Mesa** = _Cola de tareas_
Whenever we declare variables or functions, memory is allocated on the heap. And whenever we execute code, functions are pushed into the call stack.
When a function returns, it is popped off the call stack. This is a straightforward implementation of the stack data structure, where the last item added is the first one to be removed.

**niño** = _Libuv_
Va por las cosas que necesita la abuela para la sopa y las pone sobre la mesa.  Suponiendo que esos ingredientes se encuentran en lugares diferentes el niño tendrá que ir a la verdulería, la tienda, la carnicería etc. En estos casos es posible que obtenga los ingredientes en el mismo lugar como por ejemplo la papa y zanahoria.

Libuv then runs the task using native asynchronous mechanisms of the operating system. In case the native mechanisms are not available or inadequate, it utilizes its thread pool to run the task, ensuring that the main thread is not blocked. -

¿Qué pasa si dos Timeouts terminan al mismo tiempo?
        Los callbacks de temporizador se ejecutan antes que las llamas de I/O


¿Qué pasa si una promesa termina al mismo tiempo que otro call back?

## El event loop sigue ciertas reglas

1. Callbacks en el microtask se ejecutan primero
2. Todos los callbacks dentro del timer queue se ejecutan
3. Callback en el microtask queue (si hay) se ejecutan después de los callbacks timers, primero tareas en el nextTick queue y luego tareas en el promise queue.
4. Callbacks de I/O se ejecutan.
5. Callbacks en el microtask queue se ejecutan (si hay) y luego promise queue (si hay).
6. Todos los callbacks en el check queue se ejecutan 
7. Callbacks en el microtask se ejecutan después de cada callback en el check queue. (Siguiendo el mismo orden anterior, nextTick y luego promise)
8. Todos los callbacks en el close queue son ejecutados
9. Por última vez en el mismo ciclo, los microtask queue son ejecutados de la misma forma, nextTick y luego promise queue.