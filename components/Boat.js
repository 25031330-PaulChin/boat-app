import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Boat({ name, description, icon_name, picture }) {
    return (
        <View style={styles.boatCard}>
            <View style={styles.titleContainer}>
                <FontAwesome6 name={icon_name} size={18} color="#333" style={styles.icon} />
                <Text style={styles.titleText}>{name}</Text>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
            <Image source={picture} style={styles.posterImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    boatCard: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        marginVertical: 10,
        borderRadius: 6,
        width: '90%',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        marginRight: 8,
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222',
        letterSpacing: 0.5,
    },
    descriptionText: {
        fontSize: 13,
        color: '#555',
        marginBottom: 12,
        lineHeight: 18,
    },
    posterImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 4,
    },
});