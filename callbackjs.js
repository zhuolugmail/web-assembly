
var stringLen = 10;

function updateProgressBar(i) {
    console.log('updateProgressBar', i);
    document.getElementById("progress").style.width = 'auto';
    document.getElementById("progress").style.width = `${i * 200.0 / stringLen}px`;
}

function reportProgress(i) {
    console.log(i);
    updateProgressBar(i);
    return 0;
}

var callbackData = function (data, n) {
    console.log(data, n);
    return 0;
}

/*        var exports;

        var mb = new WebAssembly.Memory({
            initial: 1024,
            maximum: 2048
        });
        function abortOnCannotGrowMemory(requestedSize) {
            abort('Cannot enlarge memory arrays to size ' + requestedSize +
                ' bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ' + HEAP8.length + ', (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0');
        }
        function _emscripten_resize_heap(requestedSize) {
            var oldSize = HEAPU8.length;
            requestedSize = requestedSize >>> 0;
            abortOnCannotGrowMemory(requestedSize);
        }





        WebAssembly.instantiateStreaming(
            fetch("callback.wasm"), {
            js: {
                mem: mb
            },
            env: {
                callbackProgress: reportProgress,
                callbackPassedData: callbackData,
                "emscripten_resize_heap": _emscripten_resize_heap,
                "emscripten_date_now": () => Date.now(),
                "_emscripten_get_now_is_monotonic": () => true,
                "emscripten_get_now": () => performance.now()
            }
        }
        ).then(results => {
            exports = results.instance.exports;
            memory = exports.memory;
        });
*/
function decode_string(ptr) {
    var str = UTF8ToString(ptr);
    return str;
    /*            bytes = new Uint8Array(memory.buffer, ptr);
                var len = 0;
                while (bytes[len]) len++;
    
                return new TextDecoder('utf8').decode(bytes.slice(0, len));
                */
}


function get_string() {
    var ptr = Module._generate_a_string(stringLen);
    console.log(ptr);

    str = decode_string(ptr);

    document.querySelector("#ret")
        .innerHTML += `${str}<br/>`;
}

