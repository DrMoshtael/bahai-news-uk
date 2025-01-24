import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Image } from './ui/image';
import { VStack } from './ui/vstack';
import { Heading } from './ui/heading';
import { Text } from './ui/text';

interface ArticleProps {
    headline: string;
    subHeading?: string;
    letterCode: string;
    downloadLink?: string;
    imageUrl: string;
    imageCaption?: string;
    date: string;
    body: string;
}

const Article = ({
    headline,
    subHeading,
    letterCode,
    downloadLink,
    imageUrl,
    imageCaption,
    date,
    body,
}: ArticleProps) => {

    return (
        <ScrollView>
            <VStack className='pb-4 bg-white md:pt-6 md:pb-0 h-full w-full md:w-9/12 max-w-[900px] self-center mb-20 md:mb-2'>
                <VStack className='p-4 md:px-10'>
                    <Heading className='pb-4' size="2xl">{headline}</Heading>
                    {subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
                    <Text className='' size="md">{letterCode}</Text>
                    <TouchableOpacity onPress={() => { /* handle download */ }}>
                        <Text className=' text-blue-500' size="md">Download letter as PDF</Text>
                    </TouchableOpacity>
                </VStack>
                <Image
                    className="w-full h-64"
                    source={require("@/assets/news-feed/bnu5Jan25.jpg")}
                    alt={headline}
                // resizeMode="contain"
                />
                <VStack className='px-4 md:px-10'>
                    <Text className='pb-6' size='lg'>|| {imageCaption}</Text>
                    <Text className="pb-4" size="md">{date}</Text>
                    <Text className="text-primary-950" size="xl">{body}</Text>
                </VStack>
            </VStack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        marginBottom: 16,
    },
    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subHeading: {
        fontSize: 18,
        color: '#666',
        marginBottom: 8,
    },
    letterCode: {
        fontSize: 14,
        color: '#999',
        marginBottom: 8,
    },
    downloadLink: {
        fontSize: 14,
        color: '#007BFF',
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    imageCaption: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },
    date: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },
    body: {
        fontSize: 16,
        color: '#333',
    },
});

export default Article