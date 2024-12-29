// Simulating a simple wallet and transaction system
let walletBalance = 500;

function openTransfer(friendName) {
    // Set friend name dynamically in the transfer page
    document.getElementById('friendName').innerText = friendName;
    localStorage.setItem('friendName', friendName);
}

function sendMoney() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (amount > walletBalance) {
        alert('Insufficient funds!');
        return;
    }

    walletBalance -= amount; // Decrease wallet balance
    document.getElementById('statusMessage').innerText = `Sent $${amount} successfully!`;

    // Update wallet balance in home page
    localStorage.setItem('walletBalance', walletBalance);
}

window.onload = () => {
    const savedBalance = localStorage.getItem('walletBalance');
    if (savedBalance) {
        walletBalance = parseFloat(savedBalance);
    }

    // Update the wallet balance in the home page
    const balanceElement = document.getElementById('walletBalance');
    if (balanceElement) {
        balanceElement.innerText = `$${walletBalance}`;
    }
