const BASE_URL: string = 'https://frontend-take-home-service.fetch.com'


const login = async (
  formData: object,
  ): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log('Logged in!', response);
      const token = response.headers.getSetCookie('fetch-access-token');
      document.cookie = token;
      console.log(response)
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
      credentials: 'include',
    })

    if (response.ok) {
      console.log('Logged Out', response)
    } else {
      console.log('Error Logging Out')
      console.log(response)
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
    // const token: string | null = sessionStorage.getItem('fetch-access-token') as string;

  const cookies: string | null = document.cookie;
  const token: string | undefined = cookies
  .split(';')
  .map(cookie => cookie.trim())
  .find(cookie => cookie.startsWith('fetch-access-token='))
  ?.split('=')[1];


    let url = `${BASE_URL}/dogs/search?size=16`;

    if (breeds) {
      url += `&breeds=${breeds}`;
    }
    if (zipCodes) {
      url += `&zipCodes=${zipCodes}`;
    }
    if (ageMin) {
      url += `&ageMin=${ageMin}`;
    }
    if (ageMax) {
      url += `&ageMax=${ageMax}`;
    }
    if (sort) {
      url += `&sort=${sort}[${sortFormat}]`;
    }

    const response = await fetch(url, {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include'
    })

    if (response.ok) {
      const data = await response.json();
      console.log('Data Successfully Fetched:', data);
      return data;
    } else {
      console.log(response, 'Could Not Get Data')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}


const retrieveDogs = async (
  dogIds: string[]
): Promise<void> => {
  try {
  const cookies: string | null = document.cookie;
  const token: string | undefined = cookies
  .split(';')
  .map(cookie => cookie.trim())
  .find(cookie => cookie.startsWith('fetch-access-token='))
  ?.split('=')[1];

    const response = await fetch(`${BASE_URL}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(dogIds)
    })
    if (response.ok) {
      const data = await response.json();
      console.log('Dogs Successfully Fetched:', data);
      return data;
    } else {
      console.log(response, 'Could Not Get Data')
    }
  } catch (error) {
    console.log('Network Error', error)
  }
}


export { login, logout, search, retrieveDogs }
