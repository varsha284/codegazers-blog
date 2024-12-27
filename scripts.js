function addComment(event) {
    const commentInput = event.target.previousElementSibling;
    const commentSection = commentInput.previousElementSibling;

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement('p');
        newComment.textContent = commentInput.value;
        commentSection.appendChild(newComment);
        commentInput.value = '';
    } else {
        alert("Comment cannot be empty!");
    }
}