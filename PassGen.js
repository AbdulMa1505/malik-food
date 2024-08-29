function generatePassword() {
    const strength = document.getElementById('strength').value;
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let allChars = lowerCase + upperCase + numbers + specialChars;
    let password = '';
    let length;

    switch (strength) {
        case 'strong':
            length = 8;
            allChars = lowerCase + upperCase + numbers;
            break;
        case 'very strong':
            length = 12;
            allChars = lowerCase + upperCase + numbers + specialChars;
            break;
        case 'extremely strong':
            length = 16;
            allChars = lowerCase + upperCase + numbers + specialChars;
            break;
        default:
            document.getElementById('password').innerText = 'Invalid strength option. Choose "strong", "very strong", or "extremely strong".';
            return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('password').innerText = `Generated Password: ${password}`;
}