// Предложение 5 разных стилей шрифтов
var fonts = ["Arial", "Times New Roman", "Verdana", "Courier New", "Georgia"];
//Сделай так, чтобы массив перебирался и шрифт менялся у объекта с id "container"
var i = 0;
const API_KEY = "AIzaSyDzYsBBCXKauXxMP6P6d-upujd56dCwt5I";
const videoId = "ujsgFnm2VKw";
const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`;

var clickHandler = () => {
  document.getElementById("container").style.fontFamily = fonts[i];
  i++;
  if (i == fonts.length) {
    i = 0;
  }
};

var reverseText = () => {
  var container = document.getElementById("container");
  var textElements = Array.from(document.getElementsByClassName("text"));
  // Переворачиваем массив элементов
  textElements.reverse();
  // Очищаем контейнер
  container.innerHTML = "";
  // Добавляем элементы в перевернутом порядке
  textElements.forEach((element) => {
    container.appendChild(element);
  });
};
var moveTextRight = () => {
  document.getElementById("container").style.left = "5px";
  document.getElementById("container").style.transition = "0.5s";
};

var moveTextLeft = () => {
  // Move the element to the left (assuming no initial left positioning)
  document.getElementById("container").style.left = "-5px"; // Adjust the value as needed
  document.getElementById("container").style.transition = "0.5s";
};

const fetchInfoFromYoutube = async () => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Вы можете здесь обработать данные, например, вывести их на страницу
      const videoDetails = data.items[0];
      console.log("Title:", videoDetails.snippet.title);
      console.log("Description:", videoDetails.snippet.description);
      console.log("View Count:", videoDetails.statistics.viewCount);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};
