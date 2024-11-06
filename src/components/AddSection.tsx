import {StyleSheet, TextInput, View, Keyboard} from "react-native";
import {MyInput} from "./MyInput";
import {Button} from "react-native-paper";
import {colors} from "../styles/colors";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../store";

export const AddSection = () => {

    const [name, setName] = useState<string>('')
    const nameInputRef = useRef<TextInput>(null)
    const [description, setDescription] = useState<string>('')
    const descriptionInputRef = useRef<TextInput | null>(null)

    const dispatch = useDispatch()

    const onSubmit = (): void => {
        if (name === '') {
            nameInputRef.current?.focus()
            return
        }
        if (description === '') {
            descriptionInputRef.current?.focus()
            return
        }

        dispatch(actions.addTask({name, description}))
        setName('')
        setDescription('')
        Keyboard.dismiss()
    }

    return <>
        <View style={s.AddSection}>
            <View style={s.inputContainer}>
                <MyInput
                    label={'Name'}
                    value={name}
                    onChangeText={setName}
                    returnKeyType={'next'}
                    onSubmitEditing={() => descriptionInputRef.current?.focus()}
                    ref={nameInputRef}
                />
                <MyInput
                    label={'Descr'}
                    value={description}
                    onChangeText={setDescription}
                    ref={descriptionInputRef}
                />
            </View>
            <View style={s.addButtonContainer}>
                <Button
                    mode={'contained'}
                    buttonColor={colors.blue}
                    onPress={onSubmit}
                    labelStyle={{fontSize: 20}}
                    textColor={'white'}
                    contentStyle={{
                        minHeight: 50,
                    }}
                >Add</Button>
            </View>
        </View>
    </>
}

const s = StyleSheet.create({
    AddSection: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
    },
    addButtonContainer: {
        marginStart: 15
    }
})