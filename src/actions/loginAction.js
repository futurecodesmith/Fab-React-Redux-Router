export const handleSubmit = (name, password) => {
  return {
    type: 'HANDLE_SUBMIT',
    name,
    password
  }
}

export const handleChange = (e) => {
  return {
    type: 'HANDLE_CHANGE',
    e
  }
}