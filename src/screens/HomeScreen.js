import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const habits = [
  {
    id: '1',
    name: 'Morning Run',
    streak: 5,
    icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
    color: '#4CAF50',
  },
  {
    id: '2',
    name: 'Meditation',
    streak: 12,
    icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
    color: '#2196F3',
  },
  {
    id: '3',
    name: 'Reading',
    streak: 8,
    icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
    color: '#FF9800',
  },
];

export default function HomeScreen({ navigation }) {
  const [habitsList, setHabitsList] = useState(habits);

  const renderHabitItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('HabitDetail', { habit: item })}
      style={tw`flex-row items-center p-4 mb-3 bg-white rounded-xl shadow`}
    >
      <View style={tw`w-12 h-12 rounded-full items-center justify-center bg-[${item.color}]/10`}>
        <Image
          source={{ uri: item.icon }}
          style={tw`w-8 h-8`}
          resizeMode="contain"
        />
      </View>
      <View style={tw`ml-4 flex-1`}>
        <Text style={tw`text-lg font-semibold text-gray-800`}>{item.name}</Text>
        <Text style={tw`text-sm text-gray-500`}>{item.streak} day streak</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 bg-gray-50 p-5`}>
      <View style={tw`flex-row justify-between items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>My Habits</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddHabit')}
          style={tw`bg-blue-500 p-3 rounded-full`}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={habitsList}
        renderItem={renderHabitItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`pb-5`}
      />
    </View>
  );
}