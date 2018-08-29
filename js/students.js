function getAllStudents() {
    /* return new Promise((resolve, reject) =>  {
        const httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = () => {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
                    resolve(JSON.parse(httpRequest.response));
                } else {
                    reject(new Error('internal error occurred'));
                }
            }
        };
        httpRequest.open('GET','http://localhost:3000/students');
        httpRequest.setRequestHeader('content-type','application/json');
        httpRequest.send();

    })*/
    fetch('http://localhost:3000/students', {
        headers : {
            'Content-type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((students) => {
        const tbody = document.getElementsByTagName('tbody')[0];
        let rowstring = '';
        students.forEach(student => {
            rowstring = rowstring + `
            <tr>
                <th>${student.id}</th>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.mobile}</td>
            </tr>`
        });
        tbody.innerHTML = rowstring;            
    }).catch(error => {
        console.log(error);
        
    });    
}

/* function getAllStudentsDisplay() {
    getAllStudents().then(students => {
        const tbody = document.getElementsByTagName('tbody')[0];
        let rowstring = '';
        students.forEach(student => {
            rowstring = rowstring + `
            <tr>
                <th>${student.id}</th>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.mobile}</td>
            </tr>`
        });
        tbody.innerHTML = rowstring;
        
    }).catch(error => {
        console.log(error);
        
    })
} */

function addStudent(student) {
/*     return new Promise((resolve, reject) => {
        const httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = () => {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
 
                } else {
                    reject(new Error('internal error occurred'));
                }
            }
        };
        httpRequest.open('POST','http://localhost:3000/students');
        httpRequest.setRequestHeader('content-type','application/json');
        httpRequest.send(JSON.stringify(student));        
    }) */
    fetch('http://localhost:3000/students', {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(respo)
}

function addStudentDetail(event) {
    event.preventDefault();
    
    const id1 = document.getElementById('id').value;
    const name1 = document.getElementById('name').value;
    const email1 = document.getElementById('email').value;
    const mobile1 = document.getElementById('mobile').value;
    console.log(id1 + ' ' + name1 + ' ' + email1 + ' ' + mobile1); 

    let student  = {
        id: id1,
        name: name1,
        email: email1,
        mobile: mobile1
    }
    addStudent(student).then(student => {
        alert('Student added successfully');
    }).catch(error => {
        console.log(error);
        
    })
}