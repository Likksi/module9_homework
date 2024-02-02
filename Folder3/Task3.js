function makeRequest() {
      let inputNumber = document.getElementById('numberInput').value;
      let resultDiv = document.getElementById('result');

      if (inputNumber < 1 || inputNumber > 10) {
        resultDiv.innerHTML = 'Число вне диапазона от 1 до 10';
        return;
      }

      let xhr = new XMLHttpRequest();
      xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${inputNumber}`, true);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          let responseData = JSON.parse(xhr.responseText);
          displayImages(responseData);
        } else {
          resultDiv.innerHTML = 'Ошибка при получении данных. Пожалуйста, повторите запрос.';
        }
      };

      xhr.onerror = function () {
        resultDiv.innerHTML = 'Ошибка при выполнении запроса. Пожалуйста, повторите позже.';
      };

      xhr.send();
    }

    function displayImages(images) {
      let resultDiv = document.getElementById('result');
      resultDiv.innerHTML = ''; // Очистка содержимого

      images.forEach(function (image) {
        let imgElement = document.createElement('img');
        imgElement.src = image.thumbnailUrl;
        resultDiv.appendChild(imgElement);
      });
    }
