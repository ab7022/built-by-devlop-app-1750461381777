import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const colors = [
  '#4CAF50',
  '#2196F3',
  '#FF9800',
  '#9C27B0',
  '#F44336',
  '#607D8B',
];

const icons = [
  'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
  'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
  'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
  'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
  'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
  'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
];

export default function AddHabitScreen({ navigation }) {
  const [habitName, setHabitName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);

  const handleSave = () => {
    // In a real app, you would save the habit to your state or database
    navigation.goBack();
  };

  return (
    <ScrollView style={tw`flex-1 bg-gray-50 p-5`}>
      <View style={tw`flex-row items-center mb-6`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-4`}>
          <Ionicons name="arrow-back" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold text-gray-900`}>New Habit</Text>
      </View>

      <View style={tw`bg-white rounded-xl p-6 mb-6 shadow`}>
        <Text style={tw`text-lg font-semibold text-gray-800 mb-3`}>Habit Name</Text>
        <TextInput
          placeholder="e.g. Morning Run"
          value={habitName}
          onChangeText={setHabitName}
          style={tw`border border-gray-200 rounded-lg p-3 text-gray-800`}
        />
      </View>

      <View style={tw`bg-white rounded-xl p-6 mb-6 shadow`}>
        <Text style={tw`text-lg font-semibold text-gray-800 mb-3`}>Color</Text>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColor(color)}
              style={[
                tw`w-12 h-12 rounded-full mb-3 items-center justify-center`,
                { backgroundColor: `${color}20` },
              ]}
            >
              {selectedColor === color && (
                <Ionicons name="checkmark" size={24} color={color} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={tw`bg-white rounded-xl p-6 mb-6 shadow`}>
        <Text style={tw`text-lg font-semibold text-gray-800 mb-3`}>Icon</Text>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {icons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIcon(icon)}
              style={[
                tw`w-12 h-12 rounded-full mb-3 items-center justify-center`,
                selectedIcon === icon ? tw`bg-[${selectedColor}]/20` : tw`bg-gray-100`,
              ]}
            >
              <Image
                source={{ uri: icon }}
                style={tw`w-8 h-8`}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSave}
        style={tw`bg-blue-500 rounded-lg p-4 items-center justify-center shadow`}
      >
        <Text style={tw`text-white font-bold text-lg`}>Save Habit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}