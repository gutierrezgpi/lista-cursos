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
  clearAll
}