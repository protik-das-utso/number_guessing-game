let start = document.getElementById("start");
let check = document.getElementById("check");
let after_start = document.querySelector(".after-start");
let get = document.querySelector(".get");

let win = document.getElementById("win");
let win_wrong_show = document.querySelector(".win-wrong-show");
let wrong = document.getElementById("wrong");
let lose = document.getElementById("lose");
let attempt = document.getElementById("attempt");
let left = document.getElementById("left");
let correct_num = document.getElementById("correct-num");
let again_play = document.querySelector(".again-play");

start.addEventListener("click", start_game);
check.addEventListener("click", after_starting_game);
again_play.addEventListener("click", again_start_game);

let attempt_num = 0,
    left_num = 3,
    random;

function start_game() {
    after_start.classList.remove("hidden");
    after_start.classList.add("active");

    get.classList.remove("hidden");
    get.classList.add("active");

    start.classList.add("hidden");
    start.classList.remove("active");

    const high = 11,
        low = 1;
    random = Math.floor(Math.random() * (high - low) + low);
}
function after_starting_game() {
    user_input = document.getElementById("input").value;
    if (!user_input) {
        alert("Please enter a number....");
    } else {
        attempt_num += 1;
        left_num -= 1;
        if (attempt_num != 3) {
            if (user_input == random) {
                win_show();
            } else if (user_input > random || user_input < random) {
                wrong.classList.remove("hidden");
                wrong.classList.add("active");
                toogle = document.querySelector(".big-small");
                toogle.classList.remove("hidden");
                toogle.classList.add("active");
                hints = document.getElementById("hints");
                correct_num.classList.remove("active");
                correct_num.classList.add("hidden");
                if (user_input > random) {
                    hints.innerHTML = "Correct answer is smaller! ";
                } else {
                    hints.innerHTML = "Correct answer is greater! ";
                }
            }
        } else if (attempt_num == 3) {
            if (user_input == random) {
                win_show();
            } else {
                lose_show();
            }
        }
        attempt.textContent = attempt_num;
        left.textContent = left_num;
    }
}
function common() {
    change_para = document.getElementById("change-para");
    change_para.classList.remove("active");
    change_para.classList.add("hidden");

    get.classList.remove("active");
    get.classList.add("hidden");

    wrong.classList.remove("active");
    wrong.classList.add("hidden");

    toogle.classList.remove("active");
    toogle.classList.add("hidden");
}
function win_show() {
    win.classList.remove("hidden");
    win.classList.add("active");
    common();
    correct_num.classList.remove("hidden");
    correct_num.classList.add("active");

    correct_num.innerHTML = `Correct Number : ${random}`;
    again_play.classList.remove("hidden");
    again_play.classList.add("active");

    celebrate();
}

function celebrate() {
    win_wrong_show.classList.add(
        "bg-[url('./4M57.gif')]",
        "h-auto",
        "bg-no-repeat",
        "bg-cover"
    );
    setTimeout(
        () =>
            win_wrong_show.classList.remove(
                "bg-[url('./4M57.gif')]",
                "h-auto",
                "bg-no-repeat",
                "bg-cover"
            ),
        4000
    );
}

function lose_show() {
    lose.classList.remove("hidden");
    lose.classList.add("active");
    common();
    correct_num.classList.remove("hidden");
    correct_num.classList.add("active");

    correct_num.innerHTML = `Correct Number : ${random}`;
    again_play.classList.remove("hidden");
    again_play.classList.add("active");
}
function again_start_game() {
    attempt_num = 0;
    left_num = 3;

    change_para = document.getElementById("change-para");
    change_para.classList.remove("hidden");
    change_para.classList.add("active");

    win.classList.add("hidden");
    win.classList.remove("active");
    lose.classList.add("hidden");
    lose.classList.remove("active");
    again_play.classList.add("hidden");
    again_play.classList.remove("active");

    start.classList.remove("hidden");
    start.classList.add("active");
    after_start.classList.add("hidden");
    after_start.classList.remove("active");
    get.classList.add("hidden");
    get.classList.remove("active");

    correct_num.classList.remove("active");
    correct_num.classList.add("hidden");

    document.getElementById("input").value = "";

    const hints = document.getElementById("hints");
    hints.innerHTML = "";

    win_wrong_show.classList.remove(
        "bg-[url('./4M57.gif')]",
        "h-auto",
        "bg-no-repeat",
        "bg-cover"
    );

    attempt.textContent = attempt_num;
    left.textContent = left_num;
}
