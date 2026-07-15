const profiles = {
    BRETT: "brett",
    RILEY: "riley",
    COLBIE: "colbie"
};

const EntryType = {
    MOVIE: "movie",
    SHOW: "show",
    SHORT: "short",
    GAME: "game",
    BOOK: "book"
};

const Status = {
    NOT_STARTED: "notStarted",
    IN_PROGRESS: "inProgress",
    COMPLETED: "completed",
    SKIPPED: "skipped"
};


let collections = [
    {
        id: "bond",
        title: "James Bond",
        category: "watch",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "drNo",
                title: "Dr. No",
                type: EntryType.MOVIE,
                releaseDate: "1962",
                releaseOrder: 1,
                status: Status.NOT_STARTED
            },

            {
                id: "fromRussiaWithLove",
                title: "From Russia with Love",
                type: EntryType.MOVIE,
                releaseDate: "1963",
                releaseOrder: 2,
                status: Status.NOT_STARTED
            },

            {
                id: "goldfinger",
                title: "Goldfinger",
                type: EntryType.MOVIE,
                releaseDate: "1964",
                releaseOrder: 3,
                status: Status.NOT_STARTED
            },
            
            {
                id: "thunderball",
                title: "Thunderball",
                type: EntryType.MOVIE,
                releaseDate: "1965",
                releaseOrder: 4,
                status: Status.NOT_STARTED
            },
            
            {
                id: "youOnlyLiveTwice",
                title: "You Only Live Twice",
                type: EntryType.MOVIE,
                releaseDate: "1967",
                releaseOrder: 5,
                status: Status.NOT_STARTED
            },
            
            {
                id: "onHerMajestysSecretService",
                title: "On Her Majesty's Secret Service",
                type: EntryType.MOVIE,
                releaseDate: "1969",
                releaseOrder: 6,
                status: Status.NOT_STARTED
            },
            
            {
                id: "diamondsAreForever",
                title: "Diamonds are Forever",
                type: EntryType.MOVIE,
                releaseDate: "1971",
                releaseOrder: 7,
                status: Status.NOT_STARTED
            },
            
            {
                id: "liveAndLetDie",
                title: "Live and Let Die",
                type: EntryType.MOVIE,
                releaseDate: "1973",
                releaseOrder: 8,
                status: Status.NOT_STARTED
            },
            
            {
                id: "theManWithTheGoldenGun",
                title: "The Man With The Golden Gun",
                type: EntryType.MOVIE,
                releaseDate: "1974",
                releaseOrder: 9,
                status: Status.NOT_STARTED
            },

            {
                id: "theSpyWhoLovedMe",
                title: "The Spy Who Loved Me",
                type: EntryType.MOVIE,
                releaseDate: "1977",
                releaseOrder: 10,
                status: Status.NOT_STARTED
            },    
            
            {
                id: "moonraker",
                title: "Moonraker",
                type: EntryType.MOVIE,
                releaseDate: "1979",
                releaseOrder: 11,
                status: Status.NOT_STARTED
            },

                        
            {
                id: "forYourEyesOnly",
                title: "For Your Eyes Only",
                type: EntryType.MOVIE,
                releaseDate: "1981",
                releaseOrder: 12,
                status: Status.NOT_STARTED
            },
                        
            {
                id: "octopussy",
                title: "Octopussy",
                type: EntryType.MOVIE,
                releaseDate: "1983",
                releaseOrder: 13,
                status: Status.NOT_STARTED
            }, 

            {
                id: "aViewToKill",
                title: "A View To Kill",
                type: EntryType.MOVIE,
                releaseDate: "1985",
                releaseOrder: 14,
                status: Status.NOT_STARTED
            },  

            {
                id: "theLivingDaylights",
                title: "The Living Daylights",
                type: EntryType.MOVIE,
                releaseDate: "1987",
                releaseOrder: 15,
                status: Status.NOT_STARTED
            },  

            {
                id: "licenceToKill",
                title: "Licence To Kill",
                type: EntryType.MOVIE,
                releaseDate: "1989",
                releaseOrder: 16,
                status: Status.NOT_STARTED
            },  

            {
                id: "goldenEye",
                title: "GoldenEye",
                type: EntryType.MOVIE,
                releaseDate: "1995",
                releaseOrder: 17,
                status: Status.NOT_STARTED
            },

            {
                id: "tomorrowNeverDies",
                title: "Tomorrow Never Dies",
                type: EntryType.MOVIE,
                releaseDate: "1997",
                releaseOrder: 18,
                status: Status.NOT_STARTED
            }, 

            {
                id: "theWorldIsNotEnough",
                title: "The World Is Not Enough",
                type: EntryType.MOVIE,
                releaseDate: "1999",
                releaseOrder: 19,
                status: Status.NOT_STARTED
            }, 

            {
                id: "dieAnotherDay",
                title: "Die Another Day",
                type: EntryType.MOVIE,
                releaseDate: "2002",
                releaseOrder: 20,
                status: Status.NOT_STARTED
            },

            {
                id: "casinoRoyale",
                title: "Casino Royale",
                type: EntryType.MOVIE,
                releaseDate: "2006",
                releaseOrder: 21,
                status: Status.NOT_STARTED
            }, 

            {
                id: "quantumOfSolace",
                title: "Quantum of Solace",
                type: EntryType.MOVIE,
                releaseDate: "2008",
                releaseOrder: 22,
                status: Status.NOT_STARTED
            },

            {
                id: "skyfall",
                title: "Skyfall",
                type: EntryType.MOVIE,
                releaseDate: "2012",
                releaseOrder: 23,
                status: Status.NOT_STARTED
            }, 

            {
                id: "spectre",
                title: "Spectre",
                type: EntryType.MOVIE,
                releaseDate: "2015",
                releaseOrder: 24,
                status: Status.NOT_STARTED
            },

            {
                id: "noTimeToDie",
                title: "No Time to Die",
                type: EntryType.MOVIE,
                releaseDate: "2021",
                releaseOrder: 25,
                status: Status.NOT_STARTED
            }
        ]

    },

    {
        id: "marvel",
        title: "Marvel",
        category: "watch",
        profiles: [
            profiles.BRETT,
            profiles.RILEY
        ],
        entries: [
            {
                id: "ironMan1",
                title: "Iron Man",
                type: EntryType.MOVIE,
                releaseDate: "2008-05-02",
                releaseOrder: 1,
                status: Status.NOT_STARTED
            },

            {
                id: "theIncredibleHulk",
                title: "The Incredible Hulk",
                type: EntryType.MOVIE,
                releaseDate: "2008-06-13",
                releaseOrder: 2,
                status: Status.NOT_STARTED
            },

            {
                id: "ironMan2",
                title: "Iron Man 2",
                type: EntryType.MOVIE,
                releaseDate: "2010-05-07",
                releaseOrder: 3,
                status: Status.NOT_STARTED
            },

            {
                id: "thor",
                title: "Thor",
                type: EntryType.MOVIE,
                releaseDate: "2011-05-06",
                releaseOrder: 4,
                status: Status.NOT_STARTED
            },

            {
                id: "captainAmerica1",
                title: "Captain America: The First Avenger",
                type: EntryType.MOVIE,
                releaseDate: "2011-07-22",
                releaseOrder: 5,
                status: Status.NOT_STARTED
            },

            {
                id: "theConsultant",
                title: "The Consultant",
                type: EntryType.SHORT,
                releaseDate: "2011-09-13",
                releaseOrder: 6,
                status: Status.NOT_STARTED
            },

            {
                id: "aFunnyThing",
                title: "A Funny Thing Happened on the Way to Thor's Hammer",
                type: EntryType.SHORT,
                releaseDate: "2011-10-25",
                releaseOrder: 7,
                status: Status.NOT_STARTED
            },

            {
                id: "avengers1",
                title: "The Avengers",
                type: EntryType.MOVIE,
                releaseDate: "2012-05-04",
                releaseOrder: 8,
                status: Status.NOT_STARTED
            },

            {
                id: "item47",
                title: "Item 47",
                type: EntryType.SHORT,
                releaseDate: "2012-09-25",
                releaseOrder: 9,
                status: Status.NOT_STARTED
            },

            {
                id: "ironMan3",
                title: "Iron Man 3",
                type: EntryType.MOVIE,
                releaseDate: "2013-05-03",
                releaseOrder: 10,
                status: Status.NOT_STARTED
            },

            {
                id: "thor2",
                title: "The Dark World",
                type: EntryType.MOVIE,
                releaseDate: "2013-11-08",
                releaseOrder: 11,
                status: Status.NOT_STARTED
            },

            {
                id: "captainAmerica2",
                title: "The Winter Soldier",
                type: EntryType.MOVIE,
                releaseDate: "2014-04-04",
                releaseOrder: 12,
                status: Status.NOT_STARTED
            },

            {
                id: "guardians1",
                title: "Guardians of the Galaxy",
                type: EntryType.MOVIE,
                releaseDate: "2014-08-01",
                releaseOrder: 13,
                status: Status.NOT_STARTED
            },

            {
                id: "avengers2",
                title: "Avengers: Age of Ultron",
                type: EntryType.MOVIE,
                releaseDate: "2015-05-01",
                releaseOrder: 14,
                status: Status.NOT_STARTED
            },

            {
                id: "antMan1",
                title: "Ant-Man",
                type: EntryType.MOVIE,
                releaseDate: "2015-07-17",
                releaseOrder: 15,
                status: Status.NOT_STARTED
            },

            {
                id: "captainAmerica3",
                title: "Captain America: Civil War",
                type: EntryType.MOVIE,
                releaseDate: "2016-05-06",
                releaseOrder: 16,
                status: Status.NOT_STARTED
            },

            {
                id: "doctorStrange",
                title: "Doctor Strange",
                type: EntryType.MOVIE,
                releaseDate: "2016-11-04",
                releaseOrder: 17,
                status: Status.NOT_STARTED
            },

            {
                id: "guardians2",
                title: "Guardians of the Galaxy Vol. 2",
                type: EntryType.MOVIE,
                releaseDate: "2017-05-05",
                releaseOrder: 18,
                status: Status.NOT_STARTED
            },

            {
                id: "spiderman1",
                title: "Spider-Man: Homecoming",
                type: EntryType.MOVIE,
                releaseDate: "2017-07-07",
                releaseOrder: 19,
                status: Status.NOT_STARTED
            },

            {
                id: "thor3",
                title: "Thor: Ragnarok",
                type: EntryType.MOVIE,
                releaseDate: "2017-11-03",
                releaseOrder: 20,
                status: Status.NOT_STARTED
            },

            {
                id: "blackPanther1",
                title: "Black Panther",
                type: EntryType.MOVIE,
                releaseDate: "2018-02-16",
                releaseOrder: 21,
                status: Status.NOT_STARTED
            },

            {
                id: "avengers3",
                title: "Avengers: Infinity War",
                type: EntryType.MOVIE,
                releaseDate: "2018-04-27",
                releaseOrder: 22,
                status: Status.NOT_STARTED
            },

            {
                id: "antMan2",
                title: "Ant-Man and the Wasp",
                type: EntryType.MOVIE,
                releaseDate: "2018-07-06",
                releaseOrder: 23,
                status: Status.NOT_STARTED
            },

            {
                id: "captainMarvel",
                title: "Captain Marvel",
                type: EntryType.MOVIE,
                releaseDate: "2019-03-08",
                releaseOrder: 24,
                status: Status.NOT_STARTED
            },

            {
                id: "avengers4",
                title: "Avengers: Endgame",
                type: EntryType.MOVIE,
                releaseDate: "2019-04-26",
                releaseOrder: 25,
                status: Status.NOT_STARTED
            },

            {
                id: "spiderman2",
                title: "Spider-Man: Far From Home",
                type: EntryType.MOVIE,
                releaseDate: "2019-07-02",
                releaseOrder: 26,
                status: Status.NOT_STARTED
            },

            {
                id: "blackWidow",
                title: "Black Widow",
                type: EntryType.MOVIE,
                releaseDate: "2021-07-09",
                releaseOrder: 27,
                status: Status.NOT_STARTED
            },

            {
                id: "shangChi",
                title: "Shang-Chi and the Legend of the Ten Rings",
                type: EntryType.MOVIE,
                releaseDate: "2021-09-03",
                releaseOrder: 28,
                status: Status.NOT_STARTED
            },

            {
                id: "eternals",
                title: "Eternals",
                type: EntryType.MOVIE,
                releaseDate: "2021-11-05",
                releaseOrder: 29,
                status: Status.NOT_STARTED
            },

            {
                id: "spiderman3",
                title: "Spider-Man: No Way Home",
                type: EntryType.MOVIE,
                releaseDate: "2021-12-17",
                releaseOrder: 30,
                status: Status.NOT_STARTED
            },

            {
                id: "doctorStrange2",
                title: "Doctor Strange in the Multiverse of Madness",
                type: EntryType.MOVIE,
                releaseDate: "2022-05-06",
                releaseOrder: 31,
                status: Status.NOT_STARTED
            },

            {
                id: "thor4",
                title: "Thor: Love and Thunder",
                type: EntryType.MOVIE,
                releaseDate: "2022-07-08",
                releaseOrder: 32,
                status: Status.NOT_STARTED
            },

            {
                id: "blackPanther2",
                title: "Black Panther: Wakanda Forever",
                type: EntryType.MOVIE,
                releaseDate: "2022-11-11",
                releaseOrder: 33,
                status: Status.NOT_STARTED
            },

            {
                id: "antMan3",
                title: "Ant-Man and the Wasp: Quantumania",
                type: EntryType.MOVIE,
                releaseDate: "2023-02-17",
                releaseOrder: 34,
                status: Status.NOT_STARTED
            },

            {
                id: "guardians3",
                title: "Guardians of the Galaxy Vol. 3",
                type: EntryType.MOVIE,
                releaseDate: "2023-05-05",
                releaseOrder: 35,
                status: Status.NOT_STARTED
            },

            {
                id: "marvels",
                title: "The Marvels",
                type: EntryType.MOVIE,
                releaseDate: "2023-11-10",
                releaseOrder: 36,
                status: Status.NOT_STARTED
            },

            {
                id: "deadpool3",
                title: "Deadpool & Wolverine",
                type: EntryType.MOVIE,
                releaseDate: "2024-07-26",
                releaseOrder: 37,
                status: Status.NOT_STARTED
            },

            {
                id: "captainAmerica4",
                title: "Captain America: Brave New World",
                type: EntryType.MOVIE,
                releaseDate: "2025-02-14",
                releaseOrder: 38,
                status: Status.NOT_STARTED
            },

            {
                id: "thunderbolts",
                title: "Thunderbolts*",
                type: EntryType.MOVIE,
                releaseDate: "2025-05-02",
                releaseOrder: 39,
                status: Status.NOT_STARTED
            },

            {
                id: "fantasticFour",
                title: "The Fantastic Four: First Steps",
                type: EntryType.MOVIE,
                releaseDate: "2025-07-25",
                releaseOrder: 40,
                status: Status.NOT_STARTED
            },

            {
                id: "spiderman4",
                title: "Spider-Man: Brand New Day",
                type: EntryType.MOVIE,
                releaseDate: "2026-07-31",
                releaseOrder: 41,
                status: Status.NOT_STARTED
            },

            {
                id: "avengers5",
                title: "Avengers: Doomsday",
                type: EntryType.MOVIE,
                releaseDate: "2026-12-18",
                releaseOrder: 42,
                status: Status.NOT_STARTED
            },

            {
                id: "avengers6",
                title: "Avengers: Secret Wars",
                type: EntryType.MOVIE,
                releaseDate: "2027-12-17",
                releaseOrder: 43,
                status: Status.NOT_STARTED
            },

            {
                id: "wandaVision",
                title: "WandaVision",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2021-01-15",
                        episodeCount: 9,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "falconWinterSoldier",
                title: "The Falcon and the Winter Soldier",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2021-03-19",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "loki",
                title: "Loki",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2021-06-09",
                        episodeCount: 6,
                        episodesWatched: 0
                    },

                    {
                        season: 2,
                        releaseDate: "2023-10-05",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "whatIf",
                title: "What If...?",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2021-08-11",
                        episodeCount: 9,
                        episodesWatched: 0
                    },

                    {
                        season: 2,
                        releaseDate: "2023-12-22",
                        episodeCount: 9,
                        episodesWatched: 0
                    },

                    {
                        season: 3,
                        releaseDate: "2024-12-22",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "hawkeye",
                title: "Hawkeye",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2021-11-24",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "moonKnight",
                title: "Moon Knight",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2022-03-30",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "msMarvel",
                title: "Ms. Marvel",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2022-06-08",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "sheHulk",
                title: "She-Hulk: Attorney at Law",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2022-08-18",
                        episodeCount: 9,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "secretInvasion",
                title: "Secret Invasion",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2023-06-21",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "echo",
                title: "Echo",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2024-01-09",
                        episodeCount: 5,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "agatha",
                title: "Agatha All Along",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2024-09-18",
                        episodeCount: 9,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "friendlyNeighborhoodSpiderman",
                title: "Your Friendly Neighborhood Spider-Man",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2025-01-29",
                        episodeCount: 10,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "daredevilBA",
                title: "Daredevil: Born Again",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2025-03-04",
                        episodeCount: 9,
                        episodesWatched: 0
                    },

                    {
                        season: 2,
                        releaseDate: "2026-03-24",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "ironheart",
                title: "Ironheart",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2025-06-24",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "eyesOfWakanda",
                title: "Eyes of Wakanda",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2025-08-01",
                        episodeCount: 4,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "marvelZombies",
                title: "Marvel Zombies",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2025-09-24",
                        episodeCount: 4,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "wonderMan",
                title: "Wonder Man",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        season: 1,
                        releaseDate: "2026-01-27",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            }
        ]
    },

    {
        id: "starWars",
        title: "Star Wars",
        category: "watch",
        profiles: [
            profiles.BRETT,
            profiles.RILEY
        ],
        entries: [
            {
                id: "acolyte",
                title: "The Acolyte",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2024-06-04",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "phantomMenace",
                title: "The Phantom Menace (Episode I)",
                releaseDate: "1999-05-19",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "attackOfTheClones",
                title: "Attack of the Clones (Episode II)",
                releaseDate: "2002-05-16",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "cloneWarsMovie",
                title: "The Clone Wars",
                releaseDate: "2008-08-15",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "cloneWarsShow",
                title: "The Clone Wars",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2008-10-03",
                        episodeCount: 22,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 2,
                        releaseDate: "2009-10-02",
                        episodeCount: 22,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 3,
                        releaseDate: "2010-09-17",
                        episodeCount: 22,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 4,
                        releaseDate: "2011-09-16",
                        episodeCount: 22,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 5,
                        releaseDate: "2012-09-29",
                        episodeCount: 20,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 6,
                        releaseDate: "2014-03-07",
                        episodeCount: 13,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 7,
                        releaseDate: "2020-02-21",
                        episodeCount: 12,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "talesOfTheJedi",
                title: "Tales of the Jedi",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2022-10-26",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "revengeOfTheSith",
                title: "Revenge of the Sith (Episode III)",
                releaseDate: "2005-05-19",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "talesOfTheEmpire",
                title: "Tales of the Empire",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2024-05-04",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "talesOfTheUnderworld",
                title: "Tales of the Underworld",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2025-10-29",
                        episodeCount: 6,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "badBatch",
                title: "The Bad Batch",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2021-05-04",
                        episodeCount: 16,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 2,
                        releaseDate: "2023-01-04",
                        episodeCount: 16,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 3,
                        releaseDate: "2024-02-21",
                        episodeCount: 15,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "maulShadowLord",
                title: "Maul - Shadow Lord",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2026-04-06",
                        episodeCount: 10,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "solo",
                title: "Solo: A Star Wars Story",
                releaseDate: "2018-05-25",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "obiWanKenobi",
                title: "Obi-Wan Kenobi",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2022",
                        episodeCount: 0,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "andor",
                title: "Andor",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2022-09-21",
                        episodeCount: 12,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 2,
                        releaseDate: "2025-04-22",
                        episodeCount: 12,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "rebels",
                title: "Star Wars Rebels",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2014-10-03",
                        episodeCount: 15,
                        episodesWatched: 0
                    },
                    
                    {
                        seasonNumber: 2,
                        releaseDate: "2015-06-20",
                        episodeCount: 22,
                        episodesWatched: 0
                    },
                    
                    {
                        seasonNumber: 3,
                        releaseDate: "2016-09-24",
                        episodeCount: 22,
                        episodesWatched: 0
                    },
                    
                    {
                        seasonNumber: 4,
                        releaseDate: "2017-10-16",
                        episodeCount: 16,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "rogueOne",
                title: "Rogue One: A Star Wars Story",
                releaseDate: "2016-12-16",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "aNewHope",
                title: "A New Hope (Episode IV)",
                releaseDate: "1977-05-25",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "empireStrikesBack",
                title: "The Empire Strikes Back (Episode V)",
                releaseDate: "1980-05-21",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "returnOfTheJedi",
                title: "Return of the Jedi (Episode VI)",
                releaseDate: "1983-05-25",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "mandalorian",
                title: "The Mandalorian",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2019-11-12",
                        episodeCount: 8,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 2,
                        releaseDate: "2020-10-30",
                        episodeCount: 8,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 3,
                        releaseDate: "2023-03-01",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "bookOfBobaFett",
                title: "The Book of Boba Fett",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2021-12-29",
                        episodeCount: 7,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "ahsoka",
                title: "Ahsoka",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2023-08-22",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "skeletonCrew",
                title: "Skeleton Crew",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2024-12-02",
                        episodeCount: 8,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "mandalorianAndGrogu",
                title: "The Mandalorian and Grogu",
                releaseDate: "2026-05-22",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "resistance",
                title: "Star Wars Resistance",
                type: EntryType.SHOW,
                status: Status.NOT_STARTED,
                seasons: [
                    {
                        seasonNumber: 1,
                        releaseDate: "2018-10-07",
                        episodeCount: 21,
                        episodesWatched: 0
                    },

                    {
                        seasonNumber: 2,
                        releaseDate: "2019-10-06",
                        episodeCount: 19,
                        episodesWatched: 0
                    }
                ]
            },

            {
                id: "forceAwakens",
                title: "The Force Awakens (Episode VII)",
                releaseDate: "2015-12-18",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "lastJedi",
                title: "The Last Jedi (Episode VII)",
                releaseDate: "2017-12-15",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            },

            {
                id: "riseOfSkywalker",
                title: "The Rise of Skywalker (Episode IX)",
                releaseDate: "2019-12-20",
                type: EntryType.MOVIE,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "survivor",
        title: "Survivor",
        category: "watch",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "survivor01",
                title: "1: Borneo",
                type: EntryType.SHOW,
                releaseDate: "2000-05-31",
                releaseOrder: 1,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor02",
                title: "2: The Australian Outback",
                type: EntryType.SHOW,
                releaseDate: "2001-01-28",
                releaseOrder: 2,
                episodeCount: 16,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor03",
                title: "3: Africa",
                type: EntryType.SHOW,
                releaseDate: "2001-10-11",
                releaseOrder: 3,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor04",
                title: "4: Marquesas",
                type: EntryType.SHOW,
                releaseDate: "2002-02-28",
                releaseOrder: 4,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor05",
                title: "5: Thailand",
                type: EntryType.SHOW,
                releaseDate: "2002-09-19",
                releaseOrder: 5,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor06",
                title: "6: The Amazon",
                type: EntryType.SHOW,
                releaseDate: "2003-02-13",
                releaseOrder: 6,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor07",
                title: "7: Pearl Islands",
                type: EntryType.SHOW,
                releaseDate: "2003-09-18",
                releaseOrder: 7,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor08",
                title: "8: All-Stars",
                type: EntryType.SHOW,
                releaseDate: "2004-02-01",
                releaseOrder: 2,
                episodeCount: 17,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor09",
                title: "9: Vanuatu",
                type: EntryType.SHOW,
                releaseDate: "2004-09-16",
                releaseOrder: 9,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor10",
                title: "10: Palau",
                type: EntryType.SHOW,
                releaseDate: "2005-02-17",
                releaseOrder: 10,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor11",
                title: "11: Guatemala",
                type: EntryType.SHOW,
                releaseDate: "2005-09-15",
                releaseOrder: 11,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor12",
                title: "12: Panama",
                type: EntryType.SHOW,
                releaseDate: "2006-02-02",
                releaseOrder: 12,
                episodeCount: 16,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor13",
                title: "13: Cook Islands",
                type: EntryType.SHOW,
                releaseDate: "2006-09-14",
                releaseOrder: 13,
                episodeCount: 16,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor14",
                title: "14: Fiji",
                type: EntryType.SHOW,
                releaseDate: "2007-02-08",
                releaseOrder: 14,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor15",
                title: "15: China",
                type: EntryType.SHOW,
                releaseDate: "2007-09-20",
                releaseOrder: 15,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor16",
                title: "16: Micronesia",
                type: EntryType.SHOW,
                releaseDate: "2008-02-07",
                releaseOrder: 16,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor17",
                title: "17: Gabon",
                type: EntryType.SHOW,
                releaseDate: "2008-09-25",
                releaseOrder: 17,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor18",
                title: "18: Tocantins",
                type: EntryType.SHOW,
                releaseDate: "2009-02-12",
                releaseOrder: 18,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor19",
                title: "19: Samoa",
                type: EntryType.SHOW,
                releaseDate: "2009-09-17",
                releaseOrder: 19,
                episodeCount: 16,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor20",
                title: "20: Heroes vs. Villains",
                type: EntryType.SHOW,
                releaseDate: "2010-02-11",
                releaseOrder: 20,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor21",
                title: "21: Nicaragua",
                type: EntryType.SHOW,
                releaseDate: "2010-09-15",
                releaseOrder: 21,
                episodeCount: 16,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor22",
                title: "22: Redemption Island",
                type: EntryType.SHOW,
                releaseDate: "2011-02-16",
                releaseOrder: 22,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor23",
                title: "23: South Pacific",
                type: EntryType.SHOW,
                releaseDate: "2011-09-14",
                releaseOrder: 23,
                episodeCount: 16,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor24",
                title: "24: One World",
                type: EntryType.SHOW,
                releaseDate: "2012-02-15",
                releaseOrder: 24,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor25",
                title: "25: Philippines",
                type: EntryType.SHOW,
                releaseDate: "2012-09-19",
                releaseOrder: 25,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor26",
                title: "26: Caramoan",
                type: EntryType.SHOW,
                releaseDate: "2013-02-13",
                releaseOrder: 26,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor27",
                title: "27: Blood vs. Water",
                type: EntryType.SHOW,
                releaseDate: "2013-09-18",
                releaseOrder: 27,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor28",
                title: "28: Cagayan",
                type: EntryType.SHOW,
                releaseDate: "2014-02-26",
                releaseOrder: 28,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor29",
                title: "29: San Juan del Sur",
                type: EntryType.SHOW,
                releaseDate: "2014-09-24",
                releaseOrder: 29,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor30",
                title: "30: Worlds Apart",
                type: EntryType.SHOW,
                releaseDate: "2015-02-25",
                releaseOrder: 30,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor31",
                title: "31: Cambodia",
                type: EntryType.SHOW,
                releaseDate: "2015-09-23",
                releaseOrder: 31,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor32",
                title: "32: Kaoh Rong",
                type: EntryType.SHOW,
                releaseDate: "2016-02-17",
                releaseOrder: 32,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor33",
                title: "33: Millennials vs. Gen X",
                type: EntryType.SHOW,
                releaseDate: "2016-09-21",
                releaseOrder: 33,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor34",
                title: "34: Game Changers",
                type: EntryType.SHOW,
                releaseDate: "2017-03-08",
                releaseOrder: 34,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor35",
                title: "35: Heroes vs. Healers vs. Hustlers",
                type: EntryType.SHOW,
                releaseDate: "2017-09-27",
                releaseOrder: 35,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor36",
                title: "36: Ghost Island",
                type: EntryType.SHOW,
                releaseDate: "2018-02-28",
                releaseOrder: 36,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor37",
                title: "37: David vs. Goliath",
                type: EntryType.SHOW,
                releaseDate: "2018-09-26",
                releaseOrder: 37,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor38",
                title: "38: Edge of Extinction",
                type: EntryType.SHOW,
                releaseDate: "2019-02-20",
                releaseOrder: 38,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor39",
                title: "39: Island of the Idols",
                type: EntryType.SHOW,
                releaseDate: "2019-09-25",
                releaseOrder: 39,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor40",
                title: "40: Winners at War",
                type: EntryType.SHOW,
                releaseDate: "2020-02-12",
                releaseOrder: 40,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor41",
                title: "41: Survivor 41",
                type: EntryType.SHOW,
                releaseDate: "2021-09-22",
                releaseOrder: 41,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor42",
                title: "42: Survivor 42",
                type: EntryType.SHOW,
                releaseDate: "2022-03-09",
                releaseOrder: 42,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor43",
                title: "43: Survivor 43",
                type: EntryType.SHOW,
                releaseDate: "2022-09-21",
                releaseOrder: 43,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor44",
                title: "44: Survivor 44",
                type: EntryType.SHOW,
                releaseDate: "2023-03-01",
                releaseOrder: 44,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor45",
                title: "45: Survivor 45",
                type: EntryType.SHOW,
                releaseDate: "2023-09-27",
                releaseOrder: 45,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor46",
                title: "46: Survivor 46",
                type: EntryType.SHOW,
                releaseDate: "2024-02-28",
                releaseOrder: 46,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor47",
                title: "47: Survivor 47",
                type: EntryType.SHOW,
                releaseDate: "2024-09-18",
                releaseOrder: 47,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor48",
                title: "48: Survivor 48",
                type: EntryType.SHOW,
                releaseDate: "2025-02-26",
                releaseOrder: 48,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor49",
                title: "49: Survivor 49",
                type: EntryType.SHOW,
                releaseDate: "2025-09-24",
                releaseOrder: 49,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "survivor50",
                title: "50: In the Hands of the Fans",
                type: EntryType.SHOW,
                releaseDate: "2026-02-25",
                releaseOrder: 50,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "24",
        title: "24",
        category: "watch",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "day1",
                title: "Day 1",
                releaseDate: "2001-11-06",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day2",
                title: "Day 2",
                releaseDate: "2002-10-29",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day3",
                title: "Day 3",
                releaseDate: "2003-10-28",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day4",
                title: "Day 4",
                releaseDate: "2005-01-09",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day5",
                title: "Day 5",
                releaseDate: "2006-01-15",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day6",
                title: "Day 6",
                releaseDate: "2007-01-14",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "redemption",
                title: "Redemption",
                releaseDate: "2008-11-23",
                type: EntryType.SHOW,
                episodeCount: 1,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day7",
                title: "Day 7",
                releaseDate: "2009-01-11",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "day8",
                title: "Day 8",
                releaseDate: "2010-01-17",
                type: EntryType.SHOW,
                episodeCount: 24,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            },

            {
                id: "liveAnotherDay",
                title: "Live Another Day",
                releaseDate: "2014-05-05",
                type: EntryType.SHOW,
                episodeCount: 12,
                episodesWatched: 0,               
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "simpsons",
        title: "The Simpsons",
        category: "watch",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "simpsons01",
                title: "Season 1",
                type: EntryType.SHOW,
                releaseDate: "1989-12-17",
                releaseOrder: 1,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons02",
                title: "Season 2",
                type: EntryType.SHOW,
                releaseDate: "1990-10-11",
                releaseOrder: 2,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons03",
                title: "Season 3",
                type: EntryType.SHOW,
                releaseDate: "1991-09-19",
                releaseOrder: 3,
                episodeCount: 24,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons04",
                title: "Season 4",
                type: EntryType.SHOW,
                releaseDate: "1992-09-24",
                releaseOrder: 4,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons05",
                title: "Season 5",
                type: EntryType.SHOW,
                releaseDate: "1993-09-30",
                releaseOrder: 5,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons06",
                title: "Season 6",
                type: EntryType.SHOW,
                releaseDate: "1994-09-04",
                releaseOrder: 6,
                episodeCount: 25,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons07",
                title: "Season 7",
                type: EntryType.SHOW,
                releaseDate: "1995-09-17",
                releaseOrder: 7,
                episodeCount: 25,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons08",
                title: "Season 8",
                type: EntryType.SHOW,
                releaseDate: "1996-10-27",
                releaseOrder: 8,
                episodeCount: 25,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons09",
                title: "Season 9",
                type: EntryType.SHOW,
                releaseDate: "1997-09-21",
                releaseOrder: 9,
                episodeCount: 25,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons10",
                title: "Season 10",
                type: EntryType.SHOW,
                releaseDate: "1998-08-23",
                releaseOrder: 10,
                episodeCount: 23,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons11",
                title: "Season 11",
                type: EntryType.SHOW,
                releaseDate: "1999-09-26",
                releaseOrder: 11,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons12",
                title: "Season 12",
                type: EntryType.SHOW,
                releaseDate: "2000-11-01",
                releaseOrder: 12,
                episodeCount: 21,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons13",
                title: "Season 13",
                type: EntryType.SHOW,
                releaseDate: "2001-11-06",
                releaseOrder: 13,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons14",
                title: "Season 14",
                type: EntryType.SHOW,
                releaseDate: "2002-11-03",
                releaseOrder: 14,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons15",
                title: "Season 15",
                type: EntryType.SHOW,
                releaseDate: "2003-11-02",
                releaseOrder: 15,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons16",
                title: "Season 16",
                type: EntryType.SHOW,
                releaseDate: "2004-11-07",
                releaseOrder: 16,
                episodeCount: 21,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons17",
                title: "Season 17",
                type: EntryType.SHOW,
                releaseDate: "2005-09-11",
                releaseOrder: 17,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons18",
                title: "Season 18",
                type: EntryType.SHOW,
                releaseDate: "2006-09-10",
                releaseOrder: 18,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons19",
                title: "Season 19",
                type: EntryType.SHOW,
                releaseDate: "2007-09-23",
                releaseOrder: 19,
                episodeCount: 20,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons20",
                title: "Season 20",
                type: EntryType.SHOW,
                releaseDate: "2008-09-28",
                releaseOrder: 20,
                episodeCount: 21,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons21",
                title: "Season 21",
                type: EntryType.SHOW,
                releaseDate: "2009-09-27",
                releaseOrder: 21,
                episodeCount: 23,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons22",
                title: "Season 22",
                type: EntryType.SHOW,
                releaseDate: "2010-09-26",
                releaseOrder: 22,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons23",
                title: "Season 23",
                type: EntryType.SHOW,
                releaseDate: "2011-09-25",
                releaseOrder: 23,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons24",
                title: "Season 24",
                type: EntryType.SHOW,
                releaseDate: "2012-09-30",
                releaseOrder: 24,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons25",
                title: "Season 25",
                type: EntryType.SHOW,
                releaseDate: "2013-09-29",
                releaseOrder: 25,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons26",
                title: "Season 26",
                type: EntryType.SHOW,
                releaseDate: "2014-09-28",
                releaseOrder: 26,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons27",
                title: "Season 27",
                type: EntryType.SHOW,
                releaseDate: "2015-09-27",
                releaseOrder: 27,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons28",
                title: "Season 28",
                type: EntryType.SHOW,
                releaseDate: "2016-09-25",
                releaseOrder: 28,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons29",
                title: "Season 29",
                type: EntryType.SHOW,
                releaseDate: "2017-10-01",
                releaseOrder: 29,
                episodeCount: 21,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons30",
                title: "Season 30",
                type: EntryType.SHOW,
                releaseDate: "2018-09-30",
                releaseOrder: 30,
                episodeCount: 23,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons31",
                title: "Season 31",
                type: EntryType.SHOW,
                releaseDate: "2019-09-29",
                releaseOrder: 31,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons32",
                title: "Season 32",
                type: EntryType.SHOW,
                releaseDate: "2020-09-27",
                releaseOrder: 32,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons33",
                title: "Season 33",
                type: EntryType.SHOW,
                releaseDate: "2021-09-26",
                releaseOrder: 33,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons34",
                title: "Season 34",
                type: EntryType.SHOW,
                releaseDate: "2022-09-25",
                releaseOrder: 34,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons35",
                title: "Season 35",
                type: EntryType.SHOW,
                releaseDate: "2023-10-01",
                releaseOrder: 35,
                episodeCount: 18,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons36",
                title: "Season 36",
                type: EntryType.SHOW,
                releaseDate: "2024-09-29",
                releaseOrder: 36,
                episodeCount: 22,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "simpsons37",
                title: "Season 37",
                type: EntryType.SHOW,
                releaseDate: "2025-09-28",
                releaseOrder: 37,
                episodeCount: 19,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "alwaysSunny",
        title: "It's Always Sunny in Philadelphia",
        category: "watch",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "alwaysSunny01",
                title: "Season 1",
                type: EntryType.SHOW,
                releaseDate: "2005-08-04",
                releaseOrder: 1,
                episodeCount: 7,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny02",
                title: "Season 2",
                type: EntryType.SHOW,
                releaseDate: "2006-06-29",
                releaseOrder: 2,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny03",
                title: "Season 3",
                type: EntryType.SHOW,
                releaseDate: "2007-09-13",
                releaseOrder: 3,
                episodeCount: 15,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny04",
                title: "Season 4",
                type: EntryType.SHOW,
                releaseDate: "2008-09-18",
                releaseOrder: 4,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny05",
                title: "Season 5",
                type: EntryType.SHOW,
                releaseDate: "2009-09-17",
                releaseOrder: 5,
                episodeCount: 12,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny06",
                title: "Season 6",
                type: EntryType.SHOW,
                releaseDate: "2010-09-16",
                releaseOrder: 6,
                episodeCount: 14,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny07",
                title: "Season 7",
                type: EntryType.SHOW,
                releaseDate: "2011-09-15",
                releaseOrder: 7,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny08",
                title: "Season 8",
                type: EntryType.SHOW,
                releaseDate: "2012-10-11",
                releaseOrder: 8,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny09",
                title: "Season 9",
                type: EntryType.SHOW,
                releaseDate: "2013-09-04",
                releaseOrder: 9,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny10",
                title: "Season 10",
                type: EntryType.SHOW,
                releaseDate: "2015-01-14",
                releaseOrder: 10,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny11",
                title: "Season 11",
                type: EntryType.SHOW,
                releaseDate: "2016-01-06",
                releaseOrder: 11,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny12",
                title: "Season 12",
                type: EntryType.SHOW,
                releaseDate: "2017-01-04",
                releaseOrder: 12,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny13",
                title: "Season 13",
                type: EntryType.SHOW,
                releaseDate: "2018-09-05",
                releaseOrder: 13,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny14",
                title: "Season 14",
                type: EntryType.SHOW,
                releaseDate: "2019-09-25",
                releaseOrder: 14,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny15",
                title: "Season 15",
                type: EntryType.SHOW,
                releaseDate: "2021-12-01",
                releaseOrder: 15,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny16",
                title: "Season 16",
                type: EntryType.SHOW,
                releaseDate: "2023-06-07",
                releaseOrder: 16,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "alwaysSunny17",
                title: "Season 17",
                type: EntryType.SHOW,
                releaseDate: "2025-07-09",
                releaseOrder: 17,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "archer",
        title: "Archer",
        category: "watch",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "archer01",
                title: "Season 1",
                type: EntryType.SHOW,
                releaseDate: "2009-09-17",
                releaseOrder: 1,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer02",
                title: "Season 2",
                type: EntryType.SHOW,
                releaseDate: "2011-01-27",
                releaseOrder: 2,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer03",
                title: "Season 3",
                type: EntryType.SHOW,
                releaseDate: "2011-09-15",
                releaseOrder: 3,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer04",
                title: "Season 4",
                type: EntryType.SHOW,
                releaseDate: "2013-01-17",
                releaseOrder: 4,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer05",
                title: "Season 5: Archer Vice",
                type: EntryType.SHOW,
                releaseDate: "2014-01-13",
                releaseOrder: 5,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer06",
                title: "Season 6",
                type: EntryType.SHOW,
                releaseDate: "2015-01-08",
                releaseOrder: 6,
                episodeCount: 13,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer07",
                title: "Season 7",
                type: EntryType.SHOW,
                releaseDate: "2016-03-31",
                releaseOrder: 7,
                episodeCount: 10,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer08",
                title: "Season 8: Archer Dreamland",
                type: EntryType.SHOW,
                releaseDate: "2017-04-05",
                releaseOrder: 8,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer09",
                title: "Season 9: Archer Danger Island",
                type: EntryType.SHOW,
                releaseDate: "2018-04-25",
                releaseOrder: 9,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer10",
                title: "Season 10: Archer 1999",
                type: EntryType.SHOW,
                releaseDate: "2019-05-29",
                releaseOrder: 10,
                episodeCount: 9,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer11",
                title: "Season 11",
                type: EntryType.SHOW,
                releaseDate: "2020-09-16",
                releaseOrder: 11,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer12",
                title: "Season 12",
                type: EntryType.SHOW,
                releaseDate: "2021-08-25",
                releaseOrder: 12,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer13",
                title: "Season 13",
                type: EntryType.SHOW,
                releaseDate: "2022-08-24",
                releaseOrder: 13,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer14",
                title: "Season 14",
                type: EntryType.SHOW,
                releaseDate: "2023-08-30",
                releaseOrder: 14,
                episodeCount: 8,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            },

            {
                id: "archer15",
                title: "Into the Cold",
                type: EntryType.SHOW,
                releaseDate: "2023-12-17",
                releaseOrder: 15,
                episodeCount: 3,
                episodesWatched: 0,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "zelda",
        title: "The Legend of Zelda",
        category: "play",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "zelda-1",
                title: "The Legend of Zelda",
                type: EntryType.GAME,
                releaseDate: "1987",
                releaseOrder: 1,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-2",
                title: "Zelda II: The Adventure of Link",
                type: EntryType.GAME,
                releaseDate: "1988",
                releaseOrder: 2,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-ALTTP",
                title: "A Link to the Past",
                type: EntryType.GAME,
                releaseDate: "1992",
                releaseOrder: 3,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-LA",
                title: "Link's Awakening",
                type: EntryType.GAME,
                releaseDate: "1993",
                releaseOrder: 4,
                platform: "Game Boy",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-OOT",
                title: "Ocarina of Time",
                type: EntryType.GAME,
                releaseDate: "1998",
                releaseOrder: 5,
                platform: "N64",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-MM",
                title: "Majora's Mask",
                type: EntryType.GAME,
                releaseDate: "2000",
                releaseOrder: 6,
                platform: "N64",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-OoS",
                title: "Oracle of Seasons",
                type: EntryType.GAME,
                releaseDate: "2001",
                releaseOrder: 7,
                platform: "Game Boy Color",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-OoA",
                title: "Oracle of Ages",
                type: EntryType.GAME,
                releaseDate: "2001",
                releaseOrder: 8,
                platform: "Game Boy Color",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-4S",
                title: "Four Swords",
                type: EntryType.GAME,
                releaseDate: "2002",
                releaseOrder: 9,
                platform: "Game Boy Advanced",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-WW",
                title: "Wind Waker",
                type: EntryType.GAME,
                releaseDate: "2003",
                releaseOrder: 10,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-MC",
                title: "The Minish Cap",
                type: EntryType.GAME,
                releaseDate: "2005",
                releaseOrder: 11,
                platform: "Game Boy Advanced",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-TP",
                title: "Twilight Princess",
                type: EntryType.GAME,
                releaseDate: "2006",
                releaseOrder: 12,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-PH",
                title: "Phantom Hourglass",
                type: EntryType.GAME,
                releaseDate: "2007",
                releaseOrder: 13,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-ST",
                title: "Spirit Tracks",
                type: EntryType.GAME,
                releaseDate: "2009",
                releaseOrder: 14,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-SS",
                title: "Skyward Sword",
                type: EntryType.GAME,
                releaseDate: "2011",
                releaseOrder: 15,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-ALBW",
                title: "A Link Between Worlds",
                type: EntryType.GAME,
                releaseDate: "2013",
                releaseOrder: 16,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-TFH",
                title: "Tri Force Heroes",
                type: EntryType.GAME,
                releaseDate: "2015",
                releaseOrder: 17,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-BOTW",
                title: "Breath of the Wild",
                type: EntryType.GAME,
                releaseDate: "2017",
                releaseOrder: 18,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-TOTK",
                title: "Tears of the Kingdom",
                type: EntryType.GAME,
                releaseDate: "2023",
                releaseOrder: 19,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "zelda-EOW",
                title: "Echoes of Wisdom",
                type: EntryType.GAME,
                releaseDate: "2024",
                releaseOrder: 20,
                platform: "Switch",
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "metroid",
        title: "Metroid",
        category: "play",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "metroid01",
                title: "Metroid",
                type: EntryType.GAME,
                releaseDate: "1987-08-15",
                releaseOrder: 1,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid02",
                title: "Metroid II: Return of Samus",
                type: EntryType.GAME,
                releaseDate: "1991-11-01",
                releaseOrder: 2,
                platform: "Game Boy",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid03",
                title: "Super Metroid",
                type: EntryType.GAME,
                releaseDate: "1994-04-18",
                releaseOrder: 3,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid04",
                title: "Metroid Fusion",
                type: EntryType.GAME,
                releaseDate: "2002-11-18",
                releaseOrder: 4,
                platform: "Game Boy Advance",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid05",
                title: "Metroid Prime",
                type: EntryType.GAME,
                releaseDate: "2002-11-18",
                releaseOrder: 5,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid06",
                title: "Metroid: Zero Mission",
                type: EntryType.GAME,
                releaseDate: "2004-02-09",
                releaseOrder: 6,
                platform: "Game Boy Advance",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid07",
                title: "Metroid Prime 2: Echoes",
                type: EntryType.GAME,
                releaseDate: "2004-11-15",
                releaseOrder: 7,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid08",
                title: "Metroid Prime Pinball",
                type: EntryType.GAME,
                releaseDate: "2005-10-24",
                releaseOrder: 8,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid09",
                title: "Metroid Prime Hunters",
                type: EntryType.GAME,
                releaseDate: "2006-03-20",
                releaseOrder: 9,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid10",
                title: "Metroid Prime 3: Corruption",
                type: EntryType.GAME,
                releaseDate: "2007-08-27",
                releaseOrder: 10,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid11",
                title: "Metroid: Other M",
                type: EntryType.GAME,
                releaseDate: "2010-08-31",
                releaseOrder: 11,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid12",
                title: "Metroid Prime: Federation Force",
                type: EntryType.GAME,
                releaseDate: "2016-08-19",
                releaseOrder: 12,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid13",
                title: "Metroid: Samus Returns",
                type: EntryType.GAME,
                releaseDate: "2017-09-15",
                releaseOrder: 13,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid14",
                title: "Metroid Dread",
                type: EntryType.GAME,
                releaseDate: "2021-10-08",
                releaseOrder: 14,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid15",
                title: "Metroid Prime Remastered",
                type: EntryType.GAME,
                releaseDate: "2023-02-08",
                releaseOrder: 15,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "metroid16",
                title: "Metroid Prime 4: Beyond",
                type: EntryType.GAME,
                releaseDate: "2025-01-01",
                releaseOrder: 16,
                platform: "Switch 2",
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "finalFantasy",
        title: "Final Fantasy",
        category: "play",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "ff01",
                title: "Final Fantasy",
                type: EntryType.GAME,
                releaseDate: "1990-05-01",
                releaseOrder: 1,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "ff02",
                title: "Final Fantasy II",
                type: EntryType.GAME,
                releaseDate: "1991-11-23",
                releaseOrder: 2,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "ff03",
                title: "Final Fantasy III",
                type: EntryType.GAME,
                releaseDate: "1994-04-27",
                releaseOrder: 3,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "ff04",
                title: "Final Fantasy IV",
                type: EntryType.GAME,
                releaseDate: "1997-09-30",
                releaseOrder: 4,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "ff05",
                title: "Final Fantasy V",
                type: EntryType.GAME,
                releaseDate: "1999-09-30",
                releaseOrder: 5,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "ff06",
                title: "Final Fantasy VI",
                type: EntryType.GAME,
                releaseDate: "1999-10-21",
                releaseOrder: 6,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "ff07",
                title: "Final Fantasy VII",
                type: EntryType.GAME,
                releaseDate: "1997-09-07",
                releaseOrder: 7,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "ff08",
                title: "Final Fantasy VIII",
                type: EntryType.GAME,
                releaseDate: "1999-09-09",
                releaseOrder: 8,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "ff09",
                title: "Final Fantasy IX",
                type: EntryType.GAME,
                releaseDate: "2000-11-13",
                releaseOrder: 9,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "ff10",
                title: "Final Fantasy X",
                type: EntryType.GAME,
                releaseDate: "2001-12-17",
                releaseOrder: 10,
                platform: "PlayStation 2",
                status: Status.NOT_STARTED
            },

            {
                id: "ff11",
                title: "Final Fantasy XI",
                type: EntryType.GAME,
                releaseDate: "2003-10-28",
                releaseOrder: 11,
                platform: "PC",
                status: Status.NOT_STARTED
            },

            {
                id: "ff12",
                title: "Final Fantasy XII",
                type: EntryType.GAME,
                releaseDate: "2006-10-31",
                releaseOrder: 12,
                platform: "PlayStation 2",
                status: Status.NOT_STARTED
            },

            {
                id: "ff13",
                title: "Final Fantasy XIII",
                type: EntryType.GAME,
                releaseDate: "2010-03-09",
                releaseOrder: 13,
                platform: "PlayStation 3",
                status: Status.NOT_STARTED
            },

            {
                id: "ff14",
                title: "Final Fantasy XIV",
                type: EntryType.GAME,
                releaseDate: "2013-08-27",
                releaseOrder: 14,
                platform: "PC",
                status: Status.NOT_STARTED
            },

            {
                id: "ff15",
                title: "Final Fantasy XV",
                type: EntryType.GAME,
                releaseDate: "2016-11-29",
                releaseOrder: 15,
                platform: "PlayStation 4",
                status: Status.NOT_STARTED
            },

            {
                id: "ff16",
                title: "Final Fantasy XVI",
                type: EntryType.GAME,
                releaseDate: "2023-06-22",
                releaseOrder: 16,
                platform: "PlayStation 5",
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "residentEvil",
        title: "Resident Evil",
        category: "play",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "re01",
                title: "Resident Evil",
                type: EntryType.GAME,
                releaseDate: "1996-03-22",
                releaseOrder: 1,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "re02",
                title: "Resident Evil 2",
                type: EntryType.GAME,
                releaseDate: "1998-01-21",
                releaseOrder: 2,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "re03",
                title: "Resident Evil 3: Nemesis",
                type: EntryType.GAME,
                releaseDate: "1999-09-22",
                releaseOrder: 3,
                platform: "PlayStation",
                status: Status.NOT_STARTED
            },

            {
                id: "reCodeVeronica",
                title: "Resident Evil Code: Veronica",
                type: EntryType.GAME,
                releaseDate: "2000-02-03",
                releaseOrder: 4,
                platform: "Dreamcast",
                status: Status.NOT_STARTED
            },

            {
                id: "reZero",
                title: "Resident Evil Zero",
                type: EntryType.GAME,
                releaseDate: "2002-11-12",
                releaseOrder: 5,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "reRemake",
                title: "Resident Evil (Remake)",
                type: EntryType.GAME,
                releaseDate: "2002-04-30",
                releaseOrder: 6,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "re04",
                title: "Resident Evil 4",
                type: EntryType.GAME,
                releaseDate: "2005-01-11",
                releaseOrder: 7,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "re05",
                title: "Resident Evil 5",
                type: EntryType.GAME,
                releaseDate: "2009-03-13",
                releaseOrder: 8,
                platform: "PlayStation 3",
                status: Status.NOT_STARTED
            },

            {
                id: "reRevelations",
                title: "Resident Evil: Revelations",
                type: EntryType.GAME,
                releaseDate: "2012-02-07",
                releaseOrder: 9,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "re06",
                title: "Resident Evil 6",
                type: EntryType.GAME,
                releaseDate: "2012-10-02",
                releaseOrder: 10,
                platform: "PlayStation 3",
                status: Status.NOT_STARTED
            },

            {
                id: "reRevelations2",
                title: "Resident Evil: Revelations 2",
                type: EntryType.GAME,
                releaseDate: "2015-02-24",
                releaseOrder: 11,
                platform: "PlayStation 4",
                status: Status.NOT_STARTED
            },

            {
                id: "re07",
                title: "Resident Evil 7: Biohazard",
                type: EntryType.GAME,
                releaseDate: "2017-01-24",
                releaseOrder: 12,
                platform: "PlayStation 4",
                status: Status.NOT_STARTED
            },

            {
                id: "re02Remake",
                title: "Resident Evil 2 (Remake)",
                type: EntryType.GAME,
                releaseDate: "2019-01-25",
                releaseOrder: 13,
                platform: "PlayStation 4",
                status: Status.NOT_STARTED
            },

            {
                id: "re03Remake",
                title: "Resident Evil 3 (Remake)",
                type: EntryType.GAME,
                releaseDate: "2020-04-03",
                releaseOrder: 14,
                platform: "PlayStation 4",
                status: Status.NOT_STARTED
            },

            {
                id: "reVillage",
                title: "Resident Evil Village",
                type: EntryType.GAME,
                releaseDate: "2021-05-07",
                releaseOrder: 15,
                platform: "PlayStation 5",
                status: Status.NOT_STARTED
            },

            {
                id: "re04Remake",
                title: "Resident Evil 4 (Remake)",
                type: EntryType.GAME,
                releaseDate: "2023-03-24",
                releaseOrder: 16,
                platform: "PlayStation 5",
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "mario",
        title: "Mario",
        category: "play",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "mario01",
                title: "Super Mario Bros.",
                type: EntryType.GAME,
                releaseDate: "1985-10-18",
                releaseOrder: 1,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "mario02",
                title: "Super Mario Bros.: The Lost Levels",
                type: EntryType.GAME,
                releaseDate: "1993-08-01",
                releaseOrder: 2,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "mario03",
                title: "Super Mario Bros. 2",
                type: EntryType.GAME,
                releaseDate: "1988-10-09",
                releaseOrder: 3,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "mario04",
                title: "Super Mario Bros. 3",
                type: EntryType.GAME,
                releaseDate: "1990-02-12",
                releaseOrder: 4,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "mario05",
                title: "Super Mario Land",
                type: EntryType.GAME,
                releaseDate: "1989-07-31",
                releaseOrder: 5,
                platform: "Game Boy",
                status: Status.NOT_STARTED
            },

            {
                id: "mario06",
                title: "Super Mario World",
                type: EntryType.GAME,
                releaseDate: "1991-08-23",
                releaseOrder: 6,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "mario07",
                title: "Super Mario Land 2: 6 Golden Coins",
                type: EntryType.GAME,
                releaseDate: "1992-11-02",
                releaseOrder: 7,
                platform: "Game Boy",
                status: Status.NOT_STARTED
            },

            {
                id: "mario08",
                title: "Super Mario 64",
                type: EntryType.GAME,
                releaseDate: "1996-09-29",
                releaseOrder: 8,
                platform: "Nintendo 64",
                status: Status.NOT_STARTED
            },

            {
                id: "mario09",
                title: "Super Mario Sunshine",
                type: EntryType.GAME,
                releaseDate: "2002-08-26",
                releaseOrder: 9,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "mario10",
                title: "New Super Mario Bros.",
                type: EntryType.GAME,
                releaseDate: "2006-05-15",
                releaseOrder: 10,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "mario11",
                title: "Super Mario Galaxy",
                type: EntryType.GAME,
                releaseDate: "2007-11-12",
                releaseOrder: 11,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "mario12",
                title: "New Super Mario Bros. Wii",
                type: EntryType.GAME,
                releaseDate: "2009-11-15",
                releaseOrder: 12,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "mario13",
                title: "Super Mario Galaxy 2",
                type: EntryType.GAME,
                releaseDate: "2010-05-23",
                releaseOrder: 13,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "mario14",
                title: "Super Mario 3D Land",
                type: EntryType.GAME,
                releaseDate: "2011-11-13",
                releaseOrder: 14,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "mario15",
                title: "New Super Mario Bros. 2",
                type: EntryType.GAME,
                releaseDate: "2012-08-19",
                releaseOrder: 15,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "mario16",
                title: "New Super Mario Bros. U",
                type: EntryType.GAME,
                releaseDate: "2012-11-18",
                releaseOrder: 16,
                platform: "Wii U",
                status: Status.NOT_STARTED
            },

            {
                id: "mario17",
                title: "Super Mario 3D World",
                type: EntryType.GAME,
                releaseDate: "2013-11-22",
                releaseOrder: 17,
                platform: "Wii U",
                status: Status.NOT_STARTED
            },

            {
                id: "mario18",
                title: "Super Mario Maker",
                type: EntryType.GAME,
                releaseDate: "2015-09-11",
                releaseOrder: 18,
                platform: "Wii U",
                status: Status.NOT_STARTED
            },

            {
                id: "mario19",
                title: "Super Mario Run",
                type: EntryType.GAME,
                releaseDate: "2016-12-15",
                releaseOrder: 19,
                platform: "Mobile",
                status: Status.NOT_STARTED
            },

            {
                id: "mario20",
                title: "Super Mario Odyssey",
                type: EntryType.GAME,
                releaseDate: "2017-10-27",
                releaseOrder: 20,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "mario21",
                title: "Super Mario Maker 2",
                type: EntryType.GAME,
                releaseDate: "2019-06-28",
                releaseOrder: 21,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "mario22",
                title: "Bowser's Fury",
                type: EntryType.GAME,
                releaseDate: "2021-02-12",
                releaseOrder: 22,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "mario23",
                title: "Super Mario Bros. Wonder",
                type: EntryType.GAME,
                releaseDate: "2023-10-20",
                releaseOrder: 23,
                platform: "Switch",
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "fireEmblem",
        title: "Fire Emblem",
        category: "play",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "fe01",
                title: "Fire Emblem: Shadow Dragon and the Blade of Light",
                type: EntryType.GAME,
                releaseDate: "1990-04-20",
                releaseOrder: 1,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "fe02",
                title: "Fire Emblem Gaiden",
                type: EntryType.GAME,
                releaseDate: "1992-03-14",
                releaseOrder: 2,
                platform: "NES",
                status: Status.NOT_STARTED
            },

            {
                id: "fe03",
                title: "Fire Emblem: Mystery of the Emblem",
                type: EntryType.GAME,
                releaseDate: "1994-01-21",
                releaseOrder: 3,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "fe04",
                title: "Fire Emblem: Genealogy of the Holy War",
                type: EntryType.GAME,
                releaseDate: "1996-05-14",
                releaseOrder: 4,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "fe05",
                title: "Fire Emblem: Thracia 776",
                type: EntryType.GAME,
                releaseDate: "1999-09-01",
                releaseOrder: 5,
                platform: "SNES",
                status: Status.NOT_STARTED
            },

            {
                id: "fe06",
                title: "Fire Emblem: The Binding Blade",
                type: EntryType.GAME,
                releaseDate: "2002-03-29",
                releaseOrder: 6,
                platform: "Game Boy Advance",
                status: Status.NOT_STARTED
            },

            {
                id: "fe07",
                title: "Fire Emblem",
                type: EntryType.GAME,
                releaseDate: "2003-11-03",
                releaseOrder: 7,
                platform: "Game Boy Advance",
                status: Status.NOT_STARTED
            },

            {
                id: "fe08",
                title: "Fire Emblem: The Sacred Stones",
                type: EntryType.GAME,
                releaseDate: "2005-05-23",
                releaseOrder: 8,
                platform: "Game Boy Advance",
                status: Status.NOT_STARTED
            },

            {
                id: "fe09",
                title: "Fire Emblem: Path of Radiance",
                type: EntryType.GAME,
                releaseDate: "2005-10-17",
                releaseOrder: 9,
                platform: "GameCube",
                status: Status.NOT_STARTED
            },

            {
                id: "fe10",
                title: "Fire Emblem: Radiant Dawn",
                type: EntryType.GAME,
                releaseDate: "2007-11-05",
                releaseOrder: 10,
                platform: "Wii",
                status: Status.NOT_STARTED
            },

            {
                id: "fe11",
                title: "Fire Emblem: Shadow Dragon",
                type: EntryType.GAME,
                releaseDate: "2009-02-16",
                releaseOrder: 11,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "fe12",
                title: "Fire Emblem: New Mystery of the Emblem",
                type: EntryType.GAME,
                releaseDate: "2010-07-15",
                releaseOrder: 12,
                platform: "DS",
                status: Status.NOT_STARTED
            },

            {
                id: "fe13",
                title: "Fire Emblem Awakening",
                type: EntryType.GAME,
                releaseDate: "2013-02-04",
                releaseOrder: 13,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "fe14",
                title: "Fire Emblem Fates",
                type: EntryType.GAME,
                releaseDate: "2016-02-19",
                releaseOrder: 14,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "fe15",
                title: "Fire Emblem Echoes: Shadows of Valentia",
                type: EntryType.GAME,
                releaseDate: "2017-05-19",
                releaseOrder: 15,
                platform: "3DS",
                status: Status.NOT_STARTED
            },

            {
                id: "fe16",
                title: "Fire Emblem: Three Houses",
                type: EntryType.GAME,
                releaseDate: "2019-07-26",
                releaseOrder: 16,
                platform: "Switch",
                status: Status.NOT_STARTED
            },

            {
                id: "fe17",
                title: "Fire Emblem Engage",
                type: EntryType.GAME,
                releaseDate: "2023-01-20",
                releaseOrder: 17,
                platform: "Switch",
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "dcc",
        title: "Dungeon Crawler Carl",
        category: "read",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "dcc1",
                title: "Dungeon Crawler Carl",
                releaseDate: "2020-09-21",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc2",
                title: "Carl's Doomsday Scenario",
                releaseDate: "2021-01-02",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc3",
                title: "The Dungeon Anarchist's Cookbook",
                releaseDate: "2021-03-19",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc4",
                title: "The Gate of the Feral Gods",
                releaseDate: "2021-06-14",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc5",
                title: "The Butcher's Masquarade",
                releaseDate: "2022-02-19",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc6",
                title: "The Eye of the Bedlam Bride",
                releaseDate: "2023-06-14",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc7",
                title: "This Inevitable Ruin",
                releaseDate: "2024-11-07",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dcc8",
                title: "A Parade of Horribles",
                releaseDate: "2026-05-12",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "cosmere",
        title: "Cosmere",
        category: "read",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "elantris",
                title: "Elantris",
                type: EntryType.BOOK,
                releaseDate: "2005-04-21",
                releaseOrder: 1,
                status: Status.NOT_STARTED
            },

            {
                id: "hopeOfElantris",
                title: "The Hope of Elantris",
                type: EntryType.BOOK,
                releaseDate: "2006-08-01",
                releaseOrder: 2,
                status: Status.NOT_STARTED
            },

            {
                id: "emperorsSoul",
                title: "The Emperor's Soul",
                type: EntryType.BOOK,
                releaseDate: "2012-10-11",
                releaseOrder: 3,
                status: Status.NOT_STARTED
            },

            {
                id: "mistbornFinalEmpire",
                title: "Mistborn: The Final Empire",
                type: EntryType.BOOK,
                releaseDate: "2006-07-17",
                releaseOrder: 4,
                status: Status.NOT_STARTED
            },

            {
                id: "mistbornWellOfAscension",
                title: "Mistborn: The Well of Ascension",
                type: EntryType.BOOK,
                releaseDate: "2007-08-21",
                releaseOrder: 5,
                status: Status.NOT_STARTED
            },

            {
                id: "mistbornHeroOfAges",
                title: "Mistborn: The Hero of Ages",
                type: EntryType.BOOK,
                releaseDate: "2008-10-14",
                releaseOrder: 6,
                status: Status.NOT_STARTED
            },

            {
                id: "warbreaker",
                title: "Warbreaker",
                type: EntryType.BOOK,
                releaseDate: "2009-06-09",
                releaseOrder: 7,
                status: Status.NOT_STARTED
            },

            {
                id: "wayOfKings",
                title: "The Way of Kings",
                type: EntryType.BOOK,
                releaseDate: "2010-08-31",
                releaseOrder: 8,
                status: Status.NOT_STARTED
            },

            {
                id: "alloyOfLaw",
                title: "Mistborn: The Alloy of Law",
                type: EntryType.BOOK,
                releaseDate: "2011-11-08",
                releaseOrder: 9,
                status: Status.NOT_STARTED
            },

            {
                id: "shadowsForSilence",
                title: "Shadows for Silence in the Forests of Hell",
                type: EntryType.BOOK,
                releaseDate: "2013-12-03",
                releaseOrder: 10,
                status: Status.NOT_STARTED
            },

            {
                id: "wordsOfRadiance",
                title: "Words of Radiance",
                type: EntryType.BOOK,
                releaseDate: "2014-03-04",
                releaseOrder: 11,
                status: Status.NOT_STARTED
            },

            {
                id: "sixthOfTheDusk",
                title: "Sixth of the Dusk",
                type: EntryType.BOOK,
                releaseDate: "2014-10-06",
                releaseOrder: 12,
                status: Status.NOT_STARTED
            },

            {
                id: "shadowsOfSelf",
                title: "Mistborn: Shadows of Self",
                type: EntryType.BOOK,
                releaseDate: "2015-10-06",
                releaseOrder: 13,
                status: Status.NOT_STARTED
            },

            {
                id: "bandsOfMourning",
                title: "Mistborn: The Bands of Mourning",
                type: EntryType.BOOK,
                releaseDate: "2016-01-26",
                releaseOrder: 14,
                status: Status.NOT_STARTED
            },

            {
                id: "edgedancer",
                title: "Edgedancer",
                type: EntryType.BOOK,
                releaseDate: "2016-10-11",
                releaseOrder: 15,
                status: Status.NOT_STARTED
            },

            {
                id: "arcanumUnbounded",
                title: "Arcanum Unbounded",
                type: EntryType.BOOK,
                releaseDate: "2016-11-22",
                releaseOrder: 16,
                status: Status.NOT_STARTED
            },

            {
                id: "oathbringer",
                title: "Oathbringer",
                type: EntryType.BOOK,
                releaseDate: "2017-11-14",
                releaseOrder: 17,
                status: Status.NOT_STARTED
            },

            {
                id: "dawnshard",
                title: "Dawnshard",
                type: EntryType.BOOK,
                releaseDate: "2020-11-05",
                releaseOrder: 18,
                status: Status.NOT_STARTED
            },

            {
                id: "rhythmOfWar",
                title: "Rhythm of War",
                type: EntryType.BOOK,
                releaseDate: "2020-11-17",
                releaseOrder: 19,
                status: Status.NOT_STARTED
            },

            {
                id: "lostMetal",
                title: "Mistborn: The Lost Metal",
                type: EntryType.BOOK,
                releaseDate: "2022-11-15",
                releaseOrder: 20,
                status: Status.NOT_STARTED
            },

            {
                id: "tress",
                title: "Tress of the Emerald Sea",
                type: EntryType.BOOK,
                releaseDate: "2023-01-10",
                releaseOrder: 21,
                status: Status.NOT_STARTED
            },

            {
                id: "yumi",
                title: "Yumi and the Nightmare Painter",
                type: EntryType.BOOK,
                releaseDate: "2023-07-01",
                releaseOrder: 23,
                status: Status.NOT_STARTED
            },

            {
                id: "sunlitMan",
                title: "The Sunlit Man",
                type: EntryType.BOOK,
                releaseDate: "2023-10-01",
                releaseOrder: 24,
                status: Status.NOT_STARTED
            },

            {
                id: "windAndTruth",
                title: "Wind and Truth",
                type: EntryType.BOOK,
                releaseDate: "2024-12-06",
                releaseOrder: 25,
                status: Status.NOT_STARTED
            },

            {
                id: "islesOfTheEmberdark",
                title: "Isles Of The Emberdark",
                type: EntryType.BOOK,
                releaseDate: "2025-07-10",
                releaseOrder: 25,
                status: Status.NOT_STARTED
            },

            {
                id: "firesOfDecember",
                title: "Fires of December",
                type: EntryType.BOOK,
                releaseDate: "2026-12-08",
                releaseOrder: 25,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "dresdenFiles",
        title: "The Dresden Files",
        category: "read",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "dresden01",
                title: "Storm Front",
                releaseDate: "2000-04-01",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden02",
                title: "Fool Moon",
                releaseDate: "2001-01-01",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden03",
                title: "Grave Peril",
                releaseDate: "2001-09-01",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden04",
                title: "Summer Knight",
                releaseDate: "2002-09-03",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden05",
                title: "Death Masks",
                releaseDate: "2003-08-05",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden06",
                title: "Blood Rites",
                releaseDate: "2004-08-02",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden07",
                title: "Dead Beat",
                releaseDate: "2006-05-02",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden08",
                title: "Proven Guilty",
                releaseDate: "2007-02-06",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden09",
                title: "White Night",
                releaseDate: "2008-02-05",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden10",
                title: "Small Favor",
                releaseDate: "2009-05-03",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden11",
                title: "Turn Coat",
                releaseDate: "2010-03-03",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden12",
                title: "Changes",
                releaseDate: "2011-03-11",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden13",
                title: "Ghost Story",
                releaseDate: "2012-08-07",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden14",
                title: "Cold Days",
                releaseDate: "2013-09-03",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden15",
                title: "Skin Game",
                releaseDate: "2015-03-05",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden16",
                title: "Peace Talks",
                releaseDate: "2020-07-14",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden17",
                title: "Battle Ground",
                releaseDate: "2020-09-29",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "dresden18",
                title: "Twelve Months",
                releaseDate: "2026-01-20",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "agathaChristie",
        title: "Agatha Christie",
        category: "read",
        profiles: [
            profiles.BRETT
        ],
        entries: [
            {
                id: "agatha01",
                title: "The Mysterious Affair at Styles",
                releaseDate: "1920",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha02",
                title: "The Murder on the Links",
                releaseDate: "1923",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha03",
                title: "Poirot Investigates",
                releaseDate: "1924",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha04",
                title: "The Murder of Roger Ackroyd",
                releaseDate: "1926",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha05",
                title: "The Big Four",
                releaseDate: "1927",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha06",
                title: "The Mystery of the Blue Train",
                releaseDate: "1928",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha07",
                title: "Black Coffee",
                releaseDate: "1930",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha08",
                title: "Peril at End House",
                releaseDate: "1932",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha09",
                title: "Lord Edgware Dies",
                releaseDate: "1933",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha10",
                title: "Murder on the Orient Express",
                releaseDate: "1934",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha11",
                title: "Three Act Tragedy",
                releaseDate: "1935",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha12",
                title: "Death in the Clouds",
                releaseDate: "1935",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha13",
                title: "The A.B.C. Murders",
                releaseDate: "1936",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha14",
                title: "Murder in Mesopotamia",
                releaseDate: "1936",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha15",
                title: "Cards on the Table",
                releaseDate: "1936",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha16",
                title: "Murder in the Mews",
                releaseDate: "1937",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha17",
                title: "Dumb Witness",
                releaseDate: "1937",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha18",
                title: "Death on the Nile",
                releaseDate: "1937",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha19",
                title: "Appointment with Death",
                releaseDate: "1938",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha20",
                title: "Hercule Poirot's Christmas",
                releaseDate: "1938",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha21",
                title: "Sad Cypress",
                releaseDate: "1940",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha22",
                title: "One, Two, Buckle My Shoe",
                releaseDate: "1940",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha23",
                title: "Evil Under the Sun",
                releaseDate: "1941",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha24",
                title: "Five Little Pigs",
                releaseDate: "1942",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha25",
                title: "The Hollow",
                releaseDate: "1946",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha26",
                title: "The Labours of Hercules",
                releaseDate: "1947",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha27",
                title: "Taken at the Flood",
                releaseDate: "1948",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha28",
                title: "The Under Dog and Other Stories",
                releaseDate: "1951",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha29",
                title: "Mrs McGinty's Dead",
                releaseDate: "1952",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha30",
                title: "After the Funeral",
                releaseDate: "1953",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha31",
                title: "Hickory Dickory Dock",
                releaseDate: "1955",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha32",
                title: "Dead Man's Folly",
                releaseDate: "1956",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha33",
                title: "Cat Among the Pigeons",
                releaseDate: "1959",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha34",
                title: "The Clocks",
                releaseDate: "1963",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha35",
                title: "Third Girl",
                releaseDate: "1966",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha36",
                title: "Hallowe'en Party",
                releaseDate: "1969",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha37",
                title: "Elephants Can Remember",
                releaseDate: "1972",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha38",
                title: "Poirot's Early Cases",
                releaseDate: "1974",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "agatha39",
                title: "Curtain",
                releaseDate: "1975",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "narnia",
        title: "The Chronicles of Narnia",
        category: "read",
        profiles: [
            profiles.BRETT,
            profiles.RILEY,
            profiles.COLBIE
        ],
        entries: [
            {
                id: "narnia01",
                title: "The Magician's Nephew",
                releaseDate: "1955",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "narnia02",
                title: "The Lion, the Witch, and the Wardrobe",
                releaseDate: "1950",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "narnia03",
                title: "The Horse and His Boy",
                releaseDate: "1954",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "narnia04",
                title: "Prince Caspian",
                releaseDate: "1951",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "narnia05",
                title: "The Voyage of the Dawn Treader",
                releaseDate: "1952",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "narnia06",
                title: "The Silver Chair",
                releaseDate: "1953",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "narnia07",
                title: "The Last Battle",
                releaseDate: "1956",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "colbieBooks",
        title: "Colbie's Favorites",
        category: "read",
        profiles: [
            profiles.COLBIE
        ],
        entries: [
            {
                id: "poopBook",
                title: "Everyone Poops",
                releaseDate: "2000",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            }
        ]
    },

    {
        id: "dragonMasters",
        title: "Dragon Masters",
        category: "read",
        profiles: [
            profiles.RILEY,
            profiles.COLBIE
        ],
        entries: [
            { id: "dm01", title: "Rise of the Earth Dragon", releaseDate: "2014", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm02", title: "Saving the Sun Dragon", releaseDate: "2014", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm03", title: "Secret of the Water Dragon", releaseDate: "2015", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm04", title: "Power of the Fire Dragon", releaseDate: "2015", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm05", title: "Song of the Poison Dragon", releaseDate: "2015", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm06", title: "Flight of the Moon Dragon", releaseDate: "2016", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm07", title: "Search for the Lightning Dragon", releaseDate: "2016", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm08", title: "Roar of the Thunder Dragon", releaseDate: "2016", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm09", title: "Chill of the Ice Dragon", releaseDate: "2017", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm10", title: "Waking the Rainbow Dragon", releaseDate: "2017", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm11", title: "Shine of the Silver Dragon", releaseDate: "2017", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm12", title: "Treasure of the Gold Dragon", releaseDate: "2018", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm13", title: "Eye of the Earthquake Dragon", releaseDate: "2018", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm14", title: "Land of the Spring Dragon", releaseDate: "2018", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm15", title: "Future of the Time Dragon", releaseDate: "2019", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm16", title: "Call of the Sound Dragon", releaseDate: "2019", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm17", title: "Fortress of the Stone Dragon", releaseDate: "2020", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm18", title: "Heat of the Lava Dragon", releaseDate: "2020", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm19", title: "Wave of the Sea Dragon", releaseDate: "2020", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm20", title: "Howl of the Wind Dragon", releaseDate: "2021", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm21", title: "Bloom of the Flower Dragon", releaseDate: "2021", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm22", title: "Guardians of the Crystal Dragon", releaseDate: "2022", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm23", title: "Legend of the Star Dragon", releaseDate: "2022", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm24", title: "City of the Wizard King", releaseDate: "2023", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm25", title: "Guardians of the Lost City", releaseDate: "2023", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm26", title: "Cave of the Crystal Dragon", releaseDate: "2024", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm27", title: "The Frozen Earth Dragon", releaseDate: "2024", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "dm28", title: "Night of the Dream Dragon", releaseDate: "2025", type: EntryType.BOOK, status: Status.NOT_STARTED }
        ]
    },

    {
        id: "magicTreeHouse",
        title: "Magic Tree House",
        category: "read",
        profiles: [
            profiles.RILEY,
            profiles.COLBIE
        ],
        entries: [
            { id: "mth01", title: "Dinosaurs Before Dark", releaseDate: "1992", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth02", title: "The Knight at Dawn", releaseDate: "1993", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth03", title: "Mummies in the Morning", releaseDate: "1993", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth04", title: "Pirates Past Noon", releaseDate: "1994", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth05", title: "Night of the Ninjas", releaseDate: "1995", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth06", title: "Afternoon on the Amazon", releaseDate: "1995", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth07", title: "Sunset of the Sabertooth", releaseDate: "1996", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth08", title: "Midnight on the Moon", releaseDate: "1996", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth09", title: "Dolphins at Daybreak", releaseDate: "1997", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth10", title: "Ghost Town at Sundown", releaseDate: "1997", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth11", title: "Lions at Lunchtime", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth12", title: "Polar Bears Past Bedtime", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth13", title: "Vacation Under the Volcano", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth14", title: "Day of the Dragon King", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth15", title: "Viking Ships at Sunrise", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth16", title: "Hour of the Olympics", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth17", title: "Tonight on the Titanic", releaseDate: "1999", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth18", title: "Buffalo Before Breakfast", releaseDate: "1999", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth19", title: "Tigers at Twilight", releaseDate: "1999", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth20", title: "Dingoes at Dinnertime", releaseDate: "2000", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth21", title: "Civil War on Sunday", releaseDate: "2000", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth22", title: "Revolutionary War on Wednesday", releaseDate: "2000", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth23", title: "Twister on Tuesday", releaseDate: "2001", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth24", title: "Earthquake in the Early Morning", releaseDate: "2001", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth25", title: "Stage Fright on a Summer Night", releaseDate: "2002", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth26", title: "Good Morning, Gorillas", releaseDate: "2002", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth27", title: "Thanksgiving on Thursday", releaseDate: "2002", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth28", title: "High Tide in Hawaii", releaseDate: "2003", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth29", title: "Christmas in Camelot", releaseDate: "2001", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth30", title: "Haunted Castle on Hallows Eve", releaseDate: "2003", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth31", title: "Summer of the Sea Serpent", releaseDate: "2004", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth32", title: "Winter of the Ice Wizard", releaseDate: "2004", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth33", title: "Carnival at Candlelight", releaseDate: "2005", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth34", title: "Season of the Sandstorms", releaseDate: "2005", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth35", title: "Night of the New Magicians", releaseDate: "2006", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth36", title: "Blizzard of the Blue Moon", releaseDate: "2006", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth37", title: "Dragon of the Red Dawn", releaseDate: "2008", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth38", title: "Monday with a Mad Genius", releaseDate: "2007", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth39", title: "Dark Day in the Deep Sea", releaseDate: "2009", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "mth40", title: "Eve of the Emperor Penguin", releaseDate: "2009", type: EntryType.BOOK, status: Status.NOT_STARTED }
        ]
    },

    {
        id: "junieBJones",
        title: "Junie B. Jones",
        category: "read",
        profiles: [
            profiles.RILEY,
            profiles.COLBIE
        ],
        entries: [
            { id: "jbj01", title: "Junie B. Jones and the Stupid Smelly Bus", releaseDate: "1992", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj02", title: "Junie B. Jones and a Little Monkey Business", releaseDate: "1993", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj03", title: "Junie B. Jones and Her Big Fat Mouth", releaseDate: "1993", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj04", title: "Junie B. Jones and Some Sneaky Peeky Spying", releaseDate: "1994", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj05", title: "Junie B. Jones and the Yucky Blucky Fruitcake", releaseDate: "1995", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj06", title: "Junie B. Jones and That Meanie Jim's Birthday", releaseDate: "1996", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj07", title: "Junie B. Jones Loves Handsome Warren", releaseDate: "1996", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj08", title: "Junie B. Jones Has a Monster Under Her Bed", releaseDate: "1997", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj09", title: "Junie B. Jones Is Not a Crook", releaseDate: "1997", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj10", title: "Junie B. Jones Is a Party Animal", releaseDate: "1997", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj11", title: "Junie B. Jones Is a Beauty Shop Guy", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj12", title: "Junie B. Jones Smells Something Fishy", releaseDate: "1998", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj13", title: "Junie B. Jones Is (Almost) a Flower Girl", releaseDate: "1999", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj14", title: "Junie B. Jones and the Mushy Gushy Valentime", releaseDate: "1999", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj15", title: "Junie B. Jones Has a Peep in Her Pocket", releaseDate: "2000", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj16", title: "Junie B. Jones Is Captain Field Day", releaseDate: "2001", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj17", title: "Junie B. Jones Is a Graduation Girl", releaseDate: "2001", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj18", title: "First Grader (at Last!)", releaseDate: "2001", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj19", title: "Junie B., First Grader: Boss of Lunch", releaseDate: "2002", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj20", title: "Junie B., First Grader: Toothless Wonder", releaseDate: "2002", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj21", title: "Junie B., First Grader: Cheater Pants", releaseDate: "2003", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj22", title: "Junie B., First Grader: One-Man Band", releaseDate: "2003", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj23", title: "Junie B., First Grader: Shipwrecked", releaseDate: "2004", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj24", title: "Junie B., First Grader: Boo... and I MEAN It!", releaseDate: "2004", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj25", title: "Junie B., First Grader: Jingle Bells, Batman Smells! (P.S. So Does May.)", releaseDate: "2005", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj26", title: "Junie B., First Grader: Aloha-ha-ha!", releaseDate: "2006", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj27", title: "Junie B., First Grader: Dumb Bunny", releaseDate: "2007", type: EntryType.BOOK, status: Status.NOT_STARTED },
            { id: "jbj28", title: "Junie B., First Grader: Turkeys We Have Loved and Eaten (and Other Thankful Stuff)", releaseDate: "2012", type: EntryType.BOOK, status: Status.NOT_STARTED }
        ]
    },

    {
        id: "harryPotter",
        title: "Harry Potter",
        category: "read",
        profiles: [
            profiles.BRETT,
            profiles.RILEY
        ],
        entries: [
            {
                id: "hp01",
                title: "Harry Potter and the Philosopher's Stone",
                releaseDate: "1997",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "hp02",
                title: "Harry Potter and the Chamber of Secrets",
                releaseDate: "1998",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "hp03",
                title: "Harry Potter and the Prisoner of Azkaban",
                releaseDate: "1999",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "hp04",
                title: "Harry Potter and the Goblet of Fire",
                releaseDate: "2000",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "hp05",
                title: "Harry Potter and the Order of the Phoenix",
                releaseDate: "2003",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "hp06",
                title: "Harry Potter and the Half-Blood Prince",
                releaseDate: "2005",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            },

            {
                id: "hp07",
                title: "Harry Potter and the Deathly Hallows",
                releaseDate: "2007",
                type: EntryType.BOOK,
                status: Status.NOT_STARTED
            }
        ]
    }

];

const defaultCollections = structuredClone(collections);