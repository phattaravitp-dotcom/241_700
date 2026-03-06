const validateData = (userData) => {
    let errors = [];

    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ');
    }

    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล');
    }

    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }

    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }

    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }

    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }

    return errors;
}


const submitData = async () => {

    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDom = document.getElementById('message');

    try {

        // รวมค่า interest
        let interest = [...interestDOMs].map(el => el.value).join(',');

        let userData = {
            firstName: firstNameDOM.value.trim(),
            lastName: lastNameDOM.value.trim(),
            age: ageDOM.value,
            gender: genderDOM ? genderDOM.value : '',
            description: descriptionDOM.value.trim(),
            interests: interest
        };

        console.log('submitData', userData);

        const errors = validateData(userData);

        if (errors.length > 0) {
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            };
        }

        const response = await axios.post('http://localhost:8000/users', userData);

        console.log('response', response);

        messageDom.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDom.className = 'message success';

    } catch (error) {

        console.log('error message', error.message);
        console.log('error', error.errors);

        let htmlData = '<div>';
        htmlData += `<div>${error.message}</div>`;
        htmlData += '<ul>';

        if (error.errors) {
            for (let i = 0; i < error.errors.length; i++) {
                htmlData += `<li>${error.errors[i]}</li>`;
            }
        }

        htmlData += '</ul>';
        htmlData += '</div>';

        messageDom.innerHTML = htmlData;
        messageDom.className = 'message danger';
    }
}
     