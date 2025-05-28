import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { colors, spacing, typography } from '../../styles/theme';

interface Step6TeamInvitesProps {
  data: TourSetupData;
  onDataChange: (data: TourSetupData) => void;
}

interface TeamMember {
  email: string;
  role: string;
  permissions: string[];
}

const Step6TeamInvites: React.FC<Step6TeamInvitesProps> = ({ data, onDataChange }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('');

  const handleAddMember = () => {
    if (newMemberEmail && newMemberRole) {
      const newMember: TeamMember = {
        email: newMemberEmail,
        role: newMemberRole,
        permissions: ['view_schedule', 'view_financials'],
      };
      setTeamMembers([...teamMembers, newMember]);
      setNewMemberEmail('');
      setNewMemberRole('');
    }
  };

  const handleRemoveMember = (email: string) => {
    setTeamMembers(teamMembers.filter(member => member.email !== email));
  };

  const handleDataChange = () => {
    onDataChange({
      ...data,
      teamMembers,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Team Member Invites</Text>
      
      <View style={styles.inputContainer}>
        <Input
          label="Email Address"
          value={newMemberEmail}
          onChangeText={setNewMemberEmail}
          style={styles.input}
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Role"
          value={newMemberRole}
          onChangeText={setNewMemberRole}
          style={styles.input}
          placeholder="Enter role"
          autoCapitalize="words"
        />
        <Button
          title="Add Team Member"
          onPress={handleAddMember}
          style={styles.button}
        />
      </View>

      {teamMembers.length > 0 && (
        <View style={styles.membersList}>
          <Text style={styles.listTitle}>Current Team Members</Text>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.memberItem}>
              <View style={styles.memberDetails}>
                <Text style={styles.memberEmail}>{member.email}</Text>
                <Text style={styles.memberRole}>{member.role}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveMember(member.email)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
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
  inputContainer: {
    marginBottom: spacing.component.marginLG,
  },
  input: {
    marginBottom: spacing.component.marginMD,
  },
  button: {
    marginTop: spacing.component.marginXS,
  },
  membersList: {
    marginTop: spacing.component.marginLG,
  },
  listTitle: {
    ...typography.styles.body1,
    color: colors.text,
    marginBottom: spacing.component.marginXS,
  },
  memberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.component.paddingMD,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  memberDetails: {
    flex: 1,
  },
  memberEmail: {
    ...typography.styles.body1,
    color: colors.text,
  },
  memberRole: {
    ...typography.styles.caption,
    color: colors.textSecondary,
    marginTop: spacing.component.marginXS,
  },
  removeButton: {
    padding: spacing.component.paddingXS,
  },
  removeButtonText: {
    ...typography.styles.body1,
    color: colors.error,
  },
});

export default Step6TeamInvites;
