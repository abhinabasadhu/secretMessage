const { hash } = window.location;

const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    // preventing the browser to submit the form
    event.preventDefault();
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    // selecting the value of the input
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkinput = document.querySelector("#link-input");
    // to make the encrypted message to a string we bind the value to window.location
    linkinput.value = `${window.location}#${encrypted}`;
});

// to change a charchter to base64 is btoa and reverse atob....