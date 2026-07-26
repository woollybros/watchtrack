collections.splice(collections.findIndex(collection => collection.id === "colbieBooks"), 0, {
    id: "wheelOfTime",
    title: "The Wheel of Time",
    category: "read",
    profiles: [profiles.BRETT],
    entries: [
        { id: "wot01", title: "The Eye of the World", releaseDate: "1990", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot02", title: "The Great Hunt", releaseDate: "1990", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot03", title: "The Dragon Reborn", releaseDate: "1991", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot04", title: "The Shadow Rising", releaseDate: "1992", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot05", title: "The Fires of Heaven", releaseDate: "1993", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot06", title: "Lord of Chaos", releaseDate: "1994", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot07", title: "A Crown of Swords", releaseDate: "1996", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot08", title: "The Path of Daggers", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot09", title: "Winter's Heart", releaseDate: "2000", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot10", title: "Crossroads of Twilight", releaseDate: "2003", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot11", title: "Knife of Dreams", releaseDate: "2005", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot12", title: "The Gathering Storm", releaseDate: "2009", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot13", title: "Towers of Midnight", releaseDate: "2010", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot14", title: "A Memory of Light", releaseDate: "2013", type: EntryType.BOOK, status: Status.NOT_STARTED },
        { id: "wot00", title: "New Spring", releaseDate: "2004", type: EntryType.BOOK, status: Status.NOT_STARTED }
    ]
});
