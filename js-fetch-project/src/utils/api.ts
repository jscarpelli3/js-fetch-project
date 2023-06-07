const BASE_URL: string = 'https://frontend-take-home-service.fetch.com'

const login = async (
  formData: object,
  loginSet: Function,
  errorSet: Function
): Promise<void> => {
  console.log('trying to login')
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      credentials: 'include'
    })

    if (response.ok) {
      loginSet(true)
      console.log('Logged in!')
    } else {
      errorSet(true)
      console.log('Error Logging In')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}

const logout = async (
  loginSet: Function,
  errorSet: Function
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    })

    if (response.ok) {
      loginSet(false)
    } else {
      errorSet(true)
      console.log('Error Logging Out')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}

export { login, logout }
