import os

path = "portfolio/public/homepage/resized"
dir_list = os.listdir(path)

f = open("filepaths.txt", "a")

k = -1

for path in dir_list:
    k += 1
    if path.endswith(".jpg") or path.endswith(".JPG"):
        f.write("{")
        f.write("\"key\": ")
        f.write(str(k))
        f.write(", ")
        f.write("\"path\": \"/homepage/resized/")
        f.write(path)
        f.write("\"")
        f.write(", delay: 0")
        f.write("}")
        f.write(", ")

        f.write("\n")

f.close()