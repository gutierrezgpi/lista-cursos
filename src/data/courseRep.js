import Storage from './localStorage'

export const insert = async (course) => {
  try {
    await Storage.insert(course)
  } catch (error) {
    throw error
  }
}

export const list = async () => {
  try {
    const courses = await Storage.list()
    console.log("On courseRep:")
    console.log(courses)
    return courses
  } catch (error) {
    throw error
  }
}

export const remove = async (id) => {
  try {
    await Storage.remove(id)
  } catch (error) {
    throw error
  }
}

export const update = async (course) => {
  try {
    await Storage.update(course)
  } catch (error) {
    throw error
  }
}