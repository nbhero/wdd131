const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const submission = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        destination: document.querySelector("#destination").value,
        message: document.querySelector("#message").value,
        submittedAt: new Date().toLocaleString()
    };

    const submissions =
        JSON.parse(localStorage.getItem("submissions")) || [];

    submissions.push(submission);

    localStorage.setItem(
        "submissions",
        JSON.stringify(submissions)
    );

    window.location.href = "./thankyou.html";

});