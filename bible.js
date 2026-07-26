const BIBLE_BOOKS = [
    ["genesis", "Genesis", 50], ["exodus", "Exodus", 40], ["leviticus", "Leviticus", 27],
    ["numbers", "Numbers", 36], ["deuteronomy", "Deuteronomy", 34], ["joshua", "Joshua", 24],
    ["judges", "Judges", 21], ["ruth", "Ruth", 4], ["1Samuel", "1 Samuel", 31],
    ["2Samuel", "2 Samuel", 24], ["1Kings", "1 Kings", 22], ["2Kings", "2 Kings", 25],
    ["1Chronicles", "1 Chronicles", 29], ["2Chronicles", "2 Chronicles", 36], ["ezra", "Ezra", 10],
    ["nehemiah", "Nehemiah", 13], ["esther", "Esther", 10], ["job", "Job", 42],
    ["psalms", "Psalms", 150], ["proverbs", "Proverbs", 31], ["ecclesiastes", "Ecclesiastes", 12],
    ["songOfSongs", "Song of Songs", 8], ["isaiah", "Isaiah", 66], ["jeremiah", "Jeremiah", 52],
    ["lamentations", "Lamentations", 5], ["ezekiel", "Ezekiel", 48], ["daniel", "Daniel", 12],
    ["hosea", "Hosea", 14], ["joel", "Joel", 3], ["amos", "Amos", 9], ["obadiah", "Obadiah", 1],
    ["jonah", "Jonah", 4], ["micah", "Micah", 7], ["nahum", "Nahum", 3], ["habakkuk", "Habakkuk", 3],
    ["zephaniah", "Zephaniah", 3], ["haggai", "Haggai", 2], ["zechariah", "Zechariah", 14],
    ["malachi", "Malachi", 4], ["matthew", "Matthew", 28], ["mark", "Mark", 16], ["luke", "Luke", 24],
    ["john", "John", 21], ["acts", "Acts", 28], ["romans", "Romans", 16],
    ["1Corinthians", "1 Corinthians", 16], ["2Corinthians", "2 Corinthians", 13], ["galatians", "Galatians", 6],
    ["ephesians", "Ephesians", 6], ["philippians", "Philippians", 4], ["colossians", "Colossians", 4],
    ["1Thessalonians", "1 Thessalonians", 5], ["2Thessalonians", "2 Thessalonians", 3],
    ["1Timothy", "1 Timothy", 6], ["2Timothy", "2 Timothy", 4], ["titus", "Titus", 3], ["philemon", "Philemon", 1],
    ["hebrews", "Hebrews", 13], ["james", "James", 5], ["1Peter", "1 Peter", 5], ["2Peter", "2 Peter", 3],
    ["1John", "1 John", 5], ["2John", "2 John", 1], ["3John", "3 John", 1], ["jude", "Jude", 1],
    ["revelation", "Revelation", 22]
];

collections.push({
    id: "bible",
    title: "Bible (CSB)",
    category: "read",
    profiles: [profiles.BRETT],
    entries: BIBLE_BOOKS.map(function ([id, title, chapterCount]) {
        return {
            id,
            title,
            type: EntryType.BOOK,
            status: Status.NOT_STARTED,
            chapterCount,
            readChapters: []
        };
    })
});