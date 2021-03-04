var attemptNo = 1;
$(document).ready(function () {
    $('#btnStart').click(function () {
        console.log("start btn clicked")
        $(this).closest('#btnStart').remove();
        $('.buttons').append($(`
            <button type="button" id="btnTalkToNPC" class="btn btn-primary">Talk To NPC</button>
        `));
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
        console.log("npc btn clicked")
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