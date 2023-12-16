import { Pressable, Text, View } from "react-native"
import { Styles } from "./CourseItem.styles"
import { useEffect, useState } from "react"

export const CourseItem = ({ course, onOpenCourseItem }) => {

    const [platform, setPlatform] = useState('')

    const [progress, setProgress] = useState('')

    useEffect(() => {
        if(course.platform !== undefined && course.platform !== null) {
            setPlatform(`Plataforma: ${course.platform} | `)
        }
        if(course.progress !== undefined && course.progress !== null) {
            setProgress(`Progresso: ${course.progress} / ${course.classes}`)
        }
    })

    openCourseItem = (course) => {
        console.log(`Pressed! ${course.id}, ${course.name}, ${course.platform}`);
        onOpenCourseItem(course)
    };

    return(
        <View style={Styles.container}>
            <Pressable onPress={() => openCourseItem(course)}>
                <Text style={Styles.data}>{ course.name }</Text>
                <Text>
                    <Text>{platform}</Text>
                    <Text>{progress}</Text>
                </Text>
                
            </Pressable>
        </View>
    )

}
