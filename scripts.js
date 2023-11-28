// scripts.js

const scriptUrl = 'https://script.google.com/macros/s/AKfycby3VLnEu29ft7DJaVdySxBVvKvECptj2rJWKQyRiZ828WnKKh6JTQtNEntqKgu4un84/exec';

async function createRecord(name, email) {
  try {
    const response = await fetch(`${scriptUrl}?action=create&name=${name}&email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.success) {
      console.log('Record added successfully!');
    } else {
      console.error(`Failed to add record. ${data.message}`);
    }
  } catch (error) {
    console.error('Error creating record:', error);
  }
}

// Example usage:
const name = 'John Doe';
const email = 'john@example.com';

createRecord(name, email);
