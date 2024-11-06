import {StyleSheet, Text, View} from "react-native";
import {Task} from "../../../types";
import {colors} from "../../styles/colors";
import {IconButton} from "react-native-paper";

export const TaskUnit = (
    {
        task,
        onDelete
    }: {
        task: Task,
        onDelete: () => void
    }
) => {

    return <>
        <View style={s.TaskUnit}>
            <View style={s.iconContainer}>
                <View
                    style={s.icon}
                />
            </View>
            <View style={s.taskInfoContainer}>
                <Text style={s.taskName}>{task.name}</Text>
                <Text style={s.taskDescription}>{task.description}</Text>
            </View>
            <View style={s.deleteButtonContainer}>
                <IconButton
                    icon='close'
                    containerColor={colors.red}
                    iconColor={'white'}
                    size={22}
                    onPress={onDelete}
                />
            </View>
        </View>
    </>
}

const s = StyleSheet.create({
    TaskUnit: {
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        paddingVertical: 10
    },
    iconContainer: {
        paddingHorizontal: 10
    },
    icon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: colors.green,
    },
    taskInfoContainer: {
        flex: 1
    },
    taskName: {
        fontSize: 25,
        marginBottom: 5,
    },
    taskDescription: {
        fontSize: 16,
    },
    deleteButtonContainer: {
        paddingEnd: 5,
        justifyContent: 'center',
    }
})