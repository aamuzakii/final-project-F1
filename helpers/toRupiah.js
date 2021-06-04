function toRupiah(number) {
    return number.toLocaleString('id', { 
        style: "currency", 
        currency: "IDR"
      })
}

module.exports = toRupiah;