function overThumbnail(foto)
{
    const frame = document.getElementById("frame");
    frame.style.backgroundImage = "url('"+foto.src+"')";
    
    var imgText = document.getElementById("imgtext");
    imgText.innerHTML = foto.alt;
}