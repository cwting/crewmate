$(document).ready(function () {
    var attemptNo = 1;
    let btnStart = document.getElementById("btnStart")
    let btnTalkToNPC = document.getElementById("btnTalkToNPC")
    let btnRestart = document.getElementById("btnRestart")

    // game
    var items = ['s', 'm', 'w', 'f'] // scroll, medal, wine, food
    // answers
    var a1 = items[Math.floor(Math.random() * 4)];
    var a2 = items[Math.floor(Math.random() * 4)];
    var a3 = items[Math.floor(Math.random() * 4)];
    var a4 = items[Math.floor(Math.random() * 4)];
    var answer = [a1, a2, a3, a4];
    console.log("answer: " + answer)

    // btnStart
    $('#btnStart').click(function () {
        btnStart.style.display = "none";
        btnTalkToNPC.style.display = "block";
        btnRestart.style.display = "none";
        $('.table-responsive').append(`
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Attempt Number</th>
                        <th scope="col">Statue 1</th>
                        <th scope="col">Statue 2</th>
                        <th scope="col">Statue 3</th>
                        <th scope="col">Statue 4</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody id="appender">
                    <tr>
                        <td>${attemptNo}</td>
                        <td>
                            <select id="statue1${attemptNo}" class="form-select">
                            <option value="s" selected>Scroll</option>
                            <option value="m">Medal</option>
                            <option value="w">Wine</option>
                            <option value="f">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue2${attemptNo}" class="form-select">
                            <option value="s" selected>Scroll</option>
                            <option value="m">Medal</option>
                            <option value="w">Wine</option>
                            <option value="f">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue3${attemptNo}" class="form-select">
                            <option value="s" selected>Scroll</option>
                            <option value="m">Medal</option>
                            <option value="w">Wine</option>
                            <option value="f">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue4${attemptNo}" class="form-select">
                            <option value="s" selected>Scroll</option>
                            <option value="m">Medal</option>
                            <option value="w">Wine</option>
                            <option value="f">Food</option>
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
        console.log("guesses: " + guesses)

        var correctPcorrectI = "";
        var wrongPcorrectI = "";

        for (i = 0; i < answer.length; i++) {
            if (guesses[i] == answer[i]) {
                correctPcorrectI += "*";
                console.log("correctPcorrectI.length: " + correctPcorrectI.length);
            }
        }
        for (i = 0; i < answer.length; i++) {
            for (j = 0; j < answer.length; j++) {
                if (i !== j) {
                    if (guesses[i] == answer[j]) {
                        wrongPcorrectI += "/";
                        console.log("wrongPcorrectI.length: " + wrongPcorrectI.length);
                    }
                }
            }
        }
        var unknown = 4 - correctPcorrectI.length;

        if ((wrongPcorrectI.length >= 1 && wrongPcorrectI.length <= 4) && (correctPcorrectI.length >= 1 && correctPcorrectI.length <= 4)) {
            $(`#npcFB${attemptNo}`).append(correctPcorrectI.length + " vassal(s) is/are pleased with their offering(s)\n" +
                unknown + " vassal(s) have received unknown offering(s)")
        }
        else if (correctPcorrectI.length <= 4 && wrongPcorrectI.length <= 4) {
            $(`#npcFB${attemptNo}`).append("4 vassals have received unknown offering(s)");
        }
        else if (correctPcorrectI.length = 4) {
            $(`#npcFB${attemptNo}`).append("CLEAR!");
        }

        attemptNo++;
        $('#appender').append(`
            <tr>
                <td>${attemptNo}</td>
                <td>
                    <select id="statue1${attemptNo}" class="form-select">
                    <option value="s" selected>Scroll</option>
                    <option value="m">Medal</option>
                    <option value="w">Wine</option>
                    <option value="f">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue2${attemptNo}" class="form-select">
                    <option value="s" selected>Scroll</option>
                    <option value="m">Medal</option>
                    <option value="w">Wine</option>
                    <option value="f">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue3${attemptNo}" class="form-select">
                    <option value="s" selected>Scroll</option>
                    <option value="m">Medal</option>
                    <option value="w">Wine</option>
                    <option value="f">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue4${attemptNo}" class="form-select">
                    <option value="s" selected>Scroll</option>
                    <option value="m">Medal</option>
                    <option value="w">Wine</option>
                    <option value="f">Food</option>
                    </select>    
                </td>
                <td>
                    <textarea class="npcFB form-control" id="npcFB${attemptNo}" rows="3" readonly></textarea >
                </td >
            </tr>
            `);

        if (attemptNo == 7) {
            btnStart.style.display = "none";
            btnTalkToNPC.style.display = "none";
            btnRestart.style.display = "block";
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