/**
 * Sends data to the server using a POST request.
 * @async
 * @function sendData
 * @returns {Promise<void>} A promise that resolves when the data is sent successfully.
 */
async function sendData() {
    const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'John Doe' }),
    });
    const data = await response.json();
    console.log(data);
}

sendData();