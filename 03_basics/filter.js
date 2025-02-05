const obj = {
    section : [
    {
        genre: "Fiction",
        publishYear: 2021,
        name: "The Midnight Library"
    },
    {
        genre: "Science Fiction",
        publishYear: 2019,
        name: "Recursion"
    },
    {
        genre: "Fantasy",
        publishYear: 2017,
        name: "The Name of the Wind"
    },
    {
        genre: "Non-Fiction",
        publishYear: 2020,
        name: "Educated"
    }
    ]
};

const f1 = obj.section.filter( (bk) => {
    if(bk.publishYear>2016){
        return bk;
    }
})

console.log(f1);



