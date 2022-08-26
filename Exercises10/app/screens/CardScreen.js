import React from 'react'
import { ScrollView, View, } from 'react-native'
import Card from '../components/Card'

const CardScreen = () => {
    return (
        <View
            style={{
                backgroundColor: '#f8f4f4',
                padding: 20,
                paddingTop: 64,

            }}>
            <ScrollView>
                <Card
                    title={'Red jacket for sale'}
                    subTitle={'$100'}
                    image={require('../assets/jacket.jpg')}

                />
                <Card
                    title={'Red jacket for sale'}
                    subTitle={'$100'}
                    image={require('../assets/jacket.jpg')}

                />
                <Card
                    title={'Red jacket for sale'}
                    subTitle={'$100'}
                    image={require('../assets/jacket.jpg')}

                />
            </ScrollView>
        </View>
    )
}

export default CardScreen
