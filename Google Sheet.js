const scriptURL = 'https://script.google.com/macros/s/AKfycbxiIwI5LRUI6_wKVcu_b3ugKLZSPPE12WalWhyyh4Lj1Ki0omYwCcuwquELgxhAaSZDhA/exec'

const form = document.forms['appointment-form']

form.addEventListener('submit' , e =>
{
    e.preventDefault()
    fetch(scriptURL, {method: 'post', body: new FormData(form)})
    .then(Response => alert("Thank you! Your form is submitted successfully."))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!' , error.message))
}
)