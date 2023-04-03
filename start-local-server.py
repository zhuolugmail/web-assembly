#!/usr/bin/env python3

import http.server
import os

# We need to host from the root because we are going to be requesting files inside of dist
os.chdir("workarea/")
port = 8081
print("Running on port %d" % port)

http.server.SimpleHTTPRequestHandler.extensions_map[".wasm"] = "application/wasm"

httpd = http.server.HTTPServer(
    ("0.0.0.0", port), http.server.SimpleHTTPRequestHandler
)

print(
    'Mapping ".wasm" to "%s"'
    % http.server.SimpleHTTPRequestHandler.extensions_map[".wasm"]
)
httpd.serve_forever()
