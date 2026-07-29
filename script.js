form.addEventListener('submit', e => {
    e.preventDefault();
    btn.innerText = 'Submitting...';
    btn.disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert('Success! Your ID has been submitted. It will be live after admin verification.');
            form.reset();
            btn.innerText = 'Submit For Approval';
            btn.disabled = false;
        })
        .catch(error => {
            alert('Error! Something went wrong. Please try again.');
            btn.innerText = 'Submit For Approval';
            btn.disabled = false;
        });
});
