import axios from 'axios'
const BASE_URL = 'https://timesheet-staging-api.herokuapp.com/'

// Gives an access denied error
function users() {
    return () => {
        axios.get(`${BASE_URL}api/users`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
}

// This method gets empty unseeded data
function weeks() {
    return (month, year, user_id) => {
        if (
            parseInt(month) >= 1 && parseInt(month) <= 12
            && year === '2017'
         ) {
            axios.get(`${BASE_URL}api/training/weeks/${month}/${year}/${user_id}`)
            .then((res)=>{
                console.log(res.data)
            })
            .catch(err => console.log(err))
         }
        else {
            return { message: 'error' }
        }
    }
}

// This method displayed 400 error status
function approv() {
    return (week_id, apr_id) => {
        axios({
            method: 'put',
            url: `${BASE_URL}api/training/weeks/${week_id}/users/${apr_id}`,
            data: { status: 'approved' }
        })
        .then((res)=>{
            console.log(res)
        })
        .catch(err => console.log(err))
    }
}

module.exports = {
    getWeeks: weeks(),
    approve: approv(),
    getUsers: users()
}