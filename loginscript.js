// Array to store usernames
let psw = [];



// Form submission event listener
document.getElementById('userPsw').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('parole').value.trim(); // Get input value
    if (username !== '') {
        psw.push(username); // Add username to array
        document.getElementById('parole').value = ''; // Clear input field
        console.log('Parole ievadīta:', username);
        if (psw.length === 3 && (psw[0] === psw[1] && psw[1] === psw[2])) {
          
          return document.write("<a href='https://reinisreno.github.io/tic-tac-toe/'>Spied un sāc spēli</a> ");
            
            
        }else if (psw.length > 3) {
        console.log('Nepareiza parole. Refrešo lapu un mēģini vēlreiz');
    }
}})