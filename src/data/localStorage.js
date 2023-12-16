import AsyncStorage from '@react-native-async-storage/async-storage';

const insert = async (course) => {
  const data = await getData()
  data.courses.push(course)
  await storeData(data)
}

const list = async () => {
  const { courses } = await getData()
  return courses || []
}

const remove = async (id) => {
  const data = await getData()
  data.courses = data.courses.filter((course) => course.id != id)
  await storeData(data)
}

const update = async (course) => {

  data = await getData()
  data.courses = data.courses.map((t) => (t.id == course.id ? course : t))
  await storeData(data)

}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    throw e
  }
}

const getData = async () => {
  try {
    const empty = { courses: [] }
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : empty;

  } catch (e) {
    throw e
  }
}

const clearAll = async () => {
  
  try {
    await AsyncStorage.clear()
  } catch(e) {
    throw e
  }

  console.log('Clear Done.')
}

export default {
  insert,
  list,
  remove,
  update,
  clearAll
}