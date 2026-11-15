import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Boat from "./components/Boat";

export default function Exercise8() {
    return (
        <View style={styles.mainContainer}>
            {/* Enhanced Header Banner */}
            <View style={styles.header}>
                <Text style={styles.headerText}>🛥️ GETABOAT - FOR SALE</Text>
            </View>

            {/* Scrollable Boat List with Card Wrapper */}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
                <View style={styles.cardContainer}>
                    <Boat
                        name='Sea Ray 500 Sundancer'
                        description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                        icon_name='sailboat'
                        picture={require('./img/sea_ray.jpg')}
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Boat
                        name='Four Winns Horizon 180'
                        description='A sporty look and refined details truly set the Horizon 180 above all others.'
                        icon_name='sailboat'
                        picture={require('./img/four_winns.jpg')}
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Boat
                        name='Flipper 640 ST'
                        description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                        icon_name='sailboat'
                        picture={require('./img/flipper.jpg')}
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Boat
                        name='Princess V48'
                        description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                        icon_name='sailboat'
                        picture={require('./img/princess.jpg')}
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Boat
                        name='Bayliner 175 Bowrider'
                        description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                        icon_name='sailboat'
                        picture={require('./img/bayliner.jpg')}
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Boat
                        name='Fairline Targa 47'
                        description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                        icon_name='sailboat'
                        picture={require('./img/fairline.jpg')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#eceff1',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1a252f',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 1.2,
    },
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    cardContainer: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});