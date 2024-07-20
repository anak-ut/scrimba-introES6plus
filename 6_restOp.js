function add(...nums){
    //console.log(arguments);
    // 'arguments' adalah object bawaan fungsi
    //untuk simpan semua argumen/ parameter dan menampilkan indeks 
    // output : [Arguments]{'0':4, '1':5, '2':7, '3':8, '4':12}
    // urutan indeks dan array
    
    // agar nums bisa di-iterate, gunakan spread operator pada parameter
    // spread op konvert (...) to [...] agar bs di-iterate
    console.log(nums)
}

add(4,5,7,8,12)