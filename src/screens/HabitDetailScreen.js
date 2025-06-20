import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function HabitDetailScreen({ route, navigation }) {
  const { habit } = route.params;
  const [completedDays, setCompletedDays] = useState([1, 3, 5]); // Example completed days

  const toggleDay = (dayIndex) => {
    if (completedDays.includes(dayIndex)) {
      setCompletedDays(completedDays.filter((day) => day !== dayIndex));
    } else {
      setCompletedDays([...completedDays, dayIndex]);
    }
  };

  return (
    <ScrollView style={tw`flex-1 bg-gray-50 p-5`}>
      <View style={tw`flex-row items-center mb-6`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-4`}>
          <Ionicons name="arrow-back" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold text-gray-900`}>{habit.name}</Text>
      </View>

      <View style={tw`bg-white rounded-xl p-6 mb-6 shadow`}>
        <View style={tw`flex-row items-center mb-4`}>
          <View style={tw`w-16 h-16 rounded-full items-center justify-center bg-[${habit.color}]/10`}>
            <Image
              source={{ uri: habit.icon }}
              style={tw`w-12 h-12`}
              resizeMode="contain"
            />
          </View>
          <View style={tw`ml-4`}>
            <Text style={tw`text-2xl font-bold text-gray-900`}>{habit.streak} days</Text>
            <Text style={tw`text-gray-500`}>Current streak</Text>
          </View>
        </View>

        <Text style={tw`text-lg font-semibold text-gray-800 mb-3`}>This Week</Text>
        <View style={tw`flex-row justify-between`}>
          {weekDays.map((day, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleDay(index)}
              style={tw`items-center`}
            >
              <View
                style={[
                  tw`w-12 h-12 rounded-full items-center justify-center mb-1`,
                  completedDays.includes(index)
                    ? tw`bg-[${habit.color}]/20`
                    : tw`bg-gray-100`,
                ]}
              >
                <Ionicons
                  name={completedDays.includes(index) ? 'checkmark' : 'add'}
                  size={20}
                  color={completedDays.includes(index) ? habit.color : '#9CA3AF'}
                />
              </View>
              <Text style={tw`text-sm text-gray-500`}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={tw`bg-white rounded-xl p-6 shadow`}>
        <Text style={tw`text-lg font-semibold text-gray-800 mb-3`}>Stats</Text>
        <View style={tw`flex-row justify-between mb-4`}>
          <View style={tw`items-center`}>
            <Text style={tw`text-2xl font-bold text-gray-900`}>75%</Text>
            <Text style={tw`text-gray-500`}>Completion</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-2xl font-bold text-gray-900`}>12</Text>
            <Text style={tw`text-gray-500`}>Total days</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-2xl font-bold text-gray-900`}>5</Text>
            <Text style={tw`text-gray-500`}>Best streak</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}