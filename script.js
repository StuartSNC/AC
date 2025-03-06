document.getElementById('descriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;

    // Here you can add your logic to process the JIRA description
    // and generate the acceptance criteria. For simplicity, we will
    // just output the description as acceptance criteria.

    const output = `
        <h3>Generated Acceptance Criteria</h3>
        <p>${description.replace(/\n/g, '<br>')}</p>
    `;

    document.getElementById('output').innerHTML = output;
});