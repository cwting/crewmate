$(document).ready(function () {
    var attemptNo = 1;
    let btnStart = document.getElementById("btnStart");
    let btnTalkToNPC = document.getElementById("btnTalkToNPC");
    let btnRestart = document.getElementById("btnRestart");

    var items = ['scroll', 'medal', 'wine', 'food']
    // answers
    var a1 = items[Math.floor(Math.random() * 4)];
    var a2 = items[Math.floor(Math.random() * 4)];
    var a3 = items[Math.floor(Math.random() * 4)];
    var a4 = items[Math.floor(Math.random() * 4)];
    var answer = [a1, a2, a3, a4];

    // btnStart
    $('#btnStart').click(function () {
        btnStart.style.display = "none";
        btnTalkToNPC.style.display = "block";
        btnRestart.style.display = "block";
        $("#instructionTitle").remove();
        $("#instructionDesc").remove();
        $("#instructionMobile").remove();

        $('.table-responsive').append(`
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Attempt Number</th>
                        <th scope="col">Statue 1</th>
                        <th scope="col">Statue 2</th>
                        <th scope="col">Statue 3</th>
                        <th scope="col">Statue 4</th>
                        <th scope="col">NPC Feedback</th>
                    </tr>
                </thead>
                <tbody id="appender">
                    <tr>
                        <td>${attemptNo}</td>
                        <td>
                            <select id="statue1${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue2${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue3${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue4${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>    
                        </td>
                        <td>
                            <textarea class="npcFB form-control" id="npcFB${attemptNo}" rows="3" readonly></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        `);
    });

    // btnTalkToNPC
    $('#btnTalkToNPC').click(function () {
        // guesses
        var g1 = $(`#statue1${attemptNo} option:selected`).val();
        var g2 = $(`#statue2${attemptNo} option:selected`).val();
        var g3 = $(`#statue3${attemptNo} option:selected`).val();
        var g4 = $(`#statue4${attemptNo} option:selected`).val();
        var guesses = [g1, g2, g3, g4];

        var correctPcorrectI = "";
        for (i = 0; i < answer.length; i++) {
            if (guesses[i] == answer[i]) {
                correctPcorrectI += "*";
            }
        }
        var unknown = 4 - correctPcorrectI.length;
        if ((unknown >= 1 && unknown <= 4) && (correctPcorrectI.length >= 1 && correctPcorrectI.length < 4)) {
            $(`#npcFB${attemptNo}`).append(correctPcorrectI.length + " vassal(s) is/are pleased with their offering(s)\n" + unknown + " vassal(s) have received unknown offering(s)")
        }
        else if (unknown === 4) {
            $(`#npcFB${attemptNo}`).append("4 vassals have received unknown offering(s)");
        }
        else if (correctPcorrectI.length === 4) {
            $(`#npcFB${attemptNo}`).append("CLEAR!");
        }

        // if max attempts reached, show answer and restart button
        if (attemptNo == 7 && $(`#npcFB${attemptNo}`).val() != "CLEAR!") {
            btnStart.style.display = "none";
            btnTalkToNPC.style.display = "none";
            btnRestart.style.display = "block";
            $(`#results`).append(`<p class="h5">Aww, so close! The answer was ${a1}, ${a2}, ${a3}, ${a4}. Try Again!</p>`)
        }
        // if player clears 
        else if ($(`#npcFB${attemptNo}`).val() == "CLEAR!") {
            btnStart.style.display = "none";
            btnTalkToNPC.style.display = "none";
            btnRestart.style.display = "block";
            $(`#results`).append(`<p class="h5">Good Job!</p>`)
        }
        // else continues the game
        else {
            // lock previous choices
            for (let i = 0; i <= 4; i++) {
                $(`#statue${[i]}${attemptNo}`).attr("disabled", true);
            }
            attemptNo++;
            $('#appender').append(`
            <tr>
                <td>${attemptNo}</td>
                <td>
                    <select id="statue1${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue2${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue3${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue4${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>    
                </td>
                <td>
                    <textarea class="npcFB form-control" id="npcFB${attemptNo}" rows="3" readonly></textarea >
                </td >
            </tr>
            `);
        }
    });

    // btnRestart
    $('#btnRestart').click(function () {
        window.location.reload();
    });

    // ingredient drop down toggle
    $(document).ready(function () {
        $(".dropdown-toggle").dropdown();
    });
});