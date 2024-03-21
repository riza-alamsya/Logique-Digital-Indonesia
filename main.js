// 1. Fungsi untuk memeriksa bilangan prima
function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// 2. Fungsi untuk menemukan bilangan terbesar dalam array
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// 3. Fungsi untuk mencetak angka dalam format tertentu
function printNumberPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += `${j} `;
        }
        console.log(line.trim());
    }
}

// 4. Fungsi Bubble Sort
function bubbleSort(numbers) {
    let length = numbers.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}

// 5. Fungsi untuk mencetak pola angka khusus
function printSpecialPattern(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = row; col <= n * n; col += n) {
            line += `${col} `;
        }
        console.log(line.trim());
    }
}

console.log('1.Cek Bilangan Prima (11):', isPrime(11));
console.log('2.Bilangan Terbesar:', findLargest([11, 6, 31, 201, 99, 861, 1, 7, 14, 79]));
console.log('3.Format Angka:');
printNumberPattern(8);
console.log('4.Bubble Sort:', bubbleSort([99, 2, 64, 8, 111, 33, 65, 11, 102, 50]));
console.log('5.Pola Angka Khusus:');
printSpecialPattern(4);
