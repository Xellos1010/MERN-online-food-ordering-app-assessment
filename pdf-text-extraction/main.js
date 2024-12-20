const fs = require('fs');
const pdfParse = require('pdf-parse');

// Function to extract text from a PDF file
async function extractTextFromPDF(pdfPath) {
    try {
        // Read the PDF file
        const pdfBuffer = fs.readFileSync(pdfPath);
        
        // Parse the PDF file
        const data = await pdfParse(pdfBuffer);
        
        console.log("Extracted Text:");
        console.log(data.text);

        // Optionally, save the extracted text to a file
        const outputFile = pdfPath.replace(/\.pdf$/, '.txt');
        fs.writeFileSync(outputFile, data.text);
        console.log(`Text has been saved to ${outputFile}`);
    } catch (err) {
        console.error("Error extracting text from PDF:", err.message);
    }
}

// Example usage
const pdfPath = "1701441104_mern_p1_pep_ps.pdf"; // Replace with your PDF file path
extractTextFromPDF(pdfPath);
