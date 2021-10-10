// menambahkan menambah click event ke angka-angka di kalkulator
// const numbers = document.querySelectorAll(".number")
// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         console.log("number is pressed") // jika benar maka pada console akan menampilkan "number is pressed"
//     })
// });


// mengunakan event.target.value agar kalkulator dapat menggunakan angka
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
});             // Pengujian pertama Program kalkulator harus dapat menerima input dari tombol-tombol dan menampilkannya di layar display program kalkulator.
                // screenshoot hasil pengujian (input angka 5) : https://prnt.sc/1vjhtwf
                
                // pengujian kedua Program kalkulator memiliki fungsi kalkulasi berupa pengurangan, penjumlahan, perkalian dan pembagian serta memiliki angka 0 dan angka 1 sampai 9. 
                //  screenshoot hasil pengujian : https://prnt.sc/1vjhecz

// membuat agar layar dapat menampilkan angka saat diklik
const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
    calculatorScreen.value = number
};

// menyimpan angka-angka dan operator untuk melakukan kalkulasi
let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

// memberikan angka yg diklik ke variable currentNumber
const inputNumber = (number) => {
    if (currentNumber === '0') {    // digunakan agar tidak diawali dengan angka 0
        currentNumber = number
    } else {
        currentNumber += number // digunakan untuk memasukkan angka lebih dari 1 digit
    }
};

// mengganti updateScreen ke currentnumber agar layar kalkulator menampilkan angka yang dimasukkan
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
});

// menambah click event ke operator kalkulator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
});

// mendefinisikan fungsi inputOperator
const inputOperator = (operator) => {
    if (calculatorOperator === '') {
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
};

// mengecek tombol "=" sebelum mengaktifkan fungsi kalkulasi
// const equalSign = document.querySelector(".equal-sign")

// equalSign.addEventListener("click", () => {
//     console.log("equal button is pressed") // Jika tombol = diklik dan berfungsi pada console akan tampil "equal button is pressed"
// });

// mengaktifkan fungsi kalkulasi
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()                  // menjalankan fungsi kalkulasi
    updateScreen(currentNumber)  // mengupdate layar kalkulator dengan hasil kalkulasi
});

// membuat fungsi kalkulasi
const calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case "+": // untuk penjumlahan
            result = parseFloat(prevNumber) + parseFloat(currentNumber) // menggunakan parseFloat agar bisa mengkalkulasi angka desimal
            break
        case "-": // untuk pengurangan
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*": // untuk perkalian
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/": // untuk pembagian
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculatorOperator = ''
};

// mengaktifkan fungsi persen
const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', (event)=> {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})

inputPercentage = (per) => {
    if(currentNumber.includes('%')) {
        return 
    }
    currentNumber = currentNumber / 100 
}

// mengecek tombol AC
// const clearBtn = document.querySelector('.all-clear')

// clearBtn.addEventListener('click', () => {
//     console.log("Ac button is pressed"); // Jika tombol AC diklik dan berfungsi pada console akan tampil "AC button is pressed"
// });

// mengaktifkan tombol AC atau untuk menghapus semuanya
const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'      // menetapkan currentNumber ke 0 dan menghapus 2 variable yg lain
};

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber) // mengupdate layar kalkulator
});

// membuat agar kalkulator dapat menjalankan fungsi decimal
const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot    // digunakan agar input decimal hanya sekali
};

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
});
