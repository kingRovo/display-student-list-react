import axios from 'axios';
const stu_url = 'http://localhost:8080/all'
class Student_ser{
    getStudent(){
        return axios.get(
            stu_url
        );
    }
}
export default new Student_ser();