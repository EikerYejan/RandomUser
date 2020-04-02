export type UserObject = {
  gender: string
  email: string
  name: {
    title: string
    first: string
    last: string
  }
  picture: {
    large: string
  }
  cell: string
  location: {
    street: {
      number: string
      name: string
    }
    city: string
    state: string
    country: string
    postcode: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }
}
