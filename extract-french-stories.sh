#!/bin/bash

# Script to help extract text from French Word documents
# This requires either 'textutil' (macOS) or 'docx2txt' (Linux/macOS with homebrew)

echo "================================================"
echo "French Story Extraction Helper"
echo "================================================"
echo ""

FRENCH_DIR="/Users/chudi/Documents/side/gigs/luv/luv-site/public/french"
OUTPUT_DIR="/Users/chudi/Documents/side/gigs/luv/luv-site/public/french/extracted"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "This script will extract text from Word documents."
echo "French documents location: $FRENCH_DIR"
echo "Extracted text will be saved to: $OUTPUT_DIR"
echo ""

# Check if textutil exists (macOS)
if command -v textutil &> /dev/null; then
    echo "✓ Found textutil (macOS text conversion tool)"
    echo ""
    
    # Process each .docx file
    for file in "$FRENCH_DIR"/*.docx; do
        if [ -f "$file" ]; then
            filename=$(basename "$file" .docx)
            output_file="$OUTPUT_DIR/${filename}.txt"
            
            echo "Processing: $filename"
            textutil -convert txt "$file" -output "$output_file"
            
            if [ $? -eq 0 ]; then
                echo "  ✓ Extracted to: ${filename}.txt"
            else
                echo "  ✗ Failed to extract: ${filename}"
            fi
            echo ""
        fi
    done
    
    echo "================================================"
    echo "Extraction complete!"
    echo "Check the extracted folder for text files."
    echo "================================================"
    
elif command -v docx2txt &> /dev/null; then
    echo "✓ Found docx2txt"
    echo ""
    
    # Process each .docx file
    for file in "$FRENCH_DIR"/*.docx; do
        if [ -f "$file" ]; then
            filename=$(basename "$file" .docx)
            output_file="$OUTPUT_DIR/${filename}.txt"
            
            echo "Processing: $filename"
            docx2txt "$file" "$output_file"
            
            if [ $? -eq 0 ]; then
                echo "  ✓ Extracted to: ${filename}.txt"
            else
                echo "  ✗ Failed to extract: ${filename}"
            fi
            echo ""
        fi
    done
    
    echo "================================================"
    echo "Extraction complete!"
    echo "Check the extracted folder for text files."
    echo "================================================"
    
else
    echo "⚠ Text extraction tools not found."
    echo ""
    echo "Option 1 (macOS): textutil should be pre-installed"
    echo "Option 2: Install docx2txt with: brew install docx2txt"
    echo ""
    echo "Alternative: Manually open each .docx file and copy content"
    echo ""
    echo "Word documents to process:"
    ls -1 "$FRENCH_DIR"/*.docx
fi

echo ""
echo "Next steps:"
echo "1. Review extracted text files in: $OUTPUT_DIR"
echo "2. Format the content as JavaScript arrays"
echo "3. Add to /lib/stories-i18n.ts in the storiesFr array"
echo ""
