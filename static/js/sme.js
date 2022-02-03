document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 78) {
        dom = '<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Création d&apos;une nouvelle note<br/><i>Projet - Type de Documents - Tags</i><br/><input id="cmd"></input></p></div></div>';
        document.body.innerHTML += dom;
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        var cmd = document.getElementById("cmd");
        modal.style.display = "block";
        cmd.focus();
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    if (e.which == 13) {
        var cmd = document.getElementById("cmd");
        var mycmd = cmd.value.split(" ")
        // prepare tags to pass in request
        // tags must be separate by colon ':'
        var send_tags = ""
        for (const t of mycmd.slice(2)) {
		    send_tags += t + ":"
	    }
	    send_tags = send_tags.slice(0,-1);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://edit:8020/new/?project=" + mycmd[0] +
                 "&type=" + mycmd[1] + "&tags=" + send_tags, true);
        xhr.send();
        modal.style.display = "none";
    }
}
