
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sumArray(int *arr, int length)
{
    int sum = 0;
    for (int i = 0; i < length; i++)
        sum += arr[i];

    return sum;
}

EMSCRIPTEN_KEEPALIVE
char *astring()
{
    return ("hello, world!");
}
