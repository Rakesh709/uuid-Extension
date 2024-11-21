// Generate a UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  // Update the UUID display
  const uuidDisplay = document.getElementById('uuid-display');
  const generateBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  
  generateBtn.addEventListener('click', () => {
    const uuid = generateUUID();
    uuidDisplay.textContent = uuid;
  });
  
  // Copy UUID to clipboard
  // Copy UUID to clipboard
copyBtn.addEventListener('click', () => {
  const uuid = uuidDisplay.textContent;
  const notification = document.getElementById('notification');

  if (uuid) {
    navigator.clipboard.writeText(uuid).then(() => {
      notification.textContent = 'UUID copied to clipboard!';
      notification.style.display = 'block';

      // Hide the notification after 3 seconds
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    }).catch((err) => {
      notification.textContent = 'Failed to copy. Try again!';
      notification.style.color = 'red';
      notification.style.display = 'block';

      setTimeout(() => {
        notification.style.display = 'none';
        notification.style.color = 'green'; // Reset color for next notification
      }, 3000);
    });
  } else {
    notification.textContent = 'Please generate a UUID first!';
    notification.style.color = 'red';
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
      notification.style.color = 'green'; // Reset color for next notification
    }, 3000);
  }
});

  