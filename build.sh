#/bin/sh

# clean up the lib directory
echo "Cleaning up the output directory"
rm -rf lib

# run babel and output to /lib
echo "Building the server"
babel src/server -d lib

# run webpack
echo "Building the client"
webpack

# copy over configs needed at runtime
echo "moving files that need moving"
cp knexfile.js lib/knexfile.js