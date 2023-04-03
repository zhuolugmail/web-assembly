

#include <stdio.h>
#include <emscripten.h>

int addNum(int a, int b)
{
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int addResult()
{
    printf("hello, world! %d\n", addNum(22, 6));
    return 2;
}
