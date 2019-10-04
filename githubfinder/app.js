const searchUser = document.getElementById('searchUser');
const gitHub = new Github();

searchUser.addEventListener('keyup', e => {
  const searchText = e.target.value;

  if (searchUser !== '') {
    // Make Http call
    gitHub.getUser(searchText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
      } else {
        // show profile
      }
    });
  } else {
    // Clear Profile
  }
});
