echo "Listing files in ./public/images/gallery:"
ls -l ./images/gallery

echo "Matching files:"
for img in ./public/images/gallery/*.JPG ./public/images/gallery/*.jpg; do
  echo "Found: $img"
done

echo "Processing images..."
mkdir -p ./public/images/gallery/thumbs
for img in ./public/images/gallery/*.JPG ./public/images/gallery/*.jpg; do
  [ -e "$img" ] || continue
  filename=$(basename "$img")
  echo "Processing $img -> ./public/images/gallery/thumbs/$filename"
  sips -Z 400 "$img" --out "./public/images/gallery/thumbs/$filename"
done