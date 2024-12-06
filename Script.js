document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up form submitted!');
    // Here you can add code to handle form submission, e.g., sending data to a server
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted!');
    // Here you can add code to handle login, e.g., checking credentials
});

document.getElementById('privacyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Privacy settings saved!');
    // Here you can add code to save privacy settings
});
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = this.querySelector('input[type="text"]');
    const messageText = messageInput.value;
    
    // Display the message in the message list
    const messageList = document.getElementById('messageList');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageText;
    messageList.appendChild(newMessage);
    
    // Clear the input field
    messageInput.value = '';
});
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully!');
    // Here you can add code to handle the profile update, e.g., sending data to a server
});
document.getElementById('addFriendButton').addEventListener('click', function() {
    const friendName = document.getElementById('friendSearch').value;
    if (friendName) {
        const friendList = document.getElementById('friendList');
        const newFriend = document.createElement('div');
        newFriend.textContent = friendName;
        friendList.appendChild(newFriend);
        document.getElementById('friendSearch').value = ''; // Clear the input
    } else {
        alert('Please enter a friend\'s name.');
    }
});
document.getElementById('friendSearch').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const friends = document.getElementById('friendList').children;
    for (let i = 0; i < friends.length; i++) {
        const friendName = friends[i].textContent.toLowerCase();
        friends[i].style.display = friendName.includes(filter) ? '' : 'none';
    }
});
function addNotification(message) {
    const notificationList = document.getElementById('notificationList');
    const newNotification = document.createElement('div');
    newNotification.textContent = message;
    notificationList.appendChild(newNotification);
}

// Example usage: Call this function when a new message or friend request is received
addNotification('You have a new message from John!');
addNotification('Sarah sent you a friend request.');
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('A verification email has been sent to your email address. Please verify to complete your registration.');
    // Here you can add code to handle sending a verification email
});
document.getElementById('privacySettingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Privacy settings saved successfully!');
    // Here you can add code to handle saving privacy settings
});
const messageInput = document.querySelector('#messageForm input[type="text"]');
messageInput.addEventListener('input', function() {
    document.getElementById('typingIndicator').style.display = 'block';
    setTimeout(() => {
        document.getElementById('typingIndicator').style.display = 'none';
    }, 1000); // Hide after 1 second
});
function addMessage(messageText, isRead = false) {
    const messageList = document.getElementById('messageList');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageText + (isRead ? ' (Read)' : ' (Unread)');
    messageList.appendChild(newMessage);
}

// Modify the message sending logic
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = this.querySelector('input[type="text"]');
    const messageText = messageInput.value;
    addMessage(messageText);
    messageInput.value = '';
});
document.getElementById('groupChatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = this.querySelector('input[type="text"]');
    const messageText = messageInput.value;
    
    // Display the message in the group chat list
    const groupChatList = document.getElementById('groupChatList');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageText;
    groupChatList.appendChild(newMessage);
    
    // Clear the input field
    messageInput.value = '';
});
document.getElementById('groupChatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = this.querySelector('input[type="text"]');
    const attachmentInput = this.querySelector('#attachment');
    const messageText = messageInput.value;
    
    // Display the message in the group chat list
    const groupChatList = document.getElementById('groupChatList');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageText;

    // Check for attachments
    if (attachmentInput.files.length > 0) {
        const fileName = attachmentInput.files[0].name;
        newMessage.textContent += ` (Attachment: ${fileName})`;
    }

    groupChatList.appendChild(newMessage);
    
    // Clear the input fields
    messageInput.value = '';
    attachmentInput.value = '';
});

document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const results = document.getElementById('searchResults');
    results.innerHTML = ''; // Clear previous results

    // Example penpal data (this would typically come from a database)
    const penpals = [
        { name: 'Alice', location: 'USA', age: 25, interests: 'Reading, Traveling' },
        { name: 'Bob', location: 'Canada', age: 30, interests: 'Gaming, Cooking' },
        { name: 'Charlie', location: 'UK', age: 22, interests: 'Music, Sports' }
    ];

    penpals.forEach(penpal => {
        if (penpal.name.toLowerCase().includes(filter) || 
            penpal.location.toLowerCase().includes(filter) || 
            penpal.interests.toLowerCase().includes(filter)) {
            const resultItem = document.createElement('div');
            resultItem.textContent = `${penpal.name} - ${penpal.location} - Age: ${penpal.age} - Interests: ${penpal.interests}`;
            results.appendChild(resultItem);
        }
    });
});
document.getElementById('quickMatchButton').addEventListener('click', function() {
    const randomPenpal = penpals[Math.floor(Math.random() * penpals.length)];
    const results = document.getElementById('searchResults');
    results.innerHTML = ''; // Clear previous results
    const matchItem = document.createElement('div');
    matchItem.textContent = `Quick Match: ${randomPenpal.name} - ${randomPenpal.location} - Age: ${randomPenpal.age} - Interests: ${randomPenpal.interests}`;
    results.appendChild(matchItem);
});
const blockedUsers = [];

document.getElementById('blockButton').addEventListener('click', function() {
    const username = document.getElementById('blockInput').value;
    if (username && !blockedUsers.includes(username)) {
        blockedUsers.push(username);
        const blockedList = document.getElementById('blockedList');
        const blockedItem = document.createElement('div');
        blockedItem.textContent = username;
        blockedList.appendChild(blockedItem);
        document.getElementById('blockInput').value = ''; // Clear input
    } else {
        alert('User  is already blocked or input is empty.');
    }
});
const spamWords = ['spam', 'scam', 'fake'];

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = this.querySelector('input[type="text"]');
    const messageText = messageInput.value;

    if (spamWords.some(word => messageText.toLowerCase().includes(word))) {
        alert('Your message contains spam words and cannot be sent.');
        return;
    }

    // Proceed with sending the message
    addMessage(messageText);
    messageInput.value = '';
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const rating = this.querySelector('#rating').value;
    const feedbackText = this.querySelector('textarea').value;

    const feedbackList = document.getElementById('feedbackList');
    const feedbackItem = document.createElement('div');
    feedbackItem.textContent = `${username} rated: ${rating} Stars - ${feedbackText}`;
    feedbackList.appendChild(feedbackItem);

    // Clear the input fields
    this.reset();
});
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const profileDisplay = document.getElementById('profileDisplay');
    const description = this.querySelector('input[placeholder="Description"]').value;
    const age = this.querySelector('input[placeholder="Age"]').value;
    const country = this.querySelector('input[placeholder="Country"]').value;
    const city = this.querySelector('input[placeholder="City"]').value;
    const hobbies = this.querySelector('input[placeholder="Hobbies"]').value;
    const language = this.querySelector('input[placeholder="Language"]').value;

    profileDisplay.innerHTML = `
        <h3>Profile Information</h3>
        <p>Description: ${description}</p>
        <p>Age: ${age}</p>
        <p>Country: ${country}</p>
        <p>City: ${city}</p>
        <p>Hobbies: ${hobbies}</p>
        <p>Language: ${language}</p>
    `;

    // Clear the input fields
    this.reset();
});
document.getElementById('logoutButton').addEventListener('click', function() {
    alert('You have been logged out.');
    // Here you can add code to clear user session data and redirect to the login page
});
function logActivity(message) {
    const logList = document.getElementById('logList');
    const logItem = document.createElement('div');
    logItem.textContent = message;
    logList.appendChild(logItem);
}

// Example usage: Call this function when a user logs in or performs an action
logActivity('User  logged in at ' + new Date().toLocaleString());
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const notificationsEnabled = document.getElementById('notifications').checked;
    const selectedTheme = document.getElementById('theme').value;

    alert(`Preferences saved! Notifications: ${notificationsEnabled ? 'Enabled' : 'Disabled'}, Theme: ${selectedTheme}`);
    // Here you can add code to save user preferences
});
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('A verification email has been sent to your email address. Please verify to complete your registration.');
    // Here you can add code to handle sending a verification email
});
document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('A recovery email has been sent to your email address if it exists in our system.');
    // Here you can add code to handle sending a recovery email
});
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const profileDisplay = document.getElementById('profileDisplay');
    const profilePicture = document.getElementById('profilePicture').files[0];
    const description = this.querySelector('input[placeholder="Description"]').value;
    const age = this.querySelector('input[placeholder="Age"]').value;
    const country = this.querySelector('input[placeholder="Country"]').value;
    const city = this.querySelector('input[placeholder="City"]').value;
    const hobbies = this.querySelector('input[placeholder="Hobbies"]').value;
    const language = this.querySelector('input[placeholder="Language"]').value;

    const reader = new FileReader();
    reader.onload = function(e) {
        profileDisplay.innerHTML = `
            <h3>Profile Information</h3>
            <img src="${e.target.result}" alt="Profile Picture" style="width:100px;height:100px;">
            <p>Description: ${description}</p>
            <p>Age: ${age}</p>
            <p>Country: ${country}</p>
            <p>City: ${city}</p>
            <p>Hobbies: ${hobbies}</p>
            <p>Language: ${language}</p>
        `;
    };
    reader.readAsDataURL(profilePicture);

    // Clear the input fields
    this.reset();
});
