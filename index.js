const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get('/test', (req, res) => {

    let response = {
        message: "ini endpoint",
        method: req.method,
        code: res.statusCode
    }

    res.json(response)

})

app.listen(9000, () => {
    console.log("server 9000")



})

// no. 1 Volume dan Luas Permukaan bangun ruang <-----

app.post('/kubus', (req, res) => {
    let sisi = Number(req.body.sisi)
    let volume = sisi * sisi * sisi
    let luasP = sisi * sisi * 6

    let response = {
        panjang_sisi: sisi,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

app.post('/balok', (req, res) => {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)

    let volume = p * l * t
    let luasP = 2 * ((p * l) + (l * t) + (p * t))
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

app.post('/bola', (req, res) => {
    let diameter = Number(req.body.D)
    let jari = diameter / 2
    let phi = 22 / 7

    let luasP = 4 * phi * jari * jari
    let volume = 4 / 3 * phi * jari * jari * jari
    let response = {
        diameter: diameter,
        jari_jari: jari,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

app.post('/tabung', (req, res) => {
    let diameter = Number(req.body.D)
    let tinggi = Number(req.body.tinggi)
    let jari = diameter / 2
    let phi = 22 / 7

    let volume = 2 * (phi * jari * jari) * tinggi
    let luasP = 2 * phi * jari * (jari + tinggi)

    let response = {
        diameter: diameter,
        jari_jari: jari,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

// ---------------------->

// no. 2 Convert Suhu <-----

app.get('/convert/celcius/:suhu', (req, res) => {
    let suhu = Number(req.params.suhu)
    let reamur = suhu * 4 / 5
    let kelvin = suhu + 273
    let fahrenheit = (9 / 5 * suhu) + 32
    let response = {
        celcius: suhu,
        result: {
            reamur: reamur,
            kelvin: kelvin,
            fahrenheit: fahrenheit
        }
    }
    res.json(response)

})
app.get('/convert/reamur/:suhu', (req, res) => {
    let suhu = Number(req.params.suhu)
    let celcius = suhu * 5 / 4
    let kelvin = celcius + 273
    let fahrenheit = (9 / 5 * celcius) + 32
    let response = {
        reamur: suhu,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin

        }
    }
    res.json(response)

})

app.get('/convert/kelvin/:suhu', (req, res) => {
    let suhu = Number(req.params.suhu)
    let celcius = suhu - 273
    let fahrenheit = (celcius * 9 / 5) + 32
    let reamur = celcius * 4 / 5

    let response = {
        kelvin: suhu,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }
    res.json(response)
})

app.get('/convert/fahrenheit/:suhu', (req, res) => {
    let suhu = Number(req.params.suhu)
    let celcius = (suhu - 32) * 5 / 9
    let kelvin = celcius + 273
    let reamur = celcius * 4 / 5

    let response = {
        fahrenheit: suhu,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin

        }
    }
    res.json(response)
})
// ---------------->

// no. 3  <--------------

// --------------------->

// no. 4 Menghitung BMI <-------

app.post('/bmi', (req, res) => {
    let tb = Number(req.body.tinggi)
    let bb = Number(req.body.berat)

    let bmi = bb / (tb * tb)
    let status;
    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan"
    } else if (bmi < 24.9) {
        status = "Normal (ideal)"
    } else if (bmi < 29.9) {
        status = "Kelebihan Berat Badan"
    } else {
        status = "Kegemukan"
    }

    let response = {
        tinggi: tb,
        berat: bb,
        bmi: bmi,
        status: status
    }
    res.json(response)

})

// no. 5 bilangan ganjil genap <------------

app.get('/bilangan/:angka', (req, res) => {
    let angka = Number(req.params.angka)

    let bilangan = angka % 2
    let message
    if (bilangan == 0) {
        message = "ini bilangan Genap"
    } else if (bilangan == 1) {
        message = "ini bilangan Ganjil"
    }
    let response = {
        angka: angka,
        bilangan: message

    }
    res.json(response)
})


// --------------->
