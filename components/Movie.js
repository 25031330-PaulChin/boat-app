import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Movie({ title, year, icon_name, poster }) {
    return (
        <View style={styles.movieContainer}>
            <Image source={poster} style={styles.posterImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.titleText}>{title} ({year})</Text>
                <FontAwesome6 name={icon_name} size={24} color="black" style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        width: '90%',
    },
    posterImage: {
        width: 80,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 4,
    },
    detailsContainer: {
        marginLeft: 15,
        flex: 1,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    icon: {
        marginTop: 5,
    },
});