function submitRequest() {
  const page = document.getElementById('pageInput').value;
  const limit = document.getElementById('limitInput').value;
  const imageContainer = document.getElementById('imageContainer');

  if (!isValidNumber(page) || !isValidNumber(limit)) {
         imageContainer.innerHTML = 'Номер страницы и/или лимит вне диапазона от 1 до 10 или введено не число';
          return;
  }

  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;

  fetch(url)
  .then(response => {
  if (!response.ok) {
        throw new Error('Ошибка при получении данных');
  }
        return response.json();
  })
   .then(data => {
   displayImages(data);
  localStorage.setItem('lastApiRequest', JSON.stringify(data));
  })
   .catch(error => {
    imageContainer.innerHTML = error.message;
  });
  }

  function displayImages(images) {
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = ''; // Очистка содержимого

      images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.thumbnailUrl;
      imageContainer.appendChild(imgElement);
     });
    }

 function isValidNumber(num) {
    return !isNaN(num) && num >= 1 && num <= 10;
 }

  const lastApiRequest = JSON.parse(localStorage.getItem('lastApiRequest'));
    if (lastApiRequest) {
    displayImages(lastApiRequest);
}
