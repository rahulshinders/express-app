<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>my-name-API</h1>

  <p>This is a simple Node.js web application built with Express.js that allows users to register their names and view their registered names.</p>

  <h2>Prerequisites</h2>

  <p>Before you begin, ensure you have met the following requirements:</p>

  <ul>
      <li>Node.js installed on your machine.</li>
  </ul>

  <h2>Getting Started</h2>

  <p>To get started with this project, follow these steps:</p>

  <ol>
      <li>Clone the repository to your local machine:</li>
  </ol>

  <pre><code>git clone https://github.com/rahulshinders/my-name-API.git</code></pre>

  <ol start="2">
      <li>Change into the project directory:</li>
  </ol>

  <pre><code>cd my-name-API</code></pre>

  <ol start="3">
      <li>Install the required dependencies:</li>
  </ol>

  <pre><code>npm install</code></pre>

  <ol start="4">
      <li>Start the server:</li>
  </ol>

  <pre><code>nodemon index.js</code></pre>

  <p>The server will run on port 3000 by default. You can change the port in the <code>app.listen()</code> function call in the <code>index.js</code> file.</p>

  <h2>Usage</h2>

  <ul>
      <li>Access the application in your web browser by navigating to <code>http://localhost:3000/</code>.</li>
      <li>You will see a welcome message with instructions on how to register your name.</li>
      <li>To register your name, go to <code>http://localhost:3000/name</code> and fill out the registration form.</li>
      <li>After submitting the form, you will see a confirmation message displaying your registered name.</li>
  </ul>

  <h2>File Structure</h2>

  <ul>
      <li><code>index.js</code>: The main server file that sets up the Express.js application.</li>
      <li><code>name.html</code>: The HTML file for the registration form.</li>
  </ul>

  <h2>Dependencies</h2>

  <ul>
      <li>Express.js: A minimal web application framework for Node.js.</li>
      <li>nodemon: For autosaving the changes in the development.</li>
      <li>body-parser: Middleware for parsing the request body.</li>
  </ul>

  <h2>Customization</h2>

  <p>You can customize this application by:</p>

  <ul>
      <li>Modifying the HTML form in <code>name.html</code> to collect additional information.</li>
      <li>Changing the routes and logic in <code>index.js</code> to suit your needs.</li>
      <li>Styling the HTML templates and adding CSS to make the application visually appealing.</li>
  </ul>
</body>
</html>
