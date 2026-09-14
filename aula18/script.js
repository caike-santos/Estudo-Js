let listarOrigamis = [
    {
        "descricao" : "DRAGÃO ORIENTAL DE ORIGAMI (Jo Nakashima)",
        "src" : "https://www.youtube.com/embed/H7bxdd2_1ic?si=Obq-gxjekfQdvtfM",
        "img" : "img/origami1.png"
    },
    {
        "descricao" : "ORCA DE ORIGAMI (Joseph Hwang)",
        "src" : "https://www.youtube.com/embed/D5rDfohO2w0?si=riNYrbE4W2icKG3G",
        "img" : "img/origami2.png"
    },
    {
        "descricao" : "COBRA DE ORIGAMI 🐍 (Jo Nakashima)",
        "src" : "https://www.youtube.com/embed/1VBXHbywKPg?si=7q0sZhT9q7xedqYi",
        "img" : "img/origami3.png"
    },
    {
        "descricao" : "OVELHA DE ORIGAMI (Kingsley Hwang)",
        "src" : "https://youtube.com/embed/x9Wj90b_FKE?si=vSXXEUZHOEf-owzo",
        "img" : "img/origami4.png"
    },
    {
        "descricao" : "MAGNET UPGRADE FOR THE INFINITY CUBE",
        "src" : "https://youtube.com/embed/KRf5En9ea58?si=KwUCFKG1KeCv0LiZ",
        "img" : "img/origami5.png"
    },
    {
        "descricao" : "COELHO DE ORIGAMI (Quentin Trollip)",
        "src" : "https://youtube.com/embed/f0n3HySiRHs?si=GOPbKhyAf5vsFhfc",
        "img" : "img/origami6.png"
    }

]

const linha = document.getElementById("linha");

listarOrigamis.forEach((origami, posicao) => {
    linha.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 d-flex">
          <div class="card h-100 w-100 shadow-sm" style="cursor: pointer;" onclick="abrirModel('${posicao}')">
            <img src="${origami.img}" class="card-img-top" alt="${origami.descricao}" style="height: 200px; object-fit: cover;" />
            <div class="card-body d-flex align-items-center justify-content-center">
              <p class="card-text fw-semibold mb-0">
                ${origami.descricao}
              </p>
            </div>
          </div>
        </div>`;
});

function abrirModel(posicao){
    let origamiSelecionado = listarOrigamis[posicao];
    document.getElementById("tituloModal").innerHTML = origamiSelecionado.descricao;
    document.getElementById("video").src = origamiSelecionado.src;
    new bootstrap.Modal('#ModalOrigami').show();
}

function mudarTema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTema").innerHTML = '<i class="bi bi-moon-fill"></i>';
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTema").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    }
}