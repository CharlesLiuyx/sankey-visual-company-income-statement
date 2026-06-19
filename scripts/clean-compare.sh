#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
COMPARE_DIR="$ROOT_DIR/compare"

mkdir -p "$COMPARE_DIR"
find "$COMPARE_DIR" -maxdepth 1 -type f ! -name ".gitkeep" -delete
: > "$COMPARE_DIR/.gitkeep"

echo "Cleaned $COMPARE_DIR"
