$(function(){
        $('#register').click(function(e){

      var valid=true;

      if(valid){
            var firstname   = $('#firstname').val();
            var lastname    = $('#lastname').val();
            var email       = $('#email').val();
            var phone       = $('#phone').val();
            var dob         = $('#dob').val();
            var age         = $('#age').val();
            var password    = $('#password').val();
            var password2   = $('#password2').val();
           
            e.preventDefault();

 
            $.ajax({
                    type: 'POST',
                    url: 'php/saveuser.php',
                    data:{firstname:firstname,lastname:lastname,email:email,phone:phone,dob:dob,age:age,password:password,password2:password2},
                    success: function(data){
                    swal.fire({
                                'title': 'Successful',
                                'text': data,
                                'type': 'success'
                                })

                    },
                    error: function(data){
                        swal.fire({
                                'title': 'Errors',
                                'text': 'There were errors while saving the data.',
                                'type': 'error'
                                })
                    }
                });
            }else{

            }
        });     
    });