const modal = document.getElementById('postModal');
const overlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const savePostBtn = document.getElementById('savePost');

const postTitleInput = document.getElementById('postTitle');
const postContentInput = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function savePost() {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();

    if (!title || !content) {
        alert('Proszę wypełnić oba pola!');
        return;
    }

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    postsContainer.prepend(postElement);

    postTitleInput.value = '';
    postContentInput.value = '';

    closeModal();
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
savePostBtn.addEventListener('click', savePost);
