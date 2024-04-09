const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const Email = document.getElementById('E-mail')
const Phone = document.getElementById('Phone')
const subject = document.getElementById('subject')

form.addEventListners('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null){
        messages.push('Name is required')
    }

    if (lname.value === '' || lname.value == null){
        messages.push('Name is required')
    }
    if (Email.value === '' || Email.value == null){
        messages.push('Name is required')
    }
    if (phone.value === '' || phone.value == null){
        messages.push('Name is required')
    }
    if (subject.value === '' || subject.value == null){
        messages.push('Name is required')
    }
)