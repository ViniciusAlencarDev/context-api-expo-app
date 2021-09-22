import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Context from '../../contexts/myContext';

export default function About({ navigation }) {

    const MyContext = useContext(Context)

    return(
        <View>
            <Text>Token: {MyContext.tokenUser}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );

}
