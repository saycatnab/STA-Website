import React from "react";
import PDFfile from "../assets/Guide-to-teaching.pdf"

const PDF_FILE_URL = `http://localhost:3000/${PDFfile}`


const ProductsPage = () => {
    const downloadFile = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }
    return(
        <div>
            <button onClick={() => {
                downloadFile(PDF_FILE_URL)
            }}>Download</button>
        </div>
    )
}

export default ProductsPage;