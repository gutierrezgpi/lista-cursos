import Storage from './localStorage'

export const insert = async (course) => {
  try {
    await Storage.insert(course)
  } catch (error) {
    console.error(error)
    throw new Error('You can not save the new task')
  }
}

export const list = async () => {
  try {
    const courses = await Storage.list()
    console.log("On courseRep:")
    console.log(courses)
    return courses
  } catch (error) {
    throw new Error('You can not get the list of tasks')
  }
}
