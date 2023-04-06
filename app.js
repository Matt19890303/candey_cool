const hamburgerMenu = document.querySelector('#hamburger-menu');
const dropdownMenu = document.querySelector('#dropdown-menu');
const dropDownHidden = document.querySelectorAll('#dropDownMenu');
const downloadCVbtn = document.getElementById("downloadBTN");
const body = document.querySelector("body");


// Hamburger menu
hamburgerMenu.addEventListener("click", ()=> {
    dropdownMenu.classList.toggle("hidden");
    // hamburgerMenu.classList.toggle('bg-blue');
    downloadCVbtn.classList.toggle("hidden");
});


// to hide dropdown menu after clicking one of the options
dropDownHidden.forEach(Link=>{
    Link.addEventListener("click", ()=>{
        dropdownMenu.classList.toggle("hidden");
        // the bg remains white after one of the options are clicked and menu is opened again
        hamburgerMenu.classList.toggle('bg-white');
    })
});


// ChatGPT
// Clicked number and copied
const phoneNumber = document.getElementById('phone_tag');

// Add a click event listener to the element
phoneNumber.addEventListener('click', (event) => {
  //Copy the content to the clipboard
  navigator.clipboard.writeText(event.target.textContent).then(() => {
    console.log('Content copied to clipboard');
  });

  //Prevent the page from refreshing
  event.preventDefault();

//Show a custom popup message
  const popup = document.createElement('div');
  popup.innerText = 'Copied!';
  popup.classList.add('popup');
  document.body.appendChild(popup);

//Position the popup message relative to the clicked element
  const rect = event.target.getBoundingClientRect();
  popup.style.top = rect.top + window.pageYOffset + 'px';
  popup.style.left = rect.left + window.pageXOffset + 'px';

//Remove the popup message after a few seconds
  setTimeout(() => {
    popup.remove();
  }, 1000);
});




// Contact Form
// ChatGPT
// https://www.youtube.com/watch?v=dgcYOm8n8ME
// https://www.emailjs.com/

// const form = document.getElementById('myform');

// form.addEventListener('submit', function(event) {
//     Prevent the form from submitting
//     event.preventDefault();
//     Add validation code here
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const messageInput = document.getElementById('message');


//     if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
//         alert('Please fill in all fields');
//         return;
//         }

//         var params = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             message: document.getElementById("message").value,
//         };
        
//         const serviceID = "service_fzp5foi";
//         const templateID = "template_tw7sf1w";

//         emailjs
//             .send(serviceID, templateID, params)
//             .then(res=>{
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//               console.log(res);
//             alert("Your message sent successfully!!")
//         })
//         .catch(err=>console.log(err));

//     });
