
const hamburgerMenu = document.querySelector('#hamburger-menu');
const dropdownMenu = document.querySelector('#dropdown-menu');
const dropDownHidden = document.querySelectorAll('#dropDownMenu');
const body = document.querySelector("body");


// Hamburger menu
hamburgerMenu.addEventListener("click", ()=> {
    dropdownMenu.classList.toggle("hidden");
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
// SideBar

const phoneNumber = document.getElementById('phone_tag');

// Add a click event listener to the element
phoneNumber.addEventListener('click', (event) => {
  //Copy the content to the clipboard
  navigator.clipboard.writeText(event.target.textContent).then(() => {
    // console.log('Content copied to clipboard');
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


const footerPhoneNumber = document.getElementById('footer_phone_tag');

// Add a click event listener to the element
footerPhoneNumber.addEventListener('click', (event) => {
  //Copy the content to the clipboard
  navigator.clipboard.writeText(event.target.textContent).then(() => {
    // console.log('Content copied to clipboard');
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



// hide and display text button in the services section
// card01
const servicesText01 = document.querySelector("#services_content_01");
const readMore01 = document.querySelector('#read_more_btn_01');
const showLess01 = document.querySelector('#show_less_btn_01');

readMore01.addEventListener("click", ()=> {
  servicesText01.classList.toggle("hidden");
  readMore01.classList.toggle('hidden');
  showLess01.classList.toggle('hidden');
});

showLess01.addEventListener("click", ()=> {
  servicesText01.classList.toggle("hidden");
  showLess01.classList.toggle('hidden');
  readMore01.classList.toggle('hidden');
});

// card02
const servicesText02 = document.querySelector("#services_content_02");
const readMore02 = document.querySelector('#read_more_btn_02');
const showLess02 = document.querySelector('#show_less_btn_02');

readMore02.addEventListener("click", ()=> {
  servicesText02.classList.toggle("hidden");
  readMore02.classList.toggle('hidden');
  showLess02.classList.toggle('hidden');
});

showLess02.addEventListener("click", ()=> {
  servicesText02.classList.toggle("hidden");
  showLess02.classList.toggle('hidden');
  readMore02.classList.toggle('hidden');
});

// card03
const servicesText03 = document.querySelector("#services_content_03");
const readMore03 = document.querySelector('#read_more_btn_03');
const showLess03 = document.querySelector('#show_less_btn_03');

readMore03.addEventListener("click", ()=> {
  servicesText03.classList.toggle("hidden");
  readMore03.classList.toggle('hidden');
  showLess03.classList.toggle('hidden');
});

showLess03.addEventListener("click", ()=> {
  servicesText03.classList.toggle("hidden");
  showLess03.classList.toggle('hidden');
  readMore03.classList.toggle('hidden');
});

// card04
const servicesText04 = document.querySelector("#services_content_04");
const readMore04 = document.querySelector('#read_more_btn_04');
const showLess04 = document.querySelector('#show_less_btn_04');

readMore04.addEventListener("click", ()=> {
  servicesText04.classList.toggle("hidden");
  readMore04.classList.toggle('hidden');
  showLess04.classList.toggle('hidden');
});

showLess04.addEventListener("click", ()=> {
  servicesText04.classList.toggle("hidden");
  showLess04.classList.toggle('hidden');
  readMore04.classList.toggle('hidden');
});


// Contact Form
// ChatGPT
// https://www.youtube.com/watch?v=dgcYOm8n8ME
// https://www.emailjs.com/

const booking_form = document.getElementById('myform');

booking_form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Add validation code here
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('form_contact_number');
    const emailInput = document.getElementById('email');
    const dateInput = document.getElementById('date_picker');
    const messageInput = document.getElementById('message');


    if (nameInput.value === '' || phoneInput.value === '' || emailInput.value === '' || dateInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields');
        return;
        }

        var params = {
            name: document.getElementById("name").value,
            phone_number: document.getElementById("form_contact_number").value,
            email: document.getElementById("email").value,
            date_picker: document.getElementById("date_picker").value,
            message: document.getElementById("message").value,
        };
        
        const serviceID = "service_rgvsdep";
        const templateID = "template_9finfik";

        emailjs
            .send(serviceID, templateID, params)
            .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("form_contact_number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("date_picker").value = "";
            document.getElementById("message").value = "";
            //   console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err=>console.log(err));

    });

// Placeholder for date picker
    $(document).ready(function() {
      $('#date_picker').on('blur', function() {
        if (!$(this).val()) {
          $(this).addClass('show-placeholder');
        }
      }).on('focus', function() {
        $(this).removeClass('show-placeholder');
      });
    });
