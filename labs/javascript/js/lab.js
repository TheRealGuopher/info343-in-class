// Put your JavaScript lab code here!

"use strict";

let js = "I like JavaScript more than I like to party.";
console.log(js);

let uw = "University of Washington";
console.log(uw);

let combo = js + uw;
console.log(combo);

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += n;
    }
    return n;
}

console.log(sumUpTo(5));

function vowelCount(word) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.has(word.charAt(i))) {
            count++;
        }
    }
    return count;
}

console.log(vowelCount("james"));

function findMin(nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }
    return min;
}

let nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];
console.log(findMin(nums));

function longestWord(languages) {
    let word = languages[0];
    for (let i = 1; i < languages.length; i++) {
        if (languages[i].length > word.length) {
            word = languages[i];
        }
    }
    return word;
}

let languages = ["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"];
console.log(longestWord(languages));

function removeAll(array, word) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() != word) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let array = ["foo", "bar", "baz", "Foo", "FOO"];
console.log(removeAll(array, "foo"));

let books = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        read: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        read: false
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        read: false
    }
]

books.push({title: "1984", author: "George Orwell", read: true});

function bookStatus(books) {
    for (let i = 0; i < books.length; i++) {
        let s = "";
        if (books[i].read) {
            s += "I have read ";
        } else {
            s += "I really want to read ";
        }
        s = s + books[i].title + " by " + books[i].author;
        console.log(s);
    }
}

bookStatus(books);