import { Modal, SafeAreaView } from "react-native"

import { Styles } from "./Home.styles"
import { CourseList } from "../../components/CourseList/CourseList.comp"
import { Form } from "../../components/Form/Form.comp";
import { Header } from "../../components/Header/Header.comp";
import { useEffect, useState } from "react";

import { list, insert, remove, update } from "../../data/courseRep"
import { EditCourse } from "../../components/EditCourse/EditCourse.comp";
import React from "react";

export const Home = () => {

    const [courses, setCourses] = useState([])

    const [isOpenCourse, setIsOpenCourse] = useState(false)

    const [editedCourse, setEditedCourse] = useState(null)

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

    const addCourse = async (course) => {

      await insert(course)
      const newCourses = [...courses, course]
      setCourses(newCourses)

    }

    const openCourse = (course) => {
      setIsOpenCourse(true)
      setEditedCourse(course)
    }

    const removeCourse = async (id) => {

      await remove(id)
      const newCourses = [...courses].filter((course) => course.id != id)
      setCourses(newCourses)

    }

    const updateCourse = async (course) => {
      
      await update(course)
      
    }

    return(
        <SafeAreaView style={ Styles.container }>

            <Header />

            <CourseList
              courses={ courses }
              openCourse={ openCourse }
            />

            <Form
              onAddCourse={ addCourse }
            />

            <Modal 
              animationType="slide"
              visible={isOpenCourse}
              onRequestClose={() => {
                setIsOpenCourse(!isOpenCourse);
              }}
            >
              <EditCourse
                course={editedCourse}
                isOpenCourse={setIsOpenCourse}
                onRemoveCourse={removeCourse}
                onUpdateCourse={updateCourse}
              />
            </Modal>

        </SafeAreaView>
    )
}
