export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Muhammad Ainun Najib',
            child: 'Putra ke 3',
            father: 'Muslich',
            mother: 'Imyati',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Permita Dwi Indah Sari',
            child: 'Putri ke 2',
            father: 'Sunangto',
            mother: 'Nur Rohimah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'April',
            date: '09',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: '09.00'
            }
        },
        reception: {
            year: '2026',
            month: 'April',
            date: '09',
            day: 'Kamis',
            hours: {
                start: '10.00',
                finish: '12.00'
            }
        },
        address: 'Jl. Ibrahim Zahier II Gg 3 No. 38 (Rumah Mita)'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/CED6iy45FPWhGMLi6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.JPG'
        },
        {
            id: 2,
            image: './src/assets/images/2.JPG'
        },
        {
            id: 3,
            image: './src/assets/images/3.JPG'
        },
        {
            id: 4,
            image: './src/assets/images/4.JPG'
        },
        {
            id: 5,
            image: './src/assets/images/5.JPG'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Permita Dwi Indah Sari',
            icon: './src/assets/images/mandiri.png',
            rekening: '1780006323402'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxs7lxRNsKkuMIF7xmR7lRl3a78JdwXeIOjBz2k0NggvyYxHN1F0tXdghXkbLLz77bygA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
