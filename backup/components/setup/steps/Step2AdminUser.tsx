import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../common/Input';
import { colors, spacing, typography } from '../../styles/theme';

interface Step2AdminUserProps {
  data: TourSetupData;
  onDataChange: (data: TourSetupData) => void;
}

const Step2AdminUser: React.FC<Step2AdminUserProps> = ({ data, onDataChange }) => {
  const [name, setName] = useState(data.adminUser.name);
  const [email, setEmail] = useState(data.adminUser.email);
  const [phone, setPhone] = useState(data.adminUser.phone);

  const handleDataChange = () => {
    onDataChange({
      ...data,
      adminUser: {
        name,
        email,
        phone,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Admin User Information</Text>
      <Input
        label="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter your full name"
        autoCapitalize="words"
      />
      <Input
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Enter email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screen.horizontal,
  },
  sectionTitle: {
    ...typography.styles.h4,
    color: colors.text,
    marginBottom: spacing.component.marginMD,
  },
  input: {
    marginBottom: spacing.component.marginMD,
  },
});

export default Step2AdminUser;
