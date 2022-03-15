// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [{
        id: 1,
        title: 'Kode Creative Hub',
        category: 'Web Application',
        img: require('@/assets/images/projects/kodecreative.png'),
    },
    {
        id: 2,
        title: 'Avengers Talent App',
        category: 'Mobile Application',
        img: require('@/assets/images/projects/avengers.png'),
    },
    {
        id: 3,
        title: 'Movie Catalogue App',
        category: 'Mobile Application',
        img: require('@/assets/images/projects/movie.png'),
    },
    {
        id: 4,
        title: 'Tasking Mobile UI Design',
        category: 'UI/UX Design',
        img: require('@/assets/images/projects/tasking.png'),
    },
    {
        id: 5,
        title: 'Medicare Mobile UI Design',
        category: 'UI/UX Design',
        img: require('@/assets/images/projects/medicare.png'),
    },
    {
        id: 6,
        title: 'Tumbas Website UI Design ',
        category: 'UI/UX Design',
        img: require('@/assets/images/projects/tumbas.png'),
    },
];

export default projects;