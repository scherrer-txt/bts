#!/bin/bash
mkdir -p recompressed
for f in *.avif; do
  avifdec "$f" temp.png
  avifenc -q 45 --yuv 420 -s 8 temp.png "recompressed/$f"
done
rm temp.png
