import fs from "fs";

import inquirer from "inquirer";

const questions = [
	{
		type: "input",
		message: "What is your name?",
		name: "name",
	},
	{
		type: "input",
		message: "What is your location?",
		name: "location",
	},
	{
		type: "input",
		message: "Please provide a biography",
		name: "bio",
	},
	{
		type: "input",
		message: "What is your LinkedIn URL?",
		name: "linkedIn",
	},
	{
		type: "input",
		message: "What is your GitHub URL?",
		name: "gitHub",
	},
];

inquirer.prompt(questions).then((answer) => {
	const htmlContent = `<!DOCTYPE html>
    <html lang="en-us">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./style.css" />
            <title id="title">${answer.name}| Portfolio</title>
        </head>
    
        <body>
            <section id="header" class="header">
                <h1 id="name">${answer.name}</h1>
                <h2 id="location">${answer.location}</h2>
                <nav role="navigation">
                    <ul class="col">
                        <li>
                            <a href="#about-me">About</a>
                        </li>
                        <li>
                            <a href="#contact-me">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div class="nav-spacer"></div>
            </section>
    
            <main>
                <!-- Sidebar -->
    
                <!-- About section -->
                <section class="main-row">
                    <aside class="main-row-aside">
                        <section id="about-me" class="title-words">
                            <h3>About</h3>
                        </section>
                    </aside>
                    <section class="row">
                        <section class="main-text">
                            <p id="bio">${answer.bio}</p>
                        </section>
                    </section>
                </section>
    
                <!-- Contact section -->
                <section class="main-row">
                    <aside class="main-row-aside">
                        <section id="contact" class="title-words">
                            <h3>Contact</h3>
                        </section>
                    </aside>
                    <section class="row">
                        <section class="main-text">
                            <ul>
                                <li><strong>Github:</strong>${answer.gitHub}</li>
                                <li><strong>LinkedIn:</strong>${answer.linkedIn}</li>
                            </ul>
                        </section>
                    </section>
                </section>
            </main>
    
            <!-- Footer -->
    
            <footer class="footer">
                <p>Copyright 2024</p>
            </footer>
        </body>
    </html>`;
	fs.writeFile("index.html", htmlContent, (err) =>
		err ? console.error(err) : console.log("Here's your portfolio")
	);
});
