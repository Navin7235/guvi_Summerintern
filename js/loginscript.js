$(function(){
        $('#login').click(function(e){
       
            e.preventDefault();

            var valid = true;

            if(valid){
                var email = $('#email').val();
                var password = $('#password').val();
            }

            $.ajax({
                type: 'POST',
                url: 'php/jslogin.php',
                data:  {email: email, password: password},
                success: function(data){
                    if($.trim(data) === "1"){
                        setTimeout('window.location.href ="profilepage.html"', 1000);
                    }
                    else
                    {
                      swal.fire({
                                'title': 'Error',
                                'text': 'This is not a valid username / password combination',
                                'type': 'error'
                                })
                    }
                },
                error: function(data){
                    alert('there were erros while doing the operation.');
                }
            });

        });
    });