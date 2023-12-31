import { useState } from "react"
import { Image, Pressable, TextInput, View } from "react-native"
import { styles } from "./Form.styles"

export const Form = ({ onAddCourse }) => {

    const [newCourse, setNewCourse] = useState('')

    const addCourse = () => {
        try {
            
            const typedText = newCourse.trim()
            if (typedText.length === 0) return

            const course = {
                id: new Date().getTime(),
                name: typedText,
                platform: null,
                progress: null,
                classes: null
            }

            onAddCourse(course)

            setNewCourse('')

        } catch (e) {
            console.error(e)
        }
        
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(typed) => setNewCourse(typed)}
                value={newCourse}
                placeholder="Nome do curso"
                placeholderTextColor={"gray"}
            />
            <Pressable style={styles.button} onPress={() => {addCourse()}}>
                <Image
                    source={require('../../../assets/send.png')}
                    style={styles.buttonImage}
                    resizeMode="contain"
                />
            </Pressable>
        </View>
    )

}