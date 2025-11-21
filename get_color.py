import sys
from collections import Counter

try:
    from PIL import Image
except ImportError:
    print("PIL not installed")
    sys.exit(1)

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        # Resize to 1x1 to get average color effectively for a solid background
        img = img.resize((1, 1))
        color = img.getpixel((0, 0))
        return '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print(get_dominant_color(sys.argv[1]))
    else:
        print("Usage: python get_color.py <image_path>")
