import {data} from "../assets/data/data.js";
import {monthNameToNumber} from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const [_, figureElement, timeElement, homeTime, calendarAnchor] = homeContainer.children;

    const generateFigureContent = ({bride}) => {
        const {L: {name: brideLName}, P: {name: bridePName}, couple: coupleImage} = bride;
        return `
            <img src="${coupleImage}" alt="couple animation">
            <figcaption>
                ${brideLName.split(' ')[1]} & ${bridePName.split(' ')[0]}
            </figcaption>`;
    };

    const generateTimeContent = ({time}) => {
        const {year, month, date, day} = time.marriage;
        return `
        <time datetime="${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}">
            ${day}, ${date} ${month} ${year}
        </time>`;
    };

    const generateCountdownMarkup = (days, hours, minutes, seconds) => {
        return `<div>
                    <p>${days}<br><span>Hari</span></p>
                </div>
                <div>
                    <p>${hours}<br><span>Jam</span></p>
                </div>
                <div>
                    <p>${minutes}<br><span>Menit</span></p>
                </div>
                <div>
                    <p>${seconds}<br><span>Detik</span></p>
                </div>`;
    };

    const updateCountdown = (endTime, homeTime, intervalId) => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(intervalId);
            homeTime.innerHTML = generateCountdownMarkup(0, 0, 0, 0);
        } else {
            homeTime.innerHTML = generateCountdownMarkup(days, hours, minutes, seconds);
        }
    };

    const startCountdown = (homeTime, timeData) => {
        const {year, month, date} = timeData.marriage;
        const endTime = new Date(`${String(year)}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}T00:00:00`);

        let intervalId = setInterval(() => updateCountdown(endTime, homeTime, intervalId), 1000);
        updateCountdown(endTime, homeTime, intervalId);
    };

    // --- FITUR AUTO-SCROLL DOWN (60 DETIK + STOP) ---
    const setupScrollDown = () => {
        const scrollBtn = homeContainer.querySelector('.scroll_down');
        const brideSection = document.querySelector('#bride');
        const footer = document.querySelector('#footer');
        let autoScrollAnimation;

        const stopAutoScroll = () => {
            if (autoScrollAnimation) {
                cancelAnimationFrame(autoScrollAnimation);
                autoScrollAnimation = null;
                document.documentElement.style.scrollBehavior = ''; 
                
                window.removeEventListener('wheel', stopAutoScroll);
                window.removeEventListener('touchstart', stopAutoScroll);
                window.removeEventListener('mousedown', stopAutoScroll);
                window.removeEventListener('keydown', stopAutoScroll);
            }
        };

        if (scrollBtn && brideSection && footer) {
            scrollBtn.addEventListener('click', (e) => {
                e.preventDefault(); 
                stopAutoScroll();

                document.documentElement.style.scrollBehavior = 'auto';

                const bridePosition = brideSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo(0, bridePosition);

                setTimeout(() => {
                    const startPosition = window.scrollY; 
                    const targetPosition = footer.getBoundingClientRect().top + window.scrollY;
                    const distance = targetPosition - startPosition;
                    
                    const duration = 60000; 
                    let start = null;

                    function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const percentage = Math.min(progress / duration, 1);
                        
                        window.scrollTo(0, startPosition + distance * percentage);
                        
                        if (progress < duration) {
                            autoScrollAnimation = window.requestAnimationFrame(step);
                        } else {
                            stopAutoScroll(); 
                        }
                    }
                    
                    autoScrollAnimation = window.requestAnimationFrame(step);

                    window.addEventListener('wheel', stopAutoScroll, { passive: true });
                    window.addEventListener('touchstart', stopAutoScroll, { passive: true });
                    window.addEventListener('mousedown', stopAutoScroll, { passive: true });
                    window.addEventListener('keydown', stopAutoScroll, { passive: true });
                    
                }, 1000); 
            });
        }
    };

    const initializeHome = () => {
        const {bride, time, link} = data;
        figureElement.innerHTML = generateFigureContent({bride});
        timeElement.innerHTML = generateTimeContent({time});
        calendarAnchor.href = link.calendar;
        startCountdown(homeTime, time);
        
        // Panggil fungsi scroll saat home diinisialisasi
        setupScrollDown();
    };

    initializeHome();
};