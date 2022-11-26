function updNormal() {
    document.getElementById("updtbtn").innerHTML = "Update";
    document.getElementById("updtbtn").className = "bluebtn";
}

function updProgress() {
    console.log("update progress");
    document.getElementById("updtbtn").innerHTML = "Loading...";
}

function updLoad() {
    console.log("update load");
    document.getElementById("updtbtn").innerHTML = "Done";
    setTimeout(updNormal, 5000);
}
function updError() {
    console.error("update error");
    document.getElementById("updtbtn").innerHTML = "Error";
    document.getElementById("updtbtn").className = "btn-danger";
    setTimeout(updNormal, 5000);
}
function updAbort() {
    console.error("update abort");
    document.getElementById("updtbtn").innerHTML = "Abort";
    document.getElementById("updtbtn").className = "btn-danger";
    setTimeout(updNormal, 5000);
}

async function Kbupdate() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://edit:8020/update/", true);
    xhr.onloadstart = updProgress;
    xhr.onabort = updAbort;
    xhr.onerror = updError;
    xhr.onloadend = updLoad;
    xhr.send();
}


async function displayModal() {
        page = await fetch("https://kb.local.meyn.fr/html/modal.html");
        dom = await page.text();
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


document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 78) {
        displayModal();
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
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        xhr.send();
    }
    if (e.key === "Escape") {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";

    }
    if ((e.key === "Tab") || (e.key === '`')) {
        var modal = document.getElementById("myModal");
        if ((modal == null) || (modal.style.display == "none")) {
        displayModal();
        } else {
        modal.style.display = "none";
        }

    }
}
