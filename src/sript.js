// task 1

// import book from './book.json';
// console.log(book)

// try {
//     const bookObject = JSON.stringify(book);
//     console.log('is valid:', bookObject)
// } catch(error) {console.error('is invalid:', error)}


// task 2

// const form = document.getElementById('user-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//     e.preventDefault();
//     const formData = {
//         name: e.target.name.value,
//         age: e.target.age.value,
//     }

//     const stringFormData = JSON.stringify(formData)


//     try {
//         const parsedFormData = JSON.parse(stringFormData);
//         console.log('Is valid:', parsedFormData);
//     } catch(error) {
//         console.error('Is invalid:', error);
//     }
// }

// task 3

import movies from './movie.json'

const stringedMovies = JSON.stringify(movies);

try {
    const parsedMovies = JSON.parse(stringedMovies);
    console.log('Is valid:', stringedMovies);
} catch(error) {
    console.log('Is invalid', stringedMovies);
}


