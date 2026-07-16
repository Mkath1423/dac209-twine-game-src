rm -rf build
mkdir build

cp -r assets/ build/
cp index.html build

cd build
zip ../export.zip *