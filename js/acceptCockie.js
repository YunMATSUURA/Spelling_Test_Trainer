'use strict';
{
  const permissionWindow = document.getElementById('cockie-permission');
  permissionWindow.classList.remove('hidden');

  const acceptButton = document.getElementById('accept-cockie-btn');
  const refuseButton = document.getElementById('refuse-cockie-btn');
  

  acceptButton.addEventListener('click', function(){
    acceptCockie = 'yes';
    permissionWindow.classList.add('hidden');
  });

  refuseButton.addEventListener('click', function(){
    acceptCockie = 'no';
    permissionWindow.classList.add('hidden');
  });
  
  
}