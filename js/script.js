let btns = document.querySelectorAll(".qwe")

let h1 = document.querySelector(".h1")

let img = document.querySelector("#img")

let yryr = document.querySelector("#te")

let yeye = document.querySelector("#qqqw")

let hhh = document.querySelector("#hhh")

let w19 = document.querySelector("#w19")

let w21 = document.querySelector("#w21")

let many = document.querySelector("#many")

let count = 0

btns.forEach(btn => {

    btn.onclick = () => {
        let meth = btn.getAttribute("data-f")

        switch (meth) {
            case "+":
                count++
                h1.innerHTML = count * 10
                break;

            case "-":
                count--
                h1.innerHTML = count * 10
                break;


        }

        let qwqw = h1.innerHTML = count * 10

        if (qwqw >= 30) {

            img.setAttribute("src", "img/9024019_snowflake_fill_icon.svg")

            yryr.innerText = "AC"

        } else {
            img.setAttribute("src", "img/216520_waves_icon.svg")

            yryr.innerText = "HEAT"

        }

        img.onclick = () => {

            if (yeye.innerHTML === "OFF") {

                yeye.innerHTML = "ON"

                hhh.innerHTML = Math.round(hhh.innerHTML - ((hhh.innerHTML / 100) * 5))

            } else {

                yeye.innerHTML = "OFF"

                hhh.innerHTML = "750"

                // hhh.innerHTML = hhh.innerHTML + ((hhh.innerHTML / 100) * 5)

            }



        }



        console.log(hhh.innerHTML);

        console.log(yeye.innerHTML);
    }

})


w19.onclick = () => {

    many.innerHTML = "$89, 990"

    hhh.innerHTML = "750"
    qwert.style.height = "90px"
    qwert.style.width = "90px"
    qwert.style.right = "522px"
    qwert.style.top = "219px"

    wweerr.style.height = "90px"
    wweerr.style.top = "219px"
    wweerr.style.width = "90px"
    wweerr.style.left = "508.5px"


    // console.log();
}

let wweerr = document.querySelector(".cont_top_one")

let qwert = document.querySelector(".cont_top_two")

w21.onclick = () => {

    many.innerHTML = "$91, 990"
    hhh.innerHTML = Math.round(hhh.innerHTML - ((hhh.innerHTML / 100) * 3))


    qwert.style.height = "100px"
    qwert.style.width = "100px"
    qwert.style.right = "518px"
    qwert.style.top = "215px"

    wweerr.style.height = "100px"
    wweerr.style.top = "214px"
    wweerr.style.width = "100px"
    wweerr.style.left = "503px"
    // console.log(w19);
}

let btnss = document.querySelectorAll(".qwe22")

let q1w1 = document.querySelector(".q1w1")

let cot = 0

let you = 55

let qaz = document.querySelector("#qaz")

let wsx = document.querySelector("#wsx")

btnss.forEach((bt) => {

    bt.onclick = () => {
        let mm = bt.getAttribute("data-ff")

        switch (mm) {
            case "+":
                cot++
                q1w1.innerHTML = (cot * 5) + you

                hhh.innerHTML = Math.round(hhh.innerHTML - ((hhh.innerHTML / 100) * 8))
                break;

            case "-":
                cot--
                q1w1.innerHTML = (cot * 5) + you
                
                hhh.innerHTML = hhh.innerHTML + Math.round(((hhh.innerHTML / 100) * 8))
                break;
        }
        console.log("zzz");

        if(q1w1.innerHTML <= 40){
            qaz.style.display = "none"
        } else if(q1w1.innerHTML >= 100){
            wsx.style.display = "none"
        } else {
            qaz.style.display = "block"
            wsx.style.display = "block"
        }



    }



})