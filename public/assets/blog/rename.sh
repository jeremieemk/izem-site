#!/bin/bash

# Set the current directory as the working directory
directory="$(pwd)"

# Loop through all .jpeg files in the directory
for file in "$directory"/*.jpeg; do
    # Check if any .jpeg files exist
    if [ -e "$file" ]; then
        # Get the base name without the extension
        base_name=$(basename "$file" .jpeg)
        # Rename the file to have .jpg extension
        mv "$file" "$directory/$base_name.jpg"
        echo "Renamed: $file -> $directory/$base_name.jpg"
    fi
done

echo "All .jpeg files have been renamed to .jpg."
