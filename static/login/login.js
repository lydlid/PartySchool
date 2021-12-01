$(function () {
    $(".login")
        .click(function (e) {
            // get inputs
            username = $("name").val();
            password = $("pass").val();
            // check that inputs are not empty
            if (!username || username.length === 0) {
                alert("存在空字段！")
                //TODO:
                //Any more user-friendly alerts?
                return;
            }


            $.ajax({
                url: 'api/login',
                type: 'POST',
                cache: false,
                data: {
                    username: username,
                    password: password,
                    //TODO:
                    //obfuscate the password.

                },
                success: function (data) {
                    alert('Success!')
                }
                , error: function (jqXHR, textStatus, err) {
                    alert('text status ' + textStatus + ', err ' + err)
                }
            })
        })
    $(".register")
        .click(function (e) {
            // get inputs
            username = $("name").val();
            password = $("pass").val();
            // check that inputs are not empty
            if (!username || username.length === 0) {
                alert("存在空字段！")
                //TODO:
                //Any more user-friendly alerts?
                return;
            }


            $.ajax({
                url: 'api/register',
                type: 'POST',
                cache: false,
                data: {
                    username: username,
                    password: password,
                    //TODO:
                    //obfuscate the password.

                },
                success: function (data) {
                    alert('Success!')
                }
                , error: function (jqXHR, textStatus, err) {
                    alert('text status ' + textStatus + ', err ' + err)
                }
            })
        })
})