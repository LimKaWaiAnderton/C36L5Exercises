import { StyleSheet, Text, View, SectionList } from 'react-native';

// 
// ==============================================================================================
// Exercise 1

//const datasource = [
//   { key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, 
//   { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, 
//   { key: 'm' }, { key: 'n' }, { key: 'o' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, 
//   { key: 's' }, { key: 't' }, { key: 'u' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, 
//   { key: 'y' }, { key: 'z' }
// ];
// const RenderItem = ({ item }) => {
//   return (
//     <View style={styles.opacityStyle}>
//       <Text style={styles.textStyle}>{item.key}</Text>
//     </View>
//   );
// }

// function App() {
//   return (
//     <View style={{ marginTop: 50 }}>
//       <FlatList data={datasource} renderItem={RenderItem} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },

//   textStyle: {
//     margin: 10,
//     fontSize: 15,
//     textAlign: 'left'
//   },
// });
// ==============================================================================================
// Exercise 2

const datasource = [
  {
    data: [
      { key: 'a' }, { key: 'e' }, { key: 'i' }, { key: 'o' }, { key: 'u' }
    ],
    title: 'Vowels', bgcolor: 'skyblue'
  },
  {
    data: [
      { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'f' }, { key: 'g' },
      { key: 'h' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' },
      { key: 'n' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' },
      { key: 't' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' },
      { key: 'z' }
    ],
    title: 'Consonants', bgcolor: 'khaki'
  }
];

const RenderItem = ({ item }) => {
  return (
    <View style={styles.opacityStyle}>
      <Text style={styles.textStyle}>{item.key}</Text>
    </View>
  );
}

function App() {
  return (
    <View style={{ marginTop: 50 }}>
      <SectionList sections={datasource} renderItem={RenderItem}
        renderSectionHeader={({ section: { title, bgcolor } }) => (
          <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
  },

  textStyle: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left'
  },

  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
export default App;
