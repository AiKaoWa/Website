const contentData = {
    aboutMe: {
        title: `<span style="color: blue;">About Me</span>`,
        description: `
            <img src="images/Pic.jpg" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Name:</strong> Wuttipatara Arpanakapan<br>
            <strong>Nickname:</strong> Kao<br>
            <strong>Age:</strong> 17<br>
            <strong>Birthday:</strong> 10 . 04 . 2007<br>
            <strong>Religion:</strong> Buddhism<br>
            <strong>Nationality:</strong> Thai<br>
            <strong>Current Institution:</strong> Debsirin School<br>
            <strong>Field of Study:</strong> Science - Mathematic (Focus: Engineering)<br>
            <strong>Hobbies:</strong> Coding, Reading, Gaming, Listening to music<br>
            <h2 style="font-size: 24px; margin-top: 20px;">Skills</h2>
            English Proficiency, Swimming, Designing<br>
            <h2 style="font-size: 24px; margin-top: 20px;">Programming Skills</h2>
            C, CSS, HTML, JavaScript, Python, Jupyter, LUA, Arudino IDE
            <h2 style="font-size: 24px; margin-top: 20px;">Contacts</h2>
            <strong>Address:</strong> 355 Ratchawithi Rd.Bangphat Subdistrict, Bangpha, Bangkok 10700<br>
            <strong>Tel:</strong> 086-780-2146<br>
            <strong>Email:</strong> KonoWry@gmail.com<br>
            <strong>IG:</strong> aikaowa<br>
            <strong>Github:</strong> AiKaoWa
            <button id="close-button" style="position: absolute; top: 10px; right: 20px; background: none; border: none; font-size: 20px; cursor: pointer;">✖</button>
        `
    },
    projects: {
        title: `<span style="color: blue;">Projects</span>`,
        description: `
            <h2 style="font-size: 24px; margin-top: 20px;">Smart White Cane</h2>
            <img src="images/eye.png" style="display: block; margin: 20px auto; width: 400px; "><br>
            <strong>Objective:</strong> The main objective of the Smart White Cane project is to assist visually impaired individuals in their daily lives, making them more comfortable.<br>
            <h2 style="font-size: 24px; margin-top: 20px;">Waste Collector and Water Purifier Machine</h2>
            <img src="images/real.jpg" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Objective:</strong> The main objective of the Waste Collector and Water Purifier Machine is to recycle our everyday waste, such as water bottles, PVC pipes and future boards to create something that can help clean the environment.<br>
            <h2 style="font-size: 24px; margin-top: 20px;">Image Classifer</h2>
            <img src="images/ai.png" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Objective:</strong> The main objective is to train the AI using a diverse dataset and make it able to identify the correct fruit or vegetable but also help to enhance my understanding of machine learning algorithms and allow me to gain experience with data processing.<br>
            <h2 style="font-size: 24px; margin-top: 20px;">Calendar App</h2>
            <img src="images/time.png" style="display: block; margin: 20px auto; width: 400px; "><br>
            <strong>Objective:</strong> The main objective is to successfully make basic functions such as dark mode, a note feature, an interactive calendar/notesystem, the ability to save notes, and resizable notes.<br>
            <h2 style="font-size: 24px; margin-top: 20px;">Weather Forecast</h2>
            <img src="images/wea.png" style="display: block; margin: 20px auto; width: 400px; "><br>
            <strong>Objective:</strong> The main objective is to display the temperature, humidity, and wind speed as well as a video background that correlates with the weather conditions of most places on Earth correctly.<br>
        `
    },
    activities: {
        title: `<span style="color: blue;">Activities</span>`,
        description: `
            <img src="images/hack.jpg" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Hackathon:</strong><br>
            Participated in KMITL’s hackathon on 22-23 August, with the theme 'BCG Zero Waste.' 
            Out of 105 teams, our team successfully advanced to the final 33. The hackathon focused 
            on innovative solutions for reducing waste within the BCG (Bio-Circular-Green) economic model.<br><br>
            I learned how to design and code for our River Waste Collector Machine project, and although 
            we encountered many problems along the way, we managed to solve them through knowledge 
            and teamwork.<br><br>
            <img src="images/vol.png" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Volunteer:</strong><br>
            Volunteered as a staff member to conduct a survey about the enjoyment of the 
            30th Jaturamitr Football Match in May 2023.<br><br>
            <img src="images/tree.png" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Environment:</strong><br>
            Learnt about the King’s Navy Army and planted mangrove tree in February 2024.<br><br>
            <img src="images/run.jpg" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Health:</strong><br>
            Participated in 6km half-marathon “FartLek” hosted by Debsirin School every year in December 2023.<br><br>
            <img src="images/bud.png" style="display: block; margin: 20px auto; width: 200px; border-radius: 10px; border: 3px solid black;"><br>
            <strong>Religion:</strong><br>
            Make merit for Buddha Lent Day in the morning at Debsirin Temple in August 2023.<br>
        `
    },
    certificates: {
        title: `<span style="color: blue;">Certificates</span>`,
        description: `
            <div class="certificate-grid">
                <img src="images/1.png" alt="Certificate 1">
                <img src="images/2.png" alt="Certificate 2">
                <img src="images/3.png" alt="Certificate 3">
                <img src="images/4.png" alt="Certificate 4">
                <img src="images/5.png" alt="Certificate 5">
                <img src="images/6.png" alt="Certificate 6">
                <img src="images/7.png" alt="Certificate 7">
                <img src="images/8.png" alt="Certificate 8">
                <img src="images/j1.jpg" alt="Certificate 9">
                <img src="images/j2.jpg" alt="Certificate 10">
            </div>
        `
    }
};

document.getElementById("aboutMe").addEventListener("click", function() {
    displayContent(contentData.aboutMe.title, contentData.aboutMe.description);
});

document.getElementById("projects").addEventListener("click", function() {
    displayContent(contentData.projects.title, contentData.projects.description);
});

document.getElementById("activities").addEventListener("click", function() {
    displayContent(contentData.activities.title, contentData.activities.description);
});

document.getElementById("certificates").addEventListener("click", function() {
    displayContent(contentData.certificates.title, contentData.certificates.description);
});

function displayContent(title, description) {
    const stadiumBox = document.getElementById("stadium-box");
    const contentArea = document.getElementById("content");


    contentArea.classList.remove('show'); 
    setTimeout(() => {
        stadiumBox.innerHTML = `<h1>${title}</h1><p>${description}</p>`;
        stadiumBox.classList.remove('show');
        setTimeout(() => {
            stadiumBox.classList.add('show'); 
        }, 10); 
        contentArea.classList.add('show'); 
    }, 250); 
}

document.querySelectorAll(".menu-item").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".menu-item").forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        if (button.id) {
            displayContent(contentData[button.id].title, contentData[button.id].description);
        }
    });
});

function closeContent() {
    const stadiumBox = document.getElementById("stadium-box");
    stadiumBox.classList.remove('show');
}

document.addEventListener("click", function(event) {
    if (event.target && event.target.id === "close-button") {
        closeContent();
    }
});

window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
});

let activeButton = null; 

function closeContent() {
    const stadiumBox = document.getElementById("stadium-box");
    stadiumBox.classList.remove('show'); 

    if (activeButton) {
        activeButton.classList.remove('active-button'); 
        activeButton = null; 
    }
}

document.addEventListener("click", function(event) {
    if (event.target && event.target.id === "close-button") {
        closeContent();
    }
});

function displayContent(title, description, button) {
    const stadiumBox = document.getElementById("stadium-box");
    const contentArea = document.getElementById("content");
    stadiumBox.style.display = "block"; 
    stadiumBox.innerHTML = `<h1>${title}</h1><p>${description}</p><button id="close-button" style="position: absolute; top: 10px; right: 20px; background: none; border: none; font-size: 20px; cursor: pointer;">✖</button>`;
    stadiumBox.classList.remove('show'); 
    setTimeout(() => {
        stadiumBox.classList.add('show'); 
    }, 10); 
    contentArea.classList.remove('show'); 
    setTimeout(() => {
        contentArea.classList.add('show'); 
    }, 10); 

    if (activeButton) {
        activeButton.classList.remove('active-button');
    }

    activeButton = button;
    activeButton.classList.add('active-button');
}

document.getElementById("aboutMe").addEventListener("click", function() {
    displayContent(contentData.aboutMe.title, contentData.aboutMe.description, this);
});

document.getElementById("projects").addEventListener("click", function() {
    displayContent(contentData.projects.title, contentData.projects.description, this);
});

document.getElementById("activities").addEventListener("click", function() {
    displayContent(contentData.activities.title, contentData.activities.description, this);
});

document.getElementById("certificates").addEventListener("click", function() {
    displayContent(contentData.certificates.title, contentData.certificates.description, this);
});

document.addEventListener("DOMContentLoaded", () => {
    const stadiumBox = document.getElementById("stadium-box");
    const contentArea = document.getElementById("content");
    let activeButton = null;

    function displayContent(title, description, button) {
        stadiumBox.innerHTML = `<h1>${title}</h1><p>${description}</p><button id="close-button" style="position: absolute; top: 10px; right: 20px; background: none; border: none; font-size: 20px; cursor: pointer;">✖</button>`;
        stadiumBox.classList.add('show');
        contentArea.classList.add('show');

        if (activeButton) activeButton.classList.remove('active-button');
        activeButton = button;
        activeButton.classList.add('active-button');
    }

    function closeContent() {
        stadiumBox.classList.remove('show');
        contentArea.classList.remove('show');
        if (activeButton) activeButton.classList.remove('active-button');
        activeButton = null;
    }

    document.querySelectorAll(".menu-item").forEach(button => {
        button.addEventListener("click", () => {
            const content = contentData[button.id];
            if (content) {
                displayContent(content.title, content.description, button);
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (event.target && event.target.id === "close-button") {
            closeContent();
        }
    });

    window.addEventListener("load", function() {
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "none";
    });
});
