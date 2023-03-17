const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    console.log("clicked")

    //code
    Email.send({
        SecureToken : `75143adb-6ffa-49a4-9cfc-feaa09d88176`,
        To : `boylovefeedback@gmail.com`,
        From : `boylovefeedback@gmail.com`,
        Subject : `tet`,
        Body : `And this is the body`
    }).then(
    
      message => {
            return alert('message');
        }
    );
})
