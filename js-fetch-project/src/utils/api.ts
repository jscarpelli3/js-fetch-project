const BASE_URL: string = 'https://frontend-take-home-service.fetch.com'


const login = async (
  formData: object,
  ): Promise<void> => {
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
      console.log('Logged in!')
    } else {
      console.log('Error Logging In')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}

const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    })

    if (response.ok) {

      console.log('Logged Out')
    } else {
      console.log('Error Logging Out')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}

const search = async (
  breeds: string,
  zipCodes: string,
  ageMin: number,
  ageMax: number,
  sort: 'breeds' | 'zipCodes' |   'ageMin' | 'ageMax',
  sortFormat: 'asc' | 'desc'
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/dogs/search?breeds=${breeds}&zipCodes=${zipCodes}&ageMax=${ageMax}&size=16&sort=${sort}[${sortFormat}]`, {
      method: 'Get'
    })

    if (response.ok) {
      const data = await response.json();
      console.log('Data Successfully Fetched:', data);
      return data;
    } else {
      console.log('Error Logging Out')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}



export { login, logout, search }
