const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  const name = document.querySelector('#name').value;
  const secondName = document.querySelector('#secondName').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone');
  const agree = document.querySelector('#agree').checked;

  fetch(`https://polinashneider.space/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: leesovska'
    },
    body: JSON.stringify({
      name,
      secondName,
      phone,
      email,
      agree
    }),
  })
    .then(response => {
      if (response.ok) {
        document.querySelector('.form').reset();
        showNotification();
      }
      return response.json()
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.log('Error', error);
    });
});

function showNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Запись успешно внесена!';
  notification.className = 'notification'
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}