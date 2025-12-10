const submitButton = document.querySelector('.submit-quote-info')

document.querySelector('.submit-quote-info').addEventListener('click', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name').value;
    const phoneInput = document.getElementById('phone-number').value;
    const emailInput = document.getElementById('email').value;

    const combinedText = `name: ${nameInput}\nPhone: ${phoneInput}\nEmail: ${emailInput}`;

    let userChoice = confirm("Your Quote Has Been Recieved Click Here to Download Reciept "); //in place of sending data to a server we just use a file

    if (userChoice) {
        const fileName = "quote_reciept.txt";
        const blob = new Blob([combinedText], { type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }else {
        console.log("user cancelled the download");
    }
});
