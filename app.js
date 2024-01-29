var Alert = new CustomAlert ();

function CustomAlert(){
    this.render = function(){
    let popUpBox = Document.getElementById('popUpBox');
    popUpBox.style.display = "Block";
    document.getElementById('closeModal').innerHTML = '<a href="index.html"><button type="button"a href>¡Si quiero!</button><a/>';
}

this.ok = function(){
    document.getElementById('popUpBox').style.display = "none";
    document.getElementById('popUpOverlay').style.display = "none";
}
}