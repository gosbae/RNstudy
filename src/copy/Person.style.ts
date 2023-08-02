import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    view: { flexDirection: 'row', backgroundColor: 'skyblue', padding: 5 },
    leftView: { paddig: 5 },
    avatar: { borderColor: 'blue', borderWidth: 2 },
    rightView: { flex: 1, padding: 5, marginRight: 10 },
    name: { marginRight: 5, fontSize: 22, fontWeight: '500' },
    email: { textDecorationLine: 'underline', color: 'blue', textDecorationColor: 'blue' },
    dateView: { flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginTop: 5 },
    text: { fontSize: 16 },
    comments: { marginTop: 10, fontSize: 16 },
    image: { height: 150, marginTop: 15 },
    countsView: { flexDirection: 'row', padding: 3, justifyContent: 'space-around' },
    touchableIcon: { flexDirection: 'row', alignItems: 'center', padding: 5 },
    iconText: { color: 'purple', marginLeft: 3 }
});