const lightsContainer = document.querySelector('.lights');
const colors = ['red', 'yellow', 'blue', 'green'];
const totalLights = 30;

for (let i = 0; i < totalLights; i++) {
    const light = document.createElement('div');
    light.classList.add('light', colors[i % colors.length]);
    light.style.top = `${Math.random() * 100}%`;
    light.style.left = `${Math.random() * 100}%`;
    light.style.animationDelay = `${Math.random()}s`;
    lightsContainer.appendChild(light);
}





