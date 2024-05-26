// The "books" data will be simple information about the books.
const books = [
    {
        id: 1,
        authorId: 1,
        genreId: 1,
        title: "Taras Shevchenko - The Bard of People\'s Freedom",
        overview: "Years and centuries pass, generations succeed one another, but great works of art remain, long surviving their creators and the message they bring is fresh in each new age. Great poets speak for their people, speak in their people's names and express their most cherished dreams, thoughts and aspirations. Taras Shevchenko was such a poet. His poetry is national and yet so international and humanistic, so distinctive and yet so universal, that it appeals and speaks for all people. Founder of the modern literary Ukrainian language, Shevchenko became the first Ukrainian poet to achieve an international reputation. Also a great artist, he was twice celebrated as a champion of people\'s freedom by UNESCO."
    },
    {
        id: 2,
        authorId: 2,
        genreId: 1,
        title: "Who Was Marie Curie?",
        overview: "Born in Warsaw, Poland, on November 7, 1867, Marie Curie was forbidden to attend the male-only University of Warsaw, so she enrolled at the Sorbonne in Paris to study physics and mathematics. There she met a professor named Pierre Curie, and the two soon married, forming one of the most famous scientific partnerships in history. Together they discovered two elements and won a Nobel Prize in 1903. (Later Marie won another Nobel award for chemistry in 1911.) She died in Savoy, France, on July 4, 1934, a victim of many years of exposure to toxic radiation."
    },
    {
        id: 3,
        authorId: 3,
        genreId: 1,
        title: "Who Was Stephen Hawking?",
        overview: "Stephen Hawking was born exactly three hundred years after the death of the scientist Galileo, so maybe it was written in the stars that he would become a famous scientist in his own right. Although he was diagnosed with a neurological disease at age 21, Stephen did not let the illness define his life. Known for his groundbreaking work in physics, and identified by his wheelchair and computerized voice system, Stephen continued his research until his death in 2018. He is best known for his black hole theories and his best-selling book A Brief History of Time. Stephen Hawking is an example of a person who had a great mind, but an even greater spirit."
    },
    {
        id: 4,
        authorId: 4,
        genreId: 2,
        title: "The Forest Song: A Fairy Play",
        overview: "The Forest Song represents the crowning achievement of Lesia Ukrainka’s mature period and is a uniquely powerful poetic text. A play in three acts, it seemingly breaks with her intellectually charged social and cultural themes, which range from feminism and the deconstruction of patriarchy to the workings of colonialism, even in antiquity. Here, the author instead presents a symbolist meditation on the interaction of humanity and nature set in a world of primal forces and pure feelings as seen through childhood memories and the re-creation of local Volhynian folklore. The play unfolds in spirited dialogues between characters from Ukrainian mythology and people of the land: Old Man River, the Nymph, two water spirits, Uncle Leo, Luke, Sylph, and the peasant woman Kylyna and her mother-in-law. The Forest Song is a testament to the power of love to overcome differences and bring loved ones back from the dead."
    },
    {
        id: 5,
        authorId: 5,
        genreId: 2,
        title: "Harry Potter and the Sorcerer's Stone",
        overview: "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer's stone that will make this evil wizard immortal and undefeatable."
    },
    {
        id: 6,
        authorId: 5,
        genreId: 2,
        title: "Harry Potter and the Chamber of Secrets",
        overview: "The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families."
    },
    {
        id: 7,
        authorId: 6,
        genreId: 2,
        title: "The Art of Amphibia",
        overview: "Amphibia chronicles the adventures of three best friends who find themselves magically transported to the world of Amphibia, a wild marshland tropical island full of anthropomorphic amphibians and dangerous beasts. The three girls are separated when they arrive in Amphibia, and must go on their own fantastical journeys to reunite and save their new friends."
    },
    {
        id: 8,
        authorId: 7,
        genreId: 3,
        title: "Big Little Lies",
        overview: "Follows three mothers, each at a crossroads, and their potential involvement in a riot at a school trivia night that leaves one parent dead in what appears to be a tragic accident, but which evidence shows might have been premeditated."
    },
    {
        id: 9,
        authorId: 7,
        genreId: 3,
        title: "The Husband\'s Secret",
        overview: "Imagine your husband wrote you a letter, to be opened after his death. Imagine, too, that the letter contains his deepest, darkest secret—something with the potential to destroy not only the life you built together, but the lives of others as well. And then imagine that you stumble across that letter while your husband is still very much alive… Cecilia Fitzpatrick has achieved it all—she’s an incredibly successful businesswoman, a pillar of her small community, and a devoted wife and mother. But that letter is about to change everything—and not just for her. There are other women who barely know Cecilia—or each other—but they, too, are about to feel the earth-shattering repercussions of her husband’s secret."
    },
    {
        id: 10,
        authorId: 8,
        genreId: 4,
        title: "The End of Eternity",
        overview: "Andrew Harlan is an Eternal, a member of the elite of the future. One of the few who live in Eternity, a location outside of place and time, Harlan's job is to create carefully controlled and enacted Reality Changes. These Changes are small, exactingly calculated shifts in the course of history made for the benefit of humankind. Though each Change has been made for the greater good, there are always costs. During one of his assignments, Harlan meets and falls in love with Noÿs Lambent, a woman who lives in real time and space. Then Harlan learns that Noÿs will cease to exist after the next change, and risks everything to sneak her into Eternity. Unfortunately, they are caught. Harlan's punishment? His next assignment: kill the woman he loves before the paradox they have created results in the destruction of Eternity."
    },
    {
        id: 11,
        authorId: 9,
        genreId: 5,
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        overview: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."
    },
    {
        id: 12,
        authorId: 10,
        genreId: 5,
        title: "HTML, CSS, & JavaScript for Dummies",
        overview: "HTML, CSS, and JavaScript are essential tools for creating dynamic, interactive websites. Once you have a grip on the trio of coding languages, you can build and update websites to be even more effective and unique. This friendly, three tops-in-one guide covers the essentials you need to know about each of these technologies so you can design, build, launch, and update sites for personal or professional use."
    },
    {
        id: 13,
        authorId: 10,
        genreId: 5,
        title: "JavaScript All-in-One For Dummies",
        overview: "This book serves up JavaScript coding basics before diving into the tools, libraries, frameworks, and runtime environments new and experienced coders need to know. Start by learning the basics of JavaScript and progress through the techniques and tools used by professional JavaScript developers, even if you’ve never written code before. You also get the details of today\'s hottest libraries and frameworks—React.js, Vue.js, Svelte, and Node.js."
    },
    {
        id: 14,
        authorId: 11,
        genreId: 5,
        title: "The Road to React: Your journey to master plain yet pragmatic React.js",
        overview: "This book teaches the core principles of React, guiding you through building a practical application in pure React without complex tooling. The book covers everything from setting up the project to deploying it on a server."
    }
];

module.exports = books;