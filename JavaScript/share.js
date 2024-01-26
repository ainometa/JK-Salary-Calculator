function shareJPG() {
            // Use html2canvas to capture the HTML content
            html2canvas(document.body).then(function(canvas) {
                // Convert the canvas to a data URL
                var dataUrl = canvas.toDataURL("image/jpeg");

                // Create a link element and trigger a click to download the image
                var a = document.createElement("a");
                a.href = dataUrl;
                a.download = "salary.jpg";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        }