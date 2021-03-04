$(document).ready(function () {
    var count = 1;
    $('#btnStart').click(function () {
        $('.game').append($(`
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
                <tbody>
                    <tr>
                        <td>${count}</th>
                        <td>
                            <select id="statue1" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue1" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue1" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue1" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>    
                        </td>
                        <td>Feedback HEEERREE</td>
                    </tr>
                </tbody>
            </table>
        `));
        count++;
    });
});

$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
});
