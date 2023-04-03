
#include <stdio.h>
#include <stdlib.h>
#include <emscripten.h>

void (*cb_f)(int);

EMSCRIPTEN_KEEPALIVE
extern "C" void register_function(int f)
{
    cb_f = reinterpret_cast<void (*)(int)>(f);
}

EMSCRIPTEN_KEEPALIVE
extern "C" void invoke_call()
{
    cb_f(7);
}
