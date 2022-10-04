const btn = document.querySelector('.btn');
const text = document.querySelector('#json_data');

btn.addEventListener('click', () => {
    // data request
    fetch('http://localhost:3000/contacts')
        .then((response) => {
            console.log('response', response);
        const result = response.json();
        console.log('result', result);
        return result;
    })
        .then((data) => {
            console.log('data', data);
            text.textContent = JSON.stringify(data);
        })

        .catch(() => {
            console.log('error');
            text.textContent('request error');
        });
});
