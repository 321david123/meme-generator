
$(document).ready(function () {
//escuchar evento


    $("#boton").click(function () {
      console.log("VIENDO SI EXISTE")
      var element = document.getElementById("this");
      if (element !== null){
        console.log("si existe")
        element.remove();
      }
      else{
        console.log("aca llegamos")
      }
      let apiUrl = "https://meme-api.com/gimme";  
      //peticion
      $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json", //depende el tipo que sea la api
        success: function (data) {
        //success then:
            console.log(data);
            const image = document.createElement("img");
            image.src = data.url;
            image.alt = "meme";
            image.id = "this"
            //console.log(data.url)
            const contenedor = document.getElementById("image");
            contenedor.appendChild(image);
  
        },
        error: function (error) {
        //fail then:
          console.error("Error en la solicitud:", error);
        },
      });
    });
  });
console.log("hi, contact me 4111771675")