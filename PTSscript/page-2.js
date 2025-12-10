function openPopup(boxID) { 
  const popup = document.getElementById(boxID);
  if(popup) {
    popup.style.display = 'flex';
    popup.classList.remove('info-hidden');
  }
}

function openDropDown() {
  const drpdown = document.getElementsByClassName('options-menu')[0];
  
  const drpdownbtn = document.getElementById('dropbtn'); 

  if (drpdownbtn && drpdown) {
    drpdownbtn.addEventListener('click', (e) => {
    document.getElementById('dropdown-content').style.display = 'block'
    });
  }
}

document.addEventListener('click', (event) => {
  const dropdown = document.getElementById('dropdown-content');
  const button = document.getElementById('dropbtn');

  if (dropdown && dropdown.style.display === 'block' && !dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

const selectElements = document.getElementsByClassName('info-hidden')[0];

let popupStates = {
  popup1: false,
  popup2: false,
  popup3: false
};

function checkIfAllClosed() {
  if (popupStates.popup1 && popupStates.popup2 && popupStates.popup3) {
    const popup1 = document.querySelector('.info-popup-1');
    const popup2 = document.querySelector('.info-popup-2');
    const popup3 = document.querySelector('.info-popup-3');

    if (popup1) popup1.style.display = 'none';
    if (popup2) popup2.style.display = 'none';
    if (popup3) popup3.style.display = 'none';

    popupStates.popup1 = false;
    popupStates.popup2 = false;
    popupStates.popup3 = false;
  }
}

function allowReturn1() {
  const popup = document.querySelector('.info-popup-1');
  if (popup) {
    popup.classList.add('info-hidden');
    popup.addEventListener('transitionend', function handler() {
      popup.removeEventListener('transitionend', handler);
      popupStates.popup1 = true;
      checkIfAllClosed();
    });
  }
}

function allowReturn2() {
  const popup = document.querySelector('.info-popup-2');
  if (popup) {
    popup.classList.add('info-hidden')
    popup.addEventListener('transitionend', function handler() {
      popup.removeEventListener('transitionend', handler);
      popupStates.popup2 = true; 
      checkIfAllClosed();       
        });
  }
}

function allowReturn3() {
  const popup = document.querySelector('.info-popup-3');
  if (popup) {
    popup.classList.add('info-hidden');
    popup.addEventListener('transitionend', function handler() {
      popup.removeEventListener('transitionend', handler);
      popupStates.popup3 = true;
      checkIfAllClosed();
    });
  }
}

document.addEventListener('DOMContentLoaded' , () => {
 
  openDropDown();  

document.getElementById('link-one').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('dropdown-content').style.display = 'none';
  openPopup('info-box-1');
});

document.getElementById('link-two').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('dropdown-content').style.display = 'none';
  openPopup('info-box-2');
});


document.getElementById('link-three').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('dropdown-content').style.display = 'none';
  openPopup('info-box-3');
});


document.querySelector('.close-btn-1').addEventListener('click', () => {
  allowReturn1();
});

document.querySelector('.close-btn-2').addEventListener('click', () => {
  allowReturn2();
 });

   document.querySelector('.close-btn-3').addEventListener('click', () => {
    
  allowReturn3();
 
 });

});
