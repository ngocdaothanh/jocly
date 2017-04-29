
var mvs = {
    "models": {
        "mana": {
            "plazza": "true",
            "js": [
                "mana-model.js"
            ],
            "title-en": "Mana",
            "maxLevel": 9,
            "summary": "Capture the opponent's Damyo",
            "module": "mana",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "thumbnail": "thumbnail.png",
            "defaultLevel": 2,
            "gameOptions": {
                "preventRepeat": true,
                "width": 6,
                "height": 6,
                "initial": [
                    "223122",
                    "131313",
                    "312231",
                    "231312",
                    "213132",
                    "132213"
                ],
                "damyoCount": 1,
                "roninCount": 5,
                "insertAnywhere": true,
                "damyoKillWin": 1,
                "stage1start": 3,
                "stage2start": 6,
                "factors": {
                    "roninCount": [
                        0,
                        5,
                        5,
                        0,
                        5,
                        10
                    ],
                    "sameAsDamyo": 10,
                    "typeCount": [
                        0,
                        10,
                        20,
                        5
                    ],
                    "dist2Damyo": -1,
                    "dist2DamyoInvSquare": 50
                }
            },
            "levels": [
                {
                    "label": "Padawan",
                    "potential": 1000,
                    "isDefault": true,
                    "maxDepth": 2
                },
                {
                    "label": "Warrior",
                    "potential": 4000,
                    "maxDepth": 5
                },
                {
                    "label": "Samurai",
                    "potential": 20000,
                    "maxDepth": 6
                },
                {
                    "label": "Ronin",
                    "potential": 40000,
                    "maxDepth": 8
                },
                {
                    "label": "Damyo",
                    "potential": 100000,
                    "maxDepth": 8
                }
            ]
        }
    },
    "views": {
        "mana": {
            "title-en": "Mana View",
            "module": "mana",
            "css": "mana.css",
            "js": [
                "mana-xd-view.js"
            ],
            "visuals": {
                "600x600": [
                    "res/visuals/mana-600x600-3d.jpg",
                    "res/visuals/mana-600x600-2d.jpg"
                ]
            },
            "preferredRatio": 1,
            "switchable": true,
            "xdView": true,
            "sounds": {
                "death1": "death1",
                "death2": "death2",
                "death3": "death3",
                "chains": "chains",
                "move1": "move1",
                "move3": "move3",
                "zip0": "zip0",
                "zip1": "zip1",
                "zip2": "zip2",
                "zip3": "zip3",
                "sabers": "sabersout",
                "deathdamyo": "manasound-kill2",
                "intro": "japenese-mana-intro",
                "wind": "wind"
            },
            "skins": [
                {
                    "name": "orange3d",
                    "title": "Orange (3D)",
                    "3d": true,
                    "camera": {
                        "radius": 15,
                        "limitCamMoves": true
                    },
                    "world": {
                        "lightIntensity": 0.7,
                        "skyLightIntensity": 0.2,
                        "fog": true,
                        "color": 14327863,
                        "lightPosition": {
                            "x": -10,
                            "y": 18,
                            "z": 10
                        },
                        "skyLightPosition": {
                            "x": 10,
                            "y": 18,
                            "z": -10
                        },
                        "lightShadowDarkness": 0.25,
                        "ambientLightColor": 8939008
                    },
                    "preload": [
                        "smoothedfilegeo|0|/res/xd-view/meshes/strokeblack.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/mana-piece-smoothed2.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/select-ring-undo.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/select-smoothed.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/mana.js"
                    ]
                },
                {
                    "name": "official",
                    "title": "Official",
                    "preload": [
                        "image|/res/images/boardexp.png",
                        "image|/res/images/manapieces.png"
                    ]
                }
            ],
            "defaultOptions": {
                "sounds": true,
                "notation": false,
                "moves": true
            },
            "useNotation": true,
            "useShowMoves": true,
            "animateSelfMoves": false
        }
    }
};

var games = {};

for(var name in mvs.models) 
	if(mvs.models.hasOwnProperty(name)) {
		games[name] = {
			name: name,
			modelScripts: mvs.models[name].js,
			config: {
				status: true,
				model: mvs.models[name]
			}
		}
	}

for(var name in mvs.views)
	if(mvs.views.hasOwnProperty(name)) {
		if(games[name]) {
			games[name].viewScripts = mvs.views[name].js;
			games[name].config.view = mvs.views[name];
		}
	}

exports.games = Object.keys(games).map((name)=>{
    return games[name];
});