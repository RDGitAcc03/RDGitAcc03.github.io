const GITHUB_URL = "https://api.github.com/users/RDGitAcc03"; //Github api address containing my user details

fetch(GITHUB_URL) // First promise
  .then(function(response) {
    return response.json();
  })
  .then(function(data) { // Second and final promise
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("myName");
    profileImage.src = data.avatar_url; // Set src to my github-user-image url
    profileName.innerText = data.login; // Writing my github-user-name 
  });
