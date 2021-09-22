import React, { useState, useContext } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

import Context from '../../contexts/myContext'

export default function Home({ navigation }) {

    const MyContext = useContext(Context)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [userToken, setUserToken] = useState('')
    // cadastro de novos dados e maneiras de dados e fromas de dados e podem gerar mais dados
    // Como os dados podem gerar mais dados e inputs

    async function handlerLogin() {
        // alert('Entrando');
        MyContext.setTokenUser('aasdasd7as89d7as98d7a89sd7a9s8d7')
        navigation.navigate('logged')
    }

    return(
        <View>
            <Text>LOGIN</Text>
            <TextInput value={username} onChangeText={text => setUsername(text)} placeholder="Usuário"/>
            <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry placeholder="senha"/>
            <TouchableOpacity onPress={handlerLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    );

}
