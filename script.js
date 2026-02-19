 document.addEventListener("DOMContentLoaded", function () {

    /* ================= AOS ================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    /* ================= Navbar Scroll ================= */
    const navbar = document.querySelector(".premium-navbar");

    window.addEventListener("scroll", function () {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    });


    /* ================= Custom Cursor ================= */
    const dot = document.getElementById('cursor-dot');

    if (dot) {
        window.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        });
    }


    /* ================= WhatsApp Chat ================= */
    const floatBtn = document.getElementById('wa-floating-btn');
    const chatInterface = document.getElementById('wa-interface');
    const chatMessages = document.getElementById('chatMessages');
    const phone = "8801774865505";

    window.openChat = function () {
        if (floatBtn && chatInterface) {
            floatBtn.style.display = 'none';
            chatInterface.style.display = 'flex';
        }
    }

    window.closeChat = function () {
        if (floatBtn && chatInterface) {
            floatBtn.style.display = 'flex';
            chatInterface.style.display = 'none';
        }
    }

    window.handleSendMessage = function () {
        const input = document.getElementById('userInput');
        if (!input) return;

        const text = input.value.trim();
        if (text === "") return;

        if (chatMessages) {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'msg sent';
            msgDiv.innerText = text;
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        input.value = "";

        setTimeout(() => {
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        }, 500);
    }

    const inputField = document.getElementById('userInput');
    if (inputField) {
        inputField.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                handleSendMessage();
            }
        });
    }


    /* ================= HERO REAL TIME ANIMATION ================= */

    const nameText = "Akter Hossain";
    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        "ASP.NET Core Specialist",
        "Angular Expert",
        "ERP System Architect"
    ];

    const nameElement = document.getElementById("nameText");
    const roleElement = document.getElementById("roleText");
    const buttons = document.querySelector(".hero-buttons");

    let nameIndex = 0;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeName() {
        if (!nameElement) return;

        if (nameIndex < nameText.length) {
            nameElement.innerHTML += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 100);
        } else {
            setTimeout(typeRole, 500);
        }
    }

    function typeRole() {
        if (!roleElement) return;

        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            roleElement.innerHTML = currentRole.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                setTimeout(() => isDeleting = true, 1500);
            }
        } else {
            roleElement.innerHTML = currentRole.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeRole, isDeleting ? 50 : 100);
    }

    /* Button Fade In */
    window.addEventListener("load", () => {
        if (buttons) {
            setTimeout(() => {
                buttons.classList.add("show");
            }, 3000);
        }
    });

    typeName();

});