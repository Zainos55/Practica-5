const albumView = document.querySelector('#album-view');
const modalView = document.querySelector('#modal-view');
const body = document.body;

// Crear miniaturas
for (const src of PHOTO_LIST) {
    const img = document.createElement('img');
    img.src = src;
    albumView.appendChild(img);

    // Evento: al hacer clic en una miniatura
    img.addEventListener('click', () => {
        const modalImg = document.createElement('img');
        modalImg.src = src;
        modalView.innerHTML = ''; // Limpia el modal
        modalView.appendChild(modalImg);

        modalView.style.display = 'flex';
        modalView.style.top = window.pageYOffset + 'px';
        body.classList.add('no-scroll');
    });
}

// Evento: cerrar modal al hacer clic fuera
modalView.addEventListener('click', () => {
    modalView.style.display = 'none';
    modalView.innerHTML = '';
    body.classList.remove('no-scroll');
});
