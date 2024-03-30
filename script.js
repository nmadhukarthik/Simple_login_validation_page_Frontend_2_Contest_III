let emailBox = document.querySelector("#email")
let passwordBox = document.querySelector("#password")
let emailCriteriaBox = document.querySelector("#emailCriteria")
let passwordCriteriaBox = document.querySelector("#passwordCriteria")
let successBox = document.querySelector("#success")
let submitBtn = document.querySelector("button")

let emailFlag = false
let passwordFlag = false

emailBox.addEventListener("change", (eventDetails)=>
{
    let userEmail = eventDetails.target.value
    //console.log(emailBox.innerText)
    if(userEmail.length>3)
    {
        let rateFlag = false
        let dotFlag = false

        for(let a of userEmail)
        {
            if(a=="@")
            { rateFlag = true }

            if(rateFlag && a==".")
            { dotFlag = true }
         }

         if(rateFlag && dotFlag)
         {
            emailFlag = true
            emailCriteriaBox.classList.add("hide")
         }
    }
    else
    {
        emailFlag = false
        emailCriteriaBox.classList.remove("hide")
        successBox.classList.add("hide")
    }

    if(passwordFlag==true && emailFlag==true)
    { successBox.classList.remove("hide") }
    // submitBtn.disabled = false}
    // else
    // { submitBtn.disabled = true }
})


passwordBox.addEventListener("change", (eventDetails)=>
{
    let userPassword = eventDetails.target.value
    //console.log(userPassword)
    if(userPassword.length>8)
    { 
        passwordFlag = true 
        passwordCriteriaBox.classList.add("hide")
    }
    else
    {
        passwordFlag = false
        passwordCriteriaBox.classList.remove("hide")
        successBox.classList.add("hide")
    }

    if(passwordFlag==true && emailFlag==true)
    { successBox.classList.remove("hide") }
    // submitBtn.disabled = false }
    // else
    // { submitBtn.disabled = true }
})


submitBtn.addEventListener("click", loginConfirm)

function loginConfirm()
{
    if(confirm("Select the option") == true)
    { alert("Successful signup!") }
    else
    { 
        window.location.href = "index.html"
        passwordBox.value = ""
        emailBox.value = ""
    } 
}