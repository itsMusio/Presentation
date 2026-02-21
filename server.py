from __future__ import annotations

import argparse
import mimetypes
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the slide deck locally.")
    parser.add_argument("--bind", "-b", default="127.0.0.1", help="Bind address")
    parser.add_argument("--port", "-p", type=int, default=8080, help="Port to serve on")
    parser.add_argument(
        "--directory",
        "-d",
        default=Path(__file__).resolve().parent,
        help="Directory to serve",
    )
    args = parser.parse_args()

    mimetypes.add_type("application/javascript", ".js")
    mimetypes.add_type("application/javascript", ".mjs")
    mimetypes.add_type("text/css", ".css")
    mimetypes.add_type("application/json", ".json")

    handler = partial(SimpleHTTPRequestHandler, directory=str(args.directory))
    server = ThreadingHTTPServer((args.bind, args.port), handler)
    print(f"Serving on http://{args.bind}:{args.port} (Ctrl+C to stop)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
