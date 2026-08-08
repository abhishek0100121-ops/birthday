/* =========================================
   BIRTHDAY MISSION WEBSITE
========================================= */


/* =========================================
   ✏️ ONLY EDIT THIS SECTION
========================================= */


const missions = [

    {

        // ==============================
        // MISSION 1
        // ==============================

        question:
            "Aapne mujhe pehli baar kya gift diya tha ??",

        answer:
            "Hair Straightener ",

        wish:
            "Pehla surprise toh bas ek chhoti si shuruaat hai… kyunki tumhare liye mere dil mein surprises se kahin zyada pyaar hai. ❤️ Bas aaj ke din ek promise karo—apni ye beautiful smile kabhi mat khona",

        prizeName:
            "Photo frame",

        prizeImage:
            "prize1.jpg"

    },


    {

        // ==============================
        // MISSION 2
        // ==============================

        question:
            "hum dono ke relation ko kitne saal hue ?",

        answer:
            "5",

        wish:
            "Hamari saath bitayi hui har memory mere dil ke bahut kareeb hai. ❤️ Chahe woh chhoti si nok-jhok ho, hasi-mazaak ho ya koi khoobsurat moment — tumhare saath har pal special ban jaata hai. Bas aise hi mera haath pakad kar zindagi bhar mere saath chalna. Happy Birthday, jaan!",

        prizeName:
            " silver chain ",

        prizeImage:
            "prize2.jpg"

    },


    {

        // ==============================
        // MISSION 3
        // ==============================

        question:
            "meri favorite 3 food batao??",

        answer:
            "Dosa,Gupchup,Chowmin",

        wish:
            "Zindagi mein bahut log milte hain, lekin har kisi ke saath dil ko ghar jaisa sukoon nahi milta. Tum mere liye sirf mere husband nahi, mere best friend, meri khushi aur meri safe place ho. ❤️ Bhagwan tumhe hamesha khush rakhe aur mujhe har janam tumhara saath mile.",

        prizeName:
            "campus shoes",

        prizeImage:
            "prize3.jpg"

    },


    {

        // ==============================
        // MISSION 4
        // ==============================

        question:
            "Aapne mujhe pehli baar kya dekh ke pasand kiya tha ?",

        answer:
            "Masoom chehra",

        wish:
            "Mission complete… lekin tumhare liye mera pyaar wala mission kabhi complete nahi hoga. 😄❤️ Tum meri life ka woh person ho jiske saath main sirf achhe moments nahi, balki boring days, silly fights, crazy plans aur poori zindagi share karna chahti hoon. Happy Birthday to the man who makes my world a little more beautiful every single day. ❤️ — Shailja",

        prizeName:
            "worlds best husband trophy",

        prizeImage:
            "prize4.png"

    }

];



/* =========================================
   DO NOT CHANGE BELOW THIS LINE
========================================= */


const missionsContainer =
    document.getElementById("missions");


const finalSection =
    document.getElementById("finalSection");


const startButton =
    document.querySelector(".start-button");



/* =========================================
   START BUTTON
========================================= */

startButton.addEventListener("click", function () {

    document.getElementById("missions")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================
   CREATE MISSIONS
========================================= */

missions.forEach(function (mission, index) {


    const missionCard =
        document.createElement("section");


    missionCard.className =
        "mission";


    /*
       First mission unlocked.
       Remaining missions locked.
    */

    if (index !== 0) {

        missionCard.classList.add("locked");

    }


    missionCard.innerHTML = `

        <div class="mission-number">
            0${index + 1}
        </div>


        <div class="mission-tag">
            MEMORY MISSION ${index + 1}
        </div>


        <h3>
            A Memory Worth Remembering
        </h3>


        <p class="question">
            ${mission.question}
        </p>


        <div class="answer-box">

            <input
                type="text"
                placeholder="Write your answer..."
                autocomplete="off"
            >

            <button>
                UNLOCK SURPRISE
            </button>

        </div>


        <div class="message"></div>


        <!-- =============================
             PRIZE
             HIDDEN INITIALLY
        ============================== -->

        <div class="reward">

            <div class="unlocked-text">
                ✨ SURPRISE UNLOCKED ✨
            </div>


            <div class="wish">
                ${mission.wish}
            </div>


            <div class="prize-title">
                🎁 ${mission.prizeName}
            </div>


            <div class="prize-image">

                <img
                    src="${mission.prizeImage}"
                    alt="${mission.prizeName}"
                >

            </div>


            ${
                index < missions.length - 1
                ?
                `<button class="next-button">
                    CONTINUE TO NEXT MEMORY →
                </button>`
                :
                ``
            }

        </div>

    `;


    missionsContainer.appendChild(missionCard);



    /* =====================================
       ANSWER BUTTON
    ===================================== */

    const button =
        missionCard.querySelector(".answer-box button");


    const input =
        missionCard.querySelector(".answer-box input");


    const reward =
        missionCard.querySelector(".reward");


    const message =
        missionCard.querySelector(".message");



    button.addEventListener("click", function () {

        checkAnswer(
            mission,
            index,
            missionCard,
            input,
            button,
            reward,
            message
        );

    });



    /* =====================================
       ENTER KEY
    ===================================== */

    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            button.click();

        }

    });



    /* =====================================
       NEXT BUTTON
    ===================================== */

    const nextButton =
        missionCard.querySelector(".next-button");


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                const nextMission =
                    missionsContainer
                    .children[index + 1];


                nextMission.classList.remove("locked");


                nextMission.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }
        );

    }

});



/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    mission,
    index,
    card,
    input,
    button,
    reward,
    message
) {


    const userAnswer =
        input.value
        .trim()
        .toLowerCase();


    const correctAnswer =
        mission.answer
        .trim()
        .toLowerCase();



    /* ==============================
       EMPTY
    ============================== */

    if (userAnswer === "") {

        message.innerHTML =
            `<div class="error-message">
                Please enter your answer ❤️
            </div>`;

        return;

    }



    /* ==============================
       CORRECT ANSWER
    ============================== */

    if (userAnswer === correctAnswer) {


        /* Success message */

        message.innerHTML =
            `<div class="success-message">
                ✓ Correct! Your surprise is unlocking...
            </div>`;


        /* Disable input */

        input.disabled = true;


        button.disabled = true;


        button.innerHTML =
            "✓ MISSION COMPLETE";


        /* =================================
           SHOW PRIZE ONLY NOW
        ================================= */

        setTimeout(function () {

            reward.classList.add("show");


            createConfetti();


            /* =================================
               Unlock next mission
            ================================= */

            if (index < missions.length - 1) {

                setTimeout(function () {

                    const nextMission =
                        missionsContainer
                        .children[index + 1];


                    nextMission.classList.remove("locked");


                    nextMission.scrollIntoView({

                        behavior: "smooth",

                        block: "center"

                    });

                }, 1200);

            }


            /* =================================
               ALL 4 COMPLETE
            ================================= */

            else {

                setTimeout(function () {

                    finalSection.classList.add(
                        "unlocked"
                    );


                    finalSection.scrollIntoView({

                        behavior: "smooth",

                        block: "center"

                    });


                    createConfetti();

                    createConfetti();

                }, 1500);

            }

        }, 700);


    }



    /* ==============================
       WRONG ANSWER
    ============================== */

    else {


        message.innerHTML =
            `<div class="error-message">
                ❌ Not quite... Think about your memory ❤️
            </div>`;


        input.style.borderColor =
            "#ff6f91";


        input.classList.add("shake");


        setTimeout(function () {

            input.style.borderColor = "";

            input.classList.remove("shake");

        }, 600);

    }

}



/* =========================================
   CONFETTI
========================================= */

function createConfetti() {


    const symbols = [
        "♥",
        "✦",
        "✨",
        "💖",
        "🎉"
    ];


    for (
        let i = 0;
        i < 40;
        i++
    ) {


        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            Math.random() * 18 + 10 + "px";


        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        document.body.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 4500);

    }

}