/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/iDecisive").then(response => {
  
  console.log(response.data);

}).catch(_ => "Catch")


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

let loadCard = cardData => { //Creates and returns a card

//Creating elements

let card = document.createElement("div")

let profilePic = document.createElement("img") //on left side of card

let cardInfo = document.createElement("div") //Everything inside this will be on the right side of the card

let name = document.createElement("h3")

let userName = document.createElement("p")

let location = document.createElement("p")

let profile = document.createElement("p")

//let profileLink = document.createElement("a")

let followers = document.createElement("p")

let following = document.createElement("p")

let bio = document.createElement("p")


//Adding classes

card.classList.add("card");

cardInfo.classList.add("card-info")

name.classList.add("name")

userName.classList.add("username")


//Structuring

card.appendChild(profilePic)

card.appendChild(cardInfo)

cardInfo.appendChild(name)

cardInfo.appendChild(userName)

cardInfo.appendChild(location)

cardInfo.appendChild(profile)

//profile.appendChild(profileLink) 

cardInfo.appendChild(followers)

cardInfo.appendChild(following)

cardInfo.appendChild(bio)


//Assigning values

profilePic.src = cardData.avatar_url;

name.textContent = cardData.login;

location.textContent = "Location: " + cardData.location;

profile.innerHTML = "Profile: <a href='" +cardData.url +"'>" + cardData.url +"</a>";

followers.textContent = "Followers: " + cardData.followers;

following.textContent = "Following: " + cardData.following;

bio.textContent = "Bio: " + cardData.bio;

return card;

} //func end

//Getting card data and returning it below:

axios.get("https://api.github.com/users/iDecisive").then(response => {
  
  document.querySelector(".cards").appendChild(loadCard(response.data));

}).catch(_ => "Catch")


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(item => {

  let link = "https://api.github.com/users/" + item;

  axios.get(link).then(response => {
  
  document.querySelector(".cards").appendChild(loadCard(response.data));

  }).catch(_ => "Catch")

})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


//Stretch below 

let newFollowersArr = [];

axios.get("https://api.github.com/users/BigKnell/followers").then(response => {
  
  response.data.forEach(item => {

    newFollowersArr.push(item.login);

  })
  
  console.log(newFollowersArr);

  for (i=0; i<5; i++) { //Will get data for 5 cards and create them

    let link = "https://api.github.com/users/" + newFollowersArr[i];

    axios.get(link).then(response => {
  
      document.querySelector(".cards").appendChild(loadCard(response.data));
  
    }).catch(_ => "Catch")
  
  }

}).catch(_ => "Catch")




