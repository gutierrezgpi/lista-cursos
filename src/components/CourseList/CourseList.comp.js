import { FlatList, View } from "react-native"
import { CourseItem } from "../CourseItem/CourseItem.comp"
import { Styles } from "./CourseList.styles"

export const CourseList = ({ courses, openCourse }) => {

    onOpenCourse = (course) => {
        console.log(`Recebido: ${course.id}, ${course.name}`)
        openCourse(course)
    }

    return (
        <View style={Styles.container}>
            <FlatList
                style={Styles.list}
                data={courses}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CourseItem course={item} onOpenCourseItem={onOpenCourse} />
                )}
            />
        </View>
    );

}
