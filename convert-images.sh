#!/bin/bash
# Convert portfolio images to WebP format
# Usage: bash convert-images.sh

set -e
cd "$(dirname "$0")"

BASE="Centrid Assets/drive-download-20260525T142738Z-3-001/Portfolio"
COUNT=0

convert() {
  local src="$1"
  local dst="$2"
  cwebp -q 80 -resize 1920 0 "$src" -o "$dst" 2>/dev/null
  echo "  ✓ $dst"
  COUNT=$((COUNT + 1))
}

echo "=== Aetas Residence (8 images) ==="
convert "$BASE/Aetas Residence/Aetas-1.jpg"  "public/projects/aetas-residence/1.webp"
convert "$BASE/Aetas Residence/Aetas-7.jpg"  "public/projects/aetas-residence/2.webp"
convert "$BASE/Aetas Residence/Aetas-12.jpg" "public/projects/aetas-residence/3.webp"
convert "$BASE/Aetas Residence/Aetas-25.jpg" "public/projects/aetas-residence/4.webp"
convert "$BASE/Aetas Residence/Aetas-35.jpg" "public/projects/aetas-residence/5.webp"
convert "$BASE/Aetas Residence/Aetas-41.jpg" "public/projects/aetas-residence/6.webp"
convert "$BASE/Aetas Residence/Aetas-45.jpg" "public/projects/aetas-residence/7.webp"
convert "$BASE/Aetas Residence/Aetas-54.jpg" "public/projects/aetas-residence/8.webp"

echo "=== Alix Residence (7 images) ==="
convert "$BASE/Alix Residence/IMG_7629.jpg" "public/projects/alix-residence/1.webp"
convert "$BASE/Alix Residence/IMG_7637.jpg" "public/projects/alix-residence/2.webp"
convert "$BASE/Alix Residence/IMG_7638.jpg" "public/projects/alix-residence/3.webp"
convert "$BASE/Alix Residence/IMG_7644.jpg" "public/projects/alix-residence/4.webp"
convert "$BASE/Alix Residence/IMG_7655.jpg" "public/projects/alix-residence/5.webp"
convert "$BASE/Alix Residence/IMG_7666.jpg" "public/projects/alix-residence/6.webp"
convert "$BASE/Alix Residence/IMG_7688.jpg" "public/projects/alix-residence/7.webp"

echo "=== Mont Kiara Damai (8 images) ==="
convert "$BASE/Mont Kiara Damai/DamaiResort-1.jpg"  "public/projects/mont-kiara-damai/1.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-4.jpg"  "public/projects/mont-kiara-damai/2.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-8.jpg"  "public/projects/mont-kiara-damai/3.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-22.jpg" "public/projects/mont-kiara-damai/4.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-33.jpg" "public/projects/mont-kiara-damai/5.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-44.jpg" "public/projects/mont-kiara-damai/6.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-47.jpg" "public/projects/mont-kiara-damai/7.webp"
convert "$BASE/Mont Kiara Damai/DamaiResort-59.jpg" "public/projects/mont-kiara-damai/8.webp"

echo "=== Park Place Desa Park City (8 images) ==="
convert "$BASE/3D/Park Place Desa Park City/Foyer.jpg"          "public/projects/park-place-desa-park-city/1.webp"
convert "$BASE/3D/Park Place Desa Park City/Master Bedroom.jpg" "public/projects/park-place-desa-park-city/2.webp"
convert "$BASE/3D/Park Place Desa Park City/Guest Bedroom.jpg"  "public/projects/park-place-desa-park-city/3.webp"
convert "$BASE/3D/Park Place Desa Park City/TV.jpg"             "public/projects/park-place-desa-park-city/4.webp"
convert "$BASE/3D/Park Place Desa Park City/Altar.jpg"          "public/projects/park-place-desa-park-city/5.webp"
convert "$BASE/3D/Park Place Desa Park City/hallway.jpg"        "public/projects/park-place-desa-park-city/6.webp"
convert "$BASE/3D/Park Place Desa Park City (2)/2.jpg"          "public/projects/park-place-desa-park-city/7.webp"
convert "$BASE/3D/Park Place Desa Park City (2)/5.jpg"          "public/projects/park-place-desa-park-city/8.webp"

echo "=== The Eighth Elmina Green (7 images) ==="
convert "$BASE/3D/The Eighth Elmina Green/1.jpg" "public/projects/the-eighth-elmina-green/1.webp"
convert "$BASE/3D/The Eighth Elmina Green/2.jpg" "public/projects/the-eighth-elmina-green/2.webp"
convert "$BASE/3D/The Eighth Elmina Green/3.jpg" "public/projects/the-eighth-elmina-green/3.webp"
convert "$BASE/3D/The Eighth Elmina Green/4.jpg" "public/projects/the-eighth-elmina-green/4.webp"
convert "$BASE/3D/The Eighth Elmina Green/5.jpg" "public/projects/the-eighth-elmina-green/5.webp"
convert "$BASE/3D/The Eighth Elmina Green/6.jpg" "public/projects/the-eighth-elmina-green/6.webp"
convert "$BASE/3D/The Eighth Elmina Green/7.jpg" "public/projects/the-eighth-elmina-green/7.webp"

echo "=== Eco Ardence Amber (8 images) ==="
convert "$BASE/3D/Eco Ardence Amber/Coffee.jpg"     "public/projects/eco-ardence-amber/1.webp"
convert "$BASE/3D/Eco Ardence Amber/Coffee 2.jpg"   "public/projects/eco-ardence-amber/2.webp"
convert "$BASE/3D/Eco Ardence Amber/Kids Room.jpg"   "public/projects/eco-ardence-amber/3.webp"
convert "$BASE/3D/Eco Ardence Amber/Kids Room 3.jpg" "public/projects/eco-ardence-amber/4.webp"
convert "$BASE/3D/Eco Ardence Amber/Spa Room.jpg"    "public/projects/eco-ardence-amber/5.webp"
convert "$BASE/3D/Eco Ardence Amber/Reading.jpg"     "public/projects/eco-ardence-amber/6.webp"
convert "$BASE/3D/Eco Ardence Amber/Foyer 2.jpg"     "public/projects/eco-ardence-amber/7.webp"
convert "$BASE/3D/Eco Ardence Amber/Master Bath.jpg"  "public/projects/eco-ardence-amber/8.webp"

echo "=== The Pulse Residence (7 images) ==="
convert "$BASE/3D/The Pulse Residence/Living.jpg"           "public/projects/the-pulse-residence/1.webp"
convert "$BASE/3D/The Pulse Residence/Sofa.jpg"             "public/projects/the-pulse-residence/2.webp"
convert "$BASE/3D/The Pulse Residence/Kitchen.jpg"          "public/projects/the-pulse-residence/3.webp"
convert "$BASE/3D/The Pulse Residence/Master Bedroom 1.jpg" "public/projects/the-pulse-residence/4.webp"
convert "$BASE/3D/The Pulse Residence/Master Bedroom 2.jpg" "public/projects/the-pulse-residence/5.webp"
convert "$BASE/3D/The Pulse Residence/Master Bedroom 3.jpg" "public/projects/the-pulse-residence/6.webp"
convert "$BASE/3D/The Pulse Residence/Dressing Wardrobe.jpg" "public/projects/the-pulse-residence/7.webp"

echo "=== Regent Residence (8 images) ==="
convert "$BASE/3D/Regent Residence/Living Sofa.jpg"    "public/projects/regent-residence/1.webp"
convert "$BASE/3D/Regent Residence/Living TV.jpg"      "public/projects/regent-residence/2.webp"
convert "$BASE/3D/Regent Residence/Dining.jpg"         "public/projects/regent-residence/3.webp"
convert "$BASE/3D/Regent Residence/Dining 2.jpg"       "public/projects/regent-residence/4.webp"
convert "$BASE/3D/Regent Residence/Kitchen.jpg"        "public/projects/regent-residence/5.webp"
convert "$BASE/3D/Regent Residence/Master Bedroom.jpg" "public/projects/regent-residence/6.webp"
convert "$BASE/3D/Regent Residence/Study Room.jpg"     "public/projects/regent-residence/7.webp"
convert "$BASE/3D/Regent Residence/Corridor.jpg"       "public/projects/regent-residence/8.webp"

echo "=== North Garden (10 images) ==="
convert "$BASE/3D/North Garden/Living 1.jpg"         "public/projects/north-garden/1.webp"
convert "$BASE/3D/North Garden/Living 2.jpg"         "public/projects/north-garden/2.webp"
convert "$BASE/3D/North Garden/Living 3.jpg"         "public/projects/north-garden/3.webp"
convert "$BASE/3D/North Garden/Living 4.jpg"         "public/projects/north-garden/4.webp"
convert "$BASE/3D/North Garden/Master Bedroom 1.jpg" "public/projects/north-garden/5.webp"
convert "$BASE/3D/North Garden/Master Bedroom 2.jpg" "public/projects/north-garden/6.webp"
convert "$BASE/3D/North Garden/Master Bedroom 3.jpg" "public/projects/north-garden/7.webp"
convert "$BASE/3D/North Garden/Master Bedroom 4.jpg" "public/projects/north-garden/8.webp"
convert "$BASE/3D/North Garden/Master Bath.jpg"      "public/projects/north-garden/9.webp"
convert "$BASE/3D/North Garden/Bath 2.jpg"           "public/projects/north-garden/10.webp"

echo ""
echo "=== SUMMARY ==="
echo "Total images converted: $COUNT"
echo ""
echo "Files per project:"
for dir in public/projects/*/; do
  project=$(basename "$dir")
  count=$(find "$dir" -name "*.webp" -not -name "$project.webp" | wc -l | tr -d ' ')
  size=$(du -sh "$dir" 2>/dev/null | cut -f1)
  echo "  $project: $count files, $size total"
done
echo ""
echo "Grand total size:"
du -sh public/projects/
