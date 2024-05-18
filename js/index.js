

function Toggle1() {
    var btnvar1 = document.getElementById("btnh1");
    if (btnvar1.style.color == "red") {
        btnvar1.style.color = "grey";
        alert("Oops sorry...we are not satisfies you");
    } else {
        alert("You like our farm!");
        btnvar1.style.color = "red";
    }
}
function changePlanting() {
    const media = document.getElementById("media");
    const title = document.getElementById("title");
    const descript = document.getElementById("descript");
    media.outerHTML = '<video controls autoplay muted height="40" class="card-img-top img-fluid" id="media"><source src="./../video/vid1.mp4" type="video/mp4"></video>';
    title.innerText = 'Planting';
    descript.innerText = 'First we have to make baby crop from pomegranate tree itself. Then after some period of time it gets converted into the crop level of cultivation.';
}
function changeCultivation() {
    const media = document.getElementById("media");
    const title = document.getElementById("title");
    const descript = document.getElementById("descript");
    media.outerHTML = '<img src="./../imgs/pom3.jpeg" class="card-img-top img-fluid" id="media" alt="pome">';
    title.innerText = 'Cultivate the fruit';
    descript.innerText = 'Planting is usually done in spring (February-March) and July-August in sub-tropical and tropical regions respectively.And this is time when we are take efforts to save our fruit from insects and diesease.';
}
function changeGarden() {
    const media = document.getElementById("media");
    const title = document.getElementById("title");
    const descript = document.getElementById("descript");
    media.outerHTML = '<img src="./../imgs/bagg.jpeg" class="card-img-top img-fluid" id="media" alt="pome">';
    title.innerText = 'Pomegranate garden';
    descript.innerText = 'Evergreen garden without any diesease is very challenging task but love towards pomegranate gives us vibes and we should take care of our pomegranate.';
}
function changeExport() {
    const media = document.getElementById("media");
    const title = document.getElementById("title");
    const descript = document.getElementById("descript");
    media.outerHTML = '<img src="./../imgs/export.jpeg"  class="card-img-top img-fluid" id="media" alt="pome">';
    title.innerText = 'Export and selling';
    descript.innerText = '6 months of efforts turns into fruitful results.Our fruit is now ready to sell.and we have to give our price for the hardwork.';
}

