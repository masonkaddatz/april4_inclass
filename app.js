// fetch API

// fetch("https://jsonplaceholder.typicode.com/users?username=Bret")
//   .then((response) => response.json())
//   .then((users) => {
// how many users we have
// console.log(users[0].name);
// console.log(users / length);
// users is an array
// loop through the array
// users.forEach((user) => {
//   console.log(user.name);
// });
//   });

// In-class Activity:

// Task 1

// Question 1:
// number of public repos
fetch("https://api.github.com/users/LucasMoran")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.public_repos);
  });

// Question 2:
// number of followers
fetch("https://api.github.com/users/LucasMoran")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.followers);
  });

// Question 3:
// User IDs of the followers
fetch("https://api.github.com/users/LucasMoran/followers")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.login);
    });
  });

// Task 2

// Question 1:
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.length);
  });

// Question 2:
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.length);
  });

// Question 3:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name);
      console.log(user.email);
    });
  });

// Question 4:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name);
      console.log(user.address.city);
    });
  });

// Question 5:
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((users) => {
    count_completed = 0;
    users.forEach((user) => {
      if (user.completed == true) {
        count_completed += 1;
      }
    });
    console.log(count_completed);
  });

// Question 6:
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      if (user.completed == true) {
        console.log(user.title);
        console.log(user.id);
      }
    });
  });

// Question 7:
fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
  .then((response) => response.json())
  .then((todos) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        todos.forEach((todo) => {
          users.forEach((user) => {
            if (todo.userId == user.id) {
              console.log(user.name);
            }
          });
        });
      });
  });

// Question 8:
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        albums.forEach((album) => {
          if (album.title == "quidem molestiae enim") {
            users.forEach((user) => {
              if (user.id == album.userId) {
                console.log(user.name);
              }
            });
          }
        });
      });
  });
