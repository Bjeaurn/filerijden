echo "Building started..."

echo "Remove /dist/"
rm -rf dist/

echo "Build Angular application"
ng build --env=prod

echo "Copying PHP API"
cp -R src/api/. dist/api/

echo "Building completed!"