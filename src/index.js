import React, {useState, useEffect} from 'react';
import api from './services/api';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7519c1',
  },
  project: {
    color: '#FFF',
    fontSize: 30,
  },
});
