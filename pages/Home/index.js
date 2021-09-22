import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Context from '../../contexts/myContext';

export default function Home({ navigation }) {

    const MyContext = useContext(Context)

    async function handlerLogout() {
        // alert('Saindo');
        MyContext.setTokenUser('')
        navigation.navigate('login')
    }

    return(
        <View>
            <Text>Token: {MyContext.tokenUser}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('about')}>
                <Text>ir para About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlerLogout}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );

}
