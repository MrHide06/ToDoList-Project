function tambah() {
    let li = document.createElement("li");
    let hasilIsi = document.getElementById("input").value;
    let t = document.createTextNode(hasilIsi);
    li.appendChild(t);
    document.getElementById("ul").appendChild(li);
}
