const register_form = document.querySelector("#registerForm");

let allUsers = [];
const submitBtn = document.getElementById("reg");
submitBtn?.addEventListener("click", () => {
  const reg_info = {
    name: `${document.getElementById("fname").value} ${
      document.getElementById("lname").value
    }`,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    initialDeposit: document.getElementById("deposit").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
    DOB: document.getElementById("dob").value,
  };
    if(reg_info.initialDeposit >= 500){
        const rData = JSON.parse(localStorage.getItem("reg_info"));
        allUsers = [...rData];
        let result = allUsers.filter((emailData) => {
            if(emailData.email === reg_info.email){
                return emailData;
            }
        });
        console.log(result);
        if(result.length === 0){
            console.log(reg_info.name);
            allUsers.push(reg_info);
            localStorage.setItem("reg_info", JSON.stringify(allUsers));
            console.log(JSON.stringify(allUsers));
            console.log(JSON.parse(localStorage.getItem("reg_info")));
        }
        else{
            alert('Email already exists');
        }   
    }
    else{   
        alert('Initial deposit is less than 500')
    }
});

const sData = JSON.parse(localStorage.getItem("reg_info"));
allUsers = [...sData];

const login = (emailData, passwordData) => {
    let currentUser = allUsers.filter(({ email, password }) => {
    if (email === emailData && password === passwordData) {
      return { email, password };
    }
  });
    if(currentUser.length !== 0){
        localStorage.setItem("current_session", JSON.stringify(currentUser));
        location.assign("dashboard.html");
        console.log()
    }
    else{
        alert('incorrect username or password');
    }
};

const loginBtn = document.getElementById('loginBtn');
loginBtn?.addEventListener('click', ()=>{
    const emailData = document.getElementById('email').value;
    const passwordData = document.getElementById('password').value;
    login(emailData, passwordData)
    console.log(emailData)
})