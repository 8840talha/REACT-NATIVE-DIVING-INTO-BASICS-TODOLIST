import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';

const App = () => {
  const [goals, setGoals] = useState('');
  const [show, setShow] = useState(false);
  const [goalsArr, setGoalsArr] = useState([
    {goal: 'Learn Tailwind Css', key: '1'},
    {goal: 'Learn Wnd Css', key: '2'},
    {goal: 'Learn Tail Css', key: '3'},
  ]);

  const AddGoal = () => {
    setGoalsArr((prevGoals) => [
      ...prevGoals,
      {goal: goals, key: Math.random().toString()},
    ]);
    setShow(!show);
    setGoals('');
  };
  const Delete = (key) => {
    console.log(goals);
    console.log(goalsArr);
    setGoalsArr((goalsArr) =>
      [...goalsArr].filter((prevGoal) => prevGoal.key !== key),
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Modal visible={show} animationType="slide">
          <View style={styles.modal}>
            <TextInput
              onChangeText={(val) => {
                setGoals(val);
              }}
              value={goals}
              placeholder="Internship Goals"
              style={styles.inputBox}
            />
            <View style={styles.btnView}>
              <Button  title="Add" onPress={AddGoal} />
              <Button
                title="Cancel"
                onPress={() => {
                  setShow(!show);
                }}
              />
            </View>
          </View>
        </Modal>
        <Button
          title="Add"
          onPress={() => {
            setShow(!show);
          }}
        />
        <FlatList
          visible={false}
          data={goalsArr}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => Delete(item.key)}>
                <View style={styles.textView}>
                  <Text>{item.goal}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  inputBoxContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textView: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  btnView: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%'
  },
  btn:{
    margin:30
  }
});

export default App;
