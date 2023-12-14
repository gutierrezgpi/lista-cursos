import { Text, View } from "react-native"
import { Styles } from "./Header.styles"

export const Header = () => {

    return(

        <View style={ Styles.container }>
            <Text style={ Styles.titulo }>Cursos</Text>
        </View>
    
    )
    
}
