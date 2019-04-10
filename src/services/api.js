import { users, departments } from '../mock'

export const getUsers = async () => {
  return new Promise(resolve => setTimeout(() => {
    resolve(users)
  }, 1500))
}

export const getDepartments = async () => {
  return new Promise(resolve => setTimeout(() => {
    resolve(departments)
  }, 1500))
}