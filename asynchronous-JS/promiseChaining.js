const students=[
    {
        id:1, 
        name:'Alex',
    },
    {
        id:2, 
        name:'John',
    },
    {
        id:3, 
        name:'Rob',
    }

];

const hobbies= [
    {
        id:1, 
        hobbies:[ 'Sports', 'Cooking']
    },
    {
        id:2, 
        hobbies:[ 'Hiking', 'Cricket']
    },
    {
        id:3, 
        hobbies:[ 'Tracking', 'Chess']
    }
];

const getStudent = (studentName)=> { 
    return new Promise((resolve,reject)=>{
        const student = students.find(element => element.name == studentName);
        if(!student) reject(new Error("Student Not Found"));
        resolve(student.id);
    });
}

const getHobbies = (studentid)=> { 
    return new Promise((resolve,reject)=>{
        const student = hobbies.find(element => element.id == studentid);
        if(!student) reject(new Error("No Associated Hobbies"));
        resolve(student.hobbies);
    });
}
getStudent('Alex').then(data=> getHobbies(data).
            then(hobbies => console.log(hobbies)))
            .catch(err =>{ console.log(err.message)});
 

const getStudentAsync = async (name) => {
    const studentId = await getStudent(name);
    const studentHobbies = await getHobbies(studentId);
    return (studentHobbies);
}

getStudentAsync('Rob').then(hobbies => console.log(hobbies));