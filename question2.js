const sample = 'hello';

function reverseString() {
    const reversed = sample.split('').reverse().join('');
    console.log(reversed);
    return reversed;
}

reverseString();
