$('#loadBtn').on('click', function () {

    // Сообщение во время загрузки
    $('#result').text('Загрузка...');

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Ошибка сервера');
            }
            return response.json();
        })
        .then(function (data) {
            let text = `Имя: ${data.name} | Email: ${data.email}`;
            $('#result').text(text);
        })
        .catch(function () {
            $('#result').text('Ошибка загрузки! Проверьте интернет.');
        });

});