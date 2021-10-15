var arr = ["https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg", "https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg", "https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"];
var gallery = document.getElementById('gallery');
var maisyti  = document.getElementById("maisyti");

document.getElementById('rodyti').addEventListener('click', function () {
    console.log('true');
    switch (rodyti.value) {
        case "Rodyti":
            rodyti.value = "Slėpti";
            break;
        case "Slėpti":
            rodyti.value = "Rodyti";
            break;
    }

    gallery.classList.toggle('block');
    maisyti.classList.toggle('block');
    console.log(arr);
    gallery.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {

        console.log(i);
        gallery.innerHTML += `
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src="${arr[i]}"
            class="w-100 shadow-1-strong rounded mb-4" alt="" />

        </div>
    `;
    }
});
maisyti.addEventListener('click', function () {
    gallery.innerHTML = "";
    arr.sort(function () { return 0.1 - Math.random() });
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        gallery.innerHTML += `
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src="${arr[i]}"
            class="w-100 shadow-1-strong rounded mb-4" alt="" />

        </div>
    `;
    }
    
})