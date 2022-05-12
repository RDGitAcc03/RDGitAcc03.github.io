const GITHUB_URL = "https://api.github.com/users/RDGitAcc03";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("myName");
    profileImage.src = data.avatar_url;
    profileName.innerText = data.login;
  });
