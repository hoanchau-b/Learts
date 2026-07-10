import os

js_dir = os.path.dirname(os.path.abspath(__file__))
for f in os.listdir(js_dir):
    if f.endswith(".tải xuống"):
        new_name = f.replace(".tải xuống", "")
        old_path = os.path.join(js_dir, f)
        new_path = os.path.join(js_dir, new_name)
        os.rename(old_path, new_path)
        print(f"Renamed: {f} -> {new_name}")

print("Done!")
