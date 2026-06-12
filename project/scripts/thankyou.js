const submissionInfo = document.querySelector("#submission-info");

const submissions =
    JSON.parse(localStorage.getItem("submissions")) || [];

const latestSubmission = submissions[submissions.length - 1];

if (latestSubmission) {

    submissionInfo.innerHTML = `
        <p><strong>Name:</strong> ${latestSubmission.name}</p>

        <p><strong>Email:</strong> ${latestSubmission.email}</p>

        <p><strong>Destination:</strong> ${latestSubmission.destination}</p>

        <p><strong>Message:</strong> ${latestSubmission.message}</p>

        <p><strong>Submitted:</strong> ${latestSubmission.submittedAt}</p>
    `;
}