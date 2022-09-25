// Inputs
const addBlance = document.getElementById('balance-add');
const wathdraw = document.getElementById('balance-wathdraw');
const transfer = document.getElementById('balance-transfer');

const upcBlance = document.getElementById('up-palance');
const abaibleBlance = document.getElementById('av-balance');

// Buttons
const addBlanceBtn = document.getElementById('balance-add-btn');
const wathdrawBtn = document.getElementById('balance-wathdraw-btn');
const transferBtn = document.getElementById('balance-transfer-btn');

addBlanceBtn.addEventListener('click', function(){
    let oldBalance = Number( abaibleBlance.innerText );
    let newBlance = Number(  addBlance.value );
    const totalBlance = oldBalance + newBlance;
    
    abaibleBlance.innerText = totalBlance;
    addBlance.value = '';

});

wathdrawBtn.addEventListener('click', function(){
    let oldBalance = Number( abaibleBlance.innerText );
    let wathdrawBlance = Number(wathdraw.value);
    const totalBlance = oldBalance - wathdrawBlance;

    abaibleBlance.innerText = totalBlance;

    wathdraw.value = '';
});

transferBtn.addEventListener('click', function(){
    let oldBalance = Number( abaibleBlance.innerText );
    let transferBlance = Number(transfer.value);
    const totalBlance = oldBalance - transferBlance;

    abaibleBlance.innerText = totalBlance;

    transfer.value = '';
});