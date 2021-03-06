export const books = [
    {
        title: 'Watership Down',
        author: {
            firstName: 'Richard',
            lastName: 'Adams'
        }
    },
    {
        title: '1Q84',
        author: {
            firstName: 'Haruki',
            lastName: 'Murakami'
        }
    }
]

export const BookData = new Promise((resolve) => {
   setTimeout(() => {
       resolve(books)
   }, 5000)
});