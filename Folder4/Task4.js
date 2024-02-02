function submitRequest() {
            const width = document.getElementById('widthInput').value;
            const height = document.getElementById('heightInput').value;
            const imageContainer = document.getElementById('imageContainer');

                   if (!isValidNumber(width) || !isValidNumber(height)) {
                imageContainer.innerHTML = 'Одно из чисел вне диапазона от 100 до 300 или введено не число';
                return;
           }

          const url = `https://dummyimage.com/${width}x${height}/`;

                  fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка при получении изображения');
                    }
                    return response.blob();
                })
                .then(blob => {
                    const imageUrl = URL.createObjectURL(blob);
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imageContainer.innerHTML = '';
                    imageContainer.appendChild(imgElement);
                })
                .catch(error => {
                    imageContainer.innerHTML = error.message;
                });
        }

          function isValidNumber(num) {
            return !isNaN(num) && num >= 100 && num <= 300;
        }
