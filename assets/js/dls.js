function loadDownloads(path) {
    var fileExts = [".txt", ".zip", ".img"];

    $.get(path, function(data) {
        fileExts.forEach(function(current) {
            $(data).find("a:contains(" + current + ")").each(function () {
                var a = $(this)[0];
                var ul = document.createElement("ul");

                a.classList.add("button", "fit");
                a.href = path + a.textContent;
                a.download = a.textContent;

                ul.appendChild(a);

                $("#files").append("<h2>" + ul.innerHTML + "</h2>");
            });
        });
    });
}