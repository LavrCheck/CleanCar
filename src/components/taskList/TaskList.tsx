import {FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {StoreState, Task} from "../../../types";
import {TaskUnit} from "./TaskUnit";
import {actions} from "../../../store";

export const TaskList = () => {

    const tasks: Task[] = useSelector((state: StoreState) => state.tasks)

    const dispatch = useDispatch()

    return <>
        <FlatList
            data={tasks}
            keyExtractor={(item: Task) => item.id}
            renderItem={({item}) => (
                <TaskUnit
                    task={item}
                    onDelete={() => dispatch(actions.deleteTask(item.id))}
                />
            )}
        />

    </>
}
