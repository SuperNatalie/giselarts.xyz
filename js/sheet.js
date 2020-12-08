    var sheetPic = document.getElementById("galleryContainer");
        
        GetSheetDone.labeledCols(
        "1zLUp-zc3MEn845mynUHoCBDPKeGPF7IGL_cC2pZ8gOI",
        1
        ).then((sheet) => {
        for (const product of sheet.data){
        sheetPic.innerHTML += `
        <figure class="effect-chico tm-gallery-item ${product.category}">
        <img src="${product.bildlink}" alt="Image"/>
        <figcaption>
        <p>${product.bildtitel}</p>				
        </figcaption>			
        </figure>`
        }
        })

        
        console.log(sheetPic)


          

        // linked with https://docs.google.com/spreadsheets/d/1zLUp-zc3MEn845mynUHoCBDPKeGPF7IGL_cC2pZ8gOI/edit#gid=0

        //Nur leider wendet der das css nicht auf die bilder und den text an!???