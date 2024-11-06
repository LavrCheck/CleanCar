import {ReturnKeyTypeOptions, StyleSheet, Text, TextInput, View} from "react-native";
import React, {ForwardedRef} from "react";


export const MyInput = React.forwardRef(
    (
        {
            label,
            value,
            onChangeText,
            returnKeyType = 'done',
            onSubmitEditing,
        }: {
            label: string;
            value: string;
            onChangeText: (value: string) => void;
            returnKeyType?: ReturnKeyTypeOptions;
            onSubmitEditing?: () => void;
        },
        ref: ForwardedRef<TextInput>
    ) => {
        return <>
            <View style={s.MyInput}>
                <Text style={s.label}>{label}:</Text>
                <TextInput
                    style={s.input}
                    value={value}
                    onChangeText={onChangeText}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={onSubmitEditing}
                    ref={ref}
                    cursorColor={'black'}
                />
            </View>
        </>
    }
)

const s = StyleSheet.create({
    MyInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        fontWeight: '500',
    },
    input: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'transparent',
        borderColor: 'grey',
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginStart: 10,
        marginVertical: 10,
        fontSize: 18
    }
})