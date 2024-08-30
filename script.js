// Select all <p> elements and <video> elements by their class names
const showVideoParagraphs = document.querySelectorAll('.play-video');
const videos = document.querySelectorAll('.popup-video');

// header and footer
$(document).ready(function() {
    $.get("partials/header.html", function(data) {
        $("#header").html(data);
    });

    $.get("partials/footer.html", function(data) {
        $("#footer").html(data);
    });

    $.get("partials/contact.html", function(data) {
        $("#contact").html(data);
    });
});

//nav-sidebar
// Show the sidebar and change the hamburger icon to 'X'
function showSidebar() {
    const sidebar = document.querySelector('.sideNav-container');
    sidebar.style.display = 'block';

    document.querySelector('.menu-button').style.display = 'none';
}

// Hide the sidebar and change the 'X' back to hamburger icon
function hideSidebar() {
    const sidebar = document.querySelector('.sideNav-container');
    sidebar.style.display = 'none';
    
    document.querySelector('.menu-button').style.display = 'block';
}

// Add event listeners to close the sideNav when any link is clicked
document.querySelectorAll('.sideNav-container .nav-list .nav-items a').forEach(link => {
    link.addEventListener('click', hideSidebar);
});

// Add an event listener to each <p> element
showVideoParagraphs.forEach((paragraph, index) => {
    paragraph.addEventListener('click', () => {
        // Hide all video elements
        videos.forEach(video => video.style.display = 'none');
        // Show the corresponding video element
        videos[index].style.display = 'block';
    });
});

// Add an event listener to each close button in the video elements
videos.forEach(video => {
    const closeButton = video.querySelector('span');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            video.style.display = 'none';
        });
    }
});

