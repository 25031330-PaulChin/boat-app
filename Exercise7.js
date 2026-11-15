import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Exercise8() {
    return (
        <View style={styles.mainContainer}>
            {/* App Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>GetABoat - For Sale</Text>
            </View>

            {/* Scrollable Boat List */}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>

                {/* Boat Card 1 */}
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boatTitle}>⛵ Sea Ray 500 Sundancer</Text>
                    </View>
                    <Text style={styles.description}>
                        Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.
                    </Text>
                    <Image
                        source={require('./img/sea_ray.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                {/* Boat Card 2 */}
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boatTitle}>⛵ Four Winns Horizon 180</Text>
                    </View>
                    <Text style={styles.description}>
                        A sporty look and refined details truly set the Horizon 180 above all others.
                    </Text>
                    <Image
                        source={require('./img/four_winns.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                {/* Boat Card 3 */}
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boatTitle}>⛵ Flipper 640 ST</Text>
                    </View>
                    <Text style={styles.description}>
                        A modern take on the classic, traditional hardtop and perfect for a family picnic.
                    </Text>
                    <Image
                        source={require('./img/flipper.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                {/* Boat Card 4 */}
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boatTitle}>⛵ Princess V48</Text>
                    </View>
                    <Text style={styles.description}>
                        There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.
                    </Text>
                    <Image
                        source={require('./img/princess.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                {/* Boat Card 5 */}
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boatTitle}>⛵ Bayliner 175 Bowrider</Text>
                    </View>
                    <Text style={styles.description}>
                        Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.
                    </Text>
                    <Image
                        source={require('./img/bayliner.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                {/* Boat Card 6 */}
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boatTitle}>⛵ Fairline Targa 47</Text>
                    </View>
                    <Text style={styles.description}>
                        Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.
                    </Text>
                    <Image
                        source={require('./img/fairline.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f6f8',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        letterSpacing: 0.5,
    },
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    cardContainer: {
        marginBottom: 25,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dcdde1',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
    },
    titleContainer: {
        backgroundColor: '#34495e',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    boatTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 13,
        color: '#57606f',
        marginHorizontal: 15,
        marginVertical: 12,
        lineHeight: 18,
    },
    image: {
        width: '100%',
        height: 200,
    },
});