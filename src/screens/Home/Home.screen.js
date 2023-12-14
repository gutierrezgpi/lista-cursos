import { Alert, SafeAreaView } from "react-native"

import { Styles } from "./Home.styles"
import { CourseList } from "../../components/CourseList/CourseList.comp"
import { Form } from "../../components/Form/Form.comp";
import { Header } from "../../components/Header/Header.comp";
import { useEffect, useState } from "react";

import { list } from "../../data/courseRep"

export const Home = () => {

    const [courses, setCourses] = useState([])

    useEffect( () => {
      getCourses()
    }, [])

    const getCourses = async () => {
      try {
        const courses = await list()
        console.log('On home.screen:')
        console.log(courses)
        setCourses(courses)
      } catch (e) {
        console.error(e)
      }
      
    }

    const addCourse = (course) => {
      try {
        const newCourses = [...courses, course]
        setCourses(newCourses)
      } catch (error) {
        return Alert.alert('Erro', 'Não foi possível registrar a tarefa.')
      }
    }

    return(
        <SafeAreaView style={ Styles.container }>

            <Header />

            <CourseList 
              courses={ courses }
            />

            <Form
              onAddCourse={ addCourse }
            />
            
        </SafeAreaView>
    )
}
