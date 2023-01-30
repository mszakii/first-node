import fetch from "node-fetch";

let x;

setInterval(async function () {
  const res = await fetch(
    "https://api.telegram.org/bot5474341492:AAGLNDXHNh7rb_-NX9mU9P57aZf5PiUf0dQ/getUpdates?offset=-1"
  )
    .then((data) => data.json())
    .then((data) => data.result[0]);
  // let body = await res.json();

  if (res.update_id !== x) {
    fetch(
      `https://api.telegram.org/bot5474341492:AAGLNDXHNh7rb_-NX9mU9P57aZf5PiUf0dQ/sendMessage?chat_id=${res.message.from.id}&text=${res.message.text}`
    );
    x = res.update_id;
  }
}, 1000);
