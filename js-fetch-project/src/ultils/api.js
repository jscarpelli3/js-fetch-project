const BASE_URL ='https://frontend-take-home-service.fetch.com'


const login = async (name, email) => {
  try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email}),
          credentials: 'include',
        })

        if (response.ok) {
          console.log('Login Successful!')
        } else {
          console.log('Error Logging In')
        }
  } catch (error) {
    console.log('Network Error',error)
  } 
}

const logout = async () => {
  try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
          method: 'POST',
          credentials: 'include',
        })

        if (response.ok) {
          console.log('LogOut Successful!')
        } else {
          console.log('Error Logging Out')
        }
  } catch (error) {
    console.log('Network Error',error)
  } 
}

export {login, logout}

