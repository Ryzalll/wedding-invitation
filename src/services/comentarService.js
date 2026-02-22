import {data} from "../assets/data/data.js";

const jsonp = (url) => {
    return new Promise((resolve, reject) => {
        const callbackName = 'jsonp_' + Date.now();
        const script = document.createElement('script');
        
        window[callbackName] = (response) => {
            resolve(response);
            document.body.removeChild(script);
            delete window[callbackName];
        };

        script.src = `${url}?callback=${callbackName}`;
        script.onerror = () => reject(new Error('JSONP request failed'));
        document.body.appendChild(script);
    });
};

export const comentarService = {
    getComentar: async function () {
        try {
            return await jsonp(data.api);
        } catch (error) {
            return {error: error && error.message};
        }
    },

    addComentar: async function ({id, name, status, message, date, color}) {
        const comentar = { id, name, status, message, date, color };

        try {
            const response = await fetch(data.api, {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(comentar),
            });
            return await response.json();
        } catch (error) {
            console.error('Post error:', error);
            return {error: error.message};
        }
    },
};