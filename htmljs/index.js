var attemptNo = 1;

$(document).ready(function () {
    $('#btnStart').click(function () {
        let btnStart = document.getElementById("btnStart")
        let btnTalkToNPC = document.getElementById("btnTalkToNPC")
        btnStart.style.display = "none";
        btnTalkToNPC.style.display = "block";
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
                            <select id="statue1" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue2" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue3" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue4" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>    
                        </td>
                        <td>
                            <textarea class="form-control" id="npcFB" rows="2" readonly></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        `);
        attemptNo++;
    });

    $('#btnTalkToNPC').click(function () {
        $('#appender').append(`
            <tr>
                <td>${attemptNo}</td>
                <td>
                    <select id="statue1" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue2" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue3" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue4" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>    
                </td>
                <td>
                    <textarea class="form-control" id="npcFB" rows="2" readonly></textarea>
                </td>
            </tr>
        `);
        attemptNo++;
    });

    // ingredient drop down toggle
    $(document).ready(function () {
        $(".dropdown-toggle").dropdown();
    });



});