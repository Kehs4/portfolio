const items = document.querySelectorAll('#item-list .item'); 
const modal = document.createElement('div'); 
const modalImage = document.createElement('img'); 

modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'none';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';

modalImage.style.maxWidth = '90%';
modalImage.style.maxHeight = '90%';
modal.appendChild(modalImage);
document.body.appendChild(modal); 

let currentIndex = 0;


items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index; 
        modalImage.src = item.src; 
        modal.style.display = 'flex'; 
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) { 
        modal.style.display = 'none'; 
    }
});

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % items.length; 
    modalImage.src = items[currentIndex].src;
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; 
    modalImage.src = items[currentIndex].src;
};

const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');

if (nextButton && prevButton) {
    nextButton.style.position = 'fixed';
    nextButton.style.bottom = '20px';
    nextButton.style.right = '45%';
    nextButton.style.transform = 'translateX(50%)';
    nextButton.style.display = 'none'; 
    nextButton.style.zIndex = '1001';

    prevButton.style.position = 'fixed';
    prevButton.style.bottom = '20px';
    prevButton.style.left = '45%';
    prevButton.style.transform = 'translateX(-50%)';
    prevButton.style.display = 'none';
    prevButton.style.zIndex = '1001';

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
        showNextImage(); 
    });

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
        showPrevImage(); 
    });
} else {
    console.error('Os botões next-btn ou prev-btn não foram encontrados no DOM.');
}

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index; 
        modalImage.src = item.src; 
        modal.style.display = 'flex'; 

        if (nextButton && prevButton) {
            nextButton.style.display = 'block';
            prevButton.style.display = 'block';
        }
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) { 
        modal.style.display = 'none'; 

        if (nextButton && prevButton) {
            nextButton.style.display = 'none';
            prevButton.style.display = 'none';
        }
    }
});