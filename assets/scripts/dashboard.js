const currentUser = JSON.parse(localStorage.getItem("current_session"));
document.getElementById('initial').innerHTML = currentUser[0].initialDeposit;

const increment = document.querySelector('#addMoney');
increment.addEventListener('click', () => {
    const addMoney = document.getElementById('myDeposit').value
    console.log(addMoney)
    const loggedInUser = JSON.parse(localStorage.getItem("current_session"))
    var parsed = parseFloat(loggedInUser[0].initialDeposit)
    parsed += parseFloat(addMoney);
    document.getElementById('initial').innerHTML = parsed;

    const allUsers = JSON.parse(localStorage.getItem('reg_info'));
    console.log(allUsers)
    const updateUserDeposit = allUsers.findIndex(obj => {
        return obj.email === loggedInUser[0].email
    })
    console.log(updateUserDeposit);
    
    loggedInUser[0].initialDeposit = parsed
    console.log(loggedInUser)
    localStorage.setItem('current_session', JSON.stringify(loggedInUser))
    console.log(JSON.stringify(loggedInUser))

    allUsers[updateUserDeposit].initialDeposit = parsed
    console.log(allUsers);
    localStorage.setItem('reg_info', JSON.stringify(allUsers))
    console.log(JSON.stringify(allUsers))

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    document.getElementById('dater').innerHTML = currentDate;
    console.log(date)
    document.getElementById('cAmount').innerHTML = addMoney;
    document.getElementById('cBalance').innerHTML = parsed;
});

const decrement = document.querySelector('#debit');
decrement.addEventListener('click', () => {
   const debit = document.getElementById('myWithdraw').value
   const loggedInUser = JSON.parse(localStorage.getItem('current_session'))
   console.log(loggedInUser)
   var initial = parseFloat(loggedInUser[0].initialDeposit)
   if(debit <= initial){
        initial -= parseFloat(debit)
        document.getElementById('initial').innerHTML = initial;

        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        document.getElementById('date').innerHTML = currentDate;

        const allUsers = JSON.parse(localStorage.getItem('reg_info'));
        console.log(allUsers)
        const updateUserDeposit = allUsers.findIndex(obj => {
            return obj.email === loggedInUser[0].email
        })
        console.log(updateUserDeposit);

        loggedInUser[0].initialDeposit = initial;
        console.log(loggedInUser);
        localStorage.setItem('current_session', JSON.stringify(loggedInUser))
        console.log(JSON.stringify(loggedInUser))

        allUsers[updateUserDeposit].initialDeposit = initial
        console.log(allUsers);
        localStorage.setItem('reg_info', JSON.stringify(allUsers))
        console.log(JSON.stringify(allUsers))

        document.getElementById('amount').innerHTML = debit;
        document.getElementById('balance').innerHTML = initial;
   }
   else{
        alert('Insufficient balance');
   }
})

const userData = JSON.parse(localStorage.getItem('current_session'));
document.getElementById('username').innerHTML = userData[0].name;
document.getElementById('email').innerHTML = userData[0].email;
document.getElementById('phone').innerHTML = userData[0].phone;
document.getElementById('age').innerHTML = userData[0].DOB;
document.getElementById('gender').innerHTML = userData[0].gender

