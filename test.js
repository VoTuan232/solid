function a() {
    return b()
}

function b() {
    return 'b'
}

console.log(setTimeout(function() { 
    
    console.log(a())
}, 0))

console.log('start')
