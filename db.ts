
export interface ArticleData {
    bannerUri: string;
    title: string;
    description: string;
    publishedDate: string;
}

export interface CreatorData {
    bannerUri: string;
    name: string;
    description: string;
}

export const WORLD_DATA: ArticleData[] = [
    {
        bannerUri: require("@/assets/news-feed/bnu5Jan25_BW.png"),
        title: "The Bahá’í World Publication: Historic series resumes with new print volume",
        description:
            "A remarkable story unfolds through the pages of a newly released volume of The Bahá’í World. It is an account of millions of people around the world learning to contribute to the spiritual and social advancement of their societies.",
        publishedDate: "3 Jan 2025",
    },
    {
        bannerUri: require("@/assets/news-feed/bic_2024.jpg"),
        title: "Bahá'í International Community's Brussels Office 2024 Year in Review",
        description:
            "In 2024, the work of the Brussels Office of the Bahá'í International Community focused on understanding how individuals and communities around the world can meaningfully participate to address the challenges of our time.",
        publishedDate: "30 Dec 2024",
    },
    {
        bannerUri: require("@/assets/news-feed/bic_30Dec.webp"),
        title: "The Power of Positive Thinking",
        description:
            "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
        publishedDate: "30 Dec 2024",
    },
    {
        bannerUri: require("@/assets/news-feed/bnu_24Dec.png"),
        title: "Social Cohesion: National gatherings explore paths toward societal harmony",
        description:
            "As Bahá’ís worldwide commemorated the births of the Báb and Bahá’u’lláh, several communities took the opportunity this year to host special gatherings at the national level to explore how spiritual principles brought by these Twin Luminaries illuminate paths toward societal harmony.",
        publishedDate: "24 Dec 2024",
    },
    {
        bannerUri: require("@/assets/news-feed/bic_23Dec.webp"),
        title: "Mahvash Sabet is recovering from heart surgery: Iran’s government must let her do so in peace by never returning her to prison",
        description:
            "71-year-old Iranian Bahá' jailed for more than 13 years has undergone open-heart surgery.  Once her recovery period is over, however, she will be recalled to prison to serve the rest of her second 10-year jail term.",
        publishedDate: "23 Dec 2023",
    },
]

export const NEWS_DATA: ArticleData[] = [
    {
        bannerUri: require("@/assets/news-feed/bnu5Jan25.jpg"),
        title: "Message from the National Spiritual Assembly",
        description:
            "The National Spiritual Assembly has called for fifteen gatherings to take place across the country during the immediate weeks to speak to the community about the current urgent need for pioneers.",
        publishedDate: "5 Jan 2025",
    },
    {
        bannerUri: require("@/assets/news-feed/bnu5Jan25_ISGP.png"),
        title: "ISGP Participant Gathering",
        description:
            "The deadline to register for the upcoming ISGP participant gathering is Sunday 12 January.",
        publishedDate: "5 Jan 2025",
    },
    {
        bannerUri: require("@/assets/news-feed/bnu2Jan25.jpg"),
        title: "News from the Guardian's Resting Place",
        description:
            "In the year 2024, there were more than 6,000 visitors from sixty different countries who visited the Guardian’s Resting Place for prayers, meditation and reflection.",
        publishedDate: "2 Jan 2025",
    },
]

// export const CREATORS_DATA: CreatorData[] = [
//     {
//         bannerUri: require("@/assets/news-feed/news-and-feed/image6.png"),
//         name: "Emily Zho",
//         description: "Designer by heart, writer by profession, talks about design",
//     },
//     {
//         bannerUri: require("@/assets/news-feed/news-and-feed/image7.png"),
//         name: "Ram Narayan",
//         description: "Founder of Fortune 500 company Alo, talks about",
//     },
//     {
//         bannerUri: require("@/assets/news-feed/news-and-feed/image8.png"),
//         name: "David John",
//         description: "Creator of all things metal, talks about music and art. ",
//     },
// ]