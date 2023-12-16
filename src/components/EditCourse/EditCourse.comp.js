import { Image, Pressable, Text, TextInput, View } from "react-native"
import { Styles } from "./EditCourse.styles"
import { useState } from "react"

export const EditCourse = ({ course, isOpenCourse, onRemoveCourse, onUpdateCourse }) => {

    const [name, setName] = useState(course.name)
    const [platform, setPlatform] = useState(course.platform)
    const [progress, setProgress] = useState(course.progress)
    const [classes, setClasses] = useState(course.classes)

    const returnHome = () => {
        isOpenCourse(false)
    }

    const updateCourse = () => {

        updatedCourse = course
        updatedCourse.name = name
        updatedCourse.platform = platform
        updatedCourse.progress = progress
        updatedCourse.classes = classes

        console.log("Curso: ")
        console.log(course)
        console.log("Curso atualizado: ")
        console.log(updatedCourse)

        onUpdateCourse(updatedCourse)
        isOpenCourse(false)

    }

    const removeCourse = () => {

        onRemoveCourse(course.id)
        isOpenCourse(false)

    }

    return (

        <View style={ Styles.container }>
            <Pressable style={Styles.buttonReturn} onPress={() => {returnHome()}}>
                <Image
                    source={require('../../../assets/back.png')}
                    style={Styles.buttonImage}
                    resizeMode="contain"
                />
            </Pressable>
            <View style={ Styles.inputContainer }>
                <Text style={ Styles.label }>Curso: </Text>
                <TextInput
                    style={ Styles.input }
                    onChangeText={(typed) => setName(typed)}
                    value={ name }
                    placeholder="Nome do curso"
                    placeholderTextColor={"gray"}
                />
            </View>
            <View style={ Styles.inputContainer }>
                <Text style={ Styles.label }>Plataforma: </Text>
                <TextInput
                    style={ Styles.input }
                    onChangeText={(typed) => setPlatform(typed)}
                    value={ platform }
                />
            </View>
            <View style={ Styles.inputContainer }>
                <Text style={ Styles.label }>Progresso: </Text>
                <TextInput
                    style={ Styles.input }
                    onChangeText={(typed) => setProgress(typed)}
                    value={ progress }
                    keyboardType="numeric"
                />
            </View>
            <View style={ Styles.inputContainer }>
                <Text style={ Styles.label }>Quantidade de aulas: </Text>
                <TextInput
                    style={ Styles.input }
                    onChangeText={(typed) => setClasses(typed)}
                    value={ classes }
                    keyboardType="numeric"
                />
            </View>
            <View style={Styles.buttonContainer}>
                <Pressable style={Styles.buttonRemove} onPress={() => {removeCourse()}}>
                    <Image
                        source={require('../../../assets/delete.png')}
                        style={Styles.buttonImage}
                        resizeMode="contain"
                    />
                </Pressable>
                <Pressable style={Styles.buttonUpdate} onPress={() => {updateCourse()}}>
                    <Image
                        source={require('../../../assets/next.png')}
                        style={Styles.buttonImage}
                        resizeMode="contain"
                    />
                </Pressable>
            </View>
            

        </View>
        
    )

}