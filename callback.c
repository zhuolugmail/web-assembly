
#include <stdlib.h>
#include <errno.h>
#include <time.h>
#include <emscripten.h>

extern int callbackProgress(int p);
extern int callbackPassedData(char *data, int n);

EMSCRIPTEN_KEEPALIVE
char *generate_a_string(int n)
{
    struct timespec ts;
    char *s = malloc(n + 1);
    int res;

    ts.tv_sec = 0;
    ts.tv_nsec = 500000000;

    for (int i = 0; i < n; i++)
    {
        s[i] = 'a' + (i % 26);

        do
        {
            res = nanosleep(&ts, &ts);
        } while (res && errno == EINTR);

        callbackProgress(i + 1);
    }
    s[n] = 0;

    callbackPassedData(s, n);
    return s;
}
