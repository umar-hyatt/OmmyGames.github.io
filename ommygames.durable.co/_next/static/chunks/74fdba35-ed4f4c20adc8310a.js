"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [708], {
        16855: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n(67887),
                i = n.n(r),
                a = n(67855),
                s = n(43144),
                o = n(53229),
                l = n(75068),
                u = n(52022),
                c = n(10251),
                h = n.n(c),
                f = n(98537),
                p = n(27055),
                d = n.n(p),
                g = n(87757),
                y = n.n(g),
                v = n(16313),
                m = n.n(v),
                b = n(80311),
                w = n.n(b),
                _ = n(48764).Buffer,
                C = {
                    logErrors: !1
                },
                S = [];

            function x(e, t, n) {
                if (n.get) {
                    var r = n.get;
                    n.get = function() {
                        var e = r.call(this);
                        return Object.defineProperty(this, t, {
                            value: e
                        }), e
                    }
                } else if ("function" === typeof n.value) {
                    var i = n.value;
                    return {
                        get: function() {
                            var e = new Map;

                            function n() {
                                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                var a = n.length > 0 ? n[0] : "value";
                                if (e.has(a)) return e.get(a);
                                var s = i.apply(this, n);
                                return e.set(a, s), s
                            }
                            return Object.defineProperty(this, t, {
                                value: n
                            }), n
                        }
                    }
                }
            }
            C.registerFormat = function(e) {
                S.push(e)
            }, C.openSync = function(e, t) {
                throw new Error("fontkit.openSync unavailable for browser build")
            }, C.open = function(e, t, n) {
                throw new Error("fontkit.open unavailable for browser build")
            }, C.create = function(e, t) {
                for (var n = 0; n < S.length; n++) {
                    var r = S[n];
                    if (r.probe(e)) {
                        var a = new r(new(i().DecodeStream)(e));
                        return t ? a.getFont(t) : a
                    }
                }
                throw new Error("Unknown font format")
            }, C.defaultLanguage = "en", C.setDefaultLanguage = function(e) {
                void 0 === e && (e = "en"), C.defaultLanguage = e
            };
            var k = new(i().Struct)({
                    firstCode: i().uint16,
                    entryCount: i().uint16,
                    idDelta: i().int16,
                    idRangeOffset: i().uint16
                }),
                A = new(i().Struct)({
                    startCharCode: i().uint32,
                    endCharCode: i().uint32,
                    glyphID: i().uint32
                }),
                P = new(i().Struct)({
                    startUnicodeValue: i().uint24,
                    additionalCount: i().uint8
                }),
                I = new(i().Struct)({
                    unicodeValue: i().uint24,
                    glyphID: i().uint16
                }),
                O = new(i().Array)(P, i().uint32),
                F = new(i().Array)(I, i().uint32),
                D = new(i().Struct)({
                    varSelector: i().uint24,
                    defaultUVS: new(i().Pointer)(i().uint32, O, {
                        type: "parent"
                    }),
                    nonDefaultUVS: new(i().Pointer)(i().uint32, F, {
                        type: "parent"
                    })
                }),
                T = new(i().VersionedStruct)(i().uint16, {
                    0: {
                        length: i().uint16,
                        language: i().uint16,
                        codeMap: new(i().LazyArray)(i().uint8, 256)
                    },
                    2: {
                        length: i().uint16,
                        language: i().uint16,
                        subHeaderKeys: new(i().Array)(i().uint16, 256),
                        subHeaderCount: function(e) {
                            return Math.max.apply(Math, e.subHeaderKeys)
                        },
                        subHeaders: new(i().LazyArray)(k, "subHeaderCount"),
                        glyphIndexArray: new(i().LazyArray)(i().uint16, "subHeaderCount")
                    },
                    4: {
                        length: i().uint16,
                        language: i().uint16,
                        segCountX2: i().uint16,
                        segCount: function(e) {
                            return e.segCountX2 >> 1
                        },
                        searchRange: i().uint16,
                        entrySelector: i().uint16,
                        rangeShift: i().uint16,
                        endCode: new(i().LazyArray)(i().uint16, "segCount"),
                        reservedPad: new(i().Reserved)(i().uint16),
                        startCode: new(i().LazyArray)(i().uint16, "segCount"),
                        idDelta: new(i().LazyArray)(i().int16, "segCount"),
                        idRangeOffset: new(i().LazyArray)(i().uint16, "segCount"),
                        glyphIndexArray: new(i().LazyArray)(i().uint16, (function(e) {
                            return (e.length - e._currentOffset) / 2
                        }))
                    },
                    6: {
                        length: i().uint16,
                        language: i().uint16,
                        firstCode: i().uint16,
                        entryCount: i().uint16,
                        glyphIndices: new(i().LazyArray)(i().uint16, "entryCount")
                    },
                    8: {
                        reserved: new(i().Reserved)(i().uint16),
                        length: i().uint32,
                        language: i().uint16,
                        is32: new(i().LazyArray)(i().uint8, 8192),
                        nGroups: i().uint32,
                        groups: new(i().LazyArray)(A, "nGroups")
                    },
                    10: {
                        reserved: new(i().Reserved)(i().uint16),
                        length: i().uint32,
                        language: i().uint32,
                        firstCode: i().uint32,
                        entryCount: i().uint32,
                        glyphIndices: new(i().LazyArray)(i().uint16, "numChars")
                    },
                    12: {
                        reserved: new(i().Reserved)(i().uint16),
                        length: i().uint32,
                        language: i().uint32,
                        nGroups: i().uint32,
                        groups: new(i().LazyArray)(A, "nGroups")
                    },
                    13: {
                        reserved: new(i().Reserved)(i().uint16),
                        length: i().uint32,
                        language: i().uint32,
                        nGroups: i().uint32,
                        groups: new(i().LazyArray)(A, "nGroups")
                    },
                    14: {
                        length: i().uint32,
                        numRecords: i().uint32,
                        varSelectors: new(i().LazyArray)(D, "numRecords")
                    }
                }),
                L = new(i().Struct)({
                    platformID: i().uint16,
                    encodingID: i().uint16,
                    table: new(i().Pointer)(i().uint32, T, {
                        type: "parent",
                        lazy: !0
                    })
                }),
                M = new(i().Struct)({
                    version: i().uint16,
                    numSubtables: i().uint16,
                    tables: new(i().Array)(L, "numSubtables")
                }),
                G = new(i().Struct)({
                    version: i().int32,
                    revision: i().int32,
                    checkSumAdjustment: i().uint32,
                    magicNumber: i().uint32,
                    flags: i().uint16,
                    unitsPerEm: i().uint16,
                    created: new(i().Array)(i().int32, 2),
                    modified: new(i().Array)(i().int32, 2),
                    xMin: i().int16,
                    yMin: i().int16,
                    xMax: i().int16,
                    yMax: i().int16,
                    macStyle: new(i().Bitfield)(i().uint16, ["bold", "italic", "underline", "outline", "shadow", "condensed", "extended"]),
                    lowestRecPPEM: i().uint16,
                    fontDirectionHint: i().int16,
                    indexToLocFormat: i().int16,
                    glyphDataFormat: i().int16
                }),
                B = new(i().Struct)({
                    version: i().int32,
                    ascent: i().int16,
                    descent: i().int16,
                    lineGap: i().int16,
                    advanceWidthMax: i().uint16,
                    minLeftSideBearing: i().int16,
                    minRightSideBearing: i().int16,
                    xMaxExtent: i().int16,
                    caretSlopeRise: i().int16,
                    caretSlopeRun: i().int16,
                    caretOffset: i().int16,
                    reserved: new(i().Reserved)(i().int16, 4),
                    metricDataFormat: i().int16,
                    numberOfMetrics: i().uint16
                }),
                E = new(i().Struct)({
                    advance: i().uint16,
                    bearing: i().int16
                }),
                R = new(i().Struct)({
                    metrics: new(i().LazyArray)(E, (function(e) {
                        return e.parent.hhea.numberOfMetrics
                    })),
                    bearings: new(i().LazyArray)(i().int16, (function(e) {
                        return e.parent.maxp.numGlyphs - e.parent.hhea.numberOfMetrics
                    }))
                }),
                V = new(i().Struct)({
                    version: i().int32,
                    numGlyphs: i().uint16,
                    maxPoints: i().uint16,
                    maxContours: i().uint16,
                    maxComponentPoints: i().uint16,
                    maxComponentContours: i().uint16,
                    maxZones: i().uint16,
                    maxTwilightPoints: i().uint16,
                    maxStorage: i().uint16,
                    maxFunctionDefs: i().uint16,
                    maxInstructionDefs: i().uint16,
                    maxStackElements: i().uint16,
                    maxSizeOfInstructions: i().uint16,
                    maxComponentElements: i().uint16,
                    maxComponentDepth: i().uint16
                });

            function z(e, t, n) {
                return void 0 === n && (n = 0), 1 === e && N[n] ? N[n] : U[e][t]
            }
            var U = [
                    ["utf16be", "utf16be", "utf16be", "utf16be", "utf16be", "utf16be"],
                    ["macroman", "shift-jis", "big5", "euc-kr", "iso-8859-6", "iso-8859-8", "macgreek", "maccyrillic", "symbol", "Devanagari", "Gurmukhi", "Gujarati", "Oriya", "Bengali", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhalese", "Burmese", "Khmer", "macthai", "Laotian", "Georgian", "Armenian", "gb-2312-80", "Tibetan", "Mongolian", "Geez", "maccenteuro", "Vietnamese", "Sindhi"],
                    ["ascii"],
                    ["symbol", "utf16be", "shift-jis", "gb18030", "big5", "wansung", "johab", null, null, null, "utf16be"]
                ],
                N = {
                    15: "maciceland",
                    17: "macturkish",
                    18: "maccroatian",
                    24: "maccenteuro",
                    25: "maccenteuro",
                    26: "maccenteuro",
                    27: "maccenteuro",
                    28: "maccenteuro",
                    30: "maciceland",
                    37: "macromania",
                    38: "maccenteuro",
                    39: "maccenteuro",
                    40: "maccenteuro",
                    143: "macinuit",
                    146: "macgaelic"
                },
                Z = [
                    [], {
                        0: "en",
                        30: "fo",
                        60: "ks",
                        90: "rw",
                        1: "fr",
                        31: "fa",
                        61: "ku",
                        91: "rn",
                        2: "de",
                        32: "ru",
                        62: "sd",
                        92: "ny",
                        3: "it",
                        33: "zh",
                        63: "bo",
                        93: "mg",
                        4: "nl",
                        34: "nl-BE",
                        64: "ne",
                        94: "eo",
                        5: "sv",
                        35: "ga",
                        65: "sa",
                        128: "cy",
                        6: "es",
                        36: "sq",
                        66: "mr",
                        129: "eu",
                        7: "da",
                        37: "ro",
                        67: "bn",
                        130: "ca",
                        8: "pt",
                        38: "cz",
                        68: "as",
                        131: "la",
                        9: "no",
                        39: "sk",
                        69: "gu",
                        132: "qu",
                        10: "he",
                        40: "si",
                        70: "pa",
                        133: "gn",
                        11: "ja",
                        41: "yi",
                        71: "or",
                        134: "ay",
                        12: "ar",
                        42: "sr",
                        72: "ml",
                        135: "tt",
                        13: "fi",
                        43: "mk",
                        73: "kn",
                        136: "ug",
                        14: "el",
                        44: "bg",
                        74: "ta",
                        137: "dz",
                        15: "is",
                        45: "uk",
                        75: "te",
                        138: "jv",
                        16: "mt",
                        46: "be",
                        76: "si",
                        139: "su",
                        17: "tr",
                        47: "uz",
                        77: "my",
                        140: "gl",
                        18: "hr",
                        48: "kk",
                        78: "km",
                        141: "af",
                        19: "zh-Hant",
                        49: "az-Cyrl",
                        79: "lo",
                        142: "br",
                        20: "ur",
                        50: "az-Arab",
                        80: "vi",
                        143: "iu",
                        21: "hi",
                        51: "hy",
                        81: "id",
                        144: "gd",
                        22: "th",
                        52: "ka",
                        82: "tl",
                        145: "gv",
                        23: "ko",
                        53: "mo",
                        83: "ms",
                        146: "ga",
                        24: "lt",
                        54: "ky",
                        84: "ms-Arab",
                        147: "to",
                        25: "pl",
                        55: "tg",
                        85: "am",
                        148: "el-polyton",
                        26: "hu",
                        56: "tk",
                        86: "ti",
                        149: "kl",
                        27: "es",
                        57: "mn-CN",
                        87: "om",
                        150: "az",
                        28: "lv",
                        58: "mn",
                        88: "so",
                        151: "nn",
                        29: "se",
                        59: "ps",
                        89: "sw"
                    },
                    [], {
                        1078: "af",
                        16393: "en-IN",
                        1159: "rw",
                        1074: "tn",
                        1052: "sq",
                        6153: "en-IE",
                        1089: "sw",
                        1115: "si",
                        1156: "gsw",
                        8201: "en-JM",
                        1111: "kok",
                        1051: "sk",
                        1118: "am",
                        17417: "en-MY",
                        1042: "ko",
                        1060: "sl",
                        5121: "ar-DZ",
                        5129: "en-NZ",
                        1088: "ky",
                        11274: "es-AR",
                        15361: "ar-BH",
                        13321: "en-PH",
                        1108: "lo",
                        16394: "es-BO",
                        3073: "ar",
                        18441: "en-SG",
                        1062: "lv",
                        13322: "es-CL",
                        2049: "ar-IQ",
                        7177: "en-ZA",
                        1063: "lt",
                        9226: "es-CO",
                        11265: "ar-JO",
                        11273: "en-TT",
                        2094: "dsb",
                        5130: "es-CR",
                        13313: "ar-KW",
                        2057: "en-GB",
                        1134: "lb",
                        7178: "es-DO",
                        12289: "ar-LB",
                        1033: "en",
                        1071: "mk",
                        12298: "es-EC",
                        4097: "ar-LY",
                        12297: "en-ZW",
                        2110: "ms-BN",
                        17418: "es-SV",
                        6145: "ary",
                        1061: "et",
                        1086: "ms",
                        4106: "es-GT",
                        8193: "ar-OM",
                        1080: "fo",
                        1100: "ml",
                        18442: "es-HN",
                        16385: "ar-QA",
                        1124: "fil",
                        1082: "mt",
                        2058: "es-MX",
                        1025: "ar-SA",
                        1035: "fi",
                        1153: "mi",
                        19466: "es-NI",
                        10241: "ar-SY",
                        2060: "fr-BE",
                        1146: "arn",
                        6154: "es-PA",
                        7169: "aeb",
                        3084: "fr-CA",
                        1102: "mr",
                        15370: "es-PY",
                        14337: "ar-AE",
                        1036: "fr",
                        1148: "moh",
                        10250: "es-PE",
                        9217: "ar-YE",
                        5132: "fr-LU",
                        1104: "mn",
                        20490: "es-PR",
                        1067: "hy",
                        6156: "fr-MC",
                        2128: "mn-CN",
                        3082: "es",
                        1101: "as",
                        4108: "fr-CH",
                        1121: "ne",
                        1034: "es",
                        2092: "az-Cyrl",
                        1122: "fy",
                        1044: "nb",
                        21514: "es-US",
                        1068: "az",
                        1110: "gl",
                        2068: "nn",
                        14346: "es-UY",
                        1133: "ba",
                        1079: "ka",
                        1154: "oc",
                        8202: "es-VE",
                        1069: "eu",
                        3079: "de-AT",
                        1096: "or",
                        2077: "sv-FI",
                        1059: "be",
                        1031: "de",
                        1123: "ps",
                        1053: "sv",
                        2117: "bn",
                        5127: "de-LI",
                        1045: "pl",
                        1114: "syr",
                        1093: "bn-IN",
                        4103: "de-LU",
                        1046: "pt",
                        1064: "tg",
                        8218: "bs-Cyrl",
                        2055: "de-CH",
                        2070: "pt-PT",
                        2143: "tzm",
                        5146: "bs",
                        1032: "el",
                        1094: "pa",
                        1097: "ta",
                        1150: "br",
                        1135: "kl",
                        1131: "qu-BO",
                        1092: "tt",
                        1026: "bg",
                        1095: "gu",
                        2155: "qu-EC",
                        1098: "te",
                        1027: "ca",
                        1128: "ha",
                        3179: "qu",
                        1054: "th",
                        3076: "zh-HK",
                        1037: "he",
                        1048: "ro",
                        1105: "bo",
                        5124: "zh-MO",
                        1081: "hi",
                        1047: "rm",
                        1055: "tr",
                        2052: "zh",
                        1038: "hu",
                        1049: "ru",
                        1090: "tk",
                        4100: "zh-SG",
                        1039: "is",
                        9275: "smn",
                        1152: "ug",
                        1028: "zh-TW",
                        1136: "ig",
                        4155: "smj-NO",
                        1058: "uk",
                        1155: "co",
                        1057: "id",
                        5179: "smj",
                        1070: "hsb",
                        1050: "hr",
                        1117: "iu",
                        3131: "se-FI",
                        1056: "ur",
                        4122: "hr-BA",
                        2141: "iu-Latn",
                        1083: "se",
                        2115: "uz-Cyrl",
                        1029: "cs",
                        2108: "ga",
                        2107: "se-SE",
                        1091: "uz",
                        1030: "da",
                        1076: "xh",
                        8251: "sms",
                        1066: "vi",
                        1164: "prs",
                        1077: "zu",
                        6203: "sma-NO",
                        1106: "cy",
                        1125: "dv",
                        1040: "it",
                        7227: "sms",
                        1160: "wo",
                        2067: "nl-BE",
                        2064: "it-CH",
                        1103: "sa",
                        1157: "sah",
                        1043: "nl",
                        1041: "ja",
                        7194: "sr-Cyrl-BA",
                        1144: "ii",
                        3081: "en-AU",
                        1099: "kn",
                        3098: "sr",
                        1130: "yo",
                        10249: "en-BZ",
                        1087: "kk",
                        6170: "sr-Latn-BA",
                        4105: "en-CA",
                        1107: "km",
                        2074: "sr-Latn",
                        9225: "en-029",
                        1158: "quc",
                        1132: "nso"
                    }
                ],
                q = new(i().Struct)({
                    platformID: i().uint16,
                    encodingID: i().uint16,
                    languageID: i().uint16,
                    nameID: i().uint16,
                    length: i().uint16,
                    string: new(i().Pointer)(i().uint16, new(i().String)("length", (function(e) {
                        return z(e.platformID, e.encodingID, e.languageID)
                    })), {
                        type: "parent",
                        relativeTo: "parent.stringOffset",
                        allowNull: !1
                    })
                }),
                j = new(i().Struct)({
                    length: i().uint16,
                    tag: new(i().Pointer)(i().uint16, new(i().String)("length", "utf16be"), {
                        type: "parent",
                        relativeTo: "stringOffset"
                    })
                }),
                H = new(i().VersionedStruct)(i().uint16, {
                    0: {
                        count: i().uint16,
                        stringOffset: i().uint16,
                        records: new(i().Array)(q, "count")
                    },
                    1: {
                        count: i().uint16,
                        stringOffset: i().uint16,
                        records: new(i().Array)(q, "count"),
                        langTagCount: i().uint16,
                        langTags: new(i().Array)(j, "langTagCount")
                    }
                }),
                Y = ["copyright", "fontFamily", "fontSubfamily", "uniqueSubfamily", "fullName", "version", "postscriptName", "trademark", "manufacturer", "designer", "description", "vendorURL", "designerURL", "license", "licenseURL", null, "preferredFamily", "preferredSubfamily", "compatibleFull", "sampleText", "postscriptCIDFontName", "wwsFamilyName", "wwsSubfamilyName"];
            H.process = function(e) {
                for (var t, n = {}, r = (0, a.Z)(this.records); !(t = r()).done;) {
                    var i = t.value,
                        s = Z[i.platformID][i.languageID];
                    null == s && null != this.langTags && i.languageID >= 32768 && (s = this.langTags[i.languageID - 32768].tag), null == s && (s = i.platformID + "-" + i.languageID);
                    var o = i.nameID >= 256 ? "fontFeatures" : Y[i.nameID] || i.nameID;
                    null == n[o] && (n[o] = {});
                    var l = n[o];
                    i.nameID >= 256 && (l = l[i.nameID] || (l[i.nameID] = {})), "string" !== typeof i.string && "string" === typeof l[s] || (l[s] = i.string)
                }
                this.records = n
            }, H.preEncode = function() {
                if (!Array.isArray(this.records)) {
                    this.version = 0;
                    var e = [];
                    for (var t in this.records) {
                        var n = this.records[t];
                        "fontFeatures" !== t && (e.push({
                            platformID: 3,
                            encodingID: 1,
                            languageID: 1033,
                            nameID: Y.indexOf(t),
                            length: _.byteLength(n.en, "utf16le"),
                            string: n.en
                        }), "postscriptName" === t && e.push({
                            platformID: 1,
                            encodingID: 0,
                            languageID: 0,
                            nameID: Y.indexOf(t),
                            length: n.en.length,
                            string: n.en
                        }))
                    }
                    this.records = e, this.count = e.length, this.stringOffset = H.size(this, null, !1)
                }
            };
            var W = new(i().VersionedStruct)(i().uint16, {
                    header: {
                        xAvgCharWidth: i().int16,
                        usWeightClass: i().uint16,
                        usWidthClass: i().uint16,
                        fsType: new(i().Bitfield)(i().uint16, [null, "noEmbedding", "viewOnly", "editable", null, null, null, null, "noSubsetting", "bitmapOnly"]),
                        ySubscriptXSize: i().int16,
                        ySubscriptYSize: i().int16,
                        ySubscriptXOffset: i().int16,
                        ySubscriptYOffset: i().int16,
                        ySuperscriptXSize: i().int16,
                        ySuperscriptYSize: i().int16,
                        ySuperscriptXOffset: i().int16,
                        ySuperscriptYOffset: i().int16,
                        yStrikeoutSize: i().int16,
                        yStrikeoutPosition: i().int16,
                        sFamilyClass: i().int16,
                        panose: new(i().Array)(i().uint8, 10),
                        ulCharRange: new(i().Array)(i().uint32, 4),
                        vendorID: new(i().String)(4),
                        fsSelection: new(i().Bitfield)(i().uint16, ["italic", "underscore", "negative", "outlined", "strikeout", "bold", "regular", "useTypoMetrics", "wws", "oblique"]),
                        usFirstCharIndex: i().uint16,
                        usLastCharIndex: i().uint16
                    },
                    0: {},
                    1: {
                        typoAscender: i().int16,
                        typoDescender: i().int16,
                        typoLineGap: i().int16,
                        winAscent: i().uint16,
                        winDescent: i().uint16,
                        codePageRange: new(i().Array)(i().uint32, 2)
                    },
                    2: {
                        typoAscender: i().int16,
                        typoDescender: i().int16,
                        typoLineGap: i().int16,
                        winAscent: i().uint16,
                        winDescent: i().uint16,
                        codePageRange: new(i().Array)(i().uint32, 2),
                        xHeight: i().int16,
                        capHeight: i().int16,
                        defaultChar: i().uint16,
                        breakChar: i().uint16,
                        maxContent: i().uint16
                    },
                    5: {
                        typoAscender: i().int16,
                        typoDescender: i().int16,
                        typoLineGap: i().int16,
                        winAscent: i().uint16,
                        winDescent: i().uint16,
                        codePageRange: new(i().Array)(i().uint32, 2),
                        xHeight: i().int16,
                        capHeight: i().int16,
                        defaultChar: i().uint16,
                        breakChar: i().uint16,
                        maxContent: i().uint16,
                        usLowerOpticalPointSize: i().uint16,
                        usUpperOpticalPointSize: i().uint16
                    }
                }),
                K = W.versions;
            K[3] = K[4] = K[2];
            var X = new(i().VersionedStruct)(i().fixed32, {
                    header: {
                        italicAngle: i().fixed32,
                        underlinePosition: i().int16,
                        underlineThickness: i().int16,
                        isFixedPitch: i().uint32,
                        minMemType42: i().uint32,
                        maxMemType42: i().uint32,
                        minMemType1: i().uint32,
                        maxMemType1: i().uint32
                    },
                    1: {},
                    2: {
                        numberOfGlyphs: i().uint16,
                        glyphNameIndex: new(i().Array)(i().uint16, "numberOfGlyphs"),
                        names: new(i().Array)(new(i().String)(i().uint8))
                    },
                    2.5: {
                        numberOfGlyphs: i().uint16,
                        offsets: new(i().Array)(i().uint8, "numberOfGlyphs")
                    },
                    3: {},
                    4: {
                        map: new(i().Array)(i().uint32, (function(e) {
                            return e.parent.maxp.numGlyphs
                        }))
                    }
                }),
                J = new(i().Struct)({
                    controlValues: new(i().Array)(i().int16)
                }),
                Q = new(i().Struct)({
                    instructions: new(i().Array)(i().uint8)
                }),
                $ = new(i().VersionedStruct)("head.indexToLocFormat", {
                    0: {
                        offsets: new(i().Array)(i().uint16)
                    },
                    1: {
                        offsets: new(i().Array)(i().uint32)
                    }
                });
            $.process = function() {
                if (0 === this.version)
                    for (var e = 0; e < this.offsets.length; e++) this.offsets[e] <<= 1
            }, $.preEncode = function() {
                if (0 === this.version)
                    for (var e = 0; e < this.offsets.length; e++) this.offsets[e] >>>= 1
            };
            var ee = new(i().Struct)({
                    controlValueProgram: new(i().Array)(i().uint8)
                }),
                te = new(i().Array)(new(i().Buffer)),
                ne = function() {
                    function e(e) {
                        this.type = e
                    }
                    var t = e.prototype;
                    return t.getCFFVersion = function(e) {
                        for (; e && !e.hdrSize;) e = e.parent;
                        return e ? e.version : -1
                    }, t.decode = function(e, t) {
                        var n = this.getCFFVersion(t) >= 2 ? e.readUInt32BE() : e.readUInt16BE();
                        if (0 === n) return [];
                        var r, a = e.readUInt8();
                        if (1 === a) r = i().uint8;
                        else if (2 === a) r = i().uint16;
                        else if (3 === a) r = i().uint24;
                        else {
                            if (4 !== a) throw new Error("Bad offset size in CFFIndex: " + a + " " + e.pos);
                            r = i().uint32
                        }
                        for (var s = [], o = e.pos + (n + 1) * a - 1, l = r.decode(e), u = 0; u < n; u++) {
                            var c = r.decode(e);
                            if (null != this.type) {
                                var h = e.pos;
                                e.pos = o + l, t.length = c - l, s.push(this.type.decode(e, t)), e.pos = h
                            } else s.push({
                                offset: o + l,
                                length: c - l
                            });
                            l = c
                        }
                        return e.pos = o + l, s
                    }, t.size = function(e, t) {
                        var n = 2;
                        if (0 === e.length) return n;
                        for (var r, a = this.type || new(i().Buffer), s = 1, o = 0; o < e.length; o++) {
                            var l = e[o];
                            s += a.size(l, t)
                        }
                        if (s <= 255) r = i().uint8;
                        else if (s <= 65535) r = i().uint16;
                        else if (s <= 16777215) r = i().uint24;
                        else {
                            if (!(s <= 4294967295)) throw new Error("Bad offset in CFFIndex");
                            r = i().uint32
                        }
                        return n += 1 + r.size() * (e.length + 1), n += s - 1, n
                    }, t.encode = function(e, t, n) {
                        if (e.writeUInt16BE(t.length), 0 !== t.length) {
                            for (var r, s, o = this.type || new(i().Buffer), l = [], u = 1, c = (0, a.Z)(t); !(r = c()).done;) {
                                var h = r.value,
                                    f = o.size(h, n);
                                l.push(f), u += f
                            }
                            if (u <= 255) s = i().uint8;
                            else if (u <= 65535) s = i().uint16;
                            else if (u <= 16777215) s = i().uint24;
                            else {
                                if (!(u <= 4294967295)) throw new Error("Bad offset in CFFIndex");
                                s = i().uint32
                            }
                            e.writeUInt8(s.size()), u = 1, s.encode(e, u);
                            for (var p = 0, d = l; p < d.length; p++) {
                                u += d[p], s.encode(e, u)
                            }
                            for (var g, y = (0, a.Z)(t); !(g = y()).done;) {
                                var v = g.value;
                                o.encode(e, v, n)
                            }
                        }
                    }, e
                }(),
                re = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"],
                ie = {
                    ".": 10,
                    E: 11,
                    "E-": 12,
                    "-": 14
                },
                ae = function() {
                    function e() {}
                    return e.decode = function(e, t) {
                        if (32 <= t && t <= 246) return t - 139;
                        if (247 <= t && t <= 250) return 256 * (t - 247) + e.readUInt8() + 108;
                        if (251 <= t && t <= 254) return 256 * -(t - 251) - e.readUInt8() - 108;
                        if (28 === t) return e.readInt16BE();
                        if (29 === t) return e.readInt32BE();
                        if (30 === t) {
                            for (var n = "";;) {
                                var r = e.readUInt8(),
                                    i = r >> 4;
                                if (15 === i) break;
                                n += re[i];
                                var a = 15 & r;
                                if (15 === a) break;
                                n += re[a]
                            }
                            return parseFloat(n)
                        }
                        return null
                    }, e.size = function(e) {
                        if (e.forceLarge && (e = 32768), (0 | e) !== e) {
                            var t = "" + e;
                            return 1 + Math.ceil((t.length + 1) / 2)
                        }
                        return -107 <= e && e <= 107 ? 1 : 108 <= e && e <= 1131 || -1131 <= e && e <= -108 ? 2 : -32768 <= e && e <= 32767 ? 3 : 5
                    }, e.encode = function(e, t) {
                        var n = Number(t);
                        if (t.forceLarge) return e.writeUInt8(29), e.writeInt32BE(n);
                        if ((0 | n) === n) return -107 <= n && n <= 107 ? e.writeUInt8(n + 139) : 108 <= n && n <= 1131 ? (n -= 108, e.writeUInt8(247 + (n >> 8)), e.writeUInt8(255 & n)) : -1131 <= n && n <= -108 ? (n = -n - 108, e.writeUInt8(251 + (n >> 8)), e.writeUInt8(255 & n)) : -32768 <= n && n <= 32767 ? (e.writeUInt8(28), e.writeInt16BE(n)) : (e.writeUInt8(29), e.writeInt32BE(n));
                        e.writeUInt8(30);
                        for (var r = "" + n, i = 0; i < r.length; i += 2) {
                            var a = r[i],
                                s = ie[a] || +a;
                            if (i === r.length - 1) var o = 15;
                            else {
                                var l = r[i + 1];
                                o = ie[l] || +l
                            }
                            e.writeUInt8(s << 4 | 15 & o)
                        }
                        return 15 !== o ? e.writeUInt8(240) : void 0
                    }, e
                }(),
                se = function() {
                    function e(e) {
                        void 0 === e && (e = []), this.ops = e, this.fields = {};
                        for (var t, n = (0, a.Z)(e); !(t = n()).done;) {
                            var r = t.value,
                                i = Array.isArray(r[0]) ? r[0][0] << 8 | r[0][1] : r[0];
                            this.fields[i] = r
                        }
                    }
                    var t = e.prototype;
                    return t.decodeOperands = function(e, t, n, r) {
                        var i = this;
                        if (Array.isArray(e)) return r.map((function(r, a) {
                            return i.decodeOperands(e[a], t, n, [r])
                        }));
                        if (null != e.decode) return e.decode(t, n, r);
                        switch (e) {
                            case "number":
                            case "offset":
                            case "sid":
                                return r[0];
                            case "boolean":
                                return !!r[0];
                            default:
                                return r
                        }
                    }, t.encodeOperands = function(e, t, n, r) {
                        var i = this;
                        return Array.isArray(e) ? r.map((function(r, a) {
                            return i.encodeOperands(e[a], t, n, r)[0]
                        })) : null != e.encode ? e.encode(t, r, n) : "number" === typeof r ? [r] : "boolean" === typeof r ? [+r] : Array.isArray(r) ? r : [r]
                    }, t.decode = function(e, t) {
                        var n = e.pos + t.length,
                            r = {},
                            i = [];
                        for (var a in Object.defineProperties(r, {
                                parent: {
                                    value: t
                                },
                                _startOffset: {
                                    value: e.pos
                                }
                            }), this.fields) {
                            var s = this.fields[a];
                            r[s[1]] = s[3]
                        }
                        for (; e.pos < n;) {
                            var o = e.readUInt8();
                            if (o < 28) {
                                12 === o && (o = o << 8 | e.readUInt8());
                                var l = this.fields[o];
                                if (!l) throw new Error("Unknown operator " + o);
                                var c = this.decodeOperands(l[2], e, r, i);
                                null != c && (c instanceof u.PropertyDescriptor ? Object.defineProperty(r, l[1], c) : r[l[1]] = c), i = []
                            } else i.push(ae.decode(e, o))
                        }
                        return r
                    }, t.size = function(e, t, n) {
                        void 0 === n && (n = !0);
                        var r = {
                                parent: t,
                                val: e,
                                pointerSize: 0,
                                startOffset: t.startOffset || 0
                            },
                            i = 0;
                        for (var s in this.fields) {
                            var o = this.fields[s],
                                l = e[o[1]];
                            if (null != l && !h()(l, o[3])) {
                                for (var u, c = this.encodeOperands(o[2], null, r, l), f = (0, a.Z)(c); !(u = f()).done;) {
                                    var p = u.value;
                                    i += ae.size(p)
                                }
                                i += (Array.isArray(o[0]) ? o[0] : [o[0]]).length
                            }
                        }
                        return n && (i += r.pointerSize), i
                    }, t.encode = function(e, t, n) {
                        var r = {
                            pointers: [],
                            startOffset: e.pos,
                            parent: n,
                            val: t,
                            pointerSize: 0
                        };
                        r.pointerOffset = e.pos + this.size(t, r, !1);
                        for (var i, s = (0, a.Z)(this.ops); !(i = s()).done;) {
                            var o = i.value,
                                l = t[o[1]];
                            if (null != l && !h()(l, o[3])) {
                                for (var u, c = this.encodeOperands(o[2], e, r, l), f = (0, a.Z)(c); !(u = f()).done;) {
                                    var p = u.value;
                                    ae.encode(e, p)
                                }
                                for (var d, g = Array.isArray(o[0]) ? o[0] : [o[0]], y = (0, a.Z)(g); !(d = y()).done;) {
                                    var v = d.value;
                                    e.writeUInt8(v)
                                }
                            }
                        }
                        for (var m = 0; m < r.pointers.length;) {
                            var b = r.pointers[m++];
                            b.type.encode(e, b.val, b.parent)
                        }
                    }, e
                }(),
                oe = function(e) {
                    function t(t, n) {
                        return void 0 === n && (n = {}), null == n.type && (n.type = "global"), e.call(this, null, t, n) || this
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n.decode = function(t, n, r) {
                        return this.offsetType = {
                            decode: function() {
                                return r[0]
                            }
                        }, e.prototype.decode.call(this, t, n, r)
                    }, n.encode = function(t, n, r) {
                        if (!t) return this.offsetType = {
                            size: function() {
                                return 0
                            }
                        }, this.size(n, r), [new le(0)];
                        var i = null;
                        return this.offsetType = {
                            encode: function(e, t) {
                                return i = t
                            }
                        }, e.prototype.encode.call(this, t, n, r), [new le(i)]
                    }, t
                }(i().Pointer),
                le = function() {
                    function e(e) {
                        this.val = e, this.forceLarge = !0
                    }
                    return e.prototype.valueOf = function() {
                        return this.val
                    }, e
                }(),
                ue = new se([
                    [6, "BlueValues", "delta", null],
                    [7, "OtherBlues", "delta", null],
                    [8, "FamilyBlues", "delta", null],
                    [9, "FamilyOtherBlues", "delta", null],
                    [
                        [12, 9], "BlueScale", "number", .039625
                    ],
                    [
                        [12, 10], "BlueShift", "number", 7
                    ],
                    [
                        [12, 11], "BlueFuzz", "number", 1
                    ],
                    [10, "StdHW", "number", null],
                    [11, "StdVW", "number", null],
                    [
                        [12, 12], "StemSnapH", "delta", null
                    ],
                    [
                        [12, 13], "StemSnapV", "delta", null
                    ],
                    [
                        [12, 14], "ForceBold", "boolean", !1
                    ],
                    [
                        [12, 17], "LanguageGroup", "number", 0
                    ],
                    [
                        [12, 18], "ExpansionFactor", "number", .06
                    ],
                    [
                        [12, 19], "initialRandomSeed", "number", 0
                    ],
                    [20, "defaultWidthX", "number", 0],
                    [21, "nominalWidthX", "number", 0],
                    [22, "vsindex", "number", 0],
                    [23, "blend", function() {
                        function e() {}
                        return e.decode = function(e, t, n) {
                            for (var r = n.pop(); n.length > r;) n.pop()
                        }, e
                    }(), null],
                    [19, "Subrs", new oe(new ne, {
                        type: "local"
                    }), null]
                ]),
                ce = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
                he = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
                fe = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron"],
                pe = new(i().Struct)({
                    reserved: new(i().Reserved)(i().uint16),
                    reqFeatureIndex: i().uint16,
                    featureCount: i().uint16,
                    featureIndexes: new(i().Array)(i().uint16, "featureCount")
                }),
                de = new(i().Struct)({
                    tag: new(i().String)(4),
                    langSys: new(i().Pointer)(i().uint16, pe, {
                        type: "parent"
                    })
                }),
                ge = new(i().Struct)({
                    defaultLangSys: new(i().Pointer)(i().uint16, pe),
                    count: i().uint16,
                    langSysRecords: new(i().Array)(de, "count")
                }),
                ye = new(i().Struct)({
                    tag: new(i().String)(4),
                    script: new(i().Pointer)(i().uint16, ge, {
                        type: "parent"
                    })
                }),
                ve = new(i().Array)(ye, i().uint16),
                me = new(i().Struct)({
                    featureParams: i().uint16,
                    lookupCount: i().uint16,
                    lookupListIndexes: new(i().Array)(i().uint16, "lookupCount")
                }),
                be = new(i().Struct)({
                    tag: new(i().String)(4),
                    feature: new(i().Pointer)(i().uint16, me, {
                        type: "parent"
                    })
                }),
                we = new(i().Array)(be, i().uint16),
                _e = new(i().Struct)({
                    markAttachmentType: i().uint8,
                    flags: new(i().Bitfield)(i().uint8, ["rightToLeft", "ignoreBaseGlyphs", "ignoreLigatures", "ignoreMarks", "useMarkFilteringSet"])
                });

            function Ce(e) {
                var t = new(i().Struct)({
                    lookupType: i().uint16,
                    flags: _e,
                    subTableCount: i().uint16,
                    subTables: new(i().Array)(new(i().Pointer)(i().uint16, e), "subTableCount"),
                    markFilteringSet: new(i().Optional)(i().uint16, (function(e) {
                        return e.flags.flags.useMarkFilteringSet
                    }))
                });
                return new(i().LazyArray)(new(i().Pointer)(i().uint16, t), i().uint16)
            }
            var Se, xe = new(i().Struct)({
                    start: i().uint16,
                    end: i().uint16,
                    startCoverageIndex: i().uint16
                }),
                ke = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        glyphCount: i().uint16,
                        glyphs: new(i().Array)(i().uint16, "glyphCount")
                    },
                    2: {
                        rangeCount: i().uint16,
                        rangeRecords: new(i().Array)(xe, "rangeCount")
                    }
                }),
                Ae = new(i().Struct)({
                    start: i().uint16,
                    end: i().uint16,
                    class: i().uint16
                }),
                Pe = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        startGlyph: i().uint16,
                        glyphCount: i().uint16,
                        classValueArray: new(i().Array)(i().uint16, "glyphCount")
                    },
                    2: {
                        classRangeCount: i().uint16,
                        classRangeRecord: new(i().Array)(Ae, "classRangeCount")
                    }
                }),
                Ie = new(i().Struct)({
                    a: i().uint16,
                    b: i().uint16,
                    deltaFormat: i().uint16
                }),
                Oe = new(i().Struct)({
                    sequenceIndex: i().uint16,
                    lookupListIndex: i().uint16
                }),
                Fe = new(i().Struct)({
                    glyphCount: i().uint16,
                    lookupCount: i().uint16,
                    input: new(i().Array)(i().uint16, (function(e) {
                        return e.glyphCount - 1
                    })),
                    lookupRecords: new(i().Array)(Oe, "lookupCount")
                }),
                De = new(i().Array)(new(i().Pointer)(i().uint16, Fe), i().uint16),
                Te = new(i().Struct)({
                    glyphCount: i().uint16,
                    lookupCount: i().uint16,
                    classes: new(i().Array)(i().uint16, (function(e) {
                        return e.glyphCount - 1
                    })),
                    lookupRecords: new(i().Array)(Oe, "lookupCount")
                }),
                Le = new(i().Array)(new(i().Pointer)(i().uint16, Te), i().uint16),
                Me = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        coverage: new(i().Pointer)(i().uint16, ke),
                        ruleSetCount: i().uint16,
                        ruleSets: new(i().Array)(new(i().Pointer)(i().uint16, De), "ruleSetCount")
                    },
                    2: {
                        coverage: new(i().Pointer)(i().uint16, ke),
                        classDef: new(i().Pointer)(i().uint16, Pe),
                        classSetCnt: i().uint16,
                        classSet: new(i().Array)(new(i().Pointer)(i().uint16, Le), "classSetCnt")
                    },
                    3: {
                        glyphCount: i().uint16,
                        lookupCount: i().uint16,
                        coverages: new(i().Array)(new(i().Pointer)(i().uint16, ke), "glyphCount"),
                        lookupRecords: new(i().Array)(Oe, "lookupCount")
                    }
                }),
                Ge = new(i().Struct)({
                    backtrackGlyphCount: i().uint16,
                    backtrack: new(i().Array)(i().uint16, "backtrackGlyphCount"),
                    inputGlyphCount: i().uint16,
                    input: new(i().Array)(i().uint16, (function(e) {
                        return e.inputGlyphCount - 1
                    })),
                    lookaheadGlyphCount: i().uint16,
                    lookahead: new(i().Array)(i().uint16, "lookaheadGlyphCount"),
                    lookupCount: i().uint16,
                    lookupRecords: new(i().Array)(Oe, "lookupCount")
                }),
                Be = new(i().Array)(new(i().Pointer)(i().uint16, Ge), i().uint16),
                Ee = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        coverage: new(i().Pointer)(i().uint16, ke),
                        chainCount: i().uint16,
                        chainRuleSets: new(i().Array)(new(i().Pointer)(i().uint16, Be), "chainCount")
                    },
                    2: {
                        coverage: new(i().Pointer)(i().uint16, ke),
                        backtrackClassDef: new(i().Pointer)(i().uint16, Pe),
                        inputClassDef: new(i().Pointer)(i().uint16, Pe),
                        lookaheadClassDef: new(i().Pointer)(i().uint16, Pe),
                        chainCount: i().uint16,
                        chainClassSet: new(i().Array)(new(i().Pointer)(i().uint16, Be), "chainCount")
                    },
                    3: {
                        backtrackGlyphCount: i().uint16,
                        backtrackCoverage: new(i().Array)(new(i().Pointer)(i().uint16, ke), "backtrackGlyphCount"),
                        inputGlyphCount: i().uint16,
                        inputCoverage: new(i().Array)(new(i().Pointer)(i().uint16, ke), "inputGlyphCount"),
                        lookaheadGlyphCount: i().uint16,
                        lookaheadCoverage: new(i().Array)(new(i().Pointer)(i().uint16, ke), "lookaheadGlyphCount"),
                        lookupCount: i().uint16,
                        lookupRecords: new(i().Array)(Oe, "lookupCount")
                    }
                }),
                Re = new(i().Fixed)(16, "BE", 14),
                Ve = new(i().Struct)({
                    startCoord: Re,
                    peakCoord: Re,
                    endCoord: Re
                }),
                ze = new(i().Struct)({
                    axisCount: i().uint16,
                    regionCount: i().uint16,
                    variationRegions: new(i().Array)(new(i().Array)(Ve, "axisCount"), "regionCount")
                }),
                Ue = new(i().Struct)({
                    shortDeltas: new(i().Array)(i().int16, (function(e) {
                        return e.parent.shortDeltaCount
                    })),
                    regionDeltas: new(i().Array)(i().int8, (function(e) {
                        return e.parent.regionIndexCount - e.parent.shortDeltaCount
                    })),
                    deltas: function(e) {
                        return e.shortDeltas.concat(e.regionDeltas)
                    }
                }),
                Ne = new(i().Struct)({
                    itemCount: i().uint16,
                    shortDeltaCount: i().uint16,
                    regionIndexCount: i().uint16,
                    regionIndexes: new(i().Array)(i().uint16, "regionIndexCount"),
                    deltaSets: new(i().Array)(Ue, "itemCount")
                }),
                Ze = new(i().Struct)({
                    format: i().uint16,
                    variationRegionList: new(i().Pointer)(i().uint32, ze),
                    variationDataCount: i().uint16,
                    itemVariationData: new(i().Array)(new(i().Pointer)(i().uint32, Ne), "variationDataCount")
                }),
                qe = new(i().VersionedStruct)(i().uint16, {
                    1: (Se = {
                        axisIndex: i().uint16
                    }, Se.axisIndex = i().uint16, Se.filterRangeMinValue = Re, Se.filterRangeMaxValue = Re, Se)
                }),
                je = new(i().Struct)({
                    conditionCount: i().uint16,
                    conditionTable: new(i().Array)(new(i().Pointer)(i().uint32, qe), "conditionCount")
                }),
                He = new(i().Struct)({
                    featureIndex: i().uint16,
                    alternateFeatureTable: new(i().Pointer)(i().uint32, me, {
                        type: "parent"
                    })
                }),
                Ye = new(i().Struct)({
                    version: i().fixed32,
                    substitutionCount: i().uint16,
                    substitutions: new(i().Array)(He, "substitutionCount")
                }),
                We = new(i().Struct)({
                    conditionSet: new(i().Pointer)(i().uint32, je, {
                        type: "parent"
                    }),
                    featureTableSubstitution: new(i().Pointer)(i().uint32, Ye, {
                        type: "parent"
                    })
                }),
                Ke = new(i().Struct)({
                    majorVersion: i().uint16,
                    minorVersion: i().uint16,
                    featureVariationRecordCount: i().uint32,
                    featureVariationRecords: new(i().Array)(We, "featureVariationRecordCount")
                }),
                Xe = function() {
                    function e(e, t) {
                        this.predefinedOps = e, this.type = t
                    }
                    var t = e.prototype;
                    return t.decode = function(e, t, n) {
                        return this.predefinedOps[n[0]] ? this.predefinedOps[n[0]] : this.type.decode(e, t, n)
                    }, t.size = function(e, t) {
                        return this.type.size(e, t)
                    }, t.encode = function(e, t, n) {
                        var r = this.predefinedOps.indexOf(t);
                        return -1 !== r ? r : this.type.encode(e, t, n)
                    }, e
                }(),
                Je = function(e) {
                    function t() {
                        return e.call(this, "UInt8") || this
                    }
                    return (0, l.Z)(t, e), t.prototype.decode = function(e) {
                        return 127 & i().uint8.decode(e)
                    }, t
                }(i().Number),
                Qe = new(i().Struct)({
                    first: i().uint16,
                    nLeft: i().uint8
                }),
                $e = new(i().Struct)({
                    first: i().uint16,
                    nLeft: i().uint16
                }),
                et = new Xe([he, ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"]], new oe(new(i().VersionedStruct)(new Je, {
                    0: {
                        nCodes: i().uint8,
                        codes: new(i().Array)(i().uint8, "nCodes")
                    },
                    1: {
                        nRanges: i().uint8,
                        ranges: new(i().Array)(Qe, "nRanges")
                    }
                }), {
                    lazy: !0
                })),
                tt = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (0, l.Z)(t, e), t.prototype.decode = function(e, t) {
                        for (var n = (0, u.resolveLength)(this.length, e, t), r = 0, i = []; r < n;) {
                            var a = this.type.decode(e, t);
                            a.offset = r, r += a.nLeft + 1, i.push(a)
                        }
                        return i
                    }, t
                }(i().Array),
                nt = new(i().VersionedStruct)(i().uint8, {
                    0: {
                        glyphs: new(i().Array)(i().uint16, (function(e) {
                            return e.parent.CharStrings.length - 1
                        }))
                    },
                    1: {
                        ranges: new tt(Qe, (function(e) {
                            return e.parent.CharStrings.length - 1
                        }))
                    },
                    2: {
                        ranges: new tt($e, (function(e) {
                            return e.parent.CharStrings.length - 1
                        }))
                    }
                }),
                rt = new Xe([fe, [".notdef", "space", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
                    [".notdef", "space", "dollaroldstyle", "dollarsuperior", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "hyphensuperior", "colonmonetary", "onefitted", "rupiah", "centoldstyle", "figuredash", "hypheninferior", "onequarter", "onehalf", "threequarters", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior"]
                ], new oe(nt, {
                    lazy: !0
                })),
                it = new(i().Struct)({
                    first: i().uint16,
                    fd: i().uint8
                }),
                at = new(i().Struct)({
                    first: i().uint32,
                    fd: i().uint16
                }),
                st = new(i().VersionedStruct)(i().uint8, {
                    0: {
                        fds: new(i().Array)(i().uint8, (function(e) {
                            return e.parent.CharStrings.length
                        }))
                    },
                    3: {
                        nRanges: i().uint16,
                        ranges: new(i().Array)(it, "nRanges"),
                        sentinel: i().uint16
                    },
                    4: {
                        nRanges: i().uint32,
                        ranges: new(i().Array)(at, "nRanges"),
                        sentinel: i().uint32
                    }
                }),
                ot = new oe(ue),
                lt = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.decode = function(e, t, n) {
                        return t.length = n[0], ot.decode(e, t, [n[1]])
                    }, t.size = function(e, t) {
                        return [ue.size(e, t, !1), ot.size(e, t)[0]]
                    }, t.encode = function(e, t, n) {
                        return [ue.size(t, n, !1), ot.encode(e, t, n)[0]]
                    }, e
                }(),
                ut = new se([
                    [18, "Private", new lt, null],
                    [
                        [12, 38], "FontName", "sid", null
                    ],
                    [
                        [12, 7], "FontMatrix", "array", [.001, 0, 0, .001, 0, 0]
                    ],
                    [
                        [12, 5], "PaintType", "number", 0
                    ]
                ]),
                ct = new se([
                    [
                        [12, 30], "ROS", ["sid", "sid", "number"], null
                    ],
                    [0, "version", "sid", null],
                    [1, "Notice", "sid", null],
                    [
                        [12, 0], "Copyright", "sid", null
                    ],
                    [2, "FullName", "sid", null],
                    [3, "FamilyName", "sid", null],
                    [4, "Weight", "sid", null],
                    [
                        [12, 1], "isFixedPitch", "boolean", !1
                    ],
                    [
                        [12, 2], "ItalicAngle", "number", 0
                    ],
                    [
                        [12, 3], "UnderlinePosition", "number", -100
                    ],
                    [
                        [12, 4], "UnderlineThickness", "number", 50
                    ],
                    [
                        [12, 5], "PaintType", "number", 0
                    ],
                    [
                        [12, 6], "CharstringType", "number", 2
                    ],
                    [
                        [12, 7], "FontMatrix", "array", [.001, 0, 0, .001, 0, 0]
                    ],
                    [13, "UniqueID", "number", null],
                    [5, "FontBBox", "array", [0, 0, 0, 0]],
                    [
                        [12, 8], "StrokeWidth", "number", 0
                    ],
                    [14, "XUID", "array", null],
                    [15, "charset", rt, fe],
                    [16, "Encoding", et, he],
                    [17, "CharStrings", new oe(new ne), null],
                    [18, "Private", new lt, null],
                    [
                        [12, 20], "SyntheticBase", "number", null
                    ],
                    [
                        [12, 21], "PostScript", "sid", null
                    ],
                    [
                        [12, 22], "BaseFontName", "sid", null
                    ],
                    [
                        [12, 23], "BaseFontBlend", "delta", null
                    ],
                    [
                        [12, 31], "CIDFontVersion", "number", 0
                    ],
                    [
                        [12, 32], "CIDFontRevision", "number", 0
                    ],
                    [
                        [12, 33], "CIDFontType", "number", 0
                    ],
                    [
                        [12, 34], "CIDCount", "number", 8720
                    ],
                    [
                        [12, 35], "UIDBase", "number", null
                    ],
                    [
                        [12, 37], "FDSelect", new oe(st), null
                    ],
                    [
                        [12, 36], "FDArray", new oe(new ne(ut)), null
                    ],
                    [
                        [12, 38], "FontName", "sid", null
                    ]
                ]),
                ht = new(i().Struct)({
                    length: i().uint16,
                    itemVariationStore: Ze
                }),
                ft = new se([
                    [
                        [12, 7], "FontMatrix", "array", [.001, 0, 0, .001, 0, 0]
                    ],
                    [17, "CharStrings", new oe(new ne), null],
                    [
                        [12, 37], "FDSelect", new oe(st), null
                    ],
                    [
                        [12, 36], "FDArray", new oe(new ne(ut)), null
                    ],
                    [24, "vstore", new oe(ht), null],
                    [25, "maxstack", "number", 193]
                ]),
                pt = new(i().VersionedStruct)(i().fixed16, {
                    1: {
                        hdrSize: i().uint8,
                        offSize: i().uint8,
                        nameIndex: new ne(new(i().String)("length")),
                        topDictIndex: new ne(ct),
                        stringIndex: new ne(new(i().String)("length")),
                        globalSubrIndex: new ne
                    },
                    2: {
                        hdrSize: i().uint8,
                        length: i().uint16,
                        topDict: ft,
                        globalSubrIndex: new ne
                    }
                }),
                dt = function() {
                    function e(e) {
                        this.stream = e, this.decode()
                    }
                    e.decode = function(t) {
                        return new e(t)
                    };
                    var t = e.prototype;
                    return t.decode = function() {
                        this.stream.pos;
                        var e = pt.decode(this.stream);
                        for (var t in e) {
                            var n = e[t];
                            this[t] = n
                        }
                        if (this.version < 2) {
                            if (1 !== this.topDictIndex.length) throw new Error("Only a single font is allowed in CFF");
                            this.topDict = this.topDictIndex[0]
                        }
                        return this.isCIDFont = null != this.topDict.ROS, this
                    }, t.string = function(e) {
                        return this.version >= 2 ? null : e < ce.length ? ce[e] : this.stringIndex[e - ce.length]
                    }, t.getCharString = function(e) {
                        return this.stream.pos = this.topDict.CharStrings[e].offset, this.stream.readBuffer(this.topDict.CharStrings[e].length)
                    }, t.getGlyphName = function(e) {
                        if (this.version >= 2) return null;
                        if (this.isCIDFont) return null;
                        var t = this.topDict.charset;
                        if (Array.isArray(t)) return t[e];
                        if (0 === e) return ".notdef";
                        switch (e -= 1, t.version) {
                            case 0:
                                return this.string(t.glyphs[e]);
                            case 1:
                            case 2:
                                for (var n = 0; n < t.ranges.length; n++) {
                                    var r = t.ranges[n];
                                    if (r.offset <= e && e <= r.offset + r.nLeft) return this.string(r.first + (e - r.offset))
                                }
                        }
                        return null
                    }, t.fdForGlyph = function(e) {
                        if (!this.topDict.FDSelect) return null;
                        switch (this.topDict.FDSelect.version) {
                            case 0:
                                return this.topDict.FDSelect.fds[e];
                            case 3:
                            case 4:
                                for (var t = this.topDict.FDSelect.ranges, n = 0, r = t.length - 1; n <= r;) {
                                    var i = n + r >> 1;
                                    if (e < t[i].first) r = i - 1;
                                    else {
                                        if (!(i < r && e >= t[i + 1].first)) return t[i].fd;
                                        n = i + 1
                                    }
                                }
                            default:
                                throw new Error("Unknown FDSelect version: " + this.topDict.FDSelect.version)
                        }
                    }, t.privateDictForGlyph = function(e) {
                        if (this.topDict.FDSelect) {
                            var t = this.fdForGlyph(e);
                            return this.topDict.FDArray[t] ? this.topDict.FDArray[t].Private : null
                        }
                        return this.version < 2 ? this.topDict.Private : this.topDict.FDArray[0].Private
                    }, (0, s.Z)(e, [{
                        key: "postscriptName",
                        get: function() {
                            return this.version < 2 ? this.nameIndex[0] : null
                        }
                    }, {
                        key: "fullName",
                        get: function() {
                            return this.string(this.topDict.FullName)
                        }
                    }, {
                        key: "familyName",
                        get: function() {
                            return this.string(this.topDict.FamilyName)
                        }
                    }]), e
                }(),
                gt = new(i().Struct)({
                    glyphIndex: i().uint16,
                    vertOriginY: i().int16
                }),
                yt = new(i().Struct)({
                    majorVersion: i().uint16,
                    minorVersion: i().uint16,
                    defaultVertOriginY: i().int16,
                    numVertOriginYMetrics: i().uint16,
                    metrics: new(i().Array)(gt, "numVertOriginYMetrics")
                }),
                vt = new(i().Struct)({
                    height: i().uint8,
                    width: i().uint8,
                    horiBearingX: i().int8,
                    horiBearingY: i().int8,
                    horiAdvance: i().uint8,
                    vertBearingX: i().int8,
                    vertBearingY: i().int8,
                    vertAdvance: i().uint8
                }),
                mt = new(i().Struct)({
                    height: i().uint8,
                    width: i().uint8,
                    bearingX: i().int8,
                    bearingY: i().int8,
                    advance: i().uint8
                }),
                bt = new(i().Struct)({
                    glyph: i().uint16,
                    xOffset: i().int8,
                    yOffset: i().int8
                }),
                wt = function() {},
                _t = function() {};
            new(i().VersionedStruct)("version", {
                1: {
                    metrics: mt,
                    data: wt
                },
                2: {
                    metrics: mt,
                    data: _t
                },
                5: {
                    data: _t
                },
                6: {
                    metrics: vt,
                    data: wt
                },
                7: {
                    metrics: vt,
                    data: _t
                },
                8: {
                    metrics: mt,
                    pad: new(i().Reserved)(i().uint8),
                    numComponents: i().uint16,
                    components: new(i().Array)(bt, "numComponents")
                },
                9: {
                    metrics: vt,
                    pad: new(i().Reserved)(i().uint8),
                    numComponents: i().uint16,
                    components: new(i().Array)(bt, "numComponents")
                },
                17: {
                    metrics: mt,
                    dataLen: i().uint32,
                    data: new(i().Buffer)("dataLen")
                },
                18: {
                    metrics: vt,
                    dataLen: i().uint32,
                    data: new(i().Buffer)("dataLen")
                },
                19: {
                    dataLen: i().uint32,
                    data: new(i().Buffer)("dataLen")
                }
            });
            var Ct = new(i().Struct)({
                    ascender: i().int8,
                    descender: i().int8,
                    widthMax: i().uint8,
                    caretSlopeNumerator: i().int8,
                    caretSlopeDenominator: i().int8,
                    caretOffset: i().int8,
                    minOriginSB: i().int8,
                    minAdvanceSB: i().int8,
                    maxBeforeBL: i().int8,
                    minAfterBL: i().int8,
                    pad: new(i().Reserved)(i().int8, 2)
                }),
                St = new(i().Struct)({
                    glyphCode: i().uint16,
                    offset: i().uint16
                }),
                xt = new(i().VersionedStruct)(i().uint16, {
                    header: {
                        imageFormat: i().uint16,
                        imageDataOffset: i().uint32
                    },
                    1: {
                        offsetArray: new(i().Array)(i().uint32, (function(e) {
                            return e.parent.lastGlyphIndex - e.parent.firstGlyphIndex + 1
                        }))
                    },
                    2: {
                        imageSize: i().uint32,
                        bigMetrics: vt
                    },
                    3: {
                        offsetArray: new(i().Array)(i().uint16, (function(e) {
                            return e.parent.lastGlyphIndex - e.parent.firstGlyphIndex + 1
                        }))
                    },
                    4: {
                        numGlyphs: i().uint32,
                        glyphArray: new(i().Array)(St, (function(e) {
                            return e.numGlyphs + 1
                        }))
                    },
                    5: {
                        imageSize: i().uint32,
                        bigMetrics: vt,
                        numGlyphs: i().uint32,
                        glyphCodeArray: new(i().Array)(i().uint16, "numGlyphs")
                    }
                }),
                kt = new(i().Struct)({
                    firstGlyphIndex: i().uint16,
                    lastGlyphIndex: i().uint16,
                    subtable: new(i().Pointer)(i().uint32, xt)
                }),
                At = new(i().Struct)({
                    indexSubTableArray: new(i().Pointer)(i().uint32, new(i().Array)(kt, 1), {
                        type: "parent"
                    }),
                    indexTablesSize: i().uint32,
                    numberOfIndexSubTables: i().uint32,
                    colorRef: i().uint32,
                    hori: Ct,
                    vert: Ct,
                    startGlyphIndex: i().uint16,
                    endGlyphIndex: i().uint16,
                    ppemX: i().uint8,
                    ppemY: i().uint8,
                    bitDepth: i().uint8,
                    flags: new(i().Bitfield)(i().uint8, ["horizontal", "vertical"])
                }),
                Pt = new(i().Struct)({
                    version: i().uint32,
                    numSizes: i().uint32,
                    sizes: new(i().Array)(At, "numSizes")
                }),
                It = new(i().Struct)({
                    ppem: i().uint16,
                    resolution: i().uint16,
                    imageOffsets: new(i().Array)(new(i().Pointer)(i().uint32, "void"), (function(e) {
                        return e.parent.parent.maxp.numGlyphs + 1
                    }))
                }),
                Ot = new(i().Struct)({
                    version: i().uint16,
                    flags: new(i().Bitfield)(i().uint16, ["renderOutlines"]),
                    numImgTables: i().uint32,
                    imageTables: new(i().Array)(new(i().Pointer)(i().uint32, It), "numImgTables")
                }),
                Ft = new(i().Struct)({
                    gid: i().uint16,
                    paletteIndex: i().uint16
                }),
                Dt = new(i().Struct)({
                    gid: i().uint16,
                    firstLayerIndex: i().uint16,
                    numLayers: i().uint16
                }),
                Tt = new(i().Struct)({
                    version: i().uint16,
                    numBaseGlyphRecords: i().uint16,
                    baseGlyphRecord: new(i().Pointer)(i().uint32, new(i().Array)(Dt, "numBaseGlyphRecords")),
                    layerRecords: new(i().Pointer)(i().uint32, new(i().Array)(Ft, "numLayerRecords"), {
                        lazy: !0
                    }),
                    numLayerRecords: i().uint16
                }),
                Lt = new(i().Struct)({
                    blue: i().uint8,
                    green: i().uint8,
                    red: i().uint8,
                    alpha: i().uint8
                }),
                Mt = new(i().VersionedStruct)(i().uint16, {
                    header: {
                        numPaletteEntries: i().uint16,
                        numPalettes: i().uint16,
                        numColorRecords: i().uint16,
                        colorRecords: new(i().Pointer)(i().uint32, new(i().Array)(Lt, "numColorRecords")),
                        colorRecordIndices: new(i().Array)(i().uint16, "numPalettes")
                    },
                    0: {},
                    1: {
                        offsetPaletteTypeArray: new(i().Pointer)(i().uint32, new(i().Array)(i().uint32, "numPalettes")),
                        offsetPaletteLabelArray: new(i().Pointer)(i().uint32, new(i().Array)(i().uint16, "numPalettes")),
                        offsetPaletteEntryLabelArray: new(i().Pointer)(i().uint32, new(i().Array)(i().uint16, "numPaletteEntries"))
                    }
                }),
                Gt = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        coordinate: i().int16
                    },
                    2: {
                        coordinate: i().int16,
                        referenceGlyph: i().uint16,
                        baseCoordPoint: i().uint16
                    },
                    3: {
                        coordinate: i().int16,
                        deviceTable: new(i().Pointer)(i().uint16, Ie)
                    }
                }),
                Bt = new(i().Struct)({
                    defaultIndex: i().uint16,
                    baseCoordCount: i().uint16,
                    baseCoords: new(i().Array)(new(i().Pointer)(i().uint16, Gt), "baseCoordCount")
                }),
                Et = new(i().Struct)({
                    tag: new(i().String)(4),
                    minCoord: new(i().Pointer)(i().uint16, Gt, {
                        type: "parent"
                    }),
                    maxCoord: new(i().Pointer)(i().uint16, Gt, {
                        type: "parent"
                    })
                }),
                Rt = new(i().Struct)({
                    minCoord: new(i().Pointer)(i().uint16, Gt),
                    maxCoord: new(i().Pointer)(i().uint16, Gt),
                    featMinMaxCount: i().uint16,
                    featMinMaxRecords: new(i().Array)(Et, "featMinMaxCount")
                }),
                Vt = new(i().Struct)({
                    tag: new(i().String)(4),
                    minMax: new(i().Pointer)(i().uint16, Rt, {
                        type: "parent"
                    })
                }),
                zt = new(i().Struct)({
                    baseValues: new(i().Pointer)(i().uint16, Bt),
                    defaultMinMax: new(i().Pointer)(i().uint16, Rt),
                    baseLangSysCount: i().uint16,
                    baseLangSysRecords: new(i().Array)(Vt, "baseLangSysCount")
                }),
                Ut = new(i().Struct)({
                    tag: new(i().String)(4),
                    script: new(i().Pointer)(i().uint16, zt, {
                        type: "parent"
                    })
                }),
                Nt = new(i().Array)(Ut, i().uint16),
                Zt = new(i().Array)(new(i().String)(4), i().uint16),
                qt = new(i().Struct)({
                    baseTagList: new(i().Pointer)(i().uint16, Zt),
                    baseScriptList: new(i().Pointer)(i().uint16, Nt)
                }),
                jt = new(i().VersionedStruct)(i().uint32, {
                    header: {
                        horizAxis: new(i().Pointer)(i().uint16, qt),
                        vertAxis: new(i().Pointer)(i().uint16, qt)
                    },
                    65536: {},
                    65537: {
                        itemVariationStore: new(i().Pointer)(i().uint32, Ze)
                    }
                }),
                Ht = new(i().Array)(i().uint16, i().uint16),
                Yt = new(i().Struct)({
                    coverage: new(i().Pointer)(i().uint16, ke),
                    glyphCount: i().uint16,
                    attachPoints: new(i().Array)(new(i().Pointer)(i().uint16, Ht), "glyphCount")
                }),
                Wt = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        coordinate: i().int16
                    },
                    2: {
                        caretValuePoint: i().uint16
                    },
                    3: {
                        coordinate: i().int16,
                        deviceTable: new(i().Pointer)(i().uint16, Ie)
                    }
                }),
                Kt = new(i().Array)(new(i().Pointer)(i().uint16, Wt), i().uint16),
                Xt = new(i().Struct)({
                    coverage: new(i().Pointer)(i().uint16, ke),
                    ligGlyphCount: i().uint16,
                    ligGlyphs: new(i().Array)(new(i().Pointer)(i().uint16, Kt), "ligGlyphCount")
                }),
                Jt = new(i().Struct)({
                    markSetTableFormat: i().uint16,
                    markSetCount: i().uint16,
                    coverage: new(i().Array)(new(i().Pointer)(i().uint32, ke), "markSetCount")
                }),
                Qt = new(i().VersionedStruct)(i().uint32, {
                    header: {
                        glyphClassDef: new(i().Pointer)(i().uint16, Pe),
                        attachList: new(i().Pointer)(i().uint16, Yt),
                        ligCaretList: new(i().Pointer)(i().uint16, Xt),
                        markAttachClassDef: new(i().Pointer)(i().uint16, Pe)
                    },
                    65536: {},
                    65538: {
                        markGlyphSetsDef: new(i().Pointer)(i().uint16, Jt)
                    },
                    65539: {
                        markGlyphSetsDef: new(i().Pointer)(i().uint16, Jt),
                        itemVariationStore: new(i().Pointer)(i().uint32, Ze)
                    }
                }),
                $t = new(i().Bitfield)(i().uint16, ["xPlacement", "yPlacement", "xAdvance", "yAdvance", "xPlaDevice", "yPlaDevice", "xAdvDevice", "yAdvDevice"]),
                en = {
                    xPlacement: i().int16,
                    yPlacement: i().int16,
                    xAdvance: i().int16,
                    yAdvance: i().int16,
                    xPlaDevice: new(i().Pointer)(i().uint16, Ie, {
                        type: "global",
                        relativeTo: "rel"
                    }),
                    yPlaDevice: new(i().Pointer)(i().uint16, Ie, {
                        type: "global",
                        relativeTo: "rel"
                    }),
                    xAdvDevice: new(i().Pointer)(i().uint16, Ie, {
                        type: "global",
                        relativeTo: "rel"
                    }),
                    yAdvDevice: new(i().Pointer)(i().uint16, Ie, {
                        type: "global",
                        relativeTo: "rel"
                    })
                },
                tn = function() {
                    function e(e) {
                        void 0 === e && (e = "valueFormat"), this.key = e
                    }
                    var t = e.prototype;
                    return t.buildStruct = function(e) {
                        for (var t = e; !t[this.key] && t.parent;) t = t.parent;
                        if (t[this.key]) {
                            var n = {
                                    rel: function() {
                                        return t._startOffset
                                    }
                                },
                                r = t[this.key];
                            for (var a in r) r[a] && (n[a] = en[a]);
                            return new(i().Struct)(n)
                        }
                    }, t.size = function(e, t) {
                        return this.buildStruct(t).size(e, t)
                    }, t.decode = function(e, t) {
                        var n = this.buildStruct(t).decode(e, t);
                        return delete n.rel, n
                    }, e
                }(),
                nn = new(i().Struct)({
                    secondGlyph: i().uint16,
                    value1: new tn("valueFormat1"),
                    value2: new tn("valueFormat2")
                }),
                rn = new(i().Array)(nn, i().uint16),
                an = new(i().Struct)({
                    value1: new tn("valueFormat1"),
                    value2: new tn("valueFormat2")
                }),
                sn = new(i().VersionedStruct)(i().uint16, {
                    1: {
                        xCoordinate: i().int16,
                        yCoordinate: i().int16
                    },
                    2: {
                        xCoordinate: i().int16,
                        yCoordinate: i().int16,
                        anchorPoint: i().uint16
                    },
                    3: {
                        xCoordinate: i().int16,
                        yCoordinate: i().int16,
                        xDeviceTable: new(i().Pointer)(i().uint16, Ie),
                        yDeviceTable: new(i().Pointer)(i().uint16, Ie)
                    }
                }),
                on = new(i().Struct)({
                    entryAnchor: new(i().Pointer)(i().uint16, sn, {
                        type: "parent"
                    }),
                    exitAnchor: new(i().Pointer)(i().uint16, sn, {
                        type: "parent"
                    })
                }),
                ln = new(i().Struct)({
                    class: i().uint16,
                    markAnchor: new(i().Pointer)(i().uint16, sn, {
                        type: "parent"
                    })
                }),
                un = new(i().Array)(ln, i().uint16),
                cn = new(i().Array)(new(i().Pointer)(i().uint16, sn), (function(e) {
                    return e.parent.classCount
                })),
                hn = new(i().Array)(cn, i().uint16),
                fn = new(i().Array)(new(i().Pointer)(i().uint16, sn), (function(e) {
                    return e.parent.parent.classCount
                })),
                pn = new(i().Array)(fn, i().uint16),
                dn = new(i().Array)(new(i().Pointer)(i().uint16, pn), i().uint16),
                gn = new(i().VersionedStruct)("lookupType", {
                    1: new(i().VersionedStruct)(i().uint16, {
                        1: {
                            coverage: new(i().Pointer)(i().uint16, ke),
                            valueFormat: $t,
                            value: new tn
                        },
                        2: {
                            coverage: new(i().Pointer)(i().uint16, ke),
                            valueFormat: $t,
                            valueCount: i().uint16,
                            values: new(i().LazyArray)(new tn, "valueCount")
                        }
                    }),
                    2: new(i().VersionedStruct)(i().uint16, {
                        1: {
                            coverage: new(i().Pointer)(i().uint16, ke),
                            valueFormat1: $t,
                            valueFormat2: $t,
                            pairSetCount: i().uint16,
                            pairSets: new(i().LazyArray)(new(i().Pointer)(i().uint16, rn), "pairSetCount")
                        },
                        2: {
                            coverage: new(i().Pointer)(i().uint16, ke),
                            valueFormat1: $t,
                            valueFormat2: $t,
                            classDef1: new(i().Pointer)(i().uint16, Pe),
                            classDef2: new(i().Pointer)(i().uint16, Pe),
                            class1Count: i().uint16,
                            class2Count: i().uint16,
                            classRecords: new(i().LazyArray)(new(i().LazyArray)(an, "class2Count"), "class1Count")
                        }
                    }),
                    3: {
                        format: i().uint16,
                        coverage: new(i().Pointer)(i().uint16, ke),
                        entryExitCount: i().uint16,
                        entryExitRecords: new(i().Array)(on, "entryExitCount")
                    },
                    4: {
                        format: i().uint16,
                        markCoverage: new(i().Pointer)(i().uint16, ke),
                        baseCoverage: new(i().Pointer)(i().uint16, ke),
                        classCount: i().uint16,
                        markArray: new(i().Pointer)(i().uint16, un),
                        baseArray: new(i().Pointer)(i().uint16, hn)
                    },
                    5: {
                        format: i().uint16,
                        markCoverage: new(i().Pointer)(i().uint16, ke),
                        ligatureCoverage: new(i().Pointer)(i().uint16, ke),
                        classCount: i().uint16,
                        markArray: new(i().Pointer)(i().uint16, un),
                        ligatureArray: new(i().Pointer)(i().uint16, dn)
                    },
                    6: {
                        format: i().uint16,
                        mark1Coverage: new(i().Pointer)(i().uint16, ke),
                        mark2Coverage: new(i().Pointer)(i().uint16, ke),
                        classCount: i().uint16,
                        mark1Array: new(i().Pointer)(i().uint16, un),
                        mark2Array: new(i().Pointer)(i().uint16, hn)
                    },
                    7: Me,
                    8: Ee,
                    9: {
                        posFormat: i().uint16,
                        lookupType: i().uint16,
                        extension: new(i().Pointer)(i().uint32, void 0)
                    }
                });
            gn.versions[9].extension.type = gn;
            var yn = new(i().VersionedStruct)(i().uint32, {
                    header: {
                        scriptList: new(i().Pointer)(i().uint16, ve),
                        featureList: new(i().Pointer)(i().uint16, we),
                        lookupList: new(i().Pointer)(i().uint16, new Ce(gn))
                    },
                    65536: {},
                    65537: {
                        featureVariations: new(i().Pointer)(i().uint32, Ke)
                    }
                }),
                vn = new(i().Array)(i().uint16, i().uint16),
                mn = vn,
                bn = new(i().Struct)({
                    glyph: i().uint16,
                    compCount: i().uint16,
                    components: new(i().Array)(i().uint16, (function(e) {
                        return e.compCount - 1
                    }))
                }),
                wn = new(i().Array)(new(i().Pointer)(i().uint16, bn), i().uint16),
                _n = new(i().VersionedStruct)("lookupType", {
                    1: new(i().VersionedStruct)(i().uint16, {
                        1: {
                            coverage: new(i().Pointer)(i().uint16, ke),
                            deltaGlyphID: i().int16
                        },
                        2: {
                            coverage: new(i().Pointer)(i().uint16, ke),
                            glyphCount: i().uint16,
                            substitute: new(i().LazyArray)(i().uint16, "glyphCount")
                        }
                    }),
                    2: {
                        substFormat: i().uint16,
                        coverage: new(i().Pointer)(i().uint16, ke),
                        count: i().uint16,
                        sequences: new(i().LazyArray)(new(i().Pointer)(i().uint16, vn), "count")
                    },
                    3: {
                        substFormat: i().uint16,
                        coverage: new(i().Pointer)(i().uint16, ke),
                        count: i().uint16,
                        alternateSet: new(i().LazyArray)(new(i().Pointer)(i().uint16, mn), "count")
                    },
                    4: {
                        substFormat: i().uint16,
                        coverage: new(i().Pointer)(i().uint16, ke),
                        count: i().uint16,
                        ligatureSets: new(i().LazyArray)(new(i().Pointer)(i().uint16, wn), "count")
                    },
                    5: Me,
                    6: Ee,
                    7: {
                        substFormat: i().uint16,
                        lookupType: i().uint16,
                        extension: new(i().Pointer)(i().uint32, void 0)
                    },
                    8: {
                        substFormat: i().uint16,
                        coverage: new(i().Pointer)(i().uint16, ke),
                        backtrackCoverage: new(i().Array)(new(i().Pointer)(i().uint16, ke), "backtrackGlyphCount"),
                        lookaheadGlyphCount: i().uint16,
                        lookaheadCoverage: new(i().Array)(new(i().Pointer)(i().uint16, ke), "lookaheadGlyphCount"),
                        glyphCount: i().uint16,
                        substitutes: new(i().Array)(i().uint16, "glyphCount")
                    }
                });
            _n.versions[7].extension.type = _n;
            var Cn = new(i().VersionedStruct)(i().uint32, {
                    header: {
                        scriptList: new(i().Pointer)(i().uint16, ve),
                        featureList: new(i().Pointer)(i().uint16, we),
                        lookupList: new(i().Pointer)(i().uint16, new Ce(_n))
                    },
                    65536: {},
                    65537: {
                        featureVariations: new(i().Pointer)(i().uint32, Ke)
                    }
                }),
                Sn = new(i().Array)(i().uint16, i().uint16),
                xn = new(i().Struct)({
                    shrinkageEnableGSUB: new(i().Pointer)(i().uint16, Sn),
                    shrinkageDisableGSUB: new(i().Pointer)(i().uint16, Sn),
                    shrinkageEnableGPOS: new(i().Pointer)(i().uint16, Sn),
                    shrinkageDisableGPOS: new(i().Pointer)(i().uint16, Sn),
                    shrinkageJstfMax: new(i().Pointer)(i().uint16, new Ce(gn)),
                    extensionEnableGSUB: new(i().Pointer)(i().uint16, Sn),
                    extensionDisableGSUB: new(i().Pointer)(i().uint16, Sn),
                    extensionEnableGPOS: new(i().Pointer)(i().uint16, Sn),
                    extensionDisableGPOS: new(i().Pointer)(i().uint16, Sn),
                    extensionJstfMax: new(i().Pointer)(i().uint16, new Ce(gn))
                }),
                kn = new(i().Array)(new(i().Pointer)(i().uint16, xn), i().uint16),
                An = new(i().Struct)({
                    tag: new(i().String)(4),
                    jstfLangSys: new(i().Pointer)(i().uint16, kn)
                }),
                Pn = new(i().Struct)({
                    extenderGlyphs: new(i().Pointer)(i().uint16, new(i().Array)(i().uint16, i().uint16)),
                    defaultLangSys: new(i().Pointer)(i().uint16, kn),
                    langSysCount: i().uint16,
                    langSysRecords: new(i().Array)(An, "langSysCount")
                }),
                In = new(i().Struct)({
                    tag: new(i().String)(4),
                    script: new(i().Pointer)(i().uint16, Pn, {
                        type: "parent"
                    })
                }),
                On = new(i().Struct)({
                    version: i().uint32,
                    scriptCount: i().uint16,
                    scriptList: new(i().Array)(In, "scriptCount")
                }),
                Fn = function() {
                    function e(e) {
                        this._size = e
                    }
                    var t = e.prototype;
                    return t.decode = function(e, t) {
                        switch (this.size(0, t)) {
                            case 1:
                                return e.readUInt8();
                            case 2:
                                return e.readUInt16BE();
                            case 3:
                                return e.readUInt24BE();
                            case 4:
                                return e.readUInt32BE()
                        }
                    }, t.size = function(e, t) {
                        return (0, u.resolveLength)(this._size, null, t)
                    }, e
                }(),
                Dn = new(i().Struct)({
                    entry: new Fn((function(e) {
                        return 1 + ((48 & e.parent.entryFormat) >> 4)
                    })),
                    outerIndex: function(e) {
                        return e.entry >> 1 + (15 & e.parent.entryFormat)
                    },
                    innerIndex: function(e) {
                        return e.entry & (1 << 1 + (15 & e.parent.entryFormat)) - 1
                    }
                }),
                Tn = new(i().Struct)({
                    entryFormat: i().uint16,
                    mapCount: i().uint16,
                    mapData: new(i().Array)(Dn, "mapCount")
                }),
                Ln = new(i().Struct)({
                    majorVersion: i().uint16,
                    minorVersion: i().uint16,
                    itemVariationStore: new(i().Pointer)(i().uint32, Ze),
                    advanceWidthMapping: new(i().Pointer)(i().uint32, Tn),
                    LSBMapping: new(i().Pointer)(i().uint32, Tn),
                    RSBMapping: new(i().Pointer)(i().uint32, Tn)
                }),
                Mn = new(i().Struct)({
                    format: i().uint32,
                    length: i().uint32,
                    offset: i().uint32
                }),
                Gn = new(i().Struct)({
                    reserved: new(i().Reserved)(i().uint16, 2),
                    cbSignature: i().uint32,
                    signature: new(i().Buffer)("cbSignature")
                }),
                Bn = new(i().Struct)({
                    ulVersion: i().uint32,
                    usNumSigs: i().uint16,
                    usFlag: i().uint16,
                    signatures: new(i().Array)(Mn, "usNumSigs"),
                    signatureBlocks: new(i().Array)(Gn, "usNumSigs")
                }),
                En = new(i().Struct)({
                    rangeMaxPPEM: i().uint16,
                    rangeGaspBehavior: new(i().Bitfield)(i().uint16, ["grayscale", "gridfit", "symmetricSmoothing", "symmetricGridfit"])
                }),
                Rn = new(i().Struct)({
                    version: i().uint16,
                    numRanges: i().uint16,
                    gaspRanges: new(i().Array)(En, "numRanges")
                }),
                Vn = new(i().Struct)({
                    pixelSize: i().uint8,
                    maximumWidth: i().uint8,
                    widths: new(i().Array)(i().uint8, (function(e) {
                        return e.parent.parent.maxp.numGlyphs
                    }))
                }),
                zn = new(i().Struct)({
                    version: i().uint16,
                    numRecords: i().int16,
                    sizeDeviceRecord: i().int32,
                    records: new(i().Array)(Vn, "numRecords")
                }),
                Un = new(i().Struct)({
                    left: i().uint16,
                    right: i().uint16,
                    value: i().int16
                }),
                Nn = new(i().Struct)({
                    firstGlyph: i().uint16,
                    nGlyphs: i().uint16,
                    offsets: new(i().Array)(i().uint16, "nGlyphs"),
                    max: function(e) {
                        return e.offsets.length && Math.max.apply(Math, e.offsets)
                    }
                }),
                Zn = new(i().Struct)({
                    off: function(e) {
                        return e._startOffset - e.parent.parent._startOffset
                    },
                    len: function(e) {
                        return ((e.parent.leftTable.max - e.off) / e.parent.rowWidth + 1) * (e.parent.rowWidth / 2)
                    },
                    values: new(i().LazyArray)(i().int16, "len")
                }),
                qn = new(i().VersionedStruct)("format", {
                    0: {
                        nPairs: i().uint16,
                        searchRange: i().uint16,
                        entrySelector: i().uint16,
                        rangeShift: i().uint16,
                        pairs: new(i().Array)(Un, "nPairs")
                    },
                    2: {
                        rowWidth: i().uint16,
                        leftTable: new(i().Pointer)(i().uint16, Nn, {
                            type: "parent"
                        }),
                        rightTable: new(i().Pointer)(i().uint16, Nn, {
                            type: "parent"
                        }),
                        array: new(i().Pointer)(i().uint16, Zn, {
                            type: "parent"
                        })
                    },
                    3: {
                        glyphCount: i().uint16,
                        kernValueCount: i().uint8,
                        leftClassCount: i().uint8,
                        rightClassCount: i().uint8,
                        flags: i().uint8,
                        kernValue: new(i().Array)(i().int16, "kernValueCount"),
                        leftClass: new(i().Array)(i().uint8, "glyphCount"),
                        rightClass: new(i().Array)(i().uint8, "glyphCount"),
                        kernIndex: new(i().Array)(i().uint8, (function(e) {
                            return e.leftClassCount * e.rightClassCount
                        }))
                    }
                }),
                jn = new(i().VersionedStruct)("version", {
                    0: {
                        subVersion: i().uint16,
                        length: i().uint16,
                        format: i().uint8,
                        coverage: new(i().Bitfield)(i().uint8, ["horizontal", "minimum", "crossStream", "override"]),
                        subtable: qn,
                        padding: new(i().Reserved)(i().uint8, (function(e) {
                            return e.length - e._currentOffset
                        }))
                    },
                    1: {
                        length: i().uint32,
                        coverage: new(i().Bitfield)(i().uint8, [null, null, null, null, null, "variation", "crossStream", "vertical"]),
                        format: i().uint8,
                        tupleIndex: i().uint16,
                        subtable: qn,
                        padding: new(i().Reserved)(i().uint8, (function(e) {
                            return e.length - e._currentOffset
                        }))
                    }
                }),
                Hn = new(i().VersionedStruct)(i().uint16, {
                    0: {
                        nTables: i().uint16,
                        tables: new(i().Array)(jn, "nTables")
                    },
                    1: {
                        reserved: new(i().Reserved)(i().uint16),
                        nTables: i().uint32,
                        tables: new(i().Array)(jn, "nTables")
                    }
                }),
                Yn = new(i().Struct)({
                    version: i().uint16,
                    numGlyphs: i().uint16,
                    yPels: new(i().Array)(i().uint8, "numGlyphs")
                }),
                Wn = new(i().Struct)({
                    version: i().uint16,
                    fontNumber: i().uint32,
                    pitch: i().uint16,
                    xHeight: i().uint16,
                    style: i().uint16,
                    typeFamily: i().uint16,
                    capHeight: i().uint16,
                    symbolSet: i().uint16,
                    typeface: new(i().String)(16),
                    characterComplement: new(i().String)(8),
                    fileName: new(i().String)(6),
                    strokeWeight: new(i().String)(1),
                    widthType: new(i().String)(1),
                    serifStyle: i().uint8,
                    reserved: new(i().Reserved)(i().uint8)
                }),
                Kn = new(i().Struct)({
                    bCharSet: i().uint8,
                    xRatio: i().uint8,
                    yStartRatio: i().uint8,
                    yEndRatio: i().uint8
                }),
                Xn = new(i().Struct)({
                    yPelHeight: i().uint16,
                    yMax: i().int16,
                    yMin: i().int16
                }),
                Jn = new(i().Struct)({
                    recs: i().uint16,
                    startsz: i().uint8,
                    endsz: i().uint8,
                    entries: new(i().Array)(Xn, "recs")
                }),
                Qn = new(i().Struct)({
                    version: i().uint16,
                    numRecs: i().uint16,
                    numRatios: i().uint16,
                    ratioRanges: new(i().Array)(Kn, "numRatios"),
                    offsets: new(i().Array)(i().uint16, "numRatios"),
                    groups: new(i().Array)(Jn, "numRecs")
                }),
                $n = new(i().Struct)({
                    version: i().uint16,
                    ascent: i().int16,
                    descent: i().int16,
                    lineGap: i().int16,
                    advanceHeightMax: i().int16,
                    minTopSideBearing: i().int16,
                    minBottomSideBearing: i().int16,
                    yMaxExtent: i().int16,
                    caretSlopeRise: i().int16,
                    caretSlopeRun: i().int16,
                    caretOffset: i().int16,
                    reserved: new(i().Reserved)(i().int16, 4),
                    metricDataFormat: i().int16,
                    numberOfMetrics: i().uint16
                }),
                er = new(i().Struct)({
                    advance: i().uint16,
                    bearing: i().int16
                }),
                tr = new(i().Struct)({
                    metrics: new(i().LazyArray)(er, (function(e) {
                        return e.parent.vhea.numberOfMetrics
                    })),
                    bearings: new(i().LazyArray)(i().int16, (function(e) {
                        return e.parent.maxp.numGlyphs - e.parent.vhea.numberOfMetrics
                    }))
                }),
                nr = new(i().Fixed)(16, "BE", 14),
                rr = new(i().Struct)({
                    fromCoord: nr,
                    toCoord: nr
                }),
                ir = new(i().Struct)({
                    pairCount: i().uint16,
                    correspondence: new(i().Array)(rr, "pairCount")
                }),
                ar = new(i().Struct)({
                    version: i().fixed32,
                    axisCount: i().uint32,
                    segment: new(i().Array)(ir, "axisCount")
                }),
                sr = function() {
                    function e(e, t, n) {
                        this.type = e, this.stream = t, this.parent = n, this.base = this.stream.pos, this._items = []
                    }
                    var t = e.prototype;
                    return t.getItem = function(e) {
                        if (null == this._items[e]) {
                            var t = this.stream.pos;
                            this.stream.pos = this.base + this.type.size(null, this.parent) * e, this._items[e] = this.type.decode(this.stream, this.parent), this.stream.pos = t
                        }
                        return this._items[e]
                    }, t.inspect = function() {
                        return "[UnboundedArray " + this.type.constructor.name + "]"
                    }, e
                }(),
                or = function(e) {
                    function t(t) {
                        return e.call(this, t, 0) || this
                    }
                    return (0, l.Z)(t, e), t.prototype.decode = function(e, t) {
                        return new sr(this.type, e, t)
                    }, t
                }(i().Array),
                lr = function(e) {
                    void 0 === e && (e = i().uint16);
                    var t = function() {
                        function e(e) {
                            this.type = e
                        }
                        var t = e.prototype;
                        return t.decode = function(e, t) {
                            return t = t.parent.parent, this.type.decode(e, t)
                        }, t.size = function(e, t) {
                            return t = t.parent.parent, this.type.size(e, t)
                        }, t.encode = function(e, t, n) {
                            return n = n.parent.parent, this.type.encode(e, t, n)
                        }, e
                    }();
                    e = new t(e);
                    var n = new(i().Struct)({
                            unitSize: i().uint16,
                            nUnits: i().uint16,
                            searchRange: i().uint16,
                            entrySelector: i().uint16,
                            rangeShift: i().uint16
                        }),
                        r = new(i().Struct)({
                            lastGlyph: i().uint16,
                            firstGlyph: i().uint16,
                            value: e
                        }),
                        a = new(i().Struct)({
                            lastGlyph: i().uint16,
                            firstGlyph: i().uint16,
                            values: new(i().Pointer)(i().uint16, new(i().Array)(e, (function(e) {
                                return e.lastGlyph - e.firstGlyph + 1
                            })), {
                                type: "parent"
                            })
                        }),
                        s = new(i().Struct)({
                            glyph: i().uint16,
                            value: e
                        });
                    return new(i().VersionedStruct)(i().uint16, {
                        0: {
                            values: new or(e)
                        },
                        2: {
                            binarySearchHeader: n,
                            segments: new(i().Array)(r, (function(e) {
                                return e.binarySearchHeader.nUnits
                            }))
                        },
                        4: {
                            binarySearchHeader: n,
                            segments: new(i().Array)(a, (function(e) {
                                return e.binarySearchHeader.nUnits
                            }))
                        },
                        6: {
                            binarySearchHeader: n,
                            segments: new(i().Array)(s, (function(e) {
                                return e.binarySearchHeader.nUnits
                            }))
                        },
                        8: {
                            firstGlyph: i().uint16,
                            count: i().uint16,
                            values: new(i().Array)(e, "count")
                        }
                    })
                };

            function ur(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = i().uint16);
                var n = Object.assign({
                        newState: i().uint16,
                        flags: i().uint16
                    }, e),
                    r = new(i().Struct)(n),
                    a = new or(new(i().Array)(i().uint16, (function(e) {
                        return e.nClasses
                    })));
                return new(i().Struct)({
                    nClasses: i().uint32,
                    classTable: new(i().Pointer)(i().uint32, new lr(t)),
                    stateArray: new(i().Pointer)(i().uint32, a),
                    entryTable: new(i().Pointer)(i().uint32, new or(r))
                })
            }
            var cr = new(i().VersionedStruct)("format", {
                    0: {
                        deltas: new(i().Array)(i().int16, 32)
                    },
                    1: {
                        deltas: new(i().Array)(i().int16, 32),
                        mappingData: new lr(i().uint16)
                    },
                    2: {
                        standardGlyph: i().uint16,
                        controlPoints: new(i().Array)(i().uint16, 32)
                    },
                    3: {
                        standardGlyph: i().uint16,
                        controlPoints: new(i().Array)(i().uint16, 32),
                        mappingData: new lr(i().uint16)
                    }
                }),
                hr = new(i().Struct)({
                    version: i().fixed32,
                    format: i().uint16,
                    defaultBaseline: i().uint16,
                    subtable: cr
                }),
                fr = new(i().Struct)({
                    setting: i().uint16,
                    nameIndex: i().int16,
                    name: function(e) {
                        return e.parent.parent.parent.name.records.fontFeatures[e.nameIndex]
                    }
                }),
                pr = new(i().Struct)({
                    feature: i().uint16,
                    nSettings: i().uint16,
                    settingTable: new(i().Pointer)(i().uint32, new(i().Array)(fr, "nSettings"), {
                        type: "parent"
                    }),
                    featureFlags: new(i().Bitfield)(i().uint8, [null, null, null, null, null, null, "hasDefault", "exclusive"]),
                    defaultSetting: i().uint8,
                    nameIndex: i().int16,
                    name: function(e) {
                        return e.parent.parent.name.records.fontFeatures[e.nameIndex]
                    }
                }),
                dr = new(i().Struct)({
                    version: i().fixed32,
                    featureNameCount: i().uint16,
                    reserved1: new(i().Reserved)(i().uint16),
                    reserved2: new(i().Reserved)(i().uint32),
                    featureNames: new(i().Array)(pr, "featureNameCount")
                }),
                gr = new(i().Struct)({
                    axisTag: new(i().String)(4),
                    minValue: i().fixed32,
                    defaultValue: i().fixed32,
                    maxValue: i().fixed32,
                    flags: i().uint16,
                    nameID: i().uint16,
                    name: function(e) {
                        return e.parent.parent.name.records.fontFeatures[e.nameID]
                    }
                }),
                yr = new(i().Struct)({
                    nameID: i().uint16,
                    name: function(e) {
                        return e.parent.parent.name.records.fontFeatures[e.nameID]
                    },
                    flags: i().uint16,
                    coord: new(i().Array)(i().fixed32, (function(e) {
                        return e.parent.axisCount
                    })),
                    postscriptNameID: new(i().Optional)(i().uint16, (function(e) {
                        return e.parent.instanceSize - e._currentOffset > 0
                    }))
                }),
                vr = new(i().Struct)({
                    version: i().fixed32,
                    offsetToData: i().uint16,
                    countSizePairs: i().uint16,
                    axisCount: i().uint16,
                    axisSize: i().uint16,
                    instanceCount: i().uint16,
                    instanceSize: i().uint16,
                    axis: new(i().Array)(gr, "axisCount"),
                    instance: new(i().Array)(yr, "instanceCount")
                }),
                mr = new(i().Fixed)(16, "BE", 14),
                br = function() {
                    function e() {}
                    return e.decode = function(e, t) {
                        return t.flags ? e.readUInt32BE() : 2 * e.readUInt16BE()
                    }, e
                }(),
                wr = new(i().Struct)({
                    version: i().uint16,
                    reserved: new(i().Reserved)(i().uint16),
                    axisCount: i().uint16,
                    globalCoordCount: i().uint16,
                    globalCoords: new(i().Pointer)(i().uint32, new(i().Array)(new(i().Array)(mr, "axisCount"), "globalCoordCount")),
                    glyphCount: i().uint16,
                    flags: i().uint16,
                    offsetToData: i().uint32,
                    offsets: new(i().Array)(new(i().Pointer)(br, "void", {
                        relativeTo: "offsetToData",
                        allowNull: !1
                    }), (function(e) {
                        return e.glyphCount + 1
                    }))
                }),
                _r = new(i().Struct)({
                    length: i().uint16,
                    coverage: i().uint16,
                    subFeatureFlags: i().uint32,
                    stateTable: new function(e, t) {
                        void 0 === e && (e = {});
                        var n = new(i().Struct)({
                                version: function() {
                                    return 8
                                },
                                firstGlyph: i().uint16,
                                values: new(i().Array)(i().uint8, i().uint16)
                            }),
                            r = Object.assign({
                                newStateOffset: i().uint16,
                                newState: function(e) {
                                    return (e.newStateOffset - (e.parent.stateArray.base - e.parent._startOffset)) / e.parent.nClasses
                                },
                                flags: i().uint16
                            }, e),
                            a = new(i().Struct)(r),
                            s = new or(new(i().Array)(i().uint8, (function(e) {
                                return e.nClasses
                            })));
                        return new(i().Struct)({
                            nClasses: i().uint16,
                            classTable: new(i().Pointer)(i().uint16, n),
                            stateArray: new(i().Pointer)(i().uint16, s),
                            entryTable: new(i().Pointer)(i().uint16, new or(a))
                        })
                    }
                }),
                Cr = new(i().Struct)({
                    justClass: i().uint32,
                    beforeGrowLimit: i().fixed32,
                    beforeShrinkLimit: i().fixed32,
                    afterGrowLimit: i().fixed32,
                    afterShrinkLimit: i().fixed32,
                    growFlags: i().uint16,
                    shrinkFlags: i().uint16
                }),
                Sr = new(i().Array)(Cr, i().uint32),
                xr = new(i().VersionedStruct)("actionType", {
                    0: {
                        lowerLimit: i().fixed32,
                        upperLimit: i().fixed32,
                        order: i().uint16,
                        glyphs: new(i().Array)(i().uint16, i().uint16)
                    },
                    1: {
                        addGlyph: i().uint16
                    },
                    2: {
                        substThreshold: i().fixed32,
                        addGlyph: i().uint16,
                        substGlyph: i().uint16
                    },
                    3: {},
                    4: {
                        variationAxis: i().uint32,
                        minimumLimit: i().fixed32,
                        noStretchValue: i().fixed32,
                        maximumLimit: i().fixed32
                    },
                    5: {
                        flags: i().uint16,
                        glyph: i().uint16
                    }
                }),
                kr = new(i().Struct)({
                    actionClass: i().uint16,
                    actionType: i().uint16,
                    actionLength: i().uint32,
                    actionData: xr,
                    padding: new(i().Reserved)(i().uint8, (function(e) {
                        return e.actionLength - e._currentOffset
                    }))
                }),
                Ar = new(i().Array)(kr, i().uint32),
                Pr = new(i().Struct)({
                    lookupTable: new lr(new(i().Pointer)(i().uint16, Ar))
                }),
                Ir = new(i().Struct)({
                    classTable: new(i().Pointer)(i().uint16, _r, {
                        type: "parent"
                    }),
                    wdcOffset: i().uint16,
                    postCompensationTable: new(i().Pointer)(i().uint16, Pr, {
                        type: "parent"
                    }),
                    widthDeltaClusters: new lr(new(i().Pointer)(i().uint16, Sr, {
                        type: "parent",
                        relativeTo: "wdcOffset"
                    }))
                }),
                Or = new(i().Struct)({
                    version: i().uint32,
                    format: i().uint16,
                    horizontal: new(i().Pointer)(i().uint16, Ir),
                    vertical: new(i().Pointer)(i().uint16, Ir)
                }),
                Fr = {
                    action: i().uint16
                },
                Dr = {
                    markIndex: i().uint16,
                    currentIndex: i().uint16
                },
                Tr = {
                    currentInsertIndex: i().uint16,
                    markedInsertIndex: i().uint16
                },
                Lr = new(i().Struct)({
                    items: new or(new(i().Pointer)(i().uint32, new lr))
                }),
                Mr = new(i().VersionedStruct)("type", {
                    0: {
                        stateTable: new ur
                    },
                    1: {
                        stateTable: new ur(Dr),
                        substitutionTable: new(i().Pointer)(i().uint32, Lr)
                    },
                    2: {
                        stateTable: new ur(Fr),
                        ligatureActions: new(i().Pointer)(i().uint32, new or(i().uint32)),
                        components: new(i().Pointer)(i().uint32, new or(i().uint16)),
                        ligatureList: new(i().Pointer)(i().uint32, new or(i().uint16))
                    },
                    4: {
                        lookupTable: new lr
                    },
                    5: {
                        stateTable: new ur(Tr),
                        insertionActions: new(i().Pointer)(i().uint32, new or(i().uint16))
                    }
                }),
                Gr = new(i().Struct)({
                    length: i().uint32,
                    coverage: i().uint24,
                    type: i().uint8,
                    subFeatureFlags: i().uint32,
                    table: Mr,
                    padding: new(i().Reserved)(i().uint8, (function(e) {
                        return e.length - e._currentOffset
                    }))
                }),
                Br = new(i().Struct)({
                    featureType: i().uint16,
                    featureSetting: i().uint16,
                    enableFlags: i().uint32,
                    disableFlags: i().uint32
                }),
                Er = new(i().Struct)({
                    defaultFlags: i().uint32,
                    chainLength: i().uint32,
                    nFeatureEntries: i().uint32,
                    nSubtables: i().uint32,
                    features: new(i().Array)(Br, "nFeatureEntries"),
                    subtables: new(i().Array)(Gr, "nSubtables")
                }),
                Rr = new(i().Struct)({
                    version: i().uint16,
                    unused: new(i().Reserved)(i().uint16),
                    nChains: i().uint32,
                    chains: new(i().Array)(Er, "nChains")
                }),
                Vr = new(i().Struct)({
                    left: i().int16,
                    top: i().int16,
                    right: i().int16,
                    bottom: i().int16
                }),
                zr = new(i().Struct)({
                    version: i().fixed32,
                    format: i().uint16,
                    lookupTable: new lr(Vr)
                }),
                Ur = {};
            Ur.cmap = M, Ur.head = G, Ur.hhea = B, Ur.hmtx = R, Ur.maxp = V, Ur.name = H, Ur["OS/2"] = W, Ur.post = X, Ur.fpgm = Q, Ur.loca = $, Ur.prep = ee, Ur["cvt "] = J, Ur.glyf = te, Ur["CFF "] = dt, Ur.CFF2 = dt, Ur.VORG = yt, Ur.EBLC = Pt, Ur.CBLC = Ur.EBLC, Ur.sbix = Ot, Ur.COLR = Tt, Ur.CPAL = Mt, Ur.BASE = jt, Ur.GDEF = Qt, Ur.GPOS = yn, Ur.GSUB = Cn, Ur.JSTF = On, Ur.HVAR = Ln, Ur.DSIG = Bn, Ur.gasp = Rn, Ur.hdmx = zn, Ur.kern = Hn, Ur.LTSH = Yn, Ur.PCLT = Wn, Ur.VDMX = Qn, Ur.vhea = $n, Ur.vmtx = tr, Ur.avar = ar, Ur.bsln = hr, Ur.feat = dr, Ur.fvar = vr, Ur.gvar = wr, Ur.just = Or, Ur.morx = Rr, Ur.opbd = zr;
            var Nr, Zr = new(i().Struct)({
                    tag: new(i().String)(4),
                    checkSum: i().uint32,
                    offset: new(i().Pointer)(i().uint32, "void", {
                        type: "global"
                    }),
                    length: i().uint32
                }),
                qr = new(i().Struct)({
                    tag: new(i().String)(4),
                    numTables: i().uint16,
                    searchRange: i().uint16,
                    entrySelector: i().uint16,
                    rangeShift: i().uint16,
                    tables: new(i().Array)(Zr, "numTables")
                });

            function jr(e, t) {
                for (var n = 0, r = e.length - 1; n <= r;) {
                    var i = n + r >> 1,
                        a = t(e[i]);
                    if (a < 0) r = i - 1;
                    else {
                        if (!(a > 0)) return i;
                        n = i + 1
                    }
                }
                return -1
            }

            function Hr(e, t) {
                for (var n = []; e < t;) n.push(e++);
                return n
            }
            qr.process = function() {
                for (var e, t = {}, n = (0, a.Z)(this.tables); !(e = n()).done;) {
                    var r = e.value;
                    t[r.tag] = r
                }
                this.tables = t
            }, qr.preEncode = function(e) {
                var t = [];
                for (var n in this.tables) {
                    var r = this.tables[n];
                    r && t.push({
                        tag: n,
                        checkSum: 0,
                        offset: new(i().VoidPointer)(Ur[n], r),
                        length: Ur[n].size(r)
                    })
                }
                this.tag = "true", this.numTables = t.length, this.tables = t;
                var a = Math.floor(Math.log(this.numTables) / Math.LN2),
                    s = Math.pow(2, a);
                this.searchRange = 16 * s, this.entrySelector = Math.log(s) / Math.LN2, this.rangeShift = 16 * this.numTables - this.searchRange
            };
            try {
                var Yr = n(4914)
            } catch (no) {}
            var Wr = (Nr = function() {
                    function e(e) {
                        if (this.encoding = null, this.cmap = this.findSubtable(e, [
                                [3, 10],
                                [0, 6],
                                [0, 4],
                                [3, 1],
                                [0, 3],
                                [0, 2],
                                [0, 1],
                                [0, 0]
                            ]), !this.cmap && Yr)
                            for (var t, n = (0, a.Z)(e.tables); !(t = n()).done;) {
                                var r = t.value,
                                    i = z(r.platformID, r.encodingID, r.table.language - 1);
                                Yr.encodingExists(i) && (this.cmap = r.table, this.encoding = i)
                            }
                        if (!this.cmap) throw new Error("Could not find a supported cmap table");
                        this.uvs = this.findSubtable(e, [
                            [0, 5]
                        ]), this.uvs && 14 !== this.uvs.version && (this.uvs = null)
                    }
                    var t = e.prototype;
                    return t.findSubtable = function(e, t) {
                        for (var n, r = (0, a.Z)(t); !(n = r()).done;)
                            for (var i, s = n.value, o = s[0], l = s[1], u = (0, a.Z)(e.tables); !(i = u()).done;) {
                                var c = i.value;
                                if (c.platformID === o && c.encodingID === l) return c.table
                            }
                        return null
                    }, t.lookup = function(e, t) {
                        if (this.encoding) {
                            var n = Yr.encode(String.fromCodePoint(e), this.encoding);
                            e = 0;
                            for (var r = 0; r < n.length; r++) e = e << 8 | n[r]
                        } else if (t) {
                            var i = this.getVariationSelector(e, t);
                            if (i) return i
                        }
                        var a = this.cmap;
                        switch (a.version) {
                            case 0:
                                return a.codeMap.get(e) || 0;
                            case 4:
                                for (var s = 0, o = a.segCount - 1; s <= o;) {
                                    var l = s + o >> 1;
                                    if (e < a.startCode.get(l)) o = l - 1;
                                    else {
                                        if (!(e > a.endCode.get(l))) {
                                            var u = a.idRangeOffset.get(l),
                                                c = void 0;
                                            if (0 === u) c = e + a.idDelta.get(l);
                                            else {
                                                var h = u / 2 + (e - a.startCode.get(l)) - (a.segCount - l);
                                                0 !== (c = a.glyphIndexArray.get(h) || 0) && (c += a.idDelta.get(l))
                                            }
                                            return 65535 & c
                                        }
                                        s = l + 1
                                    }
                                }
                                return 0;
                            case 8:
                                throw new Error("TODO: cmap format 8");
                            case 6:
                            case 10:
                                return a.glyphIndices.get(e - a.firstCode) || 0;
                            case 12:
                            case 13:
                                for (var f = 0, p = a.nGroups - 1; f <= p;) {
                                    var d = f + p >> 1,
                                        g = a.groups.get(d);
                                    if (e < g.startCharCode) p = d - 1;
                                    else {
                                        if (!(e > g.endCharCode)) return 12 === a.version ? g.glyphID + (e - g.startCharCode) : g.glyphID;
                                        f = d + 1
                                    }
                                }
                                return 0;
                            case 14:
                                throw new Error("TODO: cmap format 14");
                            default:
                                throw new Error("Unknown cmap format " + a.version)
                        }
                    }, t.getVariationSelector = function(e, t) {
                        if (!this.uvs) return 0;
                        var n = this.uvs.varSelectors.toArray(),
                            r = jr(n, (function(e) {
                                return t - e.varSelector
                            })),
                            i = n[r];
                        return -1 !== r && i.defaultUVS && (r = jr(i.defaultUVS, (function(t) {
                            return e < t.startUnicodeValue ? -1 : e > t.startUnicodeValue + t.additionalCount ? 1 : 0
                        }))), -1 !== r && i.nonDefaultUVS && -1 !== (r = jr(i.nonDefaultUVS, (function(t) {
                            return e - t.unicodeValue
                        }))) ? i.nonDefaultUVS[r].glyphID : 0
                    }, t.getCharacterSet = function() {
                        var e = this.cmap;
                        switch (e.version) {
                            case 0:
                                return Hr(0, e.codeMap.length);
                            case 4:
                                for (var t = [], n = e.endCode.toArray(), r = 0; r < n.length; r++) {
                                    var i = n[r] + 1,
                                        s = e.startCode.get(r);
                                    t.push.apply(t, Hr(s, i))
                                }
                                return t;
                            case 8:
                                throw new Error("TODO: cmap format 8");
                            case 6:
                            case 10:
                                return Hr(e.firstCode, e.firstCode + e.glyphIndices.length);
                            case 12:
                            case 13:
                                for (var o, l = [], u = (0, a.Z)(e.groups.toArray()); !(o = u()).done;) {
                                    var c = o.value;
                                    l.push.apply(l, Hr(c.startCharCode, c.endCharCode + 1))
                                }
                                return l;
                            case 14:
                                throw new Error("TODO: cmap format 14");
                            default:
                                throw new Error("Unknown cmap format " + e.version)
                        }
                    }, t.codePointsForGlyph = function(e) {
                        var t = this.cmap;
                        switch (t.version) {
                            case 0:
                                for (var n = [], r = 0; r < 256; r++) t.codeMap.get(r) === e && n.push(r);
                                return n;
                            case 4:
                                for (var i = [], s = 0; s < t.segCount; s++)
                                    for (var o = t.endCode.get(s), l = t.startCode.get(s), u = t.idRangeOffset.get(s), c = t.idDelta.get(s), h = l; h <= o; h++) {
                                        var f = 0;
                                        if (0 === u) f = h + c;
                                        else {
                                            var p = u / 2 + (h - l) - (t.segCount - s);
                                            0 !== (f = t.glyphIndexArray.get(p) || 0) && (f += c)
                                        }
                                        f === e && i.push(h)
                                    }
                                return i;
                            case 12:
                                for (var d, g = [], y = (0, a.Z)(t.groups.toArray()); !(d = y()).done;) {
                                    var v = d.value;
                                    e >= v.glyphID && e <= v.glyphID + (v.endCharCode - v.startCharCode) && g.push(v.startCharCode + (e - v.glyphID))
                                }
                                return g;
                            case 13:
                                for (var m, b = [], w = (0, a.Z)(t.groups.toArray()); !(m = w()).done;) {
                                    var _ = m.value;
                                    e === _.glyphID && b.push.apply(b, Hr(_.startCharCode, _.endCharCode + 1))
                                }
                                return b;
                            default:
                                throw new Error("Unknown cmap format " + t.version)
                        }
                    }, e
                }(), (0, o.Z)(Nr.prototype, "getCharacterSet", [x], Object.getOwnPropertyDescriptor(Nr.prototype, "getCharacterSet"), Nr.prototype), (0, o.Z)(Nr.prototype, "codePointsForGlyph", [x], Object.getOwnPropertyDescriptor(Nr.prototype, "codePointsForGlyph"), Nr.prototype), Nr),
                Kr = function() {
                    function e(e) {
                        this.kern = e.kern
                    }
                    var t = e.prototype;
                    return t.process = function(e, t) {
                        for (var n = 0; n < e.length - 1; n++) {
                            var r = e[n].id,
                                i = e[n + 1].id;
                            t[n].xAdvance += this.getKerning(r, i)
                        }
                    }, t.getKerning = function(e, t) {
                        for (var n, r = 0, i = (0, a.Z)(this.kern.tables); !(n = i()).done;) {
                            var s = n.value;
                            if (!s.coverage.crossStream) {
                                switch (s.version) {
                                    case 0:
                                        if (!s.coverage.horizontal) continue;
                                        break;
                                    case 1:
                                        if (s.coverage.vertical || s.coverage.variation) continue;
                                        break;
                                    default:
                                        throw new Error("Unsupported kerning table version " + s.version)
                                }
                                var o = 0,
                                    l = s.subtable;
                                switch (s.format) {
                                    case 0:
                                        var u = jr(l.pairs, (function(n) {
                                            return e - n.left || t - n.right
                                        }));
                                        u >= 0 && (o = l.pairs[u].value);
                                        break;
                                    case 2:
                                        var c = 0,
                                            h = 0;
                                        c = e >= l.leftTable.firstGlyph && e < l.leftTable.firstGlyph + l.leftTable.nGlyphs ? l.leftTable.offsets[e - l.leftTable.firstGlyph] : l.array.off, t >= l.rightTable.firstGlyph && t < l.rightTable.firstGlyph + l.rightTable.nGlyphs && (h = l.rightTable.offsets[t - l.rightTable.firstGlyph]);
                                        var f = (c + h - l.array.off) / 2;
                                        o = l.array.values.get(f);
                                        break;
                                    case 3:
                                        if (e >= l.glyphCount || t >= l.glyphCount) return 0;
                                        o = l.kernValue[l.kernIndex[l.leftClass[e] * l.rightClassCount + l.rightClass[t]]];
                                        break;
                                    default:
                                        throw new Error("Unsupported kerning sub-table format " + s.format)
                                }
                                s.coverage.override ? r = o : r += o
                            }
                        }
                        return r
                    }, e
                }(),
                Xr = function() {
                    function e(e) {
                        this.font = e
                    }
                    var t = e.prototype;
                    return t.positionGlyphs = function(e, t) {
                        for (var n = 0, r = 0, i = 0; i < e.length; i++) {
                            e[i].isMark ? r = i : (n !== r && this.positionCluster(e, t, n, r), n = r = i)
                        }
                        return n !== r && this.positionCluster(e, t, n, r), t
                    }, t.positionCluster = function(e, t, n, r) {
                        var i = e[n],
                            a = i.cbox.copy();
                        i.codePoints.length > 1 && (a.minX += (i.codePoints.length - 1) * a.width / i.codePoints.length);
                        for (var s = -t[n].xAdvance, o = 0, l = this.font.unitsPerEm / 16, u = n + 1; u <= r; u++) {
                            var c = e[u],
                                h = c.cbox,
                                f = t[u],
                                p = this.getCombiningClass(c.codePoints[0]);
                            if ("Not_Reordered" !== p) {
                                switch (f.xOffset = f.yOffset = 0, p) {
                                    case "Double_Above":
                                    case "Double_Below":
                                        f.xOffset += a.minX - h.width / 2 - h.minX;
                                        break;
                                    case "Attached_Below_Left":
                                    case "Below_Left":
                                    case "Above_Left":
                                        f.xOffset += a.minX - h.minX;
                                        break;
                                    case "Attached_Above_Right":
                                    case "Below_Right":
                                    case "Above_Right":
                                        f.xOffset += a.maxX - h.width - h.minX;
                                        break;
                                    default:
                                        f.xOffset += a.minX + (a.width - h.width) / 2 - h.minX
                                }
                                switch (p) {
                                    case "Double_Below":
                                    case "Below_Left":
                                    case "Below":
                                    case "Below_Right":
                                    case "Attached_Below_Left":
                                    case "Attached_Below":
                                        "Attached_Below_Left" !== p && "Attached_Below" !== p || (a.minY += l), f.yOffset = -a.minY - h.maxY, a.minY += h.height;
                                        break;
                                    case "Double_Above":
                                    case "Above_Left":
                                    case "Above":
                                    case "Above_Right":
                                    case "Attached_Above":
                                    case "Attached_Above_Right":
                                        "Attached_Above" !== p && "Attached_Above_Right" !== p || (a.maxY += l), f.yOffset = a.maxY - h.minY, a.maxY += h.height
                                }
                                f.xAdvance = f.yAdvance = 0, f.xOffset += s, f.yOffset += o
                            } else s -= f.xAdvance, o -= f.yAdvance
                        }
                    }, t.getCombiningClass = function(e) {
                        var t = f.default.getCombiningClass(e);
                        if (3584 === (-256 & e))
                            if ("Not_Reordered" === t) switch (e) {
                                case 3633:
                                case 3636:
                                case 3637:
                                case 3638:
                                case 3639:
                                case 3655:
                                case 3660:
                                case 3645:
                                case 3662:
                                    return "Above_Right";
                                case 3761:
                                case 3764:
                                case 3765:
                                case 3766:
                                case 3767:
                                case 3771:
                                case 3788:
                                case 3789:
                                    return "Above";
                                case 3772:
                                    return "Below"
                            } else if (3642 === e) return "Below_Right";
                        switch (t) {
                            case "CCC10":
                            case "CCC11":
                            case "CCC12":
                            case "CCC13":
                            case "CCC14":
                            case "CCC15":
                            case "CCC16":
                            case "CCC17":
                            case "CCC18":
                            case "CCC20":
                            case "CCC22":
                            case "CCC29":
                            case "CCC32":
                            case "CCC118":
                            case "CCC129":
                            case "CCC132":
                                return "Below";
                            case "CCC23":
                                return "Attached_Above";
                            case "CCC24":
                            case "CCC107":
                                return "Above_Right";
                            case "CCC25":
                            case "CCC19":
                                return "Above_Left";
                            case "CCC26":
                            case "CCC27":
                            case "CCC28":
                            case "CCC30":
                            case "CCC31":
                            case "CCC33":
                            case "CCC34":
                            case "CCC35":
                            case "CCC36":
                            case "CCC122":
                            case "CCC130":
                                return "Above";
                            case "CCC21":
                                break;
                            case "CCC103":
                                return "Below_Right"
                        }
                        return t
                    }, e
                }(),
                Jr = function() {
                    function e(e, t, n, r) {
                        void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0), void 0 === n && (n = -1 / 0), void 0 === r && (r = -1 / 0), this.minX = e, this.minY = t, this.maxX = n, this.maxY = r
                    }
                    var t = e.prototype;
                    return t.addPoint = function(e, t) {
                        Math.abs(e) !== 1 / 0 && (e < this.minX && (this.minX = e), e > this.maxX && (this.maxX = e)), Math.abs(t) !== 1 / 0 && (t < this.minY && (this.minY = t), t > this.maxY && (this.maxY = t))
                    }, t.copy = function() {
                        return new e(this.minX, this.minY, this.maxX, this.maxY)
                    }, (0, s.Z)(e, [{
                        key: "width",
                        get: function() {
                            return this.maxX - this.minX
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.maxY - this.minY
                        }
                    }]), e
                }(),
                Qr = {
                    Caucasian_Albanian: "aghb",
                    Arabic: "arab",
                    Imperial_Aramaic: "armi",
                    Armenian: "armn",
                    Avestan: "avst",
                    Balinese: "bali",
                    Bamum: "bamu",
                    Bassa_Vah: "bass",
                    Batak: "batk",
                    Bengali: ["bng2", "beng"],
                    Bopomofo: "bopo",
                    Brahmi: "brah",
                    Braille: "brai",
                    Buginese: "bugi",
                    Buhid: "buhd",
                    Chakma: "cakm",
                    Canadian_Aboriginal: "cans",
                    Carian: "cari",
                    Cham: "cham",
                    Cherokee: "cher",
                    Coptic: "copt",
                    Cypriot: "cprt",
                    Cyrillic: "cyrl",
                    Devanagari: ["dev2", "deva"],
                    Deseret: "dsrt",
                    Duployan: "dupl",
                    Egyptian_Hieroglyphs: "egyp",
                    Elbasan: "elba",
                    Ethiopic: "ethi",
                    Georgian: "geor",
                    Glagolitic: "glag",
                    Gothic: "goth",
                    Grantha: "gran",
                    Greek: "grek",
                    Gujarati: ["gjr2", "gujr"],
                    Gurmukhi: ["gur2", "guru"],
                    Hangul: "hang",
                    Han: "hani",
                    Hanunoo: "hano",
                    Hebrew: "hebr",
                    Hiragana: "hira",
                    Pahawh_Hmong: "hmng",
                    Katakana_Or_Hiragana: "hrkt",
                    Old_Italic: "ital",
                    Javanese: "java",
                    Kayah_Li: "kali",
                    Katakana: "kana",
                    Kharoshthi: "khar",
                    Khmer: "khmr",
                    Khojki: "khoj",
                    Kannada: ["knd2", "knda"],
                    Kaithi: "kthi",
                    Tai_Tham: "lana",
                    Lao: "lao ",
                    Latin: "latn",
                    Lepcha: "lepc",
                    Limbu: "limb",
                    Linear_A: "lina",
                    Linear_B: "linb",
                    Lisu: "lisu",
                    Lycian: "lyci",
                    Lydian: "lydi",
                    Mahajani: "mahj",
                    Mandaic: "mand",
                    Manichaean: "mani",
                    Mende_Kikakui: "mend",
                    Meroitic_Cursive: "merc",
                    Meroitic_Hieroglyphs: "mero",
                    Malayalam: ["mlm2", "mlym"],
                    Modi: "modi",
                    Mongolian: "mong",
                    Mro: "mroo",
                    Meetei_Mayek: "mtei",
                    Myanmar: ["mym2", "mymr"],
                    Old_North_Arabian: "narb",
                    Nabataean: "nbat",
                    Nko: "nko ",
                    Ogham: "ogam",
                    Ol_Chiki: "olck",
                    Old_Turkic: "orkh",
                    Oriya: ["ory2", "orya"],
                    Osmanya: "osma",
                    Palmyrene: "palm",
                    Pau_Cin_Hau: "pauc",
                    Old_Permic: "perm",
                    Phags_Pa: "phag",
                    Inscriptional_Pahlavi: "phli",
                    Psalter_Pahlavi: "phlp",
                    Phoenician: "phnx",
                    Miao: "plrd",
                    Inscriptional_Parthian: "prti",
                    Rejang: "rjng",
                    Runic: "runr",
                    Samaritan: "samr",
                    Old_South_Arabian: "sarb",
                    Saurashtra: "saur",
                    Shavian: "shaw",
                    Sharada: "shrd",
                    Siddham: "sidd",
                    Khudawadi: "sind",
                    Sinhala: "sinh",
                    Sora_Sompeng: "sora",
                    Sundanese: "sund",
                    Syloti_Nagri: "sylo",
                    Syriac: "syrc",
                    Tagbanwa: "tagb",
                    Takri: "takr",
                    Tai_Le: "tale",
                    New_Tai_Lue: "talu",
                    Tamil: ["tml2", "taml"],
                    Tai_Viet: "tavt",
                    Telugu: ["tel2", "telu"],
                    Tifinagh: "tfng",
                    Tagalog: "tglg",
                    Thaana: "thaa",
                    Thai: "thai",
                    Tibetan: "tibt",
                    Tirhuta: "tirh",
                    Ugaritic: "ugar",
                    Vai: "vai ",
                    Warang_Citi: "wara",
                    Old_Persian: "xpeo",
                    Cuneiform: "xsux",
                    Yi: "yi  ",
                    Inherited: "zinh",
                    Common: "zyyy",
                    Unknown: "zzzz"
                },
                $r = {};
            for (var ei in Qr) {
                var ti = Qr[ei];
                if (Array.isArray(ti))
                    for (var ni, ri = (0, a.Z)(ti); !(ni = ri()).done;) {
                        var ii = ni.value;
                        $r[ii] = ei
                    } else $r[ti] = ei
            }
            var ai = {
                arab: !0,
                hebr: !0,
                syrc: !0,
                thaa: !0,
                cprt: !0,
                khar: !0,
                phnx: !0,
                "nko ": !0,
                lydi: !0,
                avst: !0,
                armi: !0,
                phli: !0,
                prti: !0,
                sarb: !0,
                orkh: !0,
                samr: !0,
                mand: !0,
                merc: !0,
                mero: !0,
                mani: !0,
                mend: !0,
                nbat: !0,
                narb: !0,
                palm: !0,
                phlp: !0
            };

            function si(e) {
                return ai[e] ? "rtl" : "ltr"
            }
            for (var oi = function() {
                    function e(e, t, n, r, i) {
                        if (this.glyphs = e, this.positions = null, this.script = n, this.language = r || null, this.direction = i || si(n), this.features = {}, Array.isArray(t))
                            for (var s, o = (0, a.Z)(t); !(s = o()).done;) {
                                var l = s.value;
                                this.features[l] = !0
                            } else "object" === typeof t && (this.features = t)
                    }
                    return (0, s.Z)(e, [{
                        key: "advanceWidth",
                        get: function() {
                            for (var e, t = 0, n = (0, a.Z)(this.positions); !(e = n()).done;) {
                                t += e.value.xAdvance
                            }
                            return t
                        }
                    }, {
                        key: "advanceHeight",
                        get: function() {
                            for (var e, t = 0, n = (0, a.Z)(this.positions); !(e = n()).done;) {
                                t += e.value.yAdvance
                            }
                            return t
                        }
                    }, {
                        key: "bbox",
                        get: function() {
                            for (var e = new Jr, t = 0, n = 0, r = 0; r < this.glyphs.length; r++) {
                                var i = this.glyphs[r],
                                    a = this.positions[r],
                                    s = i.bbox;
                                e.addPoint(s.minX + t + a.xOffset, s.minY + n + a.yOffset), e.addPoint(s.maxX + t + a.xOffset, s.maxY + n + a.yOffset), t += a.xAdvance, n += a.yAdvance
                            }
                            return e
                        }
                    }]), e
                }(), li = function(e, t, n, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), this.xAdvance = e, this.yAdvance = t, this.xOffset = n, this.yOffset = r
                }, ui = {
                    allTypographicFeatures: {
                        code: 0,
                        exclusive: !1,
                        allTypeFeatures: 0
                    },
                    ligatures: {
                        code: 1,
                        exclusive: !1,
                        requiredLigatures: 0,
                        commonLigatures: 2,
                        rareLigatures: 4,
                        rebusPictures: 8,
                        diphthongLigatures: 10,
                        squaredLigatures: 12,
                        abbrevSquaredLigatures: 14,
                        symbolLigatures: 16,
                        contextualLigatures: 18,
                        historicalLigatures: 20
                    },
                    cursiveConnection: {
                        code: 2,
                        exclusive: !0,
                        unconnected: 0,
                        partiallyConnected: 1,
                        cursive: 2
                    },
                    letterCase: {
                        code: 3,
                        exclusive: !0
                    },
                    verticalSubstitution: {
                        code: 4,
                        exclusive: !1,
                        substituteVerticalForms: 0
                    },
                    linguisticRearrangement: {
                        code: 5,
                        exclusive: !1,
                        linguisticRearrangement: 0
                    },
                    numberSpacing: {
                        code: 6,
                        exclusive: !0,
                        monospacedNumbers: 0,
                        proportionalNumbers: 1,
                        thirdWidthNumbers: 2,
                        quarterWidthNumbers: 3
                    },
                    smartSwash: {
                        code: 8,
                        exclusive: !1,
                        wordInitialSwashes: 0,
                        wordFinalSwashes: 2,
                        nonFinalSwashes: 8
                    },
                    diacritics: {
                        code: 9,
                        exclusive: !0,
                        showDiacritics: 0,
                        hideDiacritics: 1,
                        decomposeDiacritics: 2
                    },
                    verticalPosition: {
                        code: 10,
                        exclusive: !0,
                        normalPosition: 0,
                        superiors: 1,
                        inferiors: 2,
                        ordinals: 3,
                        scientificInferiors: 4
                    },
                    fractions: {
                        code: 11,
                        exclusive: !0,
                        noFractions: 0,
                        verticalFractions: 1,
                        diagonalFractions: 2
                    },
                    overlappingCharacters: {
                        code: 13,
                        exclusive: !1,
                        preventOverlap: 0
                    },
                    typographicExtras: {
                        code: 14,
                        exclusive: !1,
                        slashedZero: 4
                    },
                    mathematicalExtras: {
                        code: 15,
                        exclusive: !1,
                        mathematicalGreek: 10
                    },
                    ornamentSets: {
                        code: 16,
                        exclusive: !0,
                        noOrnaments: 0,
                        dingbats: 1,
                        piCharacters: 2,
                        fleurons: 3,
                        decorativeBorders: 4,
                        internationalSymbols: 5,
                        mathSymbols: 6
                    },
                    characterAlternatives: {
                        code: 17,
                        exclusive: !0,
                        noAlternates: 0
                    },
                    designComplexity: {
                        code: 18,
                        exclusive: !0,
                        designLevel1: 0,
                        designLevel2: 1,
                        designLevel3: 2,
                        designLevel4: 3,
                        designLevel5: 4
                    },
                    styleOptions: {
                        code: 19,
                        exclusive: !0,
                        noStyleOptions: 0,
                        displayText: 1,
                        engravedText: 2,
                        illuminatedCaps: 3,
                        titlingCaps: 4,
                        tallCaps: 5
                    },
                    characterShape: {
                        code: 20,
                        exclusive: !0,
                        traditionalCharacters: 0,
                        simplifiedCharacters: 1,
                        JIS1978Characters: 2,
                        JIS1983Characters: 3,
                        JIS1990Characters: 4,
                        traditionalAltOne: 5,
                        traditionalAltTwo: 6,
                        traditionalAltThree: 7,
                        traditionalAltFour: 8,
                        traditionalAltFive: 9,
                        expertCharacters: 10,
                        JIS2004Characters: 11,
                        hojoCharacters: 12,
                        NLCCharacters: 13,
                        traditionalNamesCharacters: 14
                    },
                    numberCase: {
                        code: 21,
                        exclusive: !0,
                        lowerCaseNumbers: 0,
                        upperCaseNumbers: 1
                    },
                    textSpacing: {
                        code: 22,
                        exclusive: !0,
                        proportionalText: 0,
                        monospacedText: 1,
                        halfWidthText: 2,
                        thirdWidthText: 3,
                        quarterWidthText: 4,
                        altProportionalText: 5,
                        altHalfWidthText: 6
                    },
                    transliteration: {
                        code: 23,
                        exclusive: !0,
                        noTransliteration: 0
                    },
                    annotation: {
                        code: 24,
                        exclusive: !0,
                        noAnnotation: 0,
                        boxAnnotation: 1,
                        roundedBoxAnnotation: 2,
                        circleAnnotation: 3,
                        invertedCircleAnnotation: 4,
                        parenthesisAnnotation: 5,
                        periodAnnotation: 6,
                        romanNumeralAnnotation: 7,
                        diamondAnnotation: 8,
                        invertedBoxAnnotation: 9,
                        invertedRoundedBoxAnnotation: 10
                    },
                    kanaSpacing: {
                        code: 25,
                        exclusive: !0,
                        fullWidthKana: 0,
                        proportionalKana: 1
                    },
                    ideographicSpacing: {
                        code: 26,
                        exclusive: !0,
                        fullWidthIdeographs: 0,
                        proportionalIdeographs: 1,
                        halfWidthIdeographs: 2
                    },
                    unicodeDecomposition: {
                        code: 27,
                        exclusive: !1,
                        canonicalComposition: 0,
                        compatibilityComposition: 2,
                        transcodingComposition: 4
                    },
                    rubyKana: {
                        code: 28,
                        exclusive: !1,
                        rubyKana: 2
                    },
                    CJKSymbolAlternatives: {
                        code: 29,
                        exclusive: !0,
                        noCJKSymbolAlternatives: 0,
                        CJKSymbolAltOne: 1,
                        CJKSymbolAltTwo: 2,
                        CJKSymbolAltThree: 3,
                        CJKSymbolAltFour: 4,
                        CJKSymbolAltFive: 5
                    },
                    ideographicAlternatives: {
                        code: 30,
                        exclusive: !0,
                        noIdeographicAlternatives: 0,
                        ideographicAltOne: 1,
                        ideographicAltTwo: 2,
                        ideographicAltThree: 3,
                        ideographicAltFour: 4,
                        ideographicAltFive: 5
                    },
                    CJKVerticalRomanPlacement: {
                        code: 31,
                        exclusive: !0,
                        CJKVerticalRomanCentered: 0,
                        CJKVerticalRomanHBaseline: 1
                    },
                    italicCJKRoman: {
                        code: 32,
                        exclusive: !1,
                        CJKItalicRoman: 2
                    },
                    caseSensitiveLayout: {
                        code: 33,
                        exclusive: !1,
                        caseSensitiveLayout: 0,
                        caseSensitiveSpacing: 2
                    },
                    alternateKana: {
                        code: 34,
                        exclusive: !1,
                        alternateHorizKana: 0,
                        alternateVertKana: 2
                    },
                    stylisticAlternatives: {
                        code: 35,
                        exclusive: !1,
                        noStylisticAlternates: 0,
                        stylisticAltOne: 2,
                        stylisticAltTwo: 4,
                        stylisticAltThree: 6,
                        stylisticAltFour: 8,
                        stylisticAltFive: 10,
                        stylisticAltSix: 12,
                        stylisticAltSeven: 14,
                        stylisticAltEight: 16,
                        stylisticAltNine: 18,
                        stylisticAltTen: 20,
                        stylisticAltEleven: 22,
                        stylisticAltTwelve: 24,
                        stylisticAltThirteen: 26,
                        stylisticAltFourteen: 28,
                        stylisticAltFifteen: 30,
                        stylisticAltSixteen: 32,
                        stylisticAltSeventeen: 34,
                        stylisticAltEighteen: 36,
                        stylisticAltNineteen: 38,
                        stylisticAltTwenty: 40
                    },
                    contextualAlternates: {
                        code: 36,
                        exclusive: !1,
                        contextualAlternates: 0,
                        swashAlternates: 2,
                        contextualSwashAlternates: 4
                    },
                    lowerCase: {
                        code: 37,
                        exclusive: !0,
                        defaultLowerCase: 0,
                        lowerCaseSmallCaps: 1,
                        lowerCasePetiteCaps: 2
                    },
                    upperCase: {
                        code: 38,
                        exclusive: !0,
                        defaultUpperCase: 0,
                        upperCaseSmallCaps: 1,
                        upperCasePetiteCaps: 2
                    },
                    languageTag: {
                        code: 39,
                        exclusive: !0
                    },
                    CJKRomanSpacing: {
                        code: 103,
                        exclusive: !0,
                        halfWidthCJKRoman: 0,
                        proportionalCJKRoman: 1,
                        defaultCJKRoman: 2,
                        fullWidthCJKRoman: 3
                    }
                }, ci = function(e, t) {
                    return [ui[e].code, ui[e][t]]
                }, hi = {
                    rlig: ci("ligatures", "requiredLigatures"),
                    clig: ci("ligatures", "contextualLigatures"),
                    dlig: ci("ligatures", "rareLigatures"),
                    hlig: ci("ligatures", "historicalLigatures"),
                    liga: ci("ligatures", "commonLigatures"),
                    hist: ci("ligatures", "historicalLigatures"),
                    smcp: ci("lowerCase", "lowerCaseSmallCaps"),
                    pcap: ci("lowerCase", "lowerCasePetiteCaps"),
                    frac: ci("fractions", "diagonalFractions"),
                    dnom: ci("fractions", "diagonalFractions"),
                    numr: ci("fractions", "diagonalFractions"),
                    afrc: ci("fractions", "verticalFractions"),
                    case: ci("caseSensitiveLayout", "caseSensitiveLayout"),
                    ccmp: ci("unicodeDecomposition", "canonicalComposition"),
                    cpct: ci("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
                    valt: ci("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
                    swsh: ci("contextualAlternates", "swashAlternates"),
                    cswh: ci("contextualAlternates", "contextualSwashAlternates"),
                    curs: ci("cursiveConnection", "cursive"),
                    c2pc: ci("upperCase", "upperCasePetiteCaps"),
                    c2sc: ci("upperCase", "upperCaseSmallCaps"),
                    init: ci("smartSwash", "wordInitialSwashes"),
                    fin2: ci("smartSwash", "wordFinalSwashes"),
                    medi: ci("smartSwash", "nonFinalSwashes"),
                    med2: ci("smartSwash", "nonFinalSwashes"),
                    fin3: ci("smartSwash", "wordFinalSwashes"),
                    fina: ci("smartSwash", "wordFinalSwashes"),
                    pkna: ci("kanaSpacing", "proportionalKana"),
                    half: ci("textSpacing", "halfWidthText"),
                    halt: ci("textSpacing", "altHalfWidthText"),
                    hkna: ci("alternateKana", "alternateHorizKana"),
                    vkna: ci("alternateKana", "alternateVertKana"),
                    ital: ci("italicCJKRoman", "CJKItalicRoman"),
                    lnum: ci("numberCase", "upperCaseNumbers"),
                    onum: ci("numberCase", "lowerCaseNumbers"),
                    mgrk: ci("mathematicalExtras", "mathematicalGreek"),
                    calt: ci("contextualAlternates", "contextualAlternates"),
                    vrt2: ci("verticalSubstitution", "substituteVerticalForms"),
                    vert: ci("verticalSubstitution", "substituteVerticalForms"),
                    tnum: ci("numberSpacing", "monospacedNumbers"),
                    pnum: ci("numberSpacing", "proportionalNumbers"),
                    sups: ci("verticalPosition", "superiors"),
                    subs: ci("verticalPosition", "inferiors"),
                    ordn: ci("verticalPosition", "ordinals"),
                    pwid: ci("textSpacing", "proportionalText"),
                    hwid: ci("textSpacing", "halfWidthText"),
                    qwid: ci("textSpacing", "quarterWidthText"),
                    twid: ci("textSpacing", "thirdWidthText"),
                    fwid: ci("textSpacing", "proportionalText"),
                    palt: ci("textSpacing", "altProportionalText"),
                    trad: ci("characterShape", "traditionalCharacters"),
                    smpl: ci("characterShape", "simplifiedCharacters"),
                    jp78: ci("characterShape", "JIS1978Characters"),
                    jp83: ci("characterShape", "JIS1983Characters"),
                    jp90: ci("characterShape", "JIS1990Characters"),
                    jp04: ci("characterShape", "JIS2004Characters"),
                    expt: ci("characterShape", "expertCharacters"),
                    hojo: ci("characterShape", "hojoCharacters"),
                    nlck: ci("characterShape", "NLCCharacters"),
                    tnam: ci("characterShape", "traditionalNamesCharacters"),
                    ruby: ci("rubyKana", "rubyKana"),
                    titl: ci("styleOptions", "titlingCaps"),
                    zero: ci("typographicExtras", "slashedZero"),
                    ss01: ci("stylisticAlternatives", "stylisticAltOne"),
                    ss02: ci("stylisticAlternatives", "stylisticAltTwo"),
                    ss03: ci("stylisticAlternatives", "stylisticAltThree"),
                    ss04: ci("stylisticAlternatives", "stylisticAltFour"),
                    ss05: ci("stylisticAlternatives", "stylisticAltFive"),
                    ss06: ci("stylisticAlternatives", "stylisticAltSix"),
                    ss07: ci("stylisticAlternatives", "stylisticAltSeven"),
                    ss08: ci("stylisticAlternatives", "stylisticAltEight"),
                    ss09: ci("stylisticAlternatives", "stylisticAltNine"),
                    ss10: ci("stylisticAlternatives", "stylisticAltTen"),
                    ss11: ci("stylisticAlternatives", "stylisticAltEleven"),
                    ss12: ci("stylisticAlternatives", "stylisticAltTwelve"),
                    ss13: ci("stylisticAlternatives", "stylisticAltThirteen"),
                    ss14: ci("stylisticAlternatives", "stylisticAltFourteen"),
                    ss15: ci("stylisticAlternatives", "stylisticAltFifteen"),
                    ss16: ci("stylisticAlternatives", "stylisticAltSixteen"),
                    ss17: ci("stylisticAlternatives", "stylisticAltSeventeen"),
                    ss18: ci("stylisticAlternatives", "stylisticAltEighteen"),
                    ss19: ci("stylisticAlternatives", "stylisticAltNineteen"),
                    ss20: ci("stylisticAlternatives", "stylisticAltTwenty")
                }, fi = 1; fi <= 99; fi++) hi["cv" + ("00" + fi).slice(-2)] = [ui.characterAlternatives.code, fi];
            var pi, di = {};
            for (var gi in hi) {
                var yi = hi[gi];
                null == di[yi[0]] && (di[yi[0]] = {}), di[yi[0]][yi[1]] = gi
            }

            function vi(e) {
                var t = e[0],
                    n = e[1];
                if (isNaN(t)) var r = ui[t] && ui[t].code;
                else r = t;
                if (isNaN(n)) var i = ui[t] && ui[t][n];
                else i = n;
                return [r, i]
            }
            var mi, bi = (pi = function() {
                    function e(e) {
                        this.table = e
                    }
                    var t = e.prototype;
                    return t.lookup = function(e) {
                        switch (this.table.version) {
                            case 0:
                                return this.table.values.getItem(e);
                            case 2:
                            case 4:
                                for (var t = 0, n = this.table.binarySearchHeader.nUnits - 1; t <= n;) {
                                    var r = t + n >> 1;
                                    if (65535 === (s = this.table.segments[r]).firstGlyph) return null;
                                    if (e < s.firstGlyph) n = r - 1;
                                    else {
                                        if (!(e > s.lastGlyph)) return 2 === this.table.version ? s.value : s.values[e - s.firstGlyph];
                                        t = r + 1
                                    }
                                }
                                return null;
                            case 6:
                                for (var i = 0, a = this.table.binarySearchHeader.nUnits - 1; i <= a;) {
                                    var s;
                                    r = i + a >> 1;
                                    if (65535 === (s = this.table.segments[r]).glyph) return null;
                                    if (e < s.glyph) a = r - 1;
                                    else {
                                        if (!(e > s.glyph)) return s.value;
                                        i = r + 1
                                    }
                                }
                                return null;
                            case 8:
                                return this.table.values[e - this.table.firstGlyph];
                            default:
                                throw new Error("Unknown lookup table format: " + this.table.version)
                        }
                    }, t.glyphsForValue = function(e) {
                        var t = [];
                        switch (this.table.version) {
                            case 2:
                            case 4:
                                for (var n, r = (0, a.Z)(this.table.segments); !(n = r()).done;) {
                                    var i = n.value;
                                    if (2 === this.table.version && i.value === e) t.push.apply(t, Hr(i.firstGlyph, i.lastGlyph + 1));
                                    else
                                        for (var s = 0; s < i.values.length; s++) i.values[s] === e && t.push(i.firstGlyph + s)
                                }
                                break;
                            case 6:
                                for (var o, l = (0, a.Z)(this.table.segments); !(o = l()).done;) {
                                    var u = o.value;
                                    u.value === e && t.push(u.glyph)
                                }
                                break;
                            case 8:
                                for (var c = 0; c < this.table.values.length; c++) this.table.values[c] === e && t.push(this.table.firstGlyph + c);
                                break;
                            default:
                                throw new Error("Unknown lookup table format: " + this.table.version)
                        }
                        return t
                    }, e
                }(), (0, o.Z)(pi.prototype, "glyphsForValue", [x], Object.getOwnPropertyDescriptor(pi.prototype, "glyphsForValue"), pi.prototype), pi),
                wi = function() {
                    function e(e) {
                        this.stateTable = e, this.lookupTable = new bi(e.classTable)
                    }
                    var t = e.prototype;
                    return t.process = function(e, t, n) {
                        for (var r = 0, i = t ? e.length - 1 : 0, a = t ? -1 : 1; 1 === a && i <= e.length || -1 === a && i >= -1;) {
                            var s = null,
                                o = 1,
                                l = !0;
                            i === e.length || -1 === i ? o = 0 : 65535 === (s = e[i]).id ? o = 2 : null == (o = this.lookupTable.lookup(s.id)) && (o = 1);
                            var u = this.stateTable.stateArray.getItem(r)[o],
                                c = this.stateTable.entryTable.getItem(u);
                            0 !== o && 2 !== o && (n(s, c, i), l = !(16384 & c.flags)), r = c.newState, l && (i += a)
                        }
                        return e
                    }, t.traverse = function(e, t, n) {
                        if (void 0 === t && (t = 0), void 0 === n && (n = new Set), !n.has(t)) {
                            n.add(t);
                            for (var r = this.stateTable, i = r.nClasses, s = r.stateArray, o = r.entryTable, l = s.getItem(t), u = 4; u < i; u++)
                                for (var c, h = l[u], f = o.getItem(h), p = (0, a.Z)(this.lookupTable.glyphsForValue(u)); !(c = p()).done;) {
                                    var d = c.value;
                                    e.enter && e.enter(d, f), 0 !== f.newState && this.traverse(e, f.newState, n), e.exit && e.exit(d, f)
                                }
                        }
                    }, e
                }(),
                _i = 4194304,
                Ci = (mi = function() {
                    function e(e) {
                        this.processIndicRearragement = this.processIndicRearragement.bind(this), this.processContextualSubstitution = this.processContextualSubstitution.bind(this), this.processLigature = this.processLigature.bind(this), this.processNoncontextualSubstitutions = this.processNoncontextualSubstitutions.bind(this), this.processGlyphInsertion = this.processGlyphInsertion.bind(this), this.font = e, this.morx = e.morx, this.inputCache = null
                    }
                    var t = e.prototype;
                    return t.process = function(e, t) {
                        void 0 === t && (t = {});
                        for (var n, r = (0, a.Z)(this.morx.chains); !(n = r()).done;) {
                            for (var i, s = n.value, o = s.defaultFlags, l = (0, a.Z)(s.features); !(i = l()).done;) {
                                var u, c = i.value;
                                (u = t[c.featureType]) && (u[c.featureSetting] ? (o &= c.disableFlags, o |= c.enableFlags) : !1 === u[c.featureSetting] && (o |= ~c.disableFlags, o &= ~c.enableFlags))
                            }
                            for (var h, f = (0, a.Z)(s.subtables); !(h = f()).done;) {
                                var p = h.value;
                                p.subFeatureFlags & o && this.processSubtable(p, e)
                            }
                        }
                        for (var d = e.length - 1; d >= 0;) 65535 === e[d].id && e.splice(d, 1), d--;
                        return e
                    }, t.processSubtable = function(e, t) {
                        if (this.subtable = e, this.glyphs = t, 4 !== this.subtable.type) {
                            this.ligatureStack = [], this.markedGlyph = null, this.firstGlyph = null, this.lastGlyph = null, this.markedIndex = null;
                            var n = this.getStateMachine(e),
                                r = this.getProcessor(),
                                i = !!(this.subtable.coverage & _i);
                            return n.process(this.glyphs, i, r)
                        }
                        this.processNoncontextualSubstitutions(this.subtable, this.glyphs)
                    }, t.getStateMachine = function(e) {
                        return new wi(e.table.stateTable)
                    }, t.getProcessor = function() {
                        switch (this.subtable.type) {
                            case 0:
                                return this.processIndicRearragement;
                            case 1:
                                return this.processContextualSubstitution;
                            case 2:
                                return this.processLigature;
                            case 4:
                                return this.processNoncontextualSubstitutions;
                            case 5:
                                return this.processGlyphInsertion;
                            default:
                                throw new Error("Invalid morx subtable type: " + this.subtable.type)
                        }
                    }, t.processIndicRearragement = function(e, t, n) {
                        32768 & t.flags && (this.firstGlyph = n), 8192 & t.flags && (this.lastGlyph = n),
                            function(e, t, n, r) {
                                switch (t) {
                                    case 0:
                                        return e;
                                    case 1:
                                        return Si(e, [n, 1], [r, 0]);
                                    case 2:
                                        return Si(e, [n, 0], [r, 1]);
                                    case 3:
                                        return Si(e, [n, 1], [r, 1]);
                                    case 4:
                                        return Si(e, [n, 2], [r, 0]);
                                    case 5:
                                        return Si(e, [n, 2], [r, 0], !0, !1);
                                    case 6:
                                        return Si(e, [n, 0], [r, 2]);
                                    case 7:
                                        return Si(e, [n, 0], [r, 2], !1, !0);
                                    case 8:
                                        return Si(e, [n, 1], [r, 2]);
                                    case 9:
                                        return Si(e, [n, 1], [r, 2], !1, !0);
                                    case 10:
                                        return Si(e, [n, 2], [r, 1]);
                                    case 11:
                                        return Si(e, [n, 2], [r, 1], !0, !1);
                                    case 12:
                                        return Si(e, [n, 2], [r, 2]);
                                    case 13:
                                        return Si(e, [n, 2], [r, 2], !0, !1);
                                    case 14:
                                        return Si(e, [n, 2], [r, 2], !1, !0);
                                    case 15:
                                        return Si(e, [n, 2], [r, 2], !0, !0);
                                    default:
                                        throw new Error("Unknown verb: " + t)
                                }
                            }(this.glyphs, 15 & t.flags, this.firstGlyph, this.lastGlyph)
                    }, t.processContextualSubstitution = function(e, t, n) {
                        var r = this.subtable.table.substitutionTable.items;
                        if (65535 !== t.markIndex) {
                            var i = r.getItem(t.markIndex),
                                a = new bi(i);
                            e = this.glyphs[this.markedGlyph], (s = a.lookup(e.id)) && (this.glyphs[this.markedGlyph] = this.font.getGlyph(s, e.codePoints))
                        }
                        if (65535 !== t.currentIndex) {
                            var s, o = r.getItem(t.currentIndex),
                                l = new bi(o);
                            e = this.glyphs[n], (s = l.lookup(e.id)) && (this.glyphs[n] = this.font.getGlyph(s, e.codePoints))
                        }
                        32768 & t.flags && (this.markedGlyph = n)
                    }, t.processLigature = function(e, t, n) {
                        if (32768 & t.flags && this.ligatureStack.push(n), 8192 & t.flags) {
                            for (var r, i = this.subtable.table.ligatureActions, a = this.subtable.table.components, s = this.subtable.table.ligatureList, o = t.action, l = !1, u = 0, c = [], h = []; !l;) {
                                var f, p = this.ligatureStack.pop();
                                (f = c).unshift.apply(f, this.glyphs[p].codePoints);
                                var d = i.getItem(o++);
                                l = !!(2147483648 & d);
                                var g = !!(1073741824 & d),
                                    y = (1073741823 & d) << 2 >> 2;
                                if (y += this.glyphs[p].id, u += a.getItem(y), l || g) {
                                    var v = s.getItem(u);
                                    this.glyphs[p] = this.font.getGlyph(v, c), h.push(p), u = 0, c = []
                                } else this.glyphs[p] = this.font.getGlyph(65535)
                            }(r = this.ligatureStack).push.apply(r, h)
                        }
                    }, t.processNoncontextualSubstitutions = function(e, t, n) {
                        var r = new bi(e.table.lookupTable);
                        for (n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (65535 !== i.id) {
                                var a = r.lookup(i.id);
                                a && (t[n] = this.font.getGlyph(a, i.codePoints))
                            }
                        }
                    }, t._insertGlyphs = function(e, t, n, r) {
                        for (var i, a = []; n--;) {
                            var s = this.subtable.table.insertionActions.getItem(t++);
                            a.push(this.font.getGlyph(s))
                        }
                        r || e++, (i = this.glyphs).splice.apply(i, [e, 0].concat(a))
                    }, t.processGlyphInsertion = function(e, t, n) {
                        if (32768 & t.flags && (this.markedIndex = n), 65535 !== t.markedInsertIndex) {
                            var r = (31 & t.flags) >>> 5,
                                i = !!(1024 & t.flags);
                            this._insertGlyphs(this.markedIndex, t.markedInsertIndex, r, i)
                        }
                        if (65535 !== t.currentInsertIndex) {
                            var a = (992 & t.flags) >>> 5,
                                s = !!(2048 & t.flags);
                            this._insertGlyphs(n, t.currentInsertIndex, a, s)
                        }
                    }, t.getSupportedFeatures = function() {
                        for (var e, t = [], n = (0, a.Z)(this.morx.chains); !(e = n()).done;)
                            for (var r, i = e.value, s = (0, a.Z)(i.features); !(r = s()).done;) {
                                var o = r.value;
                                t.push([o.featureType, o.featureSetting])
                            }
                        return t
                    }, t.generateInputs = function(e) {
                        return this.inputCache || this.generateInputCache(), this.inputCache[e] || []
                    }, t.generateInputCache = function() {
                        this.inputCache = {};
                        for (var e, t = (0, a.Z)(this.morx.chains); !(e = t()).done;)
                            for (var n, r = e.value, i = r.defaultFlags, s = (0, a.Z)(r.subtables); !(n = s()).done;) {
                                var o = n.value;
                                o.subFeatureFlags & i && this.generateInputsForSubtable(o)
                            }
                    }, t.generateInputsForSubtable = function(e) {
                        var t = this;
                        if (2 === e.type) {
                            if (!!(e.coverage & _i)) throw new Error("Reverse subtable, not supported.");
                            this.subtable = e, this.ligatureStack = [];
                            var n = this.getStateMachine(e),
                                r = this.getProcessor(),
                                i = [],
                                a = [];
                            this.glyphs = [], n.traverse({
                                enter: function(e, n) {
                                    var s = t.glyphs;
                                    a.push({
                                        glyphs: s.slice(),
                                        ligatureStack: t.ligatureStack.slice()
                                    });
                                    var o = t.font.getGlyph(e);
                                    i.push(o), s.push(i[i.length - 1]), r(s[s.length - 1], n, s.length - 1);
                                    for (var l = 0, u = 0, c = 0; c < s.length && l <= 1; c++) 65535 !== s[c].id && (l++, u = s[c].id);
                                    if (1 === l) {
                                        var h = i.map((function(e) {
                                                return e.id
                                            })),
                                            f = t.inputCache[u];
                                        f ? f.push(h) : t.inputCache[u] = [h]
                                    }
                                },
                                exit: function() {
                                    var e = a.pop();
                                    t.glyphs = e.glyphs, t.ligatureStack = e.ligatureStack, i.pop()
                                }
                            })
                        }
                    }, e
                }(), (0, o.Z)(mi.prototype, "getStateMachine", [x], Object.getOwnPropertyDescriptor(mi.prototype, "getStateMachine"), mi.prototype), mi);

            function Si(e, t, n, r, i) {
                void 0 === r && (r = !1), void 0 === i && (i = !1);
                var a = e.splice(n[0] - (n[1] - 1), n[1]);
                i && a.reverse();
                var s = e.splice.apply(e, [t[0], t[1]].concat(a));
                return r && s.reverse(), e.splice.apply(e, [n[0] - (t[1] - 1), 0].concat(s)), e
            }
            var xi = function() {
                    function e(e) {
                        this.font = e, this.morxProcessor = new Ci(e), this.fallbackPosition = !1
                    }
                    var t = e.prototype;
                    return t.substitute = function(e) {
                        "rtl" === e.direction && e.glyphs.reverse(), this.morxProcessor.process(e.glyphs, function(e) {
                            var t = {};
                            for (var n in e) {
                                var r;
                                (r = hi[n]) && (null == t[r[0]] && (t[r[0]] = {}), t[r[0]][r[1]] = e[n])
                            }
                            return t
                        }(e.features))
                    }, t.getAvailableFeatures = function(e, t) {
                        return function(e) {
                            var t = {};
                            if (Array.isArray(e))
                                for (var n = 0; n < e.length; n++) {
                                    var r, i = vi(e[n]);
                                    (r = di[i[0]] && di[i[0]][i[1]]) && (t[r] = !0)
                                } else if ("object" === typeof e)
                                    for (var a in e) {
                                        var s = e[a];
                                        for (var o in s) {
                                            var l = void 0,
                                                u = vi([a, o]);
                                            s[o] && (l = di[u[0]] && di[u[0]][u[1]]) && (t[l] = !0)
                                        }
                                    }
                            return Object.keys(t)
                        }(this.morxProcessor.getSupportedFeatures())
                    }, t.stringsForGlyph = function(e) {
                        for (var t, n = this.morxProcessor.generateInputs(e), r = new Set, i = (0, a.Z)(n); !(t = i()).done;) {
                            var s = t.value;
                            this._addStrings(s, 0, r, "")
                        }
                        return r
                    }, t._addStrings = function(e, t, n, r) {
                        for (var i, s = this.font._cmapProcessor.codePointsForGlyph(e[t]), o = (0, a.Z)(s); !(i = o()).done;) {
                            var l = i.value,
                                u = r + String.fromCodePoint(l);
                            t < e.length - 1 ? this._addStrings(e, t + 1, n, u) : n.add(u)
                        }
                    }, e
                }(),
                ki = function() {
                    function e(e, t, n) {
                        this.font = e, this.script = t, this.direction = n, this.stages = [], this.globalFeatures = {}, this.allFeatures = {}
                    }
                    var t = e.prototype;
                    return t._addFeatures = function(e, t) {
                        for (var n, r = this.stages.length - 1, i = this.stages[r], s = (0, a.Z)(e); !(n = s()).done;) {
                            var o = n.value;
                            null == this.allFeatures[o] && (i.push(o), this.allFeatures[o] = r, t && (this.globalFeatures[o] = !0))
                        }
                    }, t.add = function(e, t) {
                        if (void 0 === t && (t = !0), 0 === this.stages.length && this.stages.push([]), "string" === typeof e && (e = [e]), Array.isArray(e)) this._addFeatures(e, t);
                        else {
                            if ("object" !== typeof e) throw new Error("Unsupported argument to ShapingPlan#add");
                            this._addFeatures(e.global || [], !0), this._addFeatures(e.local || [], !1)
                        }
                    }, t.addStage = function(e, t) {
                        "function" === typeof e ? this.stages.push(e, []) : (this.stages.push([]), this.add(e, t))
                    }, t.setFeatureOverrides = function(e) {
                        if (Array.isArray(e)) this.add(e);
                        else if ("object" === typeof e)
                            for (var t in e)
                                if (e[t]) this.add(t);
                                else if (null != this.allFeatures[t]) {
                            var n = this.stages[this.allFeatures[t]];
                            n.splice(n.indexOf(t), 1), delete this.allFeatures[t], delete this.globalFeatures[t]
                        }
                    }, t.assignGlobalFeatures = function(e) {
                        for (var t, n = (0, a.Z)(e); !(t = n()).done;) {
                            var r = t.value;
                            for (var i in this.globalFeatures) r.features[i] = !0
                        }
                    }, t.process = function(e, t, n) {
                        for (var r, i = (0, a.Z)(this.stages); !(r = i()).done;) {
                            var s = r.value;
                            "function" === typeof s ? n || s(this.font, t, this) : s.length > 0 && e.applyFeatures(s, t, n)
                        }
                    }, e
                }(),
                Ai = ["rvrn"],
                Pi = ["ccmp", "locl", "rlig", "mark", "mkmk"],
                Ii = ["frac", "numr", "dnom"],
                Oi = ["calt", "clig", "liga", "rclt", "curs", "kern"],
                Fi = {
                    ltr: ["ltra", "ltrm"],
                    rtl: ["rtla", "rtlm"]
                },
                Di = function() {
                    function e() {}
                    return e.plan = function(e, t, n) {
                        this.planPreprocessing(e), this.planFeatures(e), this.planPostprocessing(e, n), e.assignGlobalFeatures(t), this.assignFeatures(e, t)
                    }, e.planPreprocessing = function(e) {
                        e.add({
                            global: [].concat(Ai, Fi[e.direction]),
                            local: Ii
                        })
                    }, e.planFeatures = function(e) {}, e.planPostprocessing = function(e, t) {
                        e.add([].concat(Pi, Oi)), e.setFeatureOverrides(t)
                    }, e.assignFeatures = function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (8260 === r.codePoints[0]) {
                                for (var i = n, a = n + 1; i > 0 && f.default.isDigit(t[i - 1].codePoints[0]);) t[i - 1].features.numr = !0, t[i - 1].features.frac = !0, i--;
                                for (; a < t.length && f.default.isDigit(t[a].codePoints[0]);) t[a].features.dnom = !0, t[a].features.frac = !0, a++;
                                r.features.frac = !0, n = a - 1
                            }
                        }
                    }, e
                }();
            Di.zeroMarkWidths = "AFTER_GPOS";
            var Ti = [0, 1, 240, 0, 0, 0, 0, 0, 0, 0, 56, 0, 1, 253, 1, 2, 254, 237, 154, 45, 76, 196, 48, 20, 199, 187, 237, 190, 56, 64, 129, 192, 224, 144, 72, 4, 2, 121, 151, 16, 18, 12, 9, 134, 132, 115, 40, 4, 138, 160, 80, 224, 80, 36, 8, 78, 34, 145, 72, 12, 138, 32, 73, 72, 8, 18, 137, 68, 18, 12, 201, 253, 47, 215, 146, 151, 166, 221, 117, 215, 110, 131, 219, 123, 201, 47, 237, 173, 235, 235, 123, 237, 235, 219, 186, 92, 55, 22, 98, 27, 236, 130, 125, 208, 149, 191, 255, 75, 121, 12, 78, 193, 25, 184, 0, 151, 160, 15, 110, 192, 45, 184, 3, 247, 224, 1, 60, 145, 126, 207, 224, 77, 254, 30, 242, 14, 62, 100, 253, 83, 150, 95, 164, 157, 153, 78, 126, 192, 181, 164, 158, 8, 49, 15, 22, 146, 242, 237, 42, 138, 37, 248, 186, 44, 253, 93, 169, 144, 223, 12, 195, 48, 12, 195, 48, 12, 195, 48, 12, 195, 84, 143, 225, 247, 159, 85, 254, 254, 193, 48, 12, 195, 48, 12, 195, 48, 185, 114, 53, 51, 98, 49, 39, 94, 193, 92, 91, 136, 14, 56, 7, 143, 224, 187, 61, 106, 91, 159, 21, 98, 83, 8, 209, 107, 9, 209, 111, 141, 234, 69, 240, 210, 202, 111, 62, 215, 112, 134, 217, 48, 156, 99, 58, 184, 182, 149, 225, 124, 179, 131, 123, 247, 60, 207, 67, 61, 244, 63, 176, 232, 56, 196, 245, 163, 138, 156, 183, 212, 255, 11, 78, 166, 212, 223, 78, 28, 253, 194, 194, 82, 101, 137, 44, 208, 118, 83, 61, 148, 212, 164, 222, 68, 163, 102, 40, 117, 76, 125, 178, 66, 251, 253, 37, 161, 54, 81, 31, 245, 185, 114, 241, 47, 4, 147, 204, 109, 17, 36, 90, 221, 197, 15, 83, 92, 169, 118, 65, 74, 155, 132, 216, 7, 116, 60, 23, 161, 62, 211, 107, 62, 210, 4, 117, 131, 254, 134, 36, 109, 253, 93, 99, 34, 33, 58, 245, 126, 13, 79, 251, 149, 100, 141, 207, 80, 113, 61, 110, 110, 76, 237, 227, 198, 117, 149, 178, 247, 157, 111, 236, 217, 250, 143, 203, 245, 89, 98, 143, 222, 107, 122, 182, 217, 236, 138, 12, 122, 84, 222, 213, 115, 69, 104, 153, 36, 134, 169, 109, 166, 24, 211, 245, 154, 230, 79, 151, 178, 223, 140, 213, 26, 40, 209, 109, 12, 101, 95, 217, 251, 196, 244, 238, 213, 148, 20, 185, 143, 125, 247, 115, 154, 127, 121, 234, 14, 169, 203, 53, 71, 248, 72, 168, 53, 139, 39, 180, 211, 150, 75, 34, 173, 84, 245, 72, 142, 229, 242, 78, 24, 167, 232, 55, 141, 167, 198, 114, 181, 53, 68, 206, 165, 246, 216, 124, 209, 115, 169, 158, 83, 125, 237, 176, 205, 99, 136, 184, 179, 173, 65, 209, 40, 191, 138, 150, 180, 184, 115, 37, 235, 58, 132, 142, 81, 95, 9, 153, 191, 76, 207, 10, 155, 52, 3, 142, 107, 147, 1],
                Li = new(d())(new Uint8Array(Ti)),
                Mi = ["isol", "fina", "fin2", "fin3", "medi", "med2", "init"],
                Gi = 0,
                Bi = 6,
                Ei = "isol",
                Ri = "fina",
                Vi = "fin2",
                zi = "medi",
                Ui = "med2",
                Ni = "init",
                Zi = null,
                qi = [
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [Zi, Ei, 1],
                        [Zi, Ei, 2],
                        [Zi, Ei, 1],
                        [Zi, Ei, 6]
                    ],
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [Zi, Ei, 1],
                        [Zi, Ei, 2],
                        [Zi, Vi, 5],
                        [Zi, Ei, 6]
                    ],
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [Ni, Ri, 1],
                        [Ni, Ri, 3],
                        [Ni, Ri, 4],
                        [Ni, Ri, 6]
                    ],
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [zi, Ri, 1],
                        [zi, Ri, 3],
                        [zi, Ri, 4],
                        [zi, Ri, 6]
                    ],
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [Ui, Ei, 1],
                        [Ui, Ei, 2],
                        [Ui, Vi, 5],
                        [Ui, Ei, 6]
                    ],
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [Ei, Ei, 1],
                        [Ei, Ei, 2],
                        [Ei, Vi, 5],
                        [Ei, Ei, 6]
                    ],
                    [
                        [Zi, Zi, 0],
                        [Zi, Ei, 2],
                        [Zi, Ei, 1],
                        [Zi, Ei, 2],
                        [Zi, "fin3", 5],
                        [Zi, Ei, 6]
                    ]
                ],
                ji = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (0, l.Z)(t, e), t.planFeatures = function(e) {
                        e.add(["ccmp", "locl"]);
                        for (var t = 0; t < Mi.length; t++) {
                            var n = Mi[t];
                            e.addStage(n, !1)
                        }
                        e.addStage("mset")
                    }, t.assignFeatures = function(t, n) {
                        e.assignFeatures.call(this, t, n);
                        for (var r = -1, i = 0, a = [], s = 0; s < n.length; s++) {
                            var o, l, u = Hi((p = n[s]).codePoints[0]);
                            if (u !== Bi) {
                                var c = qi[i][u];
                                l = c[0], o = c[1], i = c[2], l !== Zi && -1 !== r && (a[r] = l), a[s] = o, r = s
                            } else a[s] = Zi
                        }
                        for (var h = 0; h < n.length; h++) {
                            var f, p = n[h];
                            (f = a[h]) && (p.features[f] = !0)
                        }
                    }, t
                }(Di);

            function Hi(e) {
                var t = Li.get(e);
                if (t) return t - 1;
                var n = f.default.getCategory(e);
                return "Mn" === n || "Me" === n || "Cf" === n ? Bi : Gi
            }
            var Yi = function() {
                    function e(e, t) {
                        this.glyphs = e, this.reset(t)
                    }
                    var t = e.prototype;
                    return t.reset = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = 0), this.options = e, this.flags = e.flags || {}, this.markAttachmentType = e.markAttachmentType || 0, this.index = t
                    }, t.shouldIgnore = function(e) {
                        return this.flags.ignoreMarks && e.isMark || this.flags.ignoreBaseGlyphs && e.isBase || this.flags.ignoreLigatures && e.isLigature || this.markAttachmentType && e.isMark && e.markAttachmentType !== this.markAttachmentType
                    }, t.move = function(e) {
                        for (this.index += e; 0 <= this.index && this.index < this.glyphs.length && this.shouldIgnore(this.glyphs[this.index]);) this.index += e;
                        return 0 > this.index || this.index >= this.glyphs.length ? null : this.glyphs[this.index]
                    }, t.next = function() {
                        return this.move(1)
                    }, t.prev = function() {
                        return this.move(-1)
                    }, t.peek = function(e) {
                        void 0 === e && (e = 1);
                        var t = this.index,
                            n = this.increment(e);
                        return this.index = t, n
                    }, t.peekIndex = function(e) {
                        void 0 === e && (e = 1);
                        var t = this.index;
                        this.increment(e);
                        var n = this.index;
                        return this.index = t, n
                    }, t.increment = function(e) {
                        void 0 === e && (e = 1);
                        var t = e < 0 ? -1 : 1;
                        for (e = Math.abs(e); e--;) this.move(t);
                        return this.glyphs[this.index]
                    }, (0, s.Z)(e, [{
                        key: "cur",
                        get: function() {
                            return this.glyphs[this.index] || null
                        }
                    }]), e
                }(),
                Wi = ["DFLT", "dflt", "latn"],
                Ki = function() {
                    function e(e, t) {
                        this.font = e, this.table = t, this.script = null, this.scriptTag = null, this.language = null, this.languageTag = null, this.features = {}, this.lookups = {}, this.variationsIndex = e._variationProcessor ? this.findVariationsIndex(e._variationProcessor.normalizedCoords) : -1, this.selectScript(), this.glyphs = [], this.positions = [], this.ligatureID = 1, this.currentFeature = null
                    }
                    var t = e.prototype;
                    return t.findScript = function(e) {
                        if (null == this.table.scriptList) return null;
                        Array.isArray(e) || (e = [e]);
                        for (var t, n = (0, a.Z)(e); !(t = n()).done;)
                            for (var r, i = t.value, s = (0, a.Z)(this.table.scriptList); !(r = s()).done;) {
                                var o = r.value;
                                if (o.tag === i) return o
                            }
                        return null
                    }, t.selectScript = function(e, t, n) {
                        var r, i = !1;
                        if (!this.script || e !== this.scriptTag) {
                            if ((r = this.findScript(e)) || (r = this.findScript(Wi)), !r) return this.scriptTag;
                            this.scriptTag = r.tag, this.script = r.script, this.language = null, this.languageTag = null, i = !0
                        }
                        if (n && n === this.direction || (this.direction = n || si(e)), t && t.length < 4 && (t += " ".repeat(4 - t.length)), !t || t !== this.languageTag) {
                            this.language = null;
                            for (var s, o = (0, a.Z)(this.script.langSysRecords); !(s = o()).done;) {
                                var l = s.value;
                                if (l.tag === t) {
                                    this.language = l.langSys, this.languageTag = l.tag;
                                    break
                                }
                            }
                            this.language || (this.language = this.script.defaultLangSys, this.languageTag = null), i = !0
                        }
                        if (i && (this.features = {}, this.language))
                            for (var u, c = (0, a.Z)(this.language.featureIndexes); !(u = c()).done;) {
                                var h = u.value,
                                    f = this.table.featureList[h],
                                    p = this.substituteFeatureForVariations(h);
                                this.features[f.tag] = p || f.feature
                            }
                        return this.scriptTag
                    }, t.lookupsForFeatures = function(e, t) {
                        void 0 === e && (e = []);
                        for (var n, r = [], i = (0, a.Z)(e); !(n = i()).done;) {
                            var s = n.value,
                                o = this.features[s];
                            if (o)
                                for (var l, u = (0, a.Z)(o.lookupListIndexes); !(l = u()).done;) {
                                    var c = l.value;
                                    t && -1 !== t.indexOf(c) || r.push({
                                        feature: s,
                                        index: c,
                                        lookup: this.table.lookupList.get(c)
                                    })
                                }
                        }
                        return r.sort((function(e, t) {
                            return e.index - t.index
                        })), r
                    }, t.substituteFeatureForVariations = function(e) {
                        if (-1 === this.variationsIndex) return null;
                        for (var t, n = this.table.featureVariations.featureVariationRecords[this.variationsIndex].featureTableSubstitution.substitutions, r = (0, a.Z)(n); !(t = r()).done;) {
                            var i = t.value;
                            if (i.featureIndex === e) return i.alternateFeatureTable
                        }
                        return null
                    }, t.findVariationsIndex = function(e) {
                        var t = this.table.featureVariations;
                        if (!t) return -1;
                        for (var n = t.featureVariationRecords, r = 0; r < n.length; r++) {
                            var i = n[r].conditionSet.conditionTable;
                            if (this.variationConditionsMatch(i, e)) return r
                        }
                        return -1
                    }, t.variationConditionsMatch = function(e, t) {
                        return e.every((function(e) {
                            var n = e.axisIndex < t.length ? t[e.axisIndex] : 0;
                            return e.filterRangeMinValue <= n && n <= e.filterRangeMaxValue
                        }))
                    }, t.applyFeatures = function(e, t, n) {
                        var r = this.lookupsForFeatures(e);
                        this.applyLookups(r, t, n)
                    }, t.applyLookups = function(e, t, n) {
                        this.glyphs = t, this.positions = n, this.glyphIterator = new Yi(t);
                        for (var r, i = (0, a.Z)(e); !(r = i()).done;) {
                            var s = r.value,
                                o = s.feature,
                                l = s.lookup;
                            for (this.currentFeature = o, this.glyphIterator.reset(l.flags); this.glyphIterator.index < t.length;)
                                if (o in this.glyphIterator.cur.features) {
                                    for (var u, c = (0, a.Z)(l.subTables); !(u = c()).done;) {
                                        var h = u.value;
                                        if (this.applyLookup(l.lookupType, h)) break
                                    }
                                    this.glyphIterator.next()
                                } else this.glyphIterator.next()
                        }
                    }, t.applyLookup = function(e, t) {
                        throw new Error("applyLookup must be implemented by subclasses")
                    }, t.applyLookupList = function(e) {
                        for (var t, n = this.glyphIterator.options, r = this.glyphIterator.index, i = (0, a.Z)(e); !(t = i()).done;) {
                            var s = t.value;
                            this.glyphIterator.reset(n, r), this.glyphIterator.increment(s.sequenceIndex);
                            var o = this.table.lookupList.get(s.lookupListIndex);
                            this.glyphIterator.reset(o.flags, this.glyphIterator.index);
                            for (var l, u = (0, a.Z)(o.subTables); !(l = u()).done;) {
                                var c = l.value;
                                if (this.applyLookup(o.lookupType, c)) break
                            }
                        }
                        return this.glyphIterator.reset(n, r), !0
                    }, t.coverageIndex = function(e, t) {
                        switch (null == t && (t = this.glyphIterator.cur.id), e.version) {
                            case 1:
                                return e.glyphs.indexOf(t);
                            case 2:
                                for (var n, r = (0, a.Z)(e.rangeRecords); !(n = r()).done;) {
                                    var i = n.value;
                                    if (i.start <= t && t <= i.end) return i.startCoverageIndex + t - i.start
                                }
                        }
                        return -1
                    }, t.match = function(e, t, n, r) {
                        for (var i = this.glyphIterator.index, a = this.glyphIterator.increment(e), s = 0; s < t.length && a && n(t[s], a);) r && r.push(this.glyphIterator.index), s++, a = this.glyphIterator.next();
                        return this.glyphIterator.index = i, !(s < t.length) && (r || !0)
                    }, t.sequenceMatches = function(e, t) {
                        return this.match(e, t, (function(e, t) {
                            return e === t.id
                        }))
                    }, t.sequenceMatchIndices = function(e, t) {
                        var n = this;
                        return this.match(e, t, (function(e, t) {
                            return n.currentFeature in t.features && e === t.id
                        }), [])
                    }, t.coverageSequenceMatches = function(e, t) {
                        var n = this;
                        return this.match(e, t, (function(e, t) {
                            return n.coverageIndex(e, t.id) >= 0
                        }))
                    }, t.getClassID = function(e, t) {
                        switch (t.version) {
                            case 1:
                                var n = e - t.startGlyph;
                                if (n >= 0 && n < t.classValueArray.length) return t.classValueArray[n];
                                break;
                            case 2:
                                for (var r, i = (0, a.Z)(t.classRangeRecord); !(r = i()).done;) {
                                    var s = r.value;
                                    if (s.start <= e && e <= s.end) return s.class
                                }
                        }
                        return 0
                    }, t.classSequenceMatches = function(e, t, n) {
                        var r = this;
                        return this.match(e, t, (function(e, t) {
                            return e === r.getClassID(t.id, n)
                        }))
                    }, t.applyContext = function(e) {
                        var t;
                        switch (e.version) {
                            case 1:
                                if (-1 === (t = this.coverageIndex(e.coverage))) return !1;
                                for (var n, r = e.ruleSets[t], i = (0, a.Z)(r); !(n = i()).done;) {
                                    var s = n.value;
                                    if (this.sequenceMatches(1, s.input)) return this.applyLookupList(s.lookupRecords)
                                }
                                break;
                            case 2:
                                if (-1 === this.coverageIndex(e.coverage)) return !1;
                                if (-1 === (t = this.getClassID(this.glyphIterator.cur.id, e.classDef))) return !1;
                                r = e.classSet[t];
                                for (var o, l = (0, a.Z)(r); !(o = l()).done;) {
                                    var u = o.value;
                                    if (this.classSequenceMatches(1, u.classes, e.classDef)) return this.applyLookupList(u.lookupRecords)
                                }
                                break;
                            case 3:
                                if (this.coverageSequenceMatches(0, e.coverages)) return this.applyLookupList(e.lookupRecords)
                        }
                        return !1
                    }, t.applyChainingContext = function(e) {
                        var t;
                        switch (e.version) {
                            case 1:
                                if (-1 === (t = this.coverageIndex(e.coverage))) return !1;
                                for (var n, r = e.chainRuleSets[t], i = (0, a.Z)(r); !(n = i()).done;) {
                                    var s = n.value;
                                    if (this.sequenceMatches(-s.backtrack.length, s.backtrack) && this.sequenceMatches(1, s.input) && this.sequenceMatches(1 + s.input.length, s.lookahead)) return this.applyLookupList(s.lookupRecords)
                                }
                                break;
                            case 2:
                                if (-1 === this.coverageIndex(e.coverage)) return !1;
                                t = this.getClassID(this.glyphIterator.cur.id, e.inputClassDef);
                                var o = e.chainClassSet[t];
                                if (!o) return !1;
                                for (var l, u = (0, a.Z)(o); !(l = u()).done;) {
                                    var c = l.value;
                                    if (this.classSequenceMatches(-c.backtrack.length, c.backtrack, e.backtrackClassDef) && this.classSequenceMatches(1, c.input, e.inputClassDef) && this.classSequenceMatches(1 + c.input.length, c.lookahead, e.lookaheadClassDef)) return this.applyLookupList(c.lookupRecords)
                                }
                                break;
                            case 3:
                                if (this.coverageSequenceMatches(-e.backtrackGlyphCount, e.backtrackCoverage) && this.coverageSequenceMatches(0, e.inputCoverage) && this.coverageSequenceMatches(e.inputGlyphCount, e.lookaheadCoverage)) return this.applyLookupList(e.lookupRecords)
                        }
                        return !1
                    }, e
                }(),
                Xi = function() {
                    function e(e, t, n, r) {
                        if (void 0 === n && (n = []), this._font = e, this.codePoints = n, this.id = t, this.features = {}, Array.isArray(r))
                            for (var i = 0; i < r.length; i++) {
                                var a = r[i];
                                this.features[a] = !0
                            } else "object" === typeof r && Object.assign(this.features, r);
                        this.ligatureID = null, this.ligatureComponent = null, this.isLigated = !1, this.cursiveAttachment = null, this.markAttachment = null, this.shaperInfo = null, this.substituted = !1, this.isMultiplied = !1
                    }
                    return e.prototype.copy = function() {
                        return new e(this._font, this.id, this.codePoints, this.features)
                    }, (0, s.Z)(e, [{
                        key: "id",
                        get: function() {
                            return this._id
                        },
                        set: function(e) {
                            this._id = e, this.substituted = !0;
                            var t = this._font.GDEF;
                            if (t && t.glyphClassDef) {
                                var n = Ki.prototype.getClassID(e, t.glyphClassDef);
                                this.isBase = 1 === n, this.isLigature = 2 === n, this.isMark = 3 === n, this.markAttachmentType = t.markAttachClassDef ? Ki.prototype.getClassID(e, t.markAttachClassDef) : 0
                            } else this.isMark = this.codePoints.length > 0 && this.codePoints.every(f.default.isMark), this.isBase = !this.isMark, this.isLigature = this.codePoints.length > 1, this.markAttachmentType = 0
                        }
                    }]), e
                }(),
                Ji = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (0, l.Z)(t, e), t.planFeatures = function(e) {
                        e.add(["ljmo", "vjmo", "tjmo"], !1)
                    }, t.assignFeatures = function(e, t) {
                        for (var n = 0, r = 0; r < t.length;) {
                            var i, a = t[r].codePoints[0],
                                s = na(a),
                                o = oa[n][s];
                            switch (i = o[0], n = o[1], i) {
                                case ra:
                                    e.font.hasGlyphForCodePoint(a) || (r = ua(t, r, e.font));
                                    break;
                                case ia:
                                    r = ca(t, r, e.font);
                                    break;
                                case aa:
                                    ha(t, r, e.font);
                                    break;
                                case sa:
                                    r = fa(t, r, e.font)
                            }
                            r++
                        }
                    }, t
                }(Di);
            Ji.zeroMarkWidths = "NONE";
            var Qi = 44032,
                $i = 4352,
                ea = 4449,
                ta = 4519;

            function na(e) {
                return function(e) {
                    return 4352 <= e && e <= 4447 || 43360 <= e && e <= 43388
                }(e) ? 1 : function(e) {
                    return 4448 <= e && e <= 4519 || 55216 <= e && e <= 55238
                }(e) ? 2 : function(e) {
                    return 4520 <= e && e <= 4607 || 55243 <= e && e <= 55291
                }(e) ? 3 : function(e) {
                    return e - Qi < 11173 && (e - Qi) % 28 === 0
                }(e) ? 4 : function(e) {
                    return Qi <= e && e <= 55204
                }(e) ? 5 : function(e) {
                    return 12334 <= e && e <= 12335
                }(e) ? 6 : 0
            }
            var ra = 1,
                ia = 2,
                aa = 4,
                sa = 5,
                oa = [
                    [
                        [0, 0],
                        [0, 1],
                        [0, 0],
                        [0, 0],
                        [ra, 2],
                        [ra, 3],
                        [sa, 0]
                    ],
                    [
                        [0, 0],
                        [0, 1],
                        [ia, 2],
                        [0, 0],
                        [ra, 2],
                        [ra, 3],
                        [sa, 0]
                    ],
                    [
                        [0, 0],
                        [0, 1],
                        [0, 0],
                        [ia, 3],
                        [ra, 2],
                        [ra, 3],
                        [aa, 0]
                    ],
                    [
                        [0, 0],
                        [0, 1],
                        [0, 0],
                        [0, 0],
                        [ra, 2],
                        [ra, 3],
                        [aa, 0]
                    ]
                ];

            function la(e, t, n) {
                return new Xi(e, e.glyphForCodePoint(t).id, [t], n)
            }

            function ua(e, t, n) {
                var r = e[t],
                    i = r.codePoints[0] - Qi,
                    a = ta + i % 28,
                    s = $i + (i = i / 28 | 0) / 21 | 0,
                    o = ea + i % 21;
                if (!n.hasGlyphForCodePoint(s) || !n.hasGlyphForCodePoint(o) || a !== ta && !n.hasGlyphForCodePoint(a)) return t;
                var l = la(n, s, r.features);
                l.features.ljmo = !0;
                var u = la(n, o, r.features);
                u.features.vjmo = !0;
                var c = [l, u];
                if (a > ta) {
                    var h = la(n, a, r.features);
                    h.features.tjmo = !0, c.push(h)
                }
                return e.splice.apply(e, [t, 1].concat(c)), t + c.length - 1
            }

            function ca(e, t, n) {
                var r, i, a, s, o = e[t],
                    l = na(e[t].codePoints[0]),
                    u = e[t - 1].codePoints[0],
                    c = na(u);
                if (4 === c && 3 === l) r = u, s = o;
                else {
                    2 === l ? (i = e[t - 1], a = o) : (i = e[t - 2], a = e[t - 1], s = o);
                    var h = i.codePoints[0],
                        f = a.codePoints[0];
                    (function(e) {
                        return $i <= e && e <= 4370
                    })(h) && function(e) {
                        return ea <= e && e <= 4469
                    }(f) && (r = Qi + 28 * (21 * (h - $i) + (f - ea)))
                }
                var p = s && s.codePoints[0] || ta;
                if (null != r && (p === ta || function(e) {
                        return 1 <= e && e <= 4546
                    }(p))) {
                    var d = r + (p - ta);
                    if (n.hasGlyphForCodePoint(d)) {
                        var g = 2 === c ? 3 : 2;
                        return e.splice(t - g + 1, g, la(n, d, o.features)), t - g + 1
                    }
                }
                return i && (i.features.ljmo = !0), a && (a.features.vjmo = !0), s && (s.features.tjmo = !0), 4 === c ? (ua(e, t - 1, n), t + 1) : t
            }

            function ha(e, t, n) {
                var r = e[t],
                    i = e[t].codePoints[0];
                if (0 !== n.glyphForCodePoint(i).advanceWidth) {
                    var a = function(e) {
                        switch (na(e)) {
                            case 4:
                            case 5:
                                return 1;
                            case 2:
                                return 2;
                            case 3:
                                return 3
                        }
                    }(e[t - 1].codePoints[0]);
                    return e.splice(t, 1), e.splice(t - a, 0, r)
                }
            }

            function fa(e, t, n) {
                var r = e[t],
                    i = e[t].codePoints[0];
                if (n.hasGlyphForCodePoint(9676)) {
                    var a = la(n, 9676, r.features),
                        s = 0 === n.glyphForCodePoint(i).advanceWidth ? t : t + 1;
                    e.splice(s, 0, a), t++
                }
                return t
            }
            var pa = function() {
                    function e(e) {
                        this.stateTable = e.stateTable, this.accepting = e.accepting, this.tags = e.tags
                    }
                    var t = e.prototype;
                    return t.match = function(e) {
                        var t, n = this;
                        return (t = {})[Symbol.iterator] = y().mark((function t() {
                            var r, i, a, s, o, l;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = 1, i = null, a = null, s = null, o = 0;
                                    case 5:
                                        if (!(o < e.length)) {
                                            t.next = 21;
                                            break
                                        }
                                        if (l = e[o], s = r, 0 !== (r = n.stateTable[r][l])) {
                                            t.next = 15;
                                            break
                                        }
                                        if (!(null != i && null != a && a >= i)) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.next = 13, [i, a, n.tags[s]];
                                    case 13:
                                        r = n.stateTable[1][l], i = null;
                                    case 15:
                                        0 !== r && null == i && (i = o), n.accepting[r] && (a = o), 0 === r && (r = 1);
                                    case 18:
                                        o++, t.next = 5;
                                        break;
                                    case 21:
                                        if (!(null != i && null != a && a >= i)) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.next = 24, [i, a, n.tags[r]];
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), t
                    }, t.apply = function(e, t) {
                        for (var n, r = (0, a.Z)(this.match(e)); !(n = r()).done;)
                            for (var i, s = n.value, o = s[0], l = s[1], u = s[2], c = (0, a.Z)(u); !(i = c()).done;) {
                                var h = i.value;
                                "function" === typeof t[h] && t[h](o, l, e.slice(o, l + 1))
                            }
                    }, e
                }(),
                da = pa,
                ga = {
                    stateTable: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 11, 12, 13, 14, 15, 16, 17],
                        [0, 0, 0, 18, 19, 20, 21, 22, 23, 0, 24, 0, 0, 25, 26, 0, 0, 27, 0],
                        [0, 0, 0, 28, 29, 30, 31, 32, 33, 0, 34, 0, 0, 35, 36, 0, 0, 37, 0],
                        [0, 0, 0, 38, 5, 7, 7, 8, 9, 0, 10, 0, 0, 0, 13, 0, 0, 16, 0],
                        [0, 39, 0, 0, 0, 40, 41, 0, 9, 0, 10, 0, 0, 0, 42, 0, 39, 0, 0],
                        [0, 0, 0, 0, 43, 44, 44, 8, 9, 0, 0, 0, 0, 12, 43, 0, 0, 0, 0],
                        [0, 0, 0, 0, 43, 44, 44, 8, 9, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0],
                        [0, 0, 0, 45, 46, 47, 48, 49, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 50, 0, 0, 51, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 53, 54, 55, 56, 57, 58, 0, 59, 0, 0, 60, 61, 0, 0, 62, 0],
                        [0, 0, 0, 4, 5, 7, 7, 8, 9, 0, 10, 0, 0, 0, 13, 0, 0, 16, 0],
                        [0, 63, 64, 0, 0, 40, 41, 0, 9, 0, 10, 0, 0, 0, 42, 0, 63, 0, 0],
                        [0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 11, 12, 13, 0, 2, 16, 0],
                        [0, 0, 0, 18, 65, 20, 21, 22, 23, 0, 24, 0, 0, 25, 26, 0, 0, 27, 0],
                        [0, 0, 0, 0, 66, 67, 67, 8, 9, 0, 10, 0, 0, 0, 68, 0, 0, 0, 0],
                        [0, 0, 0, 69, 0, 70, 70, 0, 71, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 73, 19, 74, 74, 22, 23, 0, 24, 0, 0, 0, 26, 0, 0, 27, 0],
                        [0, 75, 0, 0, 0, 76, 77, 0, 23, 0, 24, 0, 0, 0, 78, 0, 75, 0, 0],
                        [0, 0, 0, 0, 79, 80, 80, 22, 23, 0, 0, 0, 0, 25, 79, 0, 0, 0, 0],
                        [0, 0, 0, 18, 19, 20, 74, 22, 23, 0, 24, 0, 0, 25, 26, 0, 0, 27, 0],
                        [0, 0, 0, 81, 82, 83, 84, 85, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 86, 0, 0, 87, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 18, 19, 74, 74, 22, 23, 0, 24, 0, 0, 0, 26, 0, 0, 27, 0],
                        [0, 89, 90, 0, 0, 76, 77, 0, 23, 0, 24, 0, 0, 0, 78, 0, 89, 0, 0],
                        [0, 0, 0, 0, 91, 92, 92, 22, 23, 0, 24, 0, 0, 0, 93, 0, 0, 0, 0],
                        [0, 0, 0, 94, 29, 95, 31, 32, 33, 0, 34, 0, 0, 0, 36, 0, 0, 37, 0],
                        [0, 96, 0, 0, 0, 97, 98, 0, 33, 0, 34, 0, 0, 0, 99, 0, 96, 0, 0],
                        [0, 0, 0, 0, 100, 101, 101, 32, 33, 0, 0, 0, 0, 35, 100, 0, 0, 0, 0],
                        [0, 0, 0, 0, 100, 101, 101, 32, 33, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0],
                        [0, 0, 0, 102, 103, 104, 105, 106, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 107, 0, 0, 108, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 28, 29, 95, 31, 32, 33, 0, 34, 0, 0, 0, 36, 0, 0, 37, 0],
                        [0, 110, 111, 0, 0, 97, 98, 0, 33, 0, 34, 0, 0, 0, 99, 0, 110, 0, 0],
                        [0, 0, 0, 0, 112, 113, 113, 32, 33, 0, 34, 0, 0, 0, 114, 0, 0, 0, 0],
                        [0, 0, 0, 0, 5, 7, 7, 8, 9, 0, 10, 0, 0, 0, 13, 0, 0, 16, 0],
                        [0, 0, 0, 115, 116, 117, 118, 8, 9, 0, 10, 0, 0, 119, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 39, 0, 122, 0, 123, 123, 8, 9, 0, 10, 0, 0, 0, 42, 0, 39, 0, 0],
                        [0, 124, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0],
                        [0, 39, 0, 0, 0, 121, 125, 0, 9, 0, 10, 0, 0, 0, 42, 0, 39, 0, 0],
                        [0, 0, 0, 0, 0, 126, 126, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 46, 47, 48, 49, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 47, 47, 49, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 127, 127, 49, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 128, 127, 127, 49, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 129, 130, 131, 132, 133, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 135, 54, 56, 56, 57, 58, 0, 59, 0, 0, 0, 61, 0, 0, 62, 0],
                        [0, 136, 0, 0, 0, 137, 138, 0, 58, 0, 59, 0, 0, 0, 139, 0, 136, 0, 0],
                        [0, 0, 0, 0, 140, 141, 141, 57, 58, 0, 0, 0, 0, 60, 140, 0, 0, 0, 0],
                        [0, 0, 0, 0, 140, 141, 141, 57, 58, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0],
                        [0, 0, 0, 142, 143, 144, 145, 146, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 147, 0, 0, 148, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 53, 54, 56, 56, 57, 58, 0, 59, 0, 0, 0, 61, 0, 0, 62, 0],
                        [0, 150, 151, 0, 0, 137, 138, 0, 58, 0, 59, 0, 0, 0, 139, 0, 150, 0, 0],
                        [0, 0, 0, 0, 152, 153, 153, 57, 58, 0, 59, 0, 0, 0, 154, 0, 0, 0, 0],
                        [0, 0, 0, 155, 116, 156, 157, 8, 9, 0, 10, 0, 0, 158, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 75, 3, 4, 5, 159, 160, 8, 161, 0, 162, 0, 11, 12, 163, 0, 75, 16, 0],
                        [0, 0, 0, 0, 0, 40, 164, 0, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 165, 44, 44, 8, 9, 0, 0, 0, 0, 0, 165, 0, 0, 0, 0],
                        [0, 124, 64, 0, 0, 40, 164, 0, 9, 0, 10, 0, 0, 0, 42, 0, 124, 0, 0],
                        [0, 0, 0, 0, 0, 70, 70, 0, 71, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 166, 0, 0, 167, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 19, 74, 74, 22, 23, 0, 24, 0, 0, 0, 26, 0, 0, 27, 0],
                        [0, 0, 0, 0, 79, 80, 80, 22, 23, 0, 0, 0, 0, 0, 79, 0, 0, 0, 0],
                        [0, 0, 0, 169, 170, 171, 172, 22, 23, 0, 24, 0, 0, 173, 174, 0, 0, 27, 0],
                        [0, 0, 0, 0, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 75, 0, 176, 0, 177, 177, 22, 23, 0, 24, 0, 0, 0, 78, 0, 75, 0, 0],
                        [0, 178, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 178, 0, 0],
                        [0, 75, 0, 0, 0, 175, 179, 0, 23, 0, 24, 0, 0, 0, 78, 0, 75, 0, 0],
                        [0, 0, 0, 0, 0, 180, 180, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 82, 83, 84, 85, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 83, 83, 85, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 181, 181, 85, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 182, 181, 181, 85, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 183, 184, 185, 186, 187, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 189, 170, 190, 191, 22, 23, 0, 24, 0, 0, 192, 174, 0, 0, 27, 0],
                        [0, 0, 0, 0, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 76, 193, 0, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 194, 80, 80, 22, 23, 0, 0, 0, 0, 0, 194, 0, 0, 0, 0],
                        [0, 178, 90, 0, 0, 76, 193, 0, 23, 0, 24, 0, 0, 0, 78, 0, 178, 0, 0],
                        [0, 0, 0, 0, 29, 95, 31, 32, 33, 0, 34, 0, 0, 0, 36, 0, 0, 37, 0],
                        [0, 0, 0, 0, 100, 101, 101, 32, 33, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0],
                        [0, 0, 0, 195, 196, 197, 198, 32, 33, 0, 34, 0, 0, 199, 200, 0, 0, 37, 0],
                        [0, 0, 0, 0, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 96, 0, 202, 0, 203, 203, 32, 33, 0, 34, 0, 0, 0, 99, 0, 96, 0, 0],
                        [0, 204, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 0, 0],
                        [0, 96, 0, 0, 0, 201, 205, 0, 33, 0, 34, 0, 0, 0, 99, 0, 96, 0, 0],
                        [0, 0, 0, 0, 0, 206, 206, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 103, 104, 105, 106, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 104, 104, 106, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 207, 207, 106, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 208, 207, 207, 106, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 209, 210, 211, 212, 213, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 215, 196, 216, 217, 32, 33, 0, 34, 0, 0, 218, 200, 0, 0, 37, 0],
                        [0, 0, 0, 0, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 97, 219, 0, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 220, 101, 101, 32, 33, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0],
                        [0, 204, 111, 0, 0, 97, 219, 0, 33, 0, 34, 0, 0, 0, 99, 0, 204, 0, 0],
                        [0, 0, 0, 221, 116, 222, 222, 8, 9, 0, 10, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 223, 0, 0, 0, 40, 224, 0, 9, 0, 10, 0, 0, 0, 42, 0, 223, 0, 0],
                        [0, 0, 0, 0, 225, 44, 44, 8, 9, 0, 0, 0, 0, 119, 225, 0, 0, 0, 0],
                        [0, 0, 0, 115, 116, 117, 222, 8, 9, 0, 10, 0, 0, 119, 120, 0, 0, 16, 0],
                        [0, 0, 0, 115, 116, 222, 222, 8, 9, 0, 10, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 226, 64, 0, 0, 40, 224, 0, 9, 0, 10, 0, 0, 0, 42, 0, 226, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 39, 0, 0, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 39, 0, 0],
                        [0, 0, 0, 0, 0, 44, 44, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 227, 0, 228, 229, 0, 9, 0, 10, 0, 0, 230, 0, 0, 0, 0, 0],
                        [0, 39, 0, 122, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 39, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 231, 231, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 130, 131, 132, 133, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 131, 131, 133, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 233, 233, 133, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 234, 233, 233, 133, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 235, 236, 237, 238, 239, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 54, 56, 56, 57, 58, 0, 59, 0, 0, 0, 61, 0, 0, 62, 0],
                        [0, 0, 0, 240, 241, 242, 243, 57, 58, 0, 59, 0, 0, 244, 245, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 136, 0, 247, 0, 248, 248, 57, 58, 0, 59, 0, 0, 0, 139, 0, 136, 0, 0],
                        [0, 249, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 249, 0, 0],
                        [0, 136, 0, 0, 0, 246, 250, 0, 58, 0, 59, 0, 0, 0, 139, 0, 136, 0, 0],
                        [0, 0, 0, 0, 0, 251, 251, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 143, 144, 145, 146, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 144, 144, 146, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 252, 252, 146, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 253, 252, 252, 146, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 254, 255, 256, 257, 258, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 147, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 259, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 260, 241, 261, 262, 57, 58, 0, 59, 0, 0, 263, 245, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 137, 264, 0, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 265, 141, 141, 57, 58, 0, 0, 0, 0, 0, 265, 0, 0, 0, 0],
                        [0, 249, 151, 0, 0, 137, 264, 0, 58, 0, 59, 0, 0, 0, 139, 0, 249, 0, 0],
                        [0, 0, 0, 221, 116, 222, 222, 8, 9, 0, 10, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 225, 44, 44, 8, 9, 0, 0, 0, 0, 158, 225, 0, 0, 0, 0],
                        [0, 0, 0, 155, 116, 156, 222, 8, 9, 0, 10, 0, 0, 158, 120, 0, 0, 16, 0],
                        [0, 0, 0, 155, 116, 222, 222, 8, 9, 0, 10, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 43, 266, 266, 8, 161, 0, 24, 0, 0, 12, 267, 0, 0, 0, 0],
                        [0, 75, 0, 176, 43, 268, 268, 269, 161, 0, 24, 0, 0, 0, 267, 0, 75, 0, 0],
                        [0, 0, 0, 0, 0, 270, 0, 0, 271, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 272, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 273, 274, 0, 0, 40, 41, 0, 9, 0, 10, 0, 0, 0, 42, 0, 273, 0, 0],
                        [0, 0, 0, 40, 0, 123, 123, 8, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 121, 275, 0, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 166, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 276, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 277, 170, 278, 278, 22, 23, 0, 24, 0, 0, 0, 174, 0, 0, 27, 0],
                        [0, 279, 0, 0, 0, 76, 280, 0, 23, 0, 24, 0, 0, 0, 78, 0, 279, 0, 0],
                        [0, 0, 0, 0, 281, 80, 80, 22, 23, 0, 0, 0, 0, 173, 281, 0, 0, 0, 0],
                        [0, 0, 0, 169, 170, 171, 278, 22, 23, 0, 24, 0, 0, 173, 174, 0, 0, 27, 0],
                        [0, 0, 0, 169, 170, 278, 278, 22, 23, 0, 24, 0, 0, 0, 174, 0, 0, 27, 0],
                        [0, 282, 90, 0, 0, 76, 280, 0, 23, 0, 24, 0, 0, 0, 78, 0, 282, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 75, 0, 0, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 75, 0, 0],
                        [0, 0, 0, 0, 0, 80, 80, 22, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 283, 0, 284, 285, 0, 23, 0, 24, 0, 0, 286, 0, 0, 0, 0, 0],
                        [0, 75, 0, 176, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 75, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 287, 287, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 288, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 184, 185, 186, 187, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 185, 185, 187, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 289, 289, 187, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 290, 289, 289, 187, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 291, 292, 293, 294, 295, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 277, 170, 278, 278, 22, 23, 0, 24, 0, 0, 0, 174, 0, 0, 27, 0],
                        [0, 0, 0, 0, 281, 80, 80, 22, 23, 0, 0, 0, 0, 192, 281, 0, 0, 0, 0],
                        [0, 0, 0, 189, 170, 190, 278, 22, 23, 0, 24, 0, 0, 192, 174, 0, 0, 27, 0],
                        [0, 0, 0, 189, 170, 278, 278, 22, 23, 0, 24, 0, 0, 0, 174, 0, 0, 27, 0],
                        [0, 0, 0, 76, 0, 177, 177, 22, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 175, 296, 0, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 297, 196, 298, 298, 32, 33, 0, 34, 0, 0, 0, 200, 0, 0, 37, 0],
                        [0, 299, 0, 0, 0, 97, 300, 0, 33, 0, 34, 0, 0, 0, 99, 0, 299, 0, 0],
                        [0, 0, 0, 0, 301, 101, 101, 32, 33, 0, 0, 0, 0, 199, 301, 0, 0, 0, 0],
                        [0, 0, 0, 195, 196, 197, 298, 32, 33, 0, 34, 0, 0, 199, 200, 0, 0, 37, 0],
                        [0, 0, 0, 195, 196, 298, 298, 32, 33, 0, 34, 0, 0, 0, 200, 0, 0, 37, 0],
                        [0, 302, 111, 0, 0, 97, 300, 0, 33, 0, 34, 0, 0, 0, 99, 0, 302, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 96, 0, 0, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 96, 0, 0],
                        [0, 0, 0, 0, 0, 101, 101, 32, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 303, 0, 304, 305, 0, 33, 0, 34, 0, 0, 306, 0, 0, 0, 0, 0],
                        [0, 96, 0, 202, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 96, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 307, 307, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 210, 211, 212, 213, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 211, 211, 213, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 309, 309, 213, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 310, 309, 309, 213, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 311, 312, 313, 314, 315, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 297, 196, 298, 298, 32, 33, 0, 34, 0, 0, 0, 200, 0, 0, 37, 0],
                        [0, 0, 0, 0, 301, 101, 101, 32, 33, 0, 0, 0, 0, 218, 301, 0, 0, 0, 0],
                        [0, 0, 0, 215, 196, 216, 298, 32, 33, 0, 34, 0, 0, 218, 200, 0, 0, 37, 0],
                        [0, 0, 0, 215, 196, 298, 298, 32, 33, 0, 34, 0, 0, 0, 200, 0, 0, 37, 0],
                        [0, 0, 0, 97, 0, 203, 203, 32, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 201, 316, 0, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 116, 222, 222, 8, 9, 0, 10, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 225, 44, 44, 8, 9, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0],
                        [0, 0, 0, 317, 318, 319, 320, 8, 9, 0, 10, 0, 0, 321, 322, 0, 0, 16, 0],
                        [0, 223, 0, 323, 0, 123, 123, 8, 9, 0, 10, 0, 0, 0, 42, 0, 223, 0, 0],
                        [0, 223, 0, 0, 0, 121, 324, 0, 9, 0, 10, 0, 0, 0, 42, 0, 223, 0, 0],
                        [0, 0, 0, 325, 318, 326, 327, 8, 9, 0, 10, 0, 0, 328, 322, 0, 0, 16, 0],
                        [0, 0, 0, 64, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 230, 0, 0, 0, 0, 0],
                        [0, 0, 0, 227, 0, 228, 121, 0, 9, 0, 10, 0, 0, 230, 0, 0, 0, 0, 0],
                        [0, 0, 0, 227, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 0, 0],
                        [0, 0, 0, 0, 0, 329, 329, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 236, 237, 238, 239, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 237, 237, 239, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 331, 331, 239, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 332, 331, 331, 239, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 333, 40, 121, 334, 0, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 335, 241, 336, 336, 57, 58, 0, 59, 0, 0, 0, 245, 0, 0, 62, 0],
                        [0, 337, 0, 0, 0, 137, 338, 0, 58, 0, 59, 0, 0, 0, 139, 0, 337, 0, 0],
                        [0, 0, 0, 0, 339, 141, 141, 57, 58, 0, 0, 0, 0, 244, 339, 0, 0, 0, 0],
                        [0, 0, 0, 240, 241, 242, 336, 57, 58, 0, 59, 0, 0, 244, 245, 0, 0, 62, 0],
                        [0, 0, 0, 240, 241, 336, 336, 57, 58, 0, 59, 0, 0, 0, 245, 0, 0, 62, 0],
                        [0, 340, 151, 0, 0, 137, 338, 0, 58, 0, 59, 0, 0, 0, 139, 0, 340, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 136, 0, 0, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 136, 0, 0],
                        [0, 0, 0, 0, 0, 141, 141, 57, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 341, 0, 342, 343, 0, 58, 0, 59, 0, 0, 344, 0, 0, 0, 0, 0],
                        [0, 136, 0, 247, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 136, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 345, 345, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 346, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 255, 256, 257, 258, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 256, 256, 258, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 347, 347, 258, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 348, 347, 347, 258, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 349, 350, 351, 352, 353, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 335, 241, 336, 336, 57, 58, 0, 59, 0, 0, 0, 245, 0, 0, 62, 0],
                        [0, 0, 0, 0, 339, 141, 141, 57, 58, 0, 0, 0, 0, 263, 339, 0, 0, 0, 0],
                        [0, 0, 0, 260, 241, 261, 336, 57, 58, 0, 59, 0, 0, 263, 245, 0, 0, 62, 0],
                        [0, 0, 0, 260, 241, 336, 336, 57, 58, 0, 59, 0, 0, 0, 245, 0, 0, 62, 0],
                        [0, 0, 0, 137, 0, 248, 248, 57, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 246, 354, 0, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 126, 126, 8, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 355, 90, 0, 0, 121, 125, 0, 9, 0, 10, 0, 0, 0, 42, 0, 355, 0, 0],
                        [0, 0, 0, 0, 0, 356, 356, 269, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 357, 358, 359, 360, 361, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 270, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 363, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 364, 116, 365, 366, 8, 161, 0, 162, 0, 0, 367, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 368, 368, 0, 161, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 40, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 170, 278, 278, 22, 23, 0, 24, 0, 0, 0, 174, 0, 0, 27, 0],
                        [0, 0, 0, 0, 281, 80, 80, 22, 23, 0, 0, 0, 0, 0, 281, 0, 0, 0, 0],
                        [0, 0, 0, 369, 370, 371, 372, 22, 23, 0, 24, 0, 0, 373, 374, 0, 0, 27, 0],
                        [0, 279, 0, 375, 0, 177, 177, 22, 23, 0, 24, 0, 0, 0, 78, 0, 279, 0, 0],
                        [0, 279, 0, 0, 0, 175, 376, 0, 23, 0, 24, 0, 0, 0, 78, 0, 279, 0, 0],
                        [0, 0, 0, 377, 370, 378, 379, 22, 23, 0, 24, 0, 0, 380, 374, 0, 0, 27, 0],
                        [0, 0, 0, 90, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 286, 0, 0, 0, 0, 0],
                        [0, 0, 0, 283, 0, 284, 175, 0, 23, 0, 24, 0, 0, 286, 0, 0, 0, 0, 0],
                        [0, 0, 0, 283, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0],
                        [0, 0, 0, 0, 0, 381, 381, 187, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 292, 293, 294, 295, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 293, 293, 295, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 383, 383, 295, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 384, 383, 383, 295, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 385, 76, 175, 386, 0, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 76, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 196, 298, 298, 32, 33, 0, 34, 0, 0, 0, 200, 0, 0, 37, 0],
                        [0, 0, 0, 0, 301, 101, 101, 32, 33, 0, 0, 0, 0, 0, 301, 0, 0, 0, 0],
                        [0, 0, 0, 387, 388, 389, 390, 32, 33, 0, 34, 0, 0, 391, 392, 0, 0, 37, 0],
                        [0, 299, 0, 393, 0, 203, 203, 32, 33, 0, 34, 0, 0, 0, 99, 0, 299, 0, 0],
                        [0, 299, 0, 0, 0, 201, 394, 0, 33, 0, 34, 0, 0, 0, 99, 0, 299, 0, 0],
                        [0, 0, 0, 395, 388, 396, 397, 32, 33, 0, 34, 0, 0, 398, 392, 0, 0, 37, 0],
                        [0, 0, 0, 111, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 306, 0, 0, 0, 0, 0],
                        [0, 0, 0, 303, 0, 304, 201, 0, 33, 0, 34, 0, 0, 306, 0, 0, 0, 0, 0],
                        [0, 0, 0, 303, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 0, 0],
                        [0, 0, 0, 0, 0, 399, 399, 213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 312, 313, 314, 315, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 313, 313, 315, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 401, 401, 315, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 402, 401, 401, 315, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 403, 97, 201, 404, 0, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 97, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 405, 318, 406, 406, 8, 9, 0, 10, 0, 0, 0, 322, 0, 0, 16, 0],
                        [0, 407, 0, 0, 0, 40, 408, 0, 9, 0, 10, 0, 0, 0, 42, 0, 407, 0, 0],
                        [0, 0, 0, 0, 409, 44, 44, 8, 9, 0, 0, 0, 0, 321, 409, 0, 0, 0, 0],
                        [0, 0, 0, 317, 318, 319, 406, 8, 9, 0, 10, 0, 0, 321, 322, 0, 0, 16, 0],
                        [0, 0, 0, 317, 318, 406, 406, 8, 9, 0, 10, 0, 0, 0, 322, 0, 0, 16, 0],
                        [0, 410, 64, 0, 0, 40, 408, 0, 9, 0, 10, 0, 0, 0, 42, 0, 410, 0, 0],
                        [0, 223, 0, 0, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 223, 0, 0],
                        [0, 223, 0, 323, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 223, 0, 0],
                        [0, 0, 0, 405, 318, 406, 406, 8, 9, 0, 10, 0, 0, 0, 322, 0, 0, 16, 0],
                        [0, 0, 0, 0, 409, 44, 44, 8, 9, 0, 0, 0, 0, 328, 409, 0, 0, 0, 0],
                        [0, 0, 0, 325, 318, 326, 406, 8, 9, 0, 10, 0, 0, 328, 322, 0, 0, 16, 0],
                        [0, 0, 0, 325, 318, 406, 406, 8, 9, 0, 10, 0, 0, 0, 322, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 0, 0, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0],
                        [0, 0, 0, 0, 0, 411, 411, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 412, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 40, 121, 334, 0, 9, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0],
                        [0, 0, 0, 0, 413, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 241, 336, 336, 57, 58, 0, 59, 0, 0, 0, 245, 0, 0, 62, 0],
                        [0, 0, 0, 0, 339, 141, 141, 57, 58, 0, 0, 0, 0, 0, 339, 0, 0, 0, 0],
                        [0, 0, 0, 414, 415, 416, 417, 57, 58, 0, 59, 0, 0, 418, 419, 0, 0, 62, 0],
                        [0, 337, 0, 420, 0, 248, 248, 57, 58, 0, 59, 0, 0, 0, 139, 0, 337, 0, 0],
                        [0, 337, 0, 0, 0, 246, 421, 0, 58, 0, 59, 0, 0, 0, 139, 0, 337, 0, 0],
                        [0, 0, 0, 422, 415, 423, 424, 57, 58, 0, 59, 0, 0, 425, 419, 0, 0, 62, 0],
                        [0, 0, 0, 151, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 344, 0, 0, 0, 0, 0],
                        [0, 0, 0, 341, 0, 342, 246, 0, 58, 0, 59, 0, 0, 344, 0, 0, 0, 0, 0],
                        [0, 0, 0, 341, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0],
                        [0, 0, 0, 0, 0, 426, 426, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 427, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 350, 351, 352, 353, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 351, 351, 353, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 428, 428, 353, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 429, 428, 428, 353, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 430, 137, 246, 431, 0, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 137, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 432, 116, 433, 434, 8, 161, 0, 162, 0, 0, 435, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 180, 180, 269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 358, 359, 360, 361, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 359, 359, 361, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 436, 436, 361, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 437, 436, 436, 361, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 438, 439, 440, 441, 442, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 443, 274, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 443, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 444, 116, 445, 445, 8, 161, 0, 162, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 225, 44, 44, 8, 161, 0, 0, 0, 0, 367, 225, 0, 0, 0, 0],
                        [0, 0, 0, 364, 116, 365, 445, 8, 161, 0, 162, 0, 0, 367, 120, 0, 0, 16, 0],
                        [0, 0, 0, 364, 116, 445, 445, 8, 161, 0, 162, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 446, 370, 447, 447, 22, 23, 0, 24, 0, 0, 0, 374, 0, 0, 27, 0],
                        [0, 448, 0, 0, 0, 76, 449, 0, 23, 0, 24, 0, 0, 0, 78, 0, 448, 0, 0],
                        [0, 0, 0, 0, 450, 80, 80, 22, 23, 0, 0, 0, 0, 373, 450, 0, 0, 0, 0],
                        [0, 0, 0, 369, 370, 371, 447, 22, 23, 0, 24, 0, 0, 373, 374, 0, 0, 27, 0],
                        [0, 0, 0, 369, 370, 447, 447, 22, 23, 0, 24, 0, 0, 0, 374, 0, 0, 27, 0],
                        [0, 451, 90, 0, 0, 76, 449, 0, 23, 0, 24, 0, 0, 0, 78, 0, 451, 0, 0],
                        [0, 279, 0, 0, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 279, 0, 0],
                        [0, 279, 0, 375, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 279, 0, 0],
                        [0, 0, 0, 446, 370, 447, 447, 22, 23, 0, 24, 0, 0, 0, 374, 0, 0, 27, 0],
                        [0, 0, 0, 0, 450, 80, 80, 22, 23, 0, 0, 0, 0, 380, 450, 0, 0, 0, 0],
                        [0, 0, 0, 377, 370, 378, 447, 22, 23, 0, 24, 0, 0, 380, 374, 0, 0, 27, 0],
                        [0, 0, 0, 377, 370, 447, 447, 22, 23, 0, 24, 0, 0, 0, 374, 0, 0, 27, 0],
                        [0, 0, 0, 0, 0, 0, 0, 187, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 184, 0, 0],
                        [0, 0, 0, 0, 0, 452, 452, 295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 76, 175, 386, 0, 23, 0, 24, 0, 0, 0, 78, 0, 0, 0, 0],
                        [0, 0, 0, 0, 454, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 455, 388, 456, 456, 32, 33, 0, 34, 0, 0, 0, 392, 0, 0, 37, 0],
                        [0, 457, 0, 0, 0, 97, 458, 0, 33, 0, 34, 0, 0, 0, 99, 0, 457, 0, 0],
                        [0, 0, 0, 0, 459, 101, 101, 32, 33, 0, 0, 0, 0, 391, 459, 0, 0, 0, 0],
                        [0, 0, 0, 387, 388, 389, 456, 32, 33, 0, 34, 0, 0, 391, 392, 0, 0, 37, 0],
                        [0, 0, 0, 387, 388, 456, 456, 32, 33, 0, 34, 0, 0, 0, 392, 0, 0, 37, 0],
                        [0, 460, 111, 0, 0, 97, 458, 0, 33, 0, 34, 0, 0, 0, 99, 0, 460, 0, 0],
                        [0, 299, 0, 0, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 299, 0, 0],
                        [0, 299, 0, 393, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 299, 0, 0],
                        [0, 0, 0, 455, 388, 456, 456, 32, 33, 0, 34, 0, 0, 0, 392, 0, 0, 37, 0],
                        [0, 0, 0, 0, 459, 101, 101, 32, 33, 0, 0, 0, 0, 398, 459, 0, 0, 0, 0],
                        [0, 0, 0, 395, 388, 396, 456, 32, 33, 0, 34, 0, 0, 398, 392, 0, 0, 37, 0],
                        [0, 0, 0, 395, 388, 456, 456, 32, 33, 0, 34, 0, 0, 0, 392, 0, 0, 37, 0],
                        [0, 0, 0, 0, 0, 0, 0, 213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 0, 0],
                        [0, 0, 0, 0, 0, 461, 461, 315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 462, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 97, 201, 404, 0, 33, 0, 34, 0, 0, 0, 99, 0, 0, 0, 0],
                        [0, 0, 0, 0, 463, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 318, 406, 406, 8, 9, 0, 10, 0, 0, 0, 322, 0, 0, 16, 0],
                        [0, 0, 0, 0, 409, 44, 44, 8, 9, 0, 0, 0, 0, 0, 409, 0, 0, 0, 0],
                        [0, 0, 0, 464, 465, 466, 467, 8, 9, 0, 10, 0, 0, 468, 469, 0, 0, 16, 0],
                        [0, 407, 0, 470, 0, 123, 123, 8, 9, 0, 10, 0, 0, 0, 42, 0, 407, 0, 0],
                        [0, 407, 0, 0, 0, 121, 471, 0, 9, 0, 10, 0, 0, 0, 42, 0, 407, 0, 0],
                        [0, 0, 0, 472, 465, 473, 474, 8, 9, 0, 10, 0, 0, 475, 469, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 0, 0, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 236, 0, 0],
                        [0, 0, 0, 0, 0, 0, 476, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 477, 415, 478, 478, 57, 58, 0, 59, 0, 0, 0, 419, 0, 0, 62, 0],
                        [0, 479, 0, 0, 0, 137, 480, 0, 58, 0, 59, 0, 0, 0, 139, 0, 479, 0, 0],
                        [0, 0, 0, 0, 481, 141, 141, 57, 58, 0, 0, 0, 0, 418, 481, 0, 0, 0, 0],
                        [0, 0, 0, 414, 415, 416, 478, 57, 58, 0, 59, 0, 0, 418, 419, 0, 0, 62, 0],
                        [0, 0, 0, 414, 415, 478, 478, 57, 58, 0, 59, 0, 0, 0, 419, 0, 0, 62, 0],
                        [0, 482, 151, 0, 0, 137, 480, 0, 58, 0, 59, 0, 0, 0, 139, 0, 482, 0, 0],
                        [0, 337, 0, 0, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 337, 0, 0],
                        [0, 337, 0, 420, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 337, 0, 0],
                        [0, 0, 0, 477, 415, 478, 478, 57, 58, 0, 59, 0, 0, 0, 419, 0, 0, 62, 0],
                        [0, 0, 0, 0, 481, 141, 141, 57, 58, 0, 0, 0, 0, 425, 481, 0, 0, 0, 0],
                        [0, 0, 0, 422, 415, 423, 478, 57, 58, 0, 59, 0, 0, 425, 419, 0, 0, 62, 0],
                        [0, 0, 0, 422, 415, 478, 478, 57, 58, 0, 59, 0, 0, 0, 419, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0],
                        [0, 0, 0, 0, 0, 483, 483, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 484, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 137, 246, 431, 0, 58, 0, 59, 0, 0, 0, 139, 0, 0, 0, 0],
                        [0, 0, 0, 0, 485, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 444, 116, 445, 445, 8, 161, 0, 162, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 225, 44, 44, 8, 161, 0, 0, 0, 0, 435, 225, 0, 0, 0, 0],
                        [0, 0, 0, 432, 116, 433, 445, 8, 161, 0, 162, 0, 0, 435, 120, 0, 0, 16, 0],
                        [0, 0, 0, 432, 116, 445, 445, 8, 161, 0, 162, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 486, 486, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 439, 440, 441, 442, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 440, 440, 442, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 488, 488, 442, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 489, 488, 488, 442, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 490, 491, 492, 493, 494, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 495, 0, 496, 497, 0, 161, 0, 162, 0, 0, 498, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 116, 445, 445, 8, 161, 0, 162, 0, 0, 0, 120, 0, 0, 16, 0],
                        [0, 0, 0, 0, 225, 44, 44, 8, 161, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0],
                        [0, 0, 0, 0, 370, 447, 447, 22, 23, 0, 24, 0, 0, 0, 374, 0, 0, 27, 0],
                        [0, 0, 0, 0, 450, 80, 80, 22, 23, 0, 0, 0, 0, 0, 450, 0, 0, 0, 0],
                        [0, 0, 0, 499, 500, 501, 502, 22, 23, 0, 24, 0, 0, 503, 504, 0, 0, 27, 0],
                        [0, 448, 0, 505, 0, 177, 177, 22, 23, 0, 24, 0, 0, 0, 78, 0, 448, 0, 0],
                        [0, 448, 0, 0, 0, 175, 506, 0, 23, 0, 24, 0, 0, 0, 78, 0, 448, 0, 0],
                        [0, 0, 0, 507, 500, 508, 509, 22, 23, 0, 24, 0, 0, 510, 504, 0, 0, 27, 0],
                        [0, 0, 0, 0, 0, 0, 0, 295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0],
                        [0, 0, 0, 0, 0, 0, 511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 388, 456, 456, 32, 33, 0, 34, 0, 0, 0, 392, 0, 0, 37, 0],
                        [0, 0, 0, 0, 459, 101, 101, 32, 33, 0, 0, 0, 0, 0, 459, 0, 0, 0, 0],
                        [0, 0, 0, 512, 513, 514, 515, 32, 33, 0, 34, 0, 0, 516, 517, 0, 0, 37, 0],
                        [0, 457, 0, 518, 0, 203, 203, 32, 33, 0, 34, 0, 0, 0, 99, 0, 457, 0, 0],
                        [0, 457, 0, 0, 0, 201, 519, 0, 33, 0, 34, 0, 0, 0, 99, 0, 457, 0, 0],
                        [0, 0, 0, 520, 513, 521, 522, 32, 33, 0, 34, 0, 0, 523, 517, 0, 0, 37, 0],
                        [0, 0, 0, 0, 0, 0, 0, 315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0],
                        [0, 0, 0, 0, 0, 0, 524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 525, 465, 526, 526, 8, 9, 0, 10, 0, 0, 0, 469, 0, 0, 16, 0],
                        [0, 527, 0, 0, 0, 40, 528, 0, 9, 0, 10, 0, 0, 0, 42, 0, 527, 0, 0],
                        [0, 0, 0, 0, 529, 44, 44, 8, 9, 0, 0, 0, 0, 468, 529, 0, 0, 0, 0],
                        [0, 0, 0, 464, 465, 466, 526, 8, 9, 0, 10, 0, 0, 468, 469, 0, 0, 16, 0],
                        [0, 0, 0, 464, 465, 526, 526, 8, 9, 0, 10, 0, 0, 0, 469, 0, 0, 16, 0],
                        [0, 530, 64, 0, 0, 40, 528, 0, 9, 0, 10, 0, 0, 0, 42, 0, 530, 0, 0],
                        [0, 407, 0, 0, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 407, 0, 0],
                        [0, 407, 0, 470, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 407, 0, 0],
                        [0, 0, 0, 525, 465, 526, 526, 8, 9, 0, 10, 0, 0, 0, 469, 0, 0, 16, 0],
                        [0, 0, 0, 0, 529, 44, 44, 8, 9, 0, 0, 0, 0, 475, 529, 0, 0, 0, 0],
                        [0, 0, 0, 472, 465, 473, 526, 8, 9, 0, 10, 0, 0, 475, 469, 0, 0, 16, 0],
                        [0, 0, 0, 472, 465, 526, 526, 8, 9, 0, 10, 0, 0, 0, 469, 0, 0, 16, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0],
                        [0, 0, 0, 0, 415, 478, 478, 57, 58, 0, 59, 0, 0, 0, 419, 0, 0, 62, 0],
                        [0, 0, 0, 0, 481, 141, 141, 57, 58, 0, 0, 0, 0, 0, 481, 0, 0, 0, 0],
                        [0, 0, 0, 531, 532, 533, 534, 57, 58, 0, 59, 0, 0, 535, 536, 0, 0, 62, 0],
                        [0, 479, 0, 537, 0, 248, 248, 57, 58, 0, 59, 0, 0, 0, 139, 0, 479, 0, 0],
                        [0, 479, 0, 0, 0, 246, 538, 0, 58, 0, 59, 0, 0, 0, 139, 0, 479, 0, 0],
                        [0, 0, 0, 539, 532, 540, 541, 57, 58, 0, 59, 0, 0, 542, 536, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 0, 0, 353, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 0, 0],
                        [0, 0, 0, 0, 0, 0, 543, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 358, 0, 0],
                        [0, 0, 0, 0, 0, 544, 544, 442, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 545, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 491, 492, 493, 494, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 492, 492, 494, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 546, 546, 494, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 547, 546, 546, 494, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 548, 549, 368, 550, 0, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 274, 0, 368, 368, 0, 161, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 161, 0, 0, 0, 0, 498, 0, 0, 0, 0, 0],
                        [0, 0, 0, 495, 0, 496, 368, 0, 161, 0, 162, 0, 0, 498, 0, 0, 0, 0, 0],
                        [0, 0, 0, 495, 0, 368, 368, 0, 161, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 551, 500, 552, 552, 22, 23, 0, 24, 0, 0, 0, 504, 0, 0, 27, 0],
                        [0, 553, 0, 0, 0, 76, 554, 0, 23, 0, 24, 0, 0, 0, 78, 0, 553, 0, 0],
                        [0, 0, 0, 0, 555, 80, 80, 22, 23, 0, 0, 0, 0, 503, 555, 0, 0, 0, 0],
                        [0, 0, 0, 499, 500, 501, 552, 22, 23, 0, 24, 0, 0, 503, 504, 0, 0, 27, 0],
                        [0, 0, 0, 499, 500, 552, 552, 22, 23, 0, 24, 0, 0, 0, 504, 0, 0, 27, 0],
                        [0, 556, 90, 0, 0, 76, 554, 0, 23, 0, 24, 0, 0, 0, 78, 0, 556, 0, 0],
                        [0, 448, 0, 0, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 448, 0, 0],
                        [0, 448, 0, 505, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 448, 0, 0],
                        [0, 0, 0, 551, 500, 552, 552, 22, 23, 0, 24, 0, 0, 0, 504, 0, 0, 27, 0],
                        [0, 0, 0, 0, 555, 80, 80, 22, 23, 0, 0, 0, 0, 510, 555, 0, 0, 0, 0],
                        [0, 0, 0, 507, 500, 508, 552, 22, 23, 0, 24, 0, 0, 510, 504, 0, 0, 27, 0],
                        [0, 0, 0, 507, 500, 552, 552, 22, 23, 0, 24, 0, 0, 0, 504, 0, 0, 27, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0],
                        [0, 0, 0, 557, 513, 558, 558, 32, 33, 0, 34, 0, 0, 0, 517, 0, 0, 37, 0],
                        [0, 559, 0, 0, 0, 97, 560, 0, 33, 0, 34, 0, 0, 0, 99, 0, 559, 0, 0],
                        [0, 0, 0, 0, 561, 101, 101, 32, 33, 0, 0, 0, 0, 516, 561, 0, 0, 0, 0],
                        [0, 0, 0, 512, 513, 514, 558, 32, 33, 0, 34, 0, 0, 516, 517, 0, 0, 37, 0],
                        [0, 0, 0, 512, 513, 558, 558, 32, 33, 0, 34, 0, 0, 0, 517, 0, 0, 37, 0],
                        [0, 562, 111, 0, 0, 97, 560, 0, 33, 0, 34, 0, 0, 0, 99, 0, 562, 0, 0],
                        [0, 457, 0, 0, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 457, 0, 0],
                        [0, 457, 0, 518, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 457, 0, 0],
                        [0, 0, 0, 557, 513, 558, 558, 32, 33, 0, 34, 0, 0, 0, 517, 0, 0, 37, 0],
                        [0, 0, 0, 0, 561, 101, 101, 32, 33, 0, 0, 0, 0, 523, 561, 0, 0, 0, 0],
                        [0, 0, 0, 520, 513, 521, 558, 32, 33, 0, 34, 0, 0, 523, 517, 0, 0, 37, 0],
                        [0, 0, 0, 520, 513, 558, 558, 32, 33, 0, 34, 0, 0, 0, 517, 0, 0, 37, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0],
                        [0, 0, 0, 0, 465, 526, 526, 8, 9, 0, 10, 0, 0, 0, 469, 0, 0, 16, 0],
                        [0, 0, 0, 0, 529, 44, 44, 8, 9, 0, 0, 0, 0, 0, 529, 0, 0, 0, 0],
                        [0, 0, 0, 563, 66, 564, 565, 8, 9, 0, 10, 0, 0, 566, 68, 0, 0, 16, 0],
                        [0, 527, 0, 567, 0, 123, 123, 8, 9, 0, 10, 0, 0, 0, 42, 0, 527, 0, 0],
                        [0, 527, 0, 0, 0, 121, 568, 0, 9, 0, 10, 0, 0, 0, 42, 0, 527, 0, 0],
                        [0, 0, 0, 569, 66, 570, 571, 8, 9, 0, 10, 0, 0, 572, 68, 0, 0, 16, 0],
                        [0, 0, 0, 573, 532, 574, 574, 57, 58, 0, 59, 0, 0, 0, 536, 0, 0, 62, 0],
                        [0, 575, 0, 0, 0, 137, 576, 0, 58, 0, 59, 0, 0, 0, 139, 0, 575, 0, 0],
                        [0, 0, 0, 0, 577, 141, 141, 57, 58, 0, 0, 0, 0, 535, 577, 0, 0, 0, 0],
                        [0, 0, 0, 531, 532, 533, 574, 57, 58, 0, 59, 0, 0, 535, 536, 0, 0, 62, 0],
                        [0, 0, 0, 531, 532, 574, 574, 57, 58, 0, 59, 0, 0, 0, 536, 0, 0, 62, 0],
                        [0, 578, 151, 0, 0, 137, 576, 0, 58, 0, 59, 0, 0, 0, 139, 0, 578, 0, 0],
                        [0, 479, 0, 0, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 479, 0, 0],
                        [0, 479, 0, 537, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 479, 0, 0],
                        [0, 0, 0, 573, 532, 574, 574, 57, 58, 0, 59, 0, 0, 0, 536, 0, 0, 62, 0],
                        [0, 0, 0, 0, 577, 141, 141, 57, 58, 0, 0, 0, 0, 542, 577, 0, 0, 0, 0],
                        [0, 0, 0, 539, 532, 540, 574, 57, 58, 0, 59, 0, 0, 542, 536, 0, 0, 62, 0],
                        [0, 0, 0, 539, 532, 574, 574, 57, 58, 0, 59, 0, 0, 0, 536, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 442, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 439, 0, 0],
                        [0, 0, 0, 0, 0, 579, 579, 494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 580, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 549, 368, 550, 0, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 368, 368, 0, 161, 0, 162, 0, 0, 0, 362, 0, 0, 0, 0],
                        [0, 0, 0, 0, 581, 0, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 500, 552, 552, 22, 23, 0, 24, 0, 0, 0, 504, 0, 0, 27, 0],
                        [0, 0, 0, 0, 555, 80, 80, 22, 23, 0, 0, 0, 0, 0, 555, 0, 0, 0, 0],
                        [0, 0, 0, 582, 91, 583, 584, 22, 23, 0, 24, 0, 0, 585, 93, 0, 0, 27, 0],
                        [0, 553, 0, 586, 0, 177, 177, 22, 23, 0, 24, 0, 0, 0, 78, 0, 553, 0, 0],
                        [0, 553, 0, 0, 0, 175, 587, 0, 23, 0, 24, 0, 0, 0, 78, 0, 553, 0, 0],
                        [0, 0, 0, 588, 91, 589, 590, 22, 23, 0, 24, 0, 0, 591, 93, 0, 0, 27, 0],
                        [0, 0, 0, 0, 513, 558, 558, 32, 33, 0, 34, 0, 0, 0, 517, 0, 0, 37, 0],
                        [0, 0, 0, 0, 561, 101, 101, 32, 33, 0, 0, 0, 0, 0, 561, 0, 0, 0, 0],
                        [0, 0, 0, 592, 112, 593, 594, 32, 33, 0, 34, 0, 0, 595, 114, 0, 0, 37, 0],
                        [0, 559, 0, 596, 0, 203, 203, 32, 33, 0, 34, 0, 0, 0, 99, 0, 559, 0, 0],
                        [0, 559, 0, 0, 0, 201, 597, 0, 33, 0, 34, 0, 0, 0, 99, 0, 559, 0, 0],
                        [0, 0, 0, 598, 112, 599, 600, 32, 33, 0, 34, 0, 0, 601, 114, 0, 0, 37, 0],
                        [0, 0, 0, 602, 66, 67, 67, 8, 9, 0, 10, 0, 0, 0, 68, 0, 0, 16, 0],
                        [0, 0, 0, 0, 165, 44, 44, 8, 9, 0, 0, 0, 0, 566, 165, 0, 0, 0, 0],
                        [0, 0, 0, 563, 66, 564, 67, 8, 9, 0, 10, 0, 0, 566, 68, 0, 0, 16, 0],
                        [0, 0, 0, 563, 66, 67, 67, 8, 9, 0, 10, 0, 0, 0, 68, 0, 0, 16, 0],
                        [0, 527, 0, 0, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 527, 0, 0],
                        [0, 527, 0, 567, 0, 121, 121, 0, 9, 0, 10, 0, 0, 0, 42, 0, 527, 0, 0],
                        [0, 0, 0, 602, 66, 67, 67, 8, 9, 0, 10, 0, 0, 0, 68, 0, 0, 16, 0],
                        [0, 0, 0, 0, 165, 44, 44, 8, 9, 0, 0, 0, 0, 572, 165, 0, 0, 0, 0],
                        [0, 0, 0, 569, 66, 570, 67, 8, 9, 0, 10, 0, 0, 572, 68, 0, 0, 16, 0],
                        [0, 0, 0, 569, 66, 67, 67, 8, 9, 0, 10, 0, 0, 0, 68, 0, 0, 16, 0],
                        [0, 0, 0, 0, 532, 574, 574, 57, 58, 0, 59, 0, 0, 0, 536, 0, 0, 62, 0],
                        [0, 0, 0, 0, 577, 141, 141, 57, 58, 0, 0, 0, 0, 0, 577, 0, 0, 0, 0],
                        [0, 0, 0, 603, 152, 604, 605, 57, 58, 0, 59, 0, 0, 606, 154, 0, 0, 62, 0],
                        [0, 575, 0, 607, 0, 248, 248, 57, 58, 0, 59, 0, 0, 0, 139, 0, 575, 0, 0],
                        [0, 575, 0, 0, 0, 246, 608, 0, 58, 0, 59, 0, 0, 0, 139, 0, 575, 0, 0],
                        [0, 0, 0, 609, 152, 610, 611, 57, 58, 0, 59, 0, 0, 612, 154, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 0, 0, 494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 491, 0, 0],
                        [0, 0, 0, 0, 0, 0, 613, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 614, 91, 92, 92, 22, 23, 0, 24, 0, 0, 0, 93, 0, 0, 27, 0],
                        [0, 0, 0, 0, 194, 80, 80, 22, 23, 0, 0, 0, 0, 585, 194, 0, 0, 0, 0],
                        [0, 0, 0, 582, 91, 583, 92, 22, 23, 0, 24, 0, 0, 585, 93, 0, 0, 27, 0],
                        [0, 0, 0, 582, 91, 92, 92, 22, 23, 0, 24, 0, 0, 0, 93, 0, 0, 27, 0],
                        [0, 553, 0, 0, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 553, 0, 0],
                        [0, 553, 0, 586, 0, 175, 175, 0, 23, 0, 24, 0, 0, 0, 78, 0, 553, 0, 0],
                        [0, 0, 0, 614, 91, 92, 92, 22, 23, 0, 24, 0, 0, 0, 93, 0, 0, 27, 0],
                        [0, 0, 0, 0, 194, 80, 80, 22, 23, 0, 0, 0, 0, 591, 194, 0, 0, 0, 0],
                        [0, 0, 0, 588, 91, 589, 92, 22, 23, 0, 24, 0, 0, 591, 93, 0, 0, 27, 0],
                        [0, 0, 0, 588, 91, 92, 92, 22, 23, 0, 24, 0, 0, 0, 93, 0, 0, 27, 0],
                        [0, 0, 0, 615, 112, 113, 113, 32, 33, 0, 34, 0, 0, 0, 114, 0, 0, 37, 0],
                        [0, 0, 0, 0, 220, 101, 101, 32, 33, 0, 0, 0, 0, 595, 220, 0, 0, 0, 0],
                        [0, 0, 0, 592, 112, 593, 113, 32, 33, 0, 34, 0, 0, 595, 114, 0, 0, 37, 0],
                        [0, 0, 0, 592, 112, 113, 113, 32, 33, 0, 34, 0, 0, 0, 114, 0, 0, 37, 0],
                        [0, 559, 0, 0, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 559, 0, 0],
                        [0, 559, 0, 596, 0, 201, 201, 0, 33, 0, 34, 0, 0, 0, 99, 0, 559, 0, 0],
                        [0, 0, 0, 615, 112, 113, 113, 32, 33, 0, 34, 0, 0, 0, 114, 0, 0, 37, 0],
                        [0, 0, 0, 0, 220, 101, 101, 32, 33, 0, 0, 0, 0, 601, 220, 0, 0, 0, 0],
                        [0, 0, 0, 598, 112, 599, 113, 32, 33, 0, 34, 0, 0, 601, 114, 0, 0, 37, 0],
                        [0, 0, 0, 598, 112, 113, 113, 32, 33, 0, 34, 0, 0, 0, 114, 0, 0, 37, 0],
                        [0, 0, 0, 0, 66, 67, 67, 8, 9, 0, 10, 0, 0, 0, 68, 0, 0, 16, 0],
                        [0, 0, 0, 616, 152, 153, 153, 57, 58, 0, 59, 0, 0, 0, 154, 0, 0, 62, 0],
                        [0, 0, 0, 0, 265, 141, 141, 57, 58, 0, 0, 0, 0, 606, 265, 0, 0, 0, 0],
                        [0, 0, 0, 603, 152, 604, 153, 57, 58, 0, 59, 0, 0, 606, 154, 0, 0, 62, 0],
                        [0, 0, 0, 603, 152, 153, 153, 57, 58, 0, 59, 0, 0, 0, 154, 0, 0, 62, 0],
                        [0, 575, 0, 0, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 575, 0, 0],
                        [0, 575, 0, 607, 0, 246, 246, 0, 58, 0, 59, 0, 0, 0, 139, 0, 575, 0, 0],
                        [0, 0, 0, 616, 152, 153, 153, 57, 58, 0, 59, 0, 0, 0, 154, 0, 0, 62, 0],
                        [0, 0, 0, 0, 265, 141, 141, 57, 58, 0, 0, 0, 0, 612, 265, 0, 0, 0, 0],
                        [0, 0, 0, 609, 152, 610, 153, 57, 58, 0, 59, 0, 0, 612, 154, 0, 0, 62, 0],
                        [0, 0, 0, 609, 152, 153, 153, 57, 58, 0, 59, 0, 0, 0, 154, 0, 0, 62, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 549, 0, 0],
                        [0, 0, 0, 0, 91, 92, 92, 22, 23, 0, 24, 0, 0, 0, 93, 0, 0, 27, 0],
                        [0, 0, 0, 0, 112, 113, 113, 32, 33, 0, 34, 0, 0, 0, 114, 0, 0, 37, 0],
                        [0, 0, 0, 0, 152, 153, 153, 57, 58, 0, 59, 0, 0, 0, 154, 0, 0, 62, 0]
                    ],
                    accepting: [!1, !0, !0, !0, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !0, !0, !1, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !1, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !0, !0, !1, !0, !1, !0, !0, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !0, !0, !0, !1, !0, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !1, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !0, !1, !1, !0, !1, !0, !0, !1, !0, !0, !1, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !1, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !1, !0, !1, !0, !0, !0, !0, !1, !1, !1, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !0, !1, !0, !1, !0, !0, !1, !1, !0, !0, !1, !1, !0, !0, !0, !1, !0, !1, !0, !0, !0, !0, !1, !1, !1, !0, !1, !0, !0, !0, !0, !1, !1, !1, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !1, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !1, !0, !0, !1, !1, !0, !0, !1, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1, !1, !1, !1, !1, !0, !0, !1, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !0, !1, !0, !0, !0, !0, !1, !1, !1, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !0, !0],
                    tags: [
                        [],
                        ["broken_cluster"],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["consonant_syllable"],
                        ["broken_cluster"],
                        ["symbol_cluster"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["symbol_cluster"],
                        [],
                        ["symbol_cluster"],
                        ["symbol_cluster"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["symbol_cluster"],
                        ["symbol_cluster"],
                        ["symbol_cluster"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        [],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["broken_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["broken_cluster"],
                        ["symbol_cluster"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        [],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        [],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        [],
                        [],
                        ["broken_cluster"],
                        [],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        [],
                        [],
                        ["consonant_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        [],
                        [],
                        ["vowel_syllable"],
                        [],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        [],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        [],
                        [],
                        ["standalone_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        [],
                        [],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        [],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        [],
                        [],
                        [],
                        ["consonant_syllable", "broken_cluster"],
                        ["consonant_syllable", "broken_cluster"],
                        [],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        [],
                        [],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        [],
                        ["consonant_syllable"],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        [],
                        ["vowel_syllable"],
                        ["vowel_syllable"],
                        ["broken_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["standalone_cluster"],
                        ["standalone_cluster"],
                        [],
                        ["consonant_syllable"],
                        ["vowel_syllable"],
                        ["standalone_cluster"]
                    ]
                },
                ya = {
                    categories: ["O", "IND", "S", "GB", "B", "FM", "CGJ", "VMAbv", "VMPst", "VAbv", "VPst", "CMBlw", "VPre", "VBlw", "H", "VMBlw", "CMAbv", "MBlw", "CS", "R", "SUB", "MPst", "MPre", "FAbv", "FPst", "FBlw", "null", "SMAbv", "SMBlw", "VMPre", "ZWNJ", "ZWJ", "WJ", "M", "VS", "N", "HN", "MAbv"],
                    decompositions: {
                        2507: [2503, 2494],
                        2508: [2503, 2519],
                        2888: [2887, 2902],
                        2891: [2887, 2878],
                        2892: [2887, 2903],
                        3018: [3014, 3006],
                        3019: [3015, 3006],
                        3020: [3014, 3031],
                        3144: [3142, 3158],
                        3264: [3263, 3285],
                        3271: [3270, 3285],
                        3272: [3270, 3286],
                        3274: [3270, 3266],
                        3275: [3270, 3266, 3285],
                        3402: [3398, 3390],
                        3403: [3399, 3390],
                        3404: [3398, 3415],
                        3546: [3545, 3530],
                        3548: [3545, 3535],
                        3549: [3545, 3535, 3530],
                        3550: [3545, 3551],
                        3635: [3661, 3634],
                        3763: [3789, 3762],
                        3955: [3953, 3954],
                        3957: [3953, 3956],
                        3958: [4018, 3968],
                        3959: [4018, 3953, 3968],
                        3960: [4019, 3968],
                        3961: [4019, 3953, 3968],
                        3969: [3953, 3968],
                        6971: [6970, 6965],
                        6973: [6972, 6965],
                        6976: [6974, 6965],
                        6977: [6975, 6965],
                        6979: [6978, 6965],
                        69934: [69937, 69927],
                        69935: [69938, 69927],
                        70475: [70471, 70462],
                        70476: [70471, 70487],
                        70843: [70841, 70842],
                        70844: [70841, 70832],
                        70846: [70841, 70845],
                        71098: [71096, 71087],
                        71099: [71097, 71087]
                    },
                    stateTable: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [2, 2, 3, 4, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 17, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 2, 0, 0, 24, 0, 25],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 28, 0, 0, 0, 0, 0, 27, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 0, 0, 41, 35, 42, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 39, 0, 0, 47],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 0, 0, 12, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 0, 9, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 16, 0, 0, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 25],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 0, 11, 12, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 0, 9, 0, 0, 12, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 0, 7, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 0, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 25],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 0, 11, 12, 0, 14, 0, 0, 0, 0, 0, 11, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 4, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 0, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 25],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 48, 11, 12, 13, 14, 48, 16, 0, 0, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 49, 0, 0, 25],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 0, 11, 12, 0, 14, 0, 16, 0, 0, 0, 11, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 25],
                        [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 51, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 0, 11, 12, 0, 14, 0, 16, 0, 0, 0, 11, 0, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 0, 0, 36, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 0, 33, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 34, 35, 36, 37, 38, 0, 40, 0, 0, 41, 35, 42, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 47],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 0, 35, 36, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 0, 33, 0, 0, 36, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 0, 31, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 0, 0, 41, 35, 42, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 47],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 0, 35, 36, 0, 38, 0, 0, 0, 0, 0, 35, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 52, 35, 36, 37, 38, 52, 40, 0, 0, 41, 35, 42, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 53, 0, 0, 47],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 0, 35, 36, 0, 38, 0, 40, 0, 0, 0, 35, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 47],
                        [0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 0, 35, 36, 0, 38, 0, 40, 0, 0, 0, 35, 0, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 48, 11, 12, 13, 14, 0, 16, 0, 0, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 25],
                        [0, 0, 0, 0, 0, 5, 0, 6, 7, 8, 9, 48, 11, 12, 13, 14, 48, 16, 0, 0, 18, 11, 19, 20, 21, 22, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 25],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 52, 35, 36, 37, 38, 0, 40, 0, 0, 41, 35, 42, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 47],
                        [0, 0, 0, 0, 0, 29, 0, 30, 31, 32, 33, 52, 35, 36, 37, 38, 52, 40, 0, 0, 41, 35, 42, 43, 44, 45, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 47],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 51, 0]
                    ],
                    accepting: [!1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0],
                    tags: [
                        [],
                        ["broken_cluster"],
                        ["independent_cluster"],
                        ["symbol_cluster"],
                        ["standard_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        [],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["numeral_cluster"],
                        ["broken_cluster"],
                        ["independent_cluster"],
                        ["symbol_cluster"],
                        ["symbol_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["virama_terminated_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["broken_cluster"],
                        ["broken_cluster"],
                        ["numeral_cluster"],
                        ["number_joiner_terminated_cluster"],
                        ["standard_cluster"],
                        ["standard_cluster"],
                        ["numeral_cluster"]
                    ]
                },
                va = 1,
                ma = 8,
                ba = 16,
                wa = 32,
                _a = 64,
                Ca = 128,
                Sa = 8192,
                xa = 32768,
                ka = 65536,
                Aa = 1 << 17,
                Pa = {
                    Start: 1,
                    Ra_To_Become_Reph: 2,
                    Pre_M: 4,
                    Pre_C: 8,
                    Base_C: 16,
                    After_Main: 32,
                    Above_C: 64,
                    Before_Sub: 128,
                    Below_C: 256,
                    After_Sub: 512,
                    Before_Post: 1024,
                    Post_C: 2048,
                    After_Post: 4096,
                    Final_C: 8192,
                    SMVD: 16384,
                    End: 32768
                },
                Ia = 2 | ka | Aa | 4 | 2048 | 4096,
                Oa = _a | wa,
                Fa = ba | 16384,
                Da = {
                    Default: {
                        hasOldSpec: !1,
                        virama: 0,
                        basePos: "Last",
                        rephPos: Pa.Before_Post,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Devanagari: {
                        hasOldSpec: !0,
                        virama: 2381,
                        basePos: "Last",
                        rephPos: Pa.Before_Post,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Bengali: {
                        hasOldSpec: !0,
                        virama: 2509,
                        basePos: "Last",
                        rephPos: Pa.After_Sub,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Gurmukhi: {
                        hasOldSpec: !0,
                        virama: 2637,
                        basePos: "Last",
                        rephPos: Pa.Before_Sub,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Gujarati: {
                        hasOldSpec: !0,
                        virama: 2765,
                        basePos: "Last",
                        rephPos: Pa.Before_Post,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Oriya: {
                        hasOldSpec: !0,
                        virama: 2893,
                        basePos: "Last",
                        rephPos: Pa.After_Main,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Tamil: {
                        hasOldSpec: !0,
                        virama: 3021,
                        basePos: "Last",
                        rephPos: Pa.After_Post,
                        rephMode: "Implicit",
                        blwfMode: "Pre_And_Post"
                    },
                    Telugu: {
                        hasOldSpec: !0,
                        virama: 3149,
                        basePos: "Last",
                        rephPos: Pa.After_Post,
                        rephMode: "Explicit",
                        blwfMode: "Post_Only"
                    },
                    Kannada: {
                        hasOldSpec: !0,
                        virama: 3277,
                        basePos: "Last",
                        rephPos: Pa.After_Post,
                        rephMode: "Implicit",
                        blwfMode: "Post_Only"
                    },
                    Malayalam: {
                        hasOldSpec: !0,
                        virama: 3405,
                        basePos: "Last",
                        rephPos: Pa.After_Main,
                        rephMode: "Log_Repha",
                        blwfMode: "Pre_And_Post"
                    },
                    Khmer: {
                        hasOldSpec: !1,
                        virama: 6098,
                        basePos: "First",
                        rephPos: Pa.Ra_To_Become_Reph,
                        rephMode: "Vis_Repha",
                        blwfMode: "Pre_And_Post"
                    }
                },
                Ta = {
                    6078: [6081, 6078],
                    6079: [6081, 6079],
                    6080: [6081, 6080],
                    6084: [6081, 6084],
                    6085: [6081, 6085]
                },
                La = [0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 216, 96, 1, 102, 15, 153, 240, 237, 157, 123, 140, 92, 85, 29, 199, 239, 238, 206, 206, 204, 238, 204, 238, 116, 11, 68, 8, 98, 81, 32, 196, 80, 109, 64, 34, 182, 20, 22, 144, 96, 10, 137, 88, 77, 164, 85, 81, 68, 9, 136, 65, 80, 131, 144, 54, 8, 8, 106, 45, 32, 15, 65, 76, 44, 252, 33, 229, 47, 138, 254, 193, 67, 99, 193, 180, 18, 17, 44, 16, 80, 33, 96, 20, 176, 168, 53, 4, 172, 81, 2, 162, 32, 126, 207, 220, 115, 230, 158, 57, 115, 222, 143, 123, 103, 101, 126, 201, 39, 247, 113, 206, 61, 231, 119, 126, 191, 243, 190, 119, 103, 151, 212, 178, 236, 96, 176, 12, 28, 1, 78, 6, 167, 128, 79, 128, 207, 130, 119, 131, 247, 70, 56, 158, 14, 206, 6, 95, 2, 235, 28, 158, 91, 15, 46, 3, 27, 192, 53, 224, 187, 224, 102, 176, 25, 108, 1, 119, 130, 123, 52, 207, 95, 0, 46, 6, 63, 7, 191, 2, 247, 131, 71, 192, 19, 224, 105, 176, 4, 252, 5, 252, 13, 188, 12, 230, 193, 127, 65, 125, 50, 15, 155, 197, 113, 79, 240, 86, 112, 32, 88, 10, 14, 3, 43, 192, 113, 224, 68, 240, 33, 176, 6, 156, 6, 206, 2, 95, 0, 95, 1, 95, 5, 223, 0, 87, 130, 235, 193, 38, 176, 25, 108, 1, 119, 130, 173, 224, 62, 240, 32, 120, 12, 60, 5, 254, 8, 118, 129, 221, 224, 21, 240, 6, 152, 172, 103, 217, 12, 216, 11, 236, 7, 14, 4, 75, 193, 225, 96, 37, 56, 22, 172, 170, 231, 186, 175, 198, 113, 13, 56, 141, 94, 159, 133, 227, 121, 224, 66, 112, 17, 184, 28, 92, 1, 190, 67, 195, 191, 143, 227, 45, 224, 54, 112, 7, 216, 90, 207, 203, 125, 31, 61, 218, 242, 32, 141, 255, 24, 142, 191, 4, 79, 209, 235, 199, 233, 241, 58, 240, 12, 206, 31, 226, 158, 217, 229, 152, 135, 13, 207, 112, 105, 238, 198, 249, 43, 224, 13, 208, 104, 100, 89, 7, 188, 5, 44, 1, 7, 131, 101, 224, 136, 70, 127, 124, 114, 156, 167, 247, 30, 6, 31, 192, 249, 201, 224, 20, 240, 169, 70, 110, 175, 51, 113, 60, 151, 198, 185, 128, 222, 187, 24, 199, 111, 130, 171, 27, 121, 125, 154, 167, 220, 136, 235, 77, 96, 51, 184, 13, 220, 1, 182, 210, 103, 238, 163, 199, 29, 56, 254, 134, 166, 247, 84, 131, 218, 10, 199, 63, 55, 244, 101, 125, 209, 16, 206, 219, 248, 37, 196, 221, 65, 239, 221, 13, 94, 195, 117, 173, 153, 101, 237, 102, 17, 119, 15, 156, 239, 75, 175, 79, 2, 7, 52, 7, 211, 59, 68, 114, 47, 148, 195, 154, 121, 219, 115, 121, 102, 69, 2, 61, 82, 115, 52, 116, 62, 94, 162, 247, 243, 224, 90, 73, 252, 19, 105, 92, 214, 22, 87, 227, 122, 45, 248, 52, 133, 143, 123, 36, 173, 111, 159, 227, 238, 175, 208, 232, 66, 234, 246, 23, 185, 184, 223, 166, 199, 13, 66, 188, 11, 155, 121, 255, 203, 235, 186, 142, 62, 247, 181, 166, 92, 111, 134, 46, 108, 196, 136, 17, 126, 60, 60, 4, 58, 140, 24, 49, 98, 196, 136, 17, 35, 70, 140, 88, 120, 28, 57, 4, 58, 136, 60, 71, 215, 186, 223, 114, 88, 223, 175, 84, 220, 95, 174, 121, 230, 90, 164, 127, 61, 216, 4, 54, 131, 45, 224, 78, 112, 15, 216, 14, 30, 0, 143, 130, 39, 193, 179, 96, 87, 51, 223, 91, 218, 141, 227, 63, 193, 127, 192, 196, 84, 150, 181, 192, 28, 216, 7, 188, 125, 42, 223, 207, 121, 39, 142, 135, 130, 229, 224, 88, 112, 6, 45, 203, 102, 46, 255, 85, 184, 191, 122, 170, 122, 123, 143, 24, 49, 98, 196, 155, 9, 178, 111, 185, 22, 125, 239, 251, 106, 197, 62, 125, 85, 84, 109, 139, 17, 35, 70, 196, 225, 4, 110, 206, 74, 222, 115, 206, 131, 211, 208, 207, 156, 5, 206, 19, 230, 122, 23, 58, 206, 253, 78, 162, 199, 121, 154, 199, 81, 224, 146, 169, 226, 125, 234, 6, 156, 95, 45, 164, 121, 195, 84, 241, 94, 135, 135, 188, 151, 185, 9, 97, 183, 14, 193, 252, 243, 181, 69, 57, 43, 231, 96, 35, 240, 147, 69, 102, 54, 32, 222, 3, 138, 184, 47, 224, 254, 254, 139, 179, 108, 13, 184, 6, 60, 186, 184, 63, 252, 247, 8, 111, 238, 145, 101, 123, 131, 53, 224, 146, 233, 44, 219, 6, 178, 86, 150, 29, 3, 46, 33, 71, 114, 143, 30, 119, 210, 35, 207, 59, 218, 89, 246, 189, 177, 156, 211, 113, 254, 131, 246, 96, 156, 157, 184, 55, 62, 83, 92, 31, 135, 243, 75, 193, 118, 48, 54, 139, 117, 1, 184, 116, 182, 72, 39, 22, 219, 105, 154, 175, 226, 184, 188, 147, 159, 31, 223, 233, 143, 179, 174, 147, 235, 244, 211, 206, 160, 222, 35, 70, 140, 24, 49, 162, 28, 254, 93, 113, 31, 28, 123, 252, 113, 97, 197, 162, 234, 243, 159, 175, 189, 185, 185, 28, 220, 142, 121, 224, 93, 83, 131, 235, 81, 242, 157, 207, 189, 184, 191, 141, 155, 39, 222, 143, 243, 71, 166, 242, 249, 232, 14, 73, 122, 236, 251, 187, 39, 232, 250, 154, 156, 63, 61, 149, 127, 83, 71, 210, 219, 73, 211, 122, 94, 146, 223, 18, 154, 230, 63, 16, 246, 50, 247, 60, 219, 55, 125, 125, 202, 111, 253, 76, 190, 153, 34, 223, 76, 28, 37, 209, 119, 18, 109, 160, 9, 22, 77, 23, 115, 227, 189, 167, 243, 176, 253, 113, 60, 24, 44, 155, 238, 207, 239, 136, 233, 98, 30, 62, 143, 243, 19, 192, 7, 167, 139, 252, 88, 188, 143, 210, 123, 159, 156, 206, 191, 251, 58, 3, 199, 207, 131, 47, 79, 15, 234, 191, 126, 186, 184, 94, 70, 211, 190, 140, 62, 191, 113, 218, 236, 199, 121, 170, 187, 204, 62, 196, 126, 15, 73, 194, 136, 93, 174, 67, 218, 55, 130, 155, 193, 45, 224, 54, 240, 35, 240, 99, 112, 47, 248, 5, 120, 8, 252, 22, 252, 14, 236, 4, 187, 192, 110, 240, 10, 120, 3, 212, 90, 69, 154, 109, 156, 239, 9, 246, 5, 7, 128, 67, 192, 161, 96, 57, 56, 182, 53, 168, 195, 189, 208, 97, 21, 238, 175, 166, 97, 107, 113, 60, 21, 156, 33, 137, 203, 226, 159, 131, 176, 243, 91, 197, 245, 69, 56, 255, 58, 184, 10, 252, 12, 215, 55, 224, 120, 19, 13, 191, 21, 199, 219, 21, 105, 17, 72, 252, 187, 90, 131, 54, 35, 156, 42, 169, 111, 221, 60, 17, 127, 59, 120, 16, 60, 6, 30, 7, 127, 104, 229, 123, 255, 127, 194, 241, 133, 86, 254, 252, 238, 186, 217, 103, 47, 33, 238, 171, 96, 12, 235, 133, 58, 104, 129, 185, 118, 17, 190, 15, 206, 247, 3, 7, 129, 119, 129, 247, 180, 139, 178, 153, 56, 178, 173, 14, 35, 250, 189, 191, 93, 254, 122, 79, 172, 135, 124, 216, 73, 26, 125, 142, 182, 40, 175, 15, 101, 151, 95, 198, 71, 52, 126, 42, 139, 88, 101, 33, 223, 242, 86, 149, 63, 105, 111, 164, 15, 252, 56, 103, 79, 50, 78, 125, 134, 171, 87, 103, 226, 252, 156, 118, 241, 189, 108, 42, 59, 174, 107, 202, 239, 159, 79, 117, 89, 207, 233, 120, 116, 68, 251, 47, 68, 116, 239, 105, 99, 176, 204, 179, 78, 150, 137, 169, 12, 108, 108, 191, 12, 245, 102, 163, 99, 191, 61, 12, 239, 57, 92, 202, 127, 13, 202, 119, 67, 59, 93, 159, 239, 106, 127, 246, 189, 237, 149, 138, 240, 245, 220, 220, 111, 147, 164, 47, 231, 191, 195, 39, 115, 46, 217, 188, 128, 133, 223, 77, 143, 228, 239, 154, 54, 35, 173, 45, 212, 215, 119, 224, 248, 67, 176, 213, 193, 247, 47, 90, 252, 125, 205, 49, 9, 254, 142, 98, 27, 116, 124, 96, 8, 198, 52, 91, 30, 133, 174, 79, 26, 230, 74, 207, 182, 251, 199, 21, 219, 58, 181, 204, 114, 238, 94, 37, 42, 63, 254, 181, 221, 31, 254, 247, 18, 124, 250, 47, 90, 191, 95, 231, 242, 34, 239, 48, 100, 107, 77, 6, 105, 35, 147, 51, 89, 54, 3, 246, 2, 251, 129, 131, 102, 242, 176, 165, 51, 118, 229, 231, 255, 174, 137, 180, 215, 141, 224, 240, 153, 188, 237, 63, 199, 181, 35, 118, 126, 21, 157, 131, 175, 68, 156, 227, 103, 242, 62, 246, 196, 25, 121, 251, 87, 217, 55, 53, 68, 247, 15, 207, 244, 223, 227, 251, 34, 210, 15, 173, 228, 202, 190, 145, 246, 99, 100, 189, 248, 49, 206, 110, 151, 115, 207, 156, 78, 211, 59, 27, 199, 43, 106, 131, 105, 159, 139, 251, 231, 91, 216, 124, 152, 168, 202, 63, 169, 89, 219, 252, 255, 46, 31, 207, 235, 154, 113, 113, 71, 73, 58, 12, 43, 191, 174, 56, 255, 71, 20, 251, 40, 101, 18, 90, 6, 221, 248, 179, 16, 184, 72, 24, 7, 92, 236, 147, 106, 173, 188, 144, 252, 191, 144, 33, 117, 247, 109, 181, 177, 46, 157, 44, 91, 112, 144, 253, 101, 254, 220, 134, 170, 117, 30, 86, 222, 236, 82, 181, 253, 163, 213, 77, 250, 123, 22, 11, 66, 215, 33, 134, 137, 41, 220, 20, 175, 195, 133, 155, 226, 249, 234, 89, 181, 173, 22, 90, 57, 108, 124, 54, 76, 200, 244, 93, 72, 250, 235, 202, 164, 146, 42, 117, 241, 213, 185, 42, 253, 135, 189, 78, 84, 105, 147, 178, 235, 142, 173, 84, 173, 247, 66, 245, 127, 140, 180, 170, 176, 63, 175, 183, 107, 254, 41, 36, 85, 25, 23, 74, 89, 102, 155, 253, 212, 198, 35, 48, 22, 145, 69, 118, 241, 166, 26, 57, 205, 9, 148, 99, 113, 126, 62, 222, 40, 238, 187, 208, 172, 21, 207, 118, 109, 52, 77, 161, 54, 226, 227, 26, 117, 163, 54, 153, 226, 210, 35, 184, 174, 211, 189, 109, 221, 234, 247, 111, 166, 75, 139, 194, 68, 117, 237, 234, 195, 238, 179, 26, 255, 178, 112, 94, 100, 105, 16, 97, 254, 109, 83, 255, 182, 37, 254, 99, 50, 78, 227, 48, 105, 211, 248, 196, 191, 98, 126, 50, 105, 55, 6, 239, 13, 148, 73, 240, 111, 47, 158, 165, 127, 89, 253, 118, 105, 175, 228, 200, 231, 101, 235, 223, 129, 178, 148, 236, 95, 49, 174, 120, 78, 132, 248, 151, 217, 158, 249, 151, 33, 243, 79, 91, 225, 95, 94, 72, 219, 213, 137, 170, 60, 218, 103, 44, 253, 219, 235, 87, 199, 10, 63, 215, 230, 220, 198, 0, 215, 246, 203, 124, 170, 188, 46, 201, 191, 182, 237, 87, 132, 213, 109, 214, 166, 152, 143, 101, 254, 13, 29, 75, 153, 77, 196, 186, 228, 218, 63, 107, 243, 24, 227, 198, 16, 80, 159, 40, 32, 210, 88, 32, 253, 179, 171, 127, 39, 45, 250, 231, 73, 139, 246, 43, 147, 73, 69, 159, 16, 187, 127, 238, 100, 69, 187, 13, 153, 199, 177, 126, 187, 155, 183, 69, 255, 172, 107, 203, 170, 177, 146, 157, 139, 247, 100, 241, 196, 123, 202, 251, 150, 243, 47, 81, 248, 182, 44, 235, 191, 217, 216, 60, 46, 180, 109, 66, 221, 178, 125, 203, 252, 175, 146, 20, 239, 69, 100, 34, 206, 167, 109, 230, 212, 93, 253, 12, 254, 142, 217, 158, 93, 253, 73, 218, 51, 249, 125, 104, 17, 190, 77, 241, 247, 197, 235, 186, 161, 61, 243, 207, 233, 234, 20, 111, 23, 254, 25, 23, 255, 234, 196, 103, 189, 164, 157, 155, 15, 129, 127, 85, 113, 153, 176, 254, 218, 198, 191, 252, 53, 59, 183, 241, 175, 216, 247, 202, 164, 167, 107, 4, 255, 118, 58, 57, 62, 34, 250, 151, 215, 169, 44, 255, 106, 177, 108, 191, 4, 102, 119, 54, 30, 171, 32, 98, 234, 143, 187, 54, 85, 248, 141, 209, 110, 232, 219, 14, 111, 147, 208, 249, 150, 9, 83, 191, 230, 58, 159, 182, 157, 115, 203, 236, 18, 3, 171, 52, 37, 107, 105, 219, 62, 94, 214, 134, 85, 251, 35, 44, 140, 29, 217, 94, 137, 108, 191, 69, 37, 174, 253, 53, 191, 127, 226, 42, 177, 125, 225, 11, 91, 183, 219, 34, 10, 121, 158, 111, 167, 227, 141, 254, 125, 42, 114, 228, 215, 22, 132, 110, 251, 111, 22, 113, 98, 172, 107, 196, 58, 169, 178, 113, 10, 219, 155, 242, 12, 177, 119, 119, 63, 111, 46, 135, 137, 204, 222, 204, 23, 68, 68, 123, 215, 179, 162, 95, 201, 28, 236, 173, 170, 171, 41, 246, 167, 121, 154, 20, 101, 63, 106, 187, 143, 229, 80, 175, 248, 250, 218, 161, 54, 20, 243, 37, 38, 153, 176, 240, 113, 138, 58, 166, 235, 39, 51, 143, 58, 197, 218, 32, 107, 135, 100, 60, 38, 245, 164, 174, 210, 125, 206, 158, 110, 249, 29, 226, 167, 128, 181, 7, 29, 252, 222, 183, 108, 29, 229, 83, 119, 101, 82, 117, 31, 223, 197, 114, 190, 160, 170, 43, 178, 113, 148, 212, 157, 238, 92, 157, 172, 57, 102, 251, 251, 170, 30, 36, 111, 151, 125, 13, 174, 159, 231, 247, 58, 100, 101, 24, 232, 39, 117, 117, 118, 44, 143, 211, 154, 200, 97, 113, 216, 179, 236, 62, 15, 159, 150, 49, 47, 27, 230, 6, 109, 41, 203, 151, 208, 164, 249, 119, 245, 176, 180, 31, 123, 86, 124, 175, 99, 170, 227, 50, 233, 8, 231, 161, 200, 210, 177, 73, 63, 11, 124, 62, 52, 255, 212, 229, 243, 73, 183, 12, 120, 73, 157, 135, 111, 120, 170, 242, 138, 226, 179, 110, 238, 62, 39, 220, 179, 89, 131, 196, 202, 95, 6, 159, 191, 77, 185, 83, 229, 239, 42, 49, 236, 79, 196, 59, 255, 178, 198, 104, 155, 125, 148, 8, 123, 2, 204, 247, 186, 253, 23, 17, 126, 173, 209, 219, 131, 161, 99, 127, 247, 124, 38, 135, 221, 151, 165, 65, 230, 8, 166, 253, 24, 2, 219, 27, 234, 217, 63, 112, 31, 53, 180, 15, 40, 171, 255, 142, 145, 127, 108, 253, 9, 93, 251, 150, 213, 6, 36, 237, 216, 101, 141, 204, 175, 147, 153, 176, 251, 221, 247, 30, 154, 53, 131, 110, 143, 67, 102, 79, 235, 53, 102, 76, 155, 120, 236, 253, 185, 142, 119, 3, 246, 243, 240, 25, 47, 170, 245, 4, 191, 87, 164, 90, 99, 200, 252, 43, 194, 230, 189, 74, 253, 29, 246, 2, 164, 126, 78, 88, 191, 101, 101, 143, 146, 191, 170, 94, 176, 112, 137, 29, 187, 107, 127, 217, 58, 122, 214, 111, 127, 65, 181, 47, 72, 218, 225, 192, 30, 213, 68, 255, 179, 124, 221, 9, 237, 255, 67, 159, 231, 223, 189, 176, 49, 207, 123, 252, 77, 80, 135, 68, 219, 153, 252, 33, 222, 111, 213, 244, 233, 251, 218, 211, 103, 172, 33, 117, 176, 153, 21, 123, 81, 50, 92, 199, 65, 107, 191, 165, 28, 203, 36, 227, 140, 204, 23, 164, 173, 245, 237, 157, 140, 217, 219, 155, 204, 155, 164, 121, 42, 250, 6, 219, 122, 99, 26, 31, 69, 25, 152, 63, 40, 108, 161, 171, 147, 186, 254, 158, 223, 183, 108, 78, 232, 243, 118, 25, 167, 251, 234, 56, 167, 111, 232, 252, 201, 52, 222, 166, 76, 155, 8, 255, 157, 87, 71, 184, 182, 102, 177, 128, 228, 30, 179, 23, 9, 227, 207, 25, 170, 62, 54, 134, 125, 109, 237, 100, 218, 243, 213, 233, 99, 171, 111, 102, 56, 234, 158, 9, 241, 127, 138, 180, 109, 243, 179, 205, 195, 75, 151, 73, 80, 47, 174, 99, 140, 53, 62, 122, 244, 202, 109, 177, 134, 149, 210, 200, 156, 255, 6, 216, 215, 119, 188, 132, 250, 219, 244, 173, 178, 73, 66, 116, 143, 161, 191, 46, 237, 20, 226, 170, 83, 173, 29, 183, 140, 202, 122, 155, 152, 84, 249, 132, 218, 88, 39, 161, 245, 162, 44, 155, 250, 234, 80, 117, 120, 108, 91, 248, 218, 72, 39, 101, 215, 199, 212, 245, 35, 212, 62, 195, 84, 127, 93, 242, 72, 81, 55, 92, 197, 70, 95, 254, 253, 53, 191, 254, 172, 75, 214, 225, 252, 223, 233, 164, 220, 127, 146, 189, 27, 82, 217, 48, 212, 247, 73, 215, 217, 58, 76, 235, 253, 113, 205, 154, 89, 182, 134, 29, 43, 190, 183, 118, 169, 115, 209, 254, 174, 53, 225, 94, 133, 203, 62, 31, 249, 219, 24, 254, 251, 50, 149, 244, 234, 127, 232, 126, 156, 207, 250, 213, 102, 77, 75, 209, 181, 91, 151, 253, 200, 210, 235, 179, 132, 230, 68, 65, 175, 28, 137, 251, 15, 221, 62, 142, 235, 251, 215, 14, 215, 94, 180, 123, 120, 42, 187, 68, 182, 185, 110, 207, 140, 223, 203, 234, 123, 63, 81, 243, 31, 215, 66, 218, 139, 206, 223, 172, 159, 183, 42, 119, 64, 125, 207, 50, 77, 253, 76, 221, 62, 44, 234, 169, 184, 255, 40, 123, 255, 97, 146, 144, 111, 20, 51, 15, 255, 14, 244, 75, 129, 182, 25, 72, 67, 177, 175, 66, 194, 90, 244, 93, 141, 248, 125, 92, 108, 223, 168, 222, 13, 138, 247, 217, 119, 186, 236, 152, 90, 116, 243, 57, 155, 178, 202, 202, 36, 75, 147, 125, 83, 25, 162, 151, 105, 110, 236, 18, 174, 19, 111, 223, 243, 118, 179, 237, 15, 12, 109, 202, 52, 30, 145, 50, 177, 111, 36, 123, 250, 7, 206, 71, 92, 230, 192, 161, 107, 29, 223, 57, 183, 139, 238, 174, 101, 140, 173, 191, 238, 126, 166, 136, 91, 166, 142, 190, 182, 150, 73, 21, 249, 134, 150, 183, 12, 127, 135, 60, 111, 83, 222, 216, 229, 8, 177, 165, 201, 174, 41, 194, 77, 246, 177, 181, 147, 173, 248, 214, 39, 83, 120, 72, 125, 9, 77, 219, 70, 127, 215, 231, 109, 236, 150, 170, 46, 198, 200, 207, 39, 13, 89, 153, 171, 148, 216, 54, 13, 205, 191, 44, 157, 83, 249, 62, 150, 174, 182, 18, 154, 94, 10, 187, 184, 164, 239, 34, 49, 218, 138, 73, 15, 157, 111, 83, 213, 31, 85, 25, 171, 168, 191, 46, 254, 137, 89, 143, 67, 242, 8, 181, 121, 138, 188, 92, 116, 170, 34, 255, 170, 202, 111, 202, 147, 172, 123, 39, 133, 111, 99, 201, 145, 255, 157, 42, 94, 88, 60, 241, 119, 222, 250, 246, 228, 52, 215, 169, 96, 82, 231, 246, 164, 7, 202, 62, 27, 182, 22, 151, 217, 47, 102, 27, 246, 201, 203, 54, 95, 223, 52, 135, 169, 93, 165, 44, 143, 139, 205, 92, 37, 212, 103, 190, 105, 199, 202, 35, 52, 255, 20, 62, 240, 45, 107, 104, 58, 125, 191, 133, 213, 201, 25, 186, 119, 172, 134, 253, 111, 25, 117, 195, 123, 36, 81, 172, 223, 219, 4, 244, 181, 38, 233, 126, 151, 238, 243, 91, 206, 145, 237, 107, 250, 221, 101, 242, 14, 155, 127, 71, 26, 218, 70, 59, 194, 249, 48, 183, 59, 173, 127, 74, 168, 255, 166, 182, 160, 243, 29, 251, 219, 36, 34, 190, 127, 151, 194, 231, 107, 35, 101, 246, 19, 98, 157, 180, 145, 40, 191, 157, 158, 208, 191, 174, 191, 129, 78, 222, 159, 235, 190, 203, 32, 176, 191, 5, 225, 223, 243, 244, 252, 229, 89, 47, 120, 155, 199, 234, 75, 125, 250, 212, 88, 190, 234, 166, 149, 96, 124, 34, 245, 140, 248, 136, 125, 159, 161, 178, 35, 251, 142, 92, 167, 63, 211, 81, 166, 171, 175, 254, 62, 207, 235, 218, 90, 213, 109, 200, 5, 246, 119, 82, 198, 241, 111, 66, 221, 255, 133, 214, 105, 223, 223, 175, 228, 227, 13, 216, 62, 178, 239, 249, 112, 85, 92, 34, 108, 221, 202, 254, 159, 131, 10, 38, 226, 239, 253, 243, 125, 26, 19, 93, 93, 83, 249, 164, 147, 13, 246, 241, 98, 222, 186, 111, 223, 250, 252, 99, 8, 55, 73, 138, 122, 235, 51, 78, 176, 239, 16, 25, 204, 79, 166, 121, 145, 75, 253, 102, 190, 98, 99, 142, 237, 239, 237, 166, 236, 35, 108, 108, 165, 10, 239, 179, 87, 77, 110, 51, 163, 255, 3, 251, 135, 84, 101, 103, 34, 134, 203, 202, 28, 115, 141, 60, 80, 191, 4, 159, 139, 250, 197, 240, 191, 43, 124, 249, 217, 124, 201, 119, 173, 147, 242, 251, 153, 24, 107, 49, 163, 254, 142, 227, 169, 237, 152, 218, 170, 21, 191, 227, 166, 205, 191, 132, 117, 120, 172, 242, 135, 210, 203, 211, 226, 155, 45, 83, 187, 118, 181, 159, 110, 253, 151, 106, 108, 146, 245, 51, 3, 250, 59, 206, 133, 202, 222, 35, 97, 162, 43, 27, 63, 102, 140, 75, 124, 148, 82, 248, 62, 213, 68, 234, 250, 45, 27, 99, 250, 126, 151, 95, 252, 102, 81, 177, 238, 236, 221, 183, 248, 6, 212, 165, 252, 50, 27, 40, 199, 45, 199, 239, 153, 251, 202, 58, 43, 172, 253, 20, 243, 176, 42, 196, 102, 94, 38, 141, 151, 176, 190, 232, 214, 17, 166, 57, 91, 168, 109, 99, 239, 103, 248, 246, 171, 46, 99, 134, 235, 119, 246, 166, 111, 134, 85, 115, 196, 208, 250, 196, 135, 247, 206, 75, 172, 71, 188, 136, 245, 137, 157, 243, 235, 37, 22, 214, 109, 191, 157, 194, 126, 49, 234, 143, 171, 253, 164, 182, 75, 188, 55, 169, 107, 127, 252, 185, 216, 207, 105, 237, 19, 75, 199, 214, 224, 220, 200, 166, 173, 199, 90, 199, 248, 72, 140, 60, 67, 117, 73, 145, 191, 139, 62, 190, 246, 141, 53, 70, 134, 250, 59, 180, 62, 196, 182, 117, 140, 122, 27, 43, 173, 84, 250, 149, 149, 190, 141, 132, 166, 229, 170, 207, 48, 250, 62, 134, 190, 166, 248, 101, 139, 76, 39, 241, 154, 191, 239, 99, 51, 155, 103, 125, 210, 142, 85, 55, 92, 125, 100, 171, 179, 109, 56, 47, 169, 108, 20, 34, 41, 252, 21, 42, 101, 212, 37, 215, 188, 84, 113, 83, 72, 168, 205, 83, 216, 36, 52, 109, 23, 123, 133, 166, 25, 250, 92, 12, 137, 81, 71, 67, 237, 40, 211, 39, 203, 250, 159, 215, 213, 109, 83, 155, 144, 165, 169, 211, 77, 101, 115, 213, 81, 150, 167, 78, 127, 155, 244, 100, 207, 155, 202, 103, 91, 126, 157, 77, 124, 109, 27, 171, 110, 216, 228, 147, 50, 127, 23, 137, 145, 78, 168, 254, 41, 202, 31, 195, 182, 101, 248, 34, 117, 190, 161, 254, 13, 213, 39, 180, 28, 85, 181, 139, 208, 252, 109, 234, 185, 107, 62, 166, 184, 41, 244, 54, 229, 173, 179, 151, 143, 196, 240, 103, 76, 255, 135, 202, 255, 0],
                Ma = ya.decompositions,
                Ga = new(d())(new Uint8Array(La)),
                Ba = new da(ga),
                Ea = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (0, l.Z)(t, e), t.planFeatures = function(e) {
                        e.addStage(Ua), e.addStage(["locl", "ccmp"]), e.addStage(Ya), e.addStage("nukt"), e.addStage("akhn"), e.addStage("rphf", !1), e.addStage("rkrf"), e.addStage("pref", !1), e.addStage("blwf", !1), e.addStage("abvf", !1), e.addStage("half", !1), e.addStage("pstf", !1), e.addStage("vatu"), e.addStage("cjct"), e.addStage("cfar", !1), e.addStage(Wa), e.addStage({
                            local: ["init"],
                            global: ["pres", "abvs", "blws", "psts", "haln", "dist", "abvm", "blwm", "calt", "clig"]
                        }), e.unicodeScript = function(e) {
                            return $r[e]
                        }(e.script), e.indicConfig = Da[e.unicodeScript] || Da.Default, e.isOldSpec = e.indicConfig.hasOldSpec && "2" !== e.script[e.script.length - 1]
                    }, t.assignFeatures = function(e, t) {
                        for (var n = function(n) {
                                var r = t[n].codePoints[0],
                                    i = Ta[r] || Ma[r];
                                if (i) {
                                    var a = i.map((function(r) {
                                        var i = e.font.glyphForCodePoint(r);
                                        return new Xi(e.font, i.id, [r], t[n].features)
                                    }));
                                    t.splice.apply(t, [n, 1].concat(a))
                                }
                            }, r = t.length - 1; r >= 0; r--) n(r)
                    }, t
                }(Di);

            function Ra(e) {
                return Ga.get(e.codePoints[0]) >> 8
            }

            function Va(e) {
                return 1 << (255 & Ga.get(e.codePoints[0]))
            }
            Ea.zeroMarkWidths = "NONE";
            var za = function(e, t, n, r) {
                this.category = e, this.position = t, this.syllableType = n, this.syllable = r
            };

            function Ua(e, t) {
                for (var n, r = 0, i = 0, s = (0, a.Z)(Ba.match(t.map(Ra))); !(n = s()).done;) {
                    var o = n.value,
                        l = o[0],
                        u = o[1],
                        c = o[2];
                    if (l > i) {
                        ++r;
                        for (var h = i; h < l; h++) t[h].shaperInfo = new za(va, Pa.End, "non_indic_cluster", r)
                    }++r;
                    for (var f = l; f <= u; f++) t[f].shaperInfo = new za(1 << Ra(t[f]), Va(t[f]), c[0], r);
                    i = u + 1
                }
                if (i < t.length) {
                    ++r;
                    for (var p = i; p < t.length; p++) t[p].shaperInfo = new za(va, Pa.End, "non_indic_cluster", r)
                }
            }

            function Na(e) {
                return e.shaperInfo.category & Ia
            }

            function Za(e) {
                return e.shaperInfo.category & Oa
            }

            function qa(e) {
                return e.shaperInfo.category & Fa
            }

            function ja(e, t) {
                for (var n, r = (0, a.Z)(e); !(n = r()).done;) {
                    var i;
                    n.value.features = ((i = {})[t] = !0, i)
                }
                return e[0]._font._layoutEngine.engine.GSUBProcessor.applyFeatures([t], e), 1 === e.length
            }

            function Ha(e, t, n) {
                var r = [n, t, n];
                return ja(r.slice(0, 2), "blwf") || ja(r.slice(1, 3), "blwf") ? Pa.Below_C : ja(r.slice(0, 2), "pstf") || ja(r.slice(1, 3), "pstf") || ja(r.slice(0, 2), "pref") || ja(r.slice(1, 3), "pref") ? Pa.Post_C : Pa.Base_C
            }

            function Ya(e, t, n) {
                var r = n.indicConfig,
                    i = e._layoutEngine.engine.GSUBProcessor.features,
                    a = e.glyphForCodePoint(9676).id,
                    s = e.glyphForCodePoint(r.virama).id;
                if (s)
                    for (var o = new Xi(e, s, [r.virama]), l = 0; l < t.length; l++) t[l].shaperInfo.position === Pa.Base_C && (t[l].shaperInfo.position = Ha(0, t[l].copy(), o));
                for (var u = 0, c = Ka(t, 0); u < t.length; c = Ka(t, u = c)) {
                    var h = t[u].shaperInfo;
                    h.category;
                    var f = h.syllableType;
                    if ("symbol_cluster" !== f && "non_indic_cluster" !== f) {
                        if ("broken_cluster" === f && a) {
                            var p = new Xi(e, a, [9676]);
                            p.shaperInfo = new za(1 << Ra(p), Va(p), t[u].shaperInfo.syllableType, t[u].shaperInfo.syllable);
                            for (var d = u; d < c && t[d].shaperInfo.category === xa;) d++;
                            t.splice(d++, 0, p), c++
                        }
                        var g = c,
                            y = u,
                            v = !1;
                        if (r.rephPos !== Pa.Ra_To_Become_Reph && i.rphf && u + 3 <= c && ("Implicit" === r.rephMode && !Za(t[u + 2]) || "Explicit" === r.rephMode && t[u + 2].shaperInfo.category === _a)) {
                            var m = [t[u].copy(), t[u + 1].copy(), t[u + 2].copy()];
                            if (ja(m.slice(0, 2), "rphf") || "Explicit" === r.rephMode && ja(m, "rphf")) {
                                for (y += 2; y < c && Za(t[y]);) y++;
                                g = u, v = !0
                            }
                        } else if ("Log_Repha" === r.rephMode && t[u].shaperInfo.category === xa) {
                            for (y++; y < c && Za(t[y]);) y++;
                            g = u, v = !0
                        }
                        switch (r.basePos) {
                            case "Last":
                                var b = c,
                                    w = !1;
                                do {
                                    var _ = t[--b].shaperInfo;
                                    if (Na(t[b])) {
                                        if (_.position !== Pa.Below_C && (_.position !== Pa.Post_C || w)) {
                                            g = b;
                                            break
                                        }
                                        _.position === Pa.Below_C && (w = !0), g = b
                                    } else if (u < b && _.category === _a && t[b - 1].shaperInfo.category === ba) break
                                } while (b > y);
                                break;
                            case "First":
                                for (var C = (g = u) + 1; C < c; C++) Na(t[C]) && (t[C].shaperInfo.position = Pa.Below_C)
                        }
                        v && g === u && y - g <= 2 && (v = !1);
                        for (var S = u; S < g; S++) {
                            var x = t[S].shaperInfo;
                            x.position = Math.min(Pa.Pre_C, x.position)
                        }
                        g < c && (t[g].shaperInfo.position = Pa.Base_C);
                        for (var k = g + 1; k < c; k++)
                            if (t[k].shaperInfo.category === Ca) {
                                for (var A = k + 1; A < c; A++)
                                    if (Na(t[A])) {
                                        t[A].shaperInfo.position = Pa.Final_C;
                                        break
                                    }
                                break
                            }
                        if (v && (t[u].shaperInfo.position = Pa.Ra_To_Become_Reph), n.isOldSpec)
                            for (var P = "Malayalam" !== n.unicodeScript, I = g + 1; I < c; I++)
                                if (t[I].shaperInfo.category === ba) {
                                    var O = void 0;
                                    for (O = c - 1; O > I && !(Na(t[O]) || P && t[O].shaperInfo.category === ba); O--);
                                    if (t[O].shaperInfo.category !== ba && O > I) {
                                        var F = t[I];
                                        t.splice.apply(t, [I, 0].concat(t.splice(I + 1, O - I))), t[O] = F
                                    }
                                    break
                                }
                        for (var D = Pa.Start, T = u; T < c; T++) {
                            var L = t[T].shaperInfo;
                            if (L.category & (Oa | ma | Sa | Aa | Fa & L.category)) {
                                if (L.position = D, L.category === ba && L.position === Pa.Pre_M)
                                    for (var M = T; M > u; M--)
                                        if (t[M - 1].shaperInfo.position !== Pa.Pre_M) {
                                            L.position = t[M - 1].shaperInfo.position;
                                            break
                                        }
                            } else L.position !== Pa.SMVD && (D = L.position)
                        }
                        for (var G = g, B = g + 1; B < c; B++)
                            if (Na(t[B])) {
                                for (var E = G + 1; E < B; E++) t[E].shaperInfo.position < Pa.SMVD && (t[E].shaperInfo.position = t[B].shaperInfo.position);
                                G = B
                            } else t[B].shaperInfo.category === Ca && (G = B);
                        var R = t.slice(u, c);
                        R.sort((function(e, t) {
                            return e.shaperInfo.position - t.shaperInfo.position
                        })), t.splice.apply(t, [u, R.length].concat(R));
                        for (var V = u; V < c; V++)
                            if (t[V].shaperInfo.position === Pa.Base_C) {
                                g = V;
                                break
                            }
                        for (var z = u; z < c && t[z].shaperInfo.position === Pa.Ra_To_Become_Reph; z++) t[z].features.rphf = !0;
                        for (var U = !n.isOldSpec && "Pre_And_Post" === r.blwfMode, N = u; N < g; N++) t[N].features.half = !0, U && (t[N].features.blwf = !0);
                        for (var Z = g + 1; Z < c; Z++) t[Z].features.abvf = !0, t[Z].features.pstf = !0, t[Z].features.blwf = !0;
                        if (n.isOldSpec && "Devanagari" === n.unicodeScript)
                            for (var q = u; q + 1 < g; q++) t[q].shaperInfo.category !== ka || t[q + 1].shaperInfo.category !== ba || q + 1 !== g && t[q + 2].shaperInfo.category !== _a || (t[q].features.blwf = !0, t[q + 1].features.blwf = !0);
                        if (i.pref && g + 2 < c)
                            for (var j = g + 1; j + 2 - 1 < c; j++) {
                                if (ja([t[j].copy(), t[j + 1].copy()], "pref")) {
                                    for (var H = 0; H < 2; H++) t[j++].features.pref = !0;
                                    if (i.cfar)
                                        for (; j < c; j++) t[j].features.cfar = !0;
                                    break
                                }
                            }
                        for (var Y = u + 1; Y < c; Y++)
                            if (Za(t[Y])) {
                                var W = t[Y].shaperInfo.category === wa,
                                    K = Y;
                                do {
                                    K--, W && delete t[K].features.half
                                } while (K > u && !Na(t[K]))
                            }
                    }
                }
            }

            function Wa(e, t, n) {
                for (var r = n.indicConfig, i = e._layoutEngine.engine.GSUBProcessor.features, a = 0, s = Ka(t, 0); a < t.length; s = Ka(t, a = s)) {
                    for (var o = !!i.pref, l = a; l < s; l++)
                        if (t[l].shaperInfo.position >= Pa.Base_C) {
                            if (o && l + 1 < s)
                                for (var u = l + 1; u < s; u++)
                                    if (t[u].features.pref) {
                                        if (!t[u].substituted || !t[u].isLigated || t[u].isMultiplied) {
                                            for (l = u; l < s && qa(t[l]);) l++;
                                            t[l].shaperInfo.position = Pa.BASE_C, o = !1
                                        }
                                        break
                                    }
                            if ("Malayalam" === n.unicodeScript)
                                for (var c = l + 1; c < s; c++) {
                                    for (; c < s && Za(t[c]);) c++;
                                    if (c === s || !qa(t[c])) break;
                                    for (c++; c < s && Za(t[c]);) c++;
                                    c < s && Na(t[c]) && t[c].shaperInfo.position === Pa.Below_C && (t[l = c].shaperInfo.position = Pa.Base_C)
                                }
                            a < l && t[l].shaperInfo.position > Pa.Base_C && l--;
                            break
                        }
                    if (l === s && a < l && t[l - 1].shaperInfo.category === _a && l--, l < s)
                        for (; a < l && t[l].shaperInfo.category & (ma | Fa);) l--;
                    if (a + 1 < s && a < l) {
                        var h = l === s ? l - 2 : l - 1;
                        if ("Malayalam" !== n.unicodeScript && "Tamil" !== n.unicodeScript) {
                            for (; h > a && !(t[h].shaperInfo.category & (Ca | Fa));) h--;
                            qa(t[h]) && t[h].shaperInfo.position !== Pa.Pre_M ? h + 1 < s && Za(t[h + 1]) && h++ : h = a
                        }
                        if (a < h && t[h].shaperInfo.position !== Pa.Pre_M)
                            for (var p = h; p > a; p--)
                                if (t[p - 1].shaperInfo.position === Pa.Pre_M) {
                                    var d = p - 1;
                                    d < l && l <= h && l--;
                                    var g = t[d];
                                    t.splice.apply(t, [d, 0].concat(t.splice(d + 1, h - d))), t[h] = g, h--
                                }
                    }
                    if (a + 1 < s && t[a].shaperInfo.position === Pa.Ra_To_Become_Reph && t[a].shaperInfo.category === xa !== (t[a].isLigated && !t[a].isMultiplied)) {
                        var y = void 0,
                            v = r.rephPos,
                            m = !1;
                        if (v !== Pa.After_Post) {
                            for (y = a + 1; y < l && !qa(t[y]);) y++;
                            if (y < l && qa(t[y]) && (y + 1 < l && Za(t[y + 1]) && y++, m = !0), !m && v === Pa.After_Main) {
                                for (y = l; y + 1 < s && t[y + 1].shaperInfo.position <= Pa.After_Main;) y++;
                                m = y < s
                            }
                            if (!m && v === Pa.After_Sub) {
                                for (y = l; y + 1 < s && !(t[y + 1].shaperInfo.position & (Pa.Post_C | Pa.After_Post | Pa.SMVD));) y++;
                                m = y < s
                            }
                        }
                        if (!m) {
                            for (y = a + 1; y < l && !qa(t[y]);) y++;
                            y < l && qa(t[y]) && (y + 1 < l && Za(t[y + 1]) && y++, m = !0)
                        }
                        if (!m) {
                            for (y = s - 1; y > a && t[y].shaperInfo.position === Pa.SMVD;) y--;
                            if (qa(t[y]))
                                for (var b = l + 1; b < y; b++) t[b].shaperInfo.category === Ca && y--
                        }
                        var w = t[a];
                        t.splice.apply(t, [a, 0].concat(t.splice(a + 1, y - a))), t[y] = w, a < l && l <= y && l--
                    }
                    if (o && l + 1 < s)
                        for (var _ = l + 1; _ < s; _++)
                            if (t[_].features.pref) {
                                if (t[_].isLigated && !t[_].isMultiplied) {
                                    var C = l;
                                    if ("Malayalam" !== n.unicodeScript && "Tamil" !== n.unicodeScript) {
                                        for (; C > a && !(t[C - 1].shaperInfo.category & (Ca | Fa));) C--;
                                        if (C > a && t[C - 1].shaperInfo.category === Ca)
                                            for (var S = _, x = l + 1; x < S; x++)
                                                if (t[x].shaperInfo.category === Ca) {
                                                    C--;
                                                    break
                                                }
                                    }
                                    C > a && qa(t[C - 1]) && C < s && Za(t[C]) && C++;
                                    var k = _,
                                        A = t[k];
                                    t.splice.apply(t, [C + 1, 0].concat(t.splice(C, k - C))), t[C] = A, C <= l && l < k && l++
                                }
                                break
                            }
                    t[a].shaperInfo.position !== Pa.Pre_M || a && /Cf|Mn/.test(f.default.getCategory(t[a - 1].codePoints[0])) || (t[a].features.init = !0)
                }
            }

            function Ka(e, t) {
                if (t >= e.length) return t;
                for (var n = e[t].shaperInfo.syllable; ++t < e.length && e[t].shaperInfo.syllable === n;);
                return t
            }
            var Xa = [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 186, 16, 1, 5, 14, 250, 241, 237, 156, 123, 140, 95, 69, 21, 199, 103, 119, 187, 251, 123, 109, 119, 187, 22, 90, 160, 188, 31, 166, 165, 8, 69, 154, 24, 164, 49, 16, 32, 209, 148, 38, 106, 67, 20, 249, 195, 214, 7, 54, 98, 176, 65, 141, 141, 74, 104, 136, 134, 2, 18, 9, 134, 80, 99, 132, 26, 163, 149, 52, 245, 25, 80, 99, 64, 249, 3, 72, 5, 77, 138, 68, 65, 5, 21, 35, 1, 81, 132, 72, 72, 197, 196, 248, 29, 239, 156, 252, 206, 206, 158, 121, 222, 215, 22, 126, 39, 249, 100, 238, 99, 158, 231, 204, 204, 157, 153, 59, 247, 174, 154, 80, 234, 20, 176, 22, 156, 3, 46, 4, 27, 193, 102, 112, 185, 185, 118, 94, 5, 238, 22, 176, 13, 108, 7, 59, 60, 254, 118, 130, 93, 194, 245, 27, 193, 173, 96, 55, 216, 3, 190, 13, 190, 7, 238, 1, 247, 25, 30, 100, 254, 127, 1, 30, 5, 191, 3, 79, 11, 241, 61, 5, 158, 1, 171, 192, 11, 38, 111, 171, 204, 253, 85, 140, 87, 192, 33, 160, 150, 40, 213, 5, 203, 192, 10, 112, 60, 120, 35, 56, 19, 172, 7, 27, 192, 69, 224, 18, 240, 110, 240, 62, 240, 1, 240, 81, 176, 29, 236, 0, 59, 193, 46, 112, 11, 216, 13, 238, 4, 123, 193, 126, 112, 55, 184, 23, 60, 0, 30, 6, 191, 6, 191, 7, 127, 1, 207, 130, 23, 193, 33, 160, 38, 149, 234, 128, 89, 176, 18, 156, 0, 78, 5, 103, 76, 22, 121, 95, 15, 247, 60, 112, 161, 57, 223, 8, 119, 51, 184, 28, 108, 1, 219, 192, 199, 193, 167, 205, 253, 107, 225, 126, 1, 220, 12, 110, 3, 95, 155, 28, 150, 253, 155, 147, 243, 117, 81, 150, 253, 136, 239, 251, 21, 199, 201, 249, 177, 21, 247, 125, 56, 127, 16, 252, 10, 252, 6, 60, 53, 89, 148, 247, 25, 240, 2, 120, 5, 252, 55, 144, 159, 169, 41, 165, 102, 192, 10, 176, 106, 170, 8, 127, 10, 220, 53, 224, 108, 112, 174, 185, 118, 1, 220, 119, 128, 119, 129, 203, 166, 10, 221, 106, 182, 226, 248, 67, 224, 99, 224, 147, 224, 115, 224, 243, 38, 204, 77, 198, 253, 50, 220, 175, 130, 27, 88, 186, 223, 192, 249, 190, 41, 127, 222, 126, 16, 184, 31, 195, 79, 16, 199, 253, 224, 0, 56, 8, 158, 48, 229, 210, 247, 158, 132, 251, 87, 240, 15, 240, 178, 185, 246, 42, 220, 241, 14, 234, 32, 88, 218, 9, 199, 127, 36, 252, 28, 215, 41, 226, 60, 17, 238, 106, 112, 22, 88, 15, 214, 153, 180, 54, 224, 248, 12, 19, 215, 219, 140, 95, 205, 197, 236, 152, 179, 9, 215, 47, 5, 151, 89, 247, 183, 58, 252, 19, 31, 49, 105, 159, 205, 244, 230, 243, 207, 253, 229, 162, 227, 248, 48, 210, 188, 10, 92, 13, 118, 116, 226, 227, 223, 105, 233, 247, 76, 193, 207, 46, 248, 185, 5, 236, 238, 20, 245, 109, 15, 139, 127, 169, 71, 31, 123, 113, 111, 63, 184, 27, 220, 235, 176, 163, 212, 254, 31, 232, 12, 203, 245, 8, 142, 31, 3, 127, 0, 79, 155, 180, 244, 241, 223, 204, 241, 99, 1, 123, 84, 161, 223, 17, 35, 94, 143, 140, 218, 207, 136, 17, 35, 70, 140, 24, 49, 98, 196, 136, 215, 2, 235, 58, 195, 53, 129, 27, 34, 252, 255, 147, 205, 93, 255, 101, 205, 99, 191, 24, 17, 254, 63, 8, 51, 209, 45, 214, 97, 6, 112, 151, 131, 21, 224, 56, 112, 154, 185, 254, 38, 184, 235, 187, 133, 255, 13, 112, 207, 7, 111, 7, 239, 52, 247, 223, 11, 119, 11, 216, 102, 206, 183, 195, 221, 1, 118, 118, 221, 233, 106, 127, 187, 60, 247, 71, 140, 24, 49, 98, 68, 189, 156, 211, 50, 109, 151, 127, 196, 136, 17, 245, 80, 119, 251, 254, 18, 198, 143, 183, 119, 139, 247, 66, 119, 192, 253, 150, 48, 158, 252, 78, 183, 120, 183, 175, 143, 239, 177, 238, 223, 183, 8, 198, 159, 127, 159, 46, 152, 94, 170, 212, 37, 224, 145, 233, 48, 59, 225, 239, 231, 150, 95, 53, 51, 60, 94, 141, 227, 45, 96, 15, 120, 28, 28, 50, 247, 86, 207, 98, 140, 62, 59, 244, 183, 3, 199, 123, 160, 131, 63, 129, 19, 123, 8, 3, 246, 244, 138, 177, 252, 29, 83, 133, 251, 176, 57, 231, 12, 250, 240, 55, 54, 100, 99, 127, 161, 159, 155, 112, 109, 31, 187, 254, 60, 142, 215, 14, 148, 186, 18, 236, 3, 207, 131, 181, 211, 237, 63, 127, 218, 38, 212, 94, 30, 132, 238, 14, 152, 122, 122, 16, 238, 227, 198, 94, 122, 158, 248, 108, 55, 253, 121, 186, 223, 184, 103, 70, 250, 231, 188, 152, 145, 158, 212, 39, 72, 225, 95, 70, 220, 175, 118, 231, 251, 163, 252, 238, 247, 164, 55, 142, 250, 217, 3, 115, 189, 97, 217, 180, 191, 163, 112, 126, 108, 175, 56, 63, 185, 55, 244, 127, 122, 111, 126, 62, 98, 251, 171, 88, 91, 186, 202, 247, 230, 158, 124, 239, 173, 184, 190, 1, 92, 4, 54, 130, 205, 224, 61, 224, 73, 115, 255, 253, 56, 190, 2, 92, 5, 174, 54, 247, 63, 3, 174, 3, 55, 130, 91, 193, 237, 44, 238, 59, 113, 188, 23, 236, 3, 63, 4, 63, 5, 247, 131, 3, 224, 160, 144, 7, 61, 15, 127, 2, 215, 255, 108, 238, 233, 253, 52, 207, 225, 248, 37, 193, 47, 249, 255, 55, 238, 141, 245, 135, 231, 61, 28, 207, 129, 163, 251, 197, 249, 73, 253, 98, 111, 137, 190, 191, 6, 199, 103, 247, 221, 58, 211, 254, 207, 237, 203, 58, 115, 233, 253, 2, 248, 191, 24, 108, 2, 151, 130, 203, 192, 86, 147, 246, 182, 126, 209, 102, 98, 237, 182, 29, 254, 63, 5, 174, 1, 215, 129, 235, 193, 205, 44, 63, 183, 225, 248, 43, 224, 235, 224, 46, 240, 93, 86, 182, 16, 63, 242, 148, 251, 81, 228, 241, 103, 253, 118, 158, 57, 46, 93, 63, 20, 200, 207, 98, 234, 43, 171, 212, 65, 27, 233, 255, 178, 63, 63, 222, 131, 70, 247, 191, 133, 251, 199, 126, 185, 124, 198, 150, 227, 105, 79, 187, 179, 211, 191, 171, 226, 242, 47, 198, 250, 85, 133, 253, 203, 212, 147, 182, 203, 151, 90, 254, 231, 250, 205, 230, 219, 183, 143, 106, 175, 89, 55, 127, 169, 95, 184, 135, 224, 42, 140, 49, 167, 6, 197, 249, 244, 96, 232, 247, 136, 129, 92, 54, 186, 191, 166, 35, 151, 171, 238, 250, 31, 34, 180, 151, 44, 102, 175, 217, 202, 65, 225, 30, 15, 247, 180, 193, 225, 81, 239, 108, 253, 135, 238, 159, 46, 216, 55, 20, 239, 67, 194, 216, 118, 177, 17, 219, 239, 220, 208, 96, 94, 206, 26, 204, 191, 118, 77, 70, 254, 207, 153, 136, 171, 135, 186, 14, 191, 133, 181, 99, 189, 191, 115, 3, 206, 207, 31, 20, 237, 127, 29, 219, 111, 121, 177, 241, 55, 48, 249, 219, 4, 247, 210, 65, 177, 239, 246, 114, 184, 31, 20, 234, 136, 175, 237, 172, 142, 216, 203, 153, 139, 206, 251, 149, 131, 249, 215, 248, 222, 213, 231, 80, 55, 175, 232, 12, 203, 254, 9, 227, 126, 22, 238, 93, 157, 97, 254, 79, 101, 97, 174, 53, 126, 174, 135, 123, 179, 16, 247, 173, 184, 182, 59, 177, 157, 180, 205, 49, 19, 99, 106, 49, 200, 24, 99, 220, 58, 231, 126, 200, 157, 96, 247, 151, 68, 98, 199, 167, 28, 215, 234, 150, 197, 161, 241, 145, 144, 80, 93, 26, 23, 32, 91, 141, 11, 225, 198, 45, 119, 210, 64, 18, 83, 183, 234, 174, 11, 19, 53, 199, 95, 181, 76, 181, 157, 129, 18, 18, 99, 203, 215, 83, 219, 151, 218, 204, 235, 73, 198, 28, 44, 6, 177, 243, 193, 251, 188, 195, 93, 164, 49, 131, 125, 124, 184, 72, 110, 157, 145, 198, 82, 57, 246, 181, 245, 119, 56, 233, 176, 169, 118, 23, 27, 119, 138, 238, 171, 110, 135, 220, 246, 174, 126, 41, 196, 107, 93, 92, 243, 14, 126, 191, 10, 187, 228, 234, 159, 242, 212, 97, 96, 26, 27, 61, 255, 169, 154, 30, 48, 75, 130, 255, 63, 215, 199, 211, 198, 93, 106, 209, 179, 232, 91, 204, 176, 176, 84, 198, 89, 166, 179, 30, 139, 43, 54, 127, 228, 63, 103, 158, 168, 74, 232, 101, 130, 217, 166, 27, 25, 151, 178, 252, 217, 231, 169, 132, 194, 42, 53, 63, 29, 201, 63, 73, 140, 125, 73, 166, 13, 246, 185, 182, 111, 76, 31, 210, 23, 174, 185, 202, 100, 167, 157, 170, 163, 80, 123, 166, 251, 84, 39, 248, 220, 142, 183, 63, 95, 218, 190, 178, 228, 228, 57, 213, 190, 161, 99, 45, 3, 227, 74, 246, 181, 133, 218, 175, 125, 62, 99, 249, 155, 85, 126, 137, 169, 143, 161, 48, 46, 180, 93, 150, 169, 162, 29, 210, 252, 119, 78, 165, 61, 195, 98, 237, 235, 179, 73, 74, 158, 171, 178, 111, 110, 251, 37, 155, 242, 62, 90, 169, 249, 253, 115, 85, 82, 182, 253, 210, 88, 54, 148, 6, 127, 78, 46, 99, 40, 117, 248, 244, 207, 169, 246, 165, 103, 107, 78, 255, 28, 18, 187, 237, 219, 58, 176, 243, 153, 107, 223, 113, 53, 191, 124, 185, 162, 109, 28, 122, 150, 75, 229, 112, 233, 92, 242, 171, 4, 255, 46, 127, 174, 116, 164, 235, 177, 117, 136, 11, 181, 85, 62, 190, 226, 50, 173, 230, 219, 159, 159, 199, 182, 111, 233, 249, 236, 146, 156, 114, 72, 107, 176, 161, 181, 9, 222, 150, 187, 230, 60, 181, 253, 165, 228, 55, 167, 61, 167, 234, 65, 159, 251, 198, 203, 74, 45, 236, 171, 249, 121, 200, 158, 52, 158, 150, 244, 96, 75, 217, 246, 236, 147, 208, 51, 153, 250, 2, 110, 227, 152, 177, 188, 84, 174, 166, 236, 235, 242, 75, 98, 247, 215, 117, 216, 87, 106, 255, 182, 216, 121, 45, 99, 223, 55, 24, 114, 132, 143, 181, 82, 158, 199, 85, 183, 191, 28, 200, 30, 100, 79, 27, 174, 211, 80, 255, 187, 92, 201, 125, 28, 159, 255, 199, 216, 180, 206, 246, 74, 98, 175, 149, 72, 235, 38, 41, 246, 204, 201, 91, 213, 182, 140, 141, 83, 169, 249, 121, 137, 205, 175, 212, 102, 121, 93, 161, 186, 68, 54, 91, 202, 252, 76, 59, 240, 213, 135, 84, 157, 82, 62, 114, 214, 250, 218, 104, 123, 62, 219, 244, 216, 53, 123, 237, 73, 26, 23, 147, 140, 43, 127, 220, 58, 124, 71, 45, 156, 91, 116, 204, 189, 178, 251, 17, 108, 125, 42, 203, 205, 173, 179, 57, 58, 140, 137, 155, 252, 196, 234, 91, 159, 207, 177, 176, 190, 114, 145, 216, 250, 86, 204, 77, 41, 191, 203, 191, 22, 251, 157, 127, 46, 227, 204, 181, 199, 172, 174, 49, 109, 213, 246, 211, 113, 78, 90, 46, 205, 123, 37, 137, 181, 113, 157, 216, 194, 215, 140, 93, 107, 200, 54, 52, 134, 224, 231, 29, 53, 92, 3, 246, 149, 247, 136, 4, 84, 162, 255, 58, 208, 18, 154, 43, 77, 122, 238, 241, 240, 174, 122, 44, 181, 9, 73, 234, 174, 27, 41, 72, 207, 82, 205, 180, 146, 235, 139, 94, 167, 212, 117, 102, 198, 92, 59, 18, 172, 80, 69, 31, 53, 151, 152, 182, 189, 47, 141, 142, 67, 121, 117, 189, 215, 152, 83, 243, 243, 209, 87, 195, 49, 149, 29, 71, 87, 128, 199, 101, 151, 61, 71, 183, 115, 106, 56, 22, 161, 120, 164, 116, 187, 70, 175, 75, 132, 124, 248, 160, 176, 100, 191, 54, 246, 35, 72, 117, 188, 237, 119, 163, 161, 118, 94, 133, 158, 248, 94, 183, 42, 165, 14, 29, 229, 62, 95, 236, 107, 188, 127, 168, 59, 125, 9, 158, 126, 138, 142, 170, 78, 63, 85, 170, 208, 191, 106, 56, 253, 80, 222, 180, 240, 231, 134, 52, 118, 117, 205, 193, 8, 26, 127, 244, 213, 112, 236, 161, 159, 193, 43, 85, 49, 254, 154, 100, 208, 26, 142, 62, 182, 219, 136, 253, 28, 38, 91, 165, 150, 191, 46, 241, 245, 129, 77, 244, 139, 250, 185, 90, 117, 29, 72, 209, 41, 175, 27, 246, 120, 131, 176, 199, 106, 92, 142, 50, 204, 178, 99, 155, 163, 77, 60, 147, 66, 120, 187, 175, 79, 221, 223, 80, 117, 187, 41, 91, 247, 114, 211, 205, 13, 111, 195, 215, 169, 202, 230, 143, 75, 236, 115, 187, 110, 234, 172, 3, 212, 14, 104, 45, 138, 247, 83, 117, 214, 75, 26, 163, 235, 246, 181, 210, 112, 140, 146, 231, 73, 51, 44, 111, 174, 246, 202, 231, 152, 212, 174, 165, 62, 94, 90, 255, 33, 168, 189, 242, 54, 59, 153, 80, 38, 151, 148, 13, 31, 26, 183, 214, 61, 166, 229, 58, 210, 118, 106, 122, 207, 154, 126, 246, 74, 115, 66, 123, 93, 65, 178, 53, 61, 167, 235, 232, 143, 66, 235, 72, 49, 172, 2, 199, 26, 215, 69, 234, 220, 161, 45, 59, 113, 120, 27, 150, 250, 24, 106, 203, 51, 204, 95, 221, 245, 198, 94, 171, 39, 151, 250, 159, 152, 119, 110, 90, 108, 91, 187, 202, 110, 247, 65, 124, 189, 96, 165, 135, 227, 12, 186, 239, 161, 189, 93, 174, 180, 83, 250, 103, 46, 49, 253, 78, 172, 148, 157, 91, 243, 254, 69, 251, 159, 117, 64, 126, 164, 235, 93, 79, 56, 105, 47, 155, 116, 141, 242, 171, 227, 163, 247, 161, 180, 31, 65, 211, 198, 183, 88, 210, 248, 49, 36, 199, 131, 19, 216, 249, 132, 131, 88, 251, 216, 235, 97, 169, 246, 77, 89, 127, 137, 185, 158, 26, 183, 253, 172, 76, 9, 167, 229, 196, 136, 50, 166, 72, 142, 77, 41, 156, 61, 62, 105, 66, 58, 97, 47, 94, 145, 214, 172, 165, 107, 41, 241, 197, 132, 11, 173, 157, 75, 174, 148, 78, 74, 190, 202, 150, 163, 202, 245, 210, 148, 252, 248, 198, 20, 33, 155, 249, 236, 235, 10, 87, 5, 82, 57, 235, 72, 199, 55, 214, 138, 145, 212, 248, 234, 202, 111, 89, 63, 117, 234, 179, 141, 116, 115, 108, 25, 35, 109, 151, 161, 233, 242, 134, 164, 77, 91, 164, 164, 95, 103, 221, 77, 201, 199, 68, 205, 121, 246, 233, 221, 30, 35, 150, 213, 95, 21, 250, 111, 66, 66, 105, 53, 161, 255, 166, 236, 156, 163, 239, 170, 109, 147, 243, 238, 193, 53, 47, 112, 197, 25, 90, 47, 115, 133, 207, 45, 67, 206, 220, 66, 242, 175, 50, 226, 74, 153, 143, 133, 164, 201, 126, 167, 137, 250, 222, 180, 62, 36, 225, 246, 201, 205, 91, 110, 185, 234, 234, 67, 67, 229, 173, 202, 14, 174, 120, 154, 174, 7, 177, 210, 84, 251, 41, 91, 214, 182, 242, 80, 214, 38, 139, 161, 111, 168, 178, 191, 181, 227, 77, 245, 75, 235, 184, 246, 190, 48, 233, 189, 71, 204, 183, 85, 101, 224, 107, 220, 180, 198, 158, 171, 251, 216, 112, 85, 151, 33, 245, 121, 42, 237, 215, 107, 18, 189, 231, 81, 250, 118, 197, 133, 174, 23, 49, 107, 122, 84, 254, 156, 247, 11, 92, 92, 239, 91, 83, 113, 165, 227, 26, 59, 73, 109, 130, 35, 237, 65, 230, 239, 12, 82, 203, 31, 131, 253, 222, 210, 126, 151, 201, 223, 3, 233, 125, 36, 41, 223, 107, 82, 217, 219, 124, 87, 107, 67, 239, 224, 92, 123, 122, 233, 61, 173, 222, 11, 160, 235, 241, 73, 106, 248, 175, 137, 220, 113, 111, 110, 125, 245, 217, 155, 246, 69, 212, 173, 175, 216, 52, 164, 253, 15, 252, 29, 56, 93, 179, 247, 67, 199, 8, 79, 103, 101, 68, 94, 168, 174, 74, 225, 99, 244, 111, 219, 177, 106, 29, 242, 245, 12, 254, 60, 209, 247, 232, 253, 94, 149, 237, 164, 199, 92, 178, 131, 109, 55, 87, 56, 234, 231, 200, 109, 82, 114, 244, 175, 235, 26, 175, 123, 125, 37, 63, 55, 105, 143, 126, 140, 240, 248, 165, 111, 226, 249, 190, 189, 49, 19, 119, 93, 223, 73, 214, 33, 246, 120, 230, 228, 146, 196, 174, 49, 248, 36, 102, 77, 66, 186, 23, 242, 235, 74, 199, 231, 143, 230, 142, 117, 140, 175, 165, 124, 140, 43, 191, 206, 164, 117, 163, 148, 52, 236, 107, 74, 201, 186, 110, 74, 236, 250, 103, 143, 177, 125, 115, 237, 42, 210, 171, 107, 238, 148, 35, 139, 101, 253, 160, 204, 28, 86, 178, 95, 153, 185, 112, 83, 101, 118, 73, 93, 235, 18, 77, 216, 184, 238, 58, 93, 119, 252, 49, 250, 208, 207, 78, 251, 27, 108, 223, 183, 32, 228, 143, 246, 106, 133, 198, 107, 246, 121, 93, 144, 232, 57, 202, 64, 45, 220, 107, 167, 37, 180, 119, 52, 102, 44, 81, 245, 154, 125, 221, 237, 179, 206, 119, 11, 135, 75, 30, 154, 78, 51, 165, 156, 124, 206, 66, 251, 20, 155, 104, 47, 246, 28, 198, 181, 31, 219, 245, 189, 119, 104, 94, 111, 203, 41, 37, 105, 98, 30, 112, 170, 106, 255, 95, 174, 210, 127, 1, 237, 61, 207, 90, 247, 186, 127, 147, 198, 237, 210, 26, 91, 91, 72, 245, 74, 250, 246, 155, 238, 209, 119, 223, 42, 33, 13, 105, 189, 33, 118, 239, 119, 74, 58, 49, 216, 54, 105, 58, 125, 223, 63, 37, 125, 237, 88, 135, 93, 110, 80, 106, 161, 78, 105, 239, 58, 217, 42, 119, 125, 78, 154, 99, 86, 173, 3, 74, 43, 86, 170, 76, 51, 215, 102, 246, 123, 22, 251, 191, 8, 218, 70, 244, 191, 76, 87, 127, 75, 239, 0, 98, 242, 40, 249, 43, 171, 139, 148, 240, 190, 246, 81, 117, 93, 72, 65, 235, 208, 215, 255, 18, 3, 229, 30, 31, 151, 173, 163, 185, 255, 95, 83, 158, 243, 170, 109, 105, 167, 229, 242, 67, 227, 112, 94, 207, 237, 111, 119, 120, 63, 93, 230, 127, 168, 74, 249, 251, 124, 87, 187, 35, 241, 189, 171, 82, 1, 127, 41, 82, 71, 189, 77, 233, 247, 237, 247, 134, 84, 215, 200, 78, 92, 164, 126, 38, 165, 14, 241, 254, 62, 229, 219, 203, 178, 101, 165, 49, 6, 255, 86, 139, 254, 9, 64, 229, 165, 49, 148, 157, 215, 144, 148, 109, 223, 117, 149, 157, 68, 250, 15, 130, 93, 230, 152, 57, 108, 46, 118, 158, 203, 254, 23, 222, 213, 110, 83, 234, 58, 47, 127, 207, 202, 111, 170, 148, 181, 127, 142, 78, 171, 148, 20, 93, 243, 127, 120, 133, 158, 137, 118, 123, 170, 34, 253, 178, 144, 232, 119, 165, 250, 189, 233, 105, 42, 252, 79, 42, 187, 108, 101, 243, 207, 237, 56, 158, 17, 222, 215, 230, 165, 177, 162, 221, 206, 83, 243, 159, 91, 206, 170, 251, 49, 187, 13, 211, 120, 136, 230, 43, 84, 54, 62, 94, 104, 66, 150, 168, 133, 255, 40, 144, 144, 254, 33, 86, 53, 147, 38, 29, 123, 60, 162, 245, 164, 231, 114, 115, 22, 174, 111, 62, 233, 122, 204, 56, 203, 87, 126, 169, 95, 182, 243, 188, 220, 193, 209, 137, 80, 57, 151, 169, 133, 107, 81, 75, 148, 251, 121, 228, 170, 243, 77, 244, 71, 190, 255, 30, 240, 181, 119, 187, 77, 243, 118, 109, 247, 41, 109, 172, 55, 112, 73, 29, 23, 198, 198, 93, 230, 95, 140, 190, 251, 212, 215, 243, 61, 141, 41, 227, 248, 216, 122, 20, 242, 91, 6, 87, 127, 195, 165, 199, 92, 126, 76, 101, 229, 235, 57, 244, 191, 235, 152, 61, 69, 57, 117, 36, 38, 188, 114, 28, 215, 217, 22, 125, 255, 121, 87, 74, 30, 63, 86, 165, 159, 16, 19, 106, 225, 191, 54, 98, 218, 122, 155, 239, 80, 171, 24, 171, 214, 53, 254, 173, 243, 221, 79, 91, 239, 177, 104, 76, 233, 179, 219, 152, 227, 122, 19, 82, 231, 60, 38, 86, 236, 189, 42, 169, 123, 48, 154, 218, 159, 208, 196, 30, 149, 152, 248, 155, 42, 243, 98, 220, 239, 33, 137, 148, 70, 91, 237, 169, 170, 114, 199, 232, 51, 69, 247, 116, 92, 247, 218, 133, 84, 142, 170, 227, 40, 27, 231, 98, 108, 23, 101, 227, 168, 178, 125, 214, 213, 214, 171, 212, 91, 217, 188, 248, 164, 238, 116, 203, 228, 205, 151, 191, 166, 164, 201, 250, 149, 147, 126, 85, 249, 207, 13, 95, 85, 250, 49, 233, 148, 213, 115, 200, 111, 29, 249, 78, 73, 191, 142, 184, 109, 73, 177, 157, 36, 185, 245, 192, 37, 255, 3],
                Ja = ya.categories,
                Qa = ya.decompositions,
                $a = new(d())(new Uint8Array(Xa)),
                es = new da(ya),
                ts = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (0, l.Z)(t, e), t.planFeatures = function(e) {
                        e.addStage(is), e.addStage(["locl", "ccmp", "nukt", "akhn"]), e.addStage(as), e.addStage(["rphf"], !1), e.addStage(ss), e.addStage(as), e.addStage(["pref"]), e.addStage(os), e.addStage(["rkrf", "abvf", "blwf", "half", "pstf", "vatu", "cjct"]), e.addStage(ls), e.addStage(["abvs", "blws", "pres", "psts", "dist", "abvm", "blwm"])
                    }, t.assignFeatures = function(e, t) {
                        for (var n = function(n) {
                                var r = t[n].codePoints[0];
                                if (Qa[r]) {
                                    var i = Qa[r].map((function(r) {
                                        var i = e.font.glyphForCodePoint(r);
                                        return new Xi(e.font, i.id, [r], t[n].features)
                                    }));
                                    t.splice.apply(t, [n, 1].concat(i))
                                }
                            }, r = t.length - 1; r >= 0; r--) n(r)
                    }, t
                }(Di);

            function ns(e) {
                return $a.get(e.codePoints[0])
            }
            ts.zeroMarkWidths = "BEFORE_GPOS";
            var rs = function(e, t, n) {
                this.category = e, this.syllableType = t, this.syllable = n
            };

            function is(e, t) {
                for (var n, r = 0, i = (0, a.Z)(es.match(t.map(ns))); !(n = i()).done;) {
                    var s = n.value,
                        o = s[0],
                        l = s[1],
                        u = s[2];
                    ++r;
                    for (var c = o; c <= l; c++) t[c].shaperInfo = new rs(Ja[ns(t[c])], u[0], r);
                    for (var h = "R" === t[o].shaperInfo.category ? 1 : Math.min(3, l - o), f = o; f < o + h; f++) t[f].features.rphf = !0
                }
            }

            function as(e, t) {
                for (var n, r = (0, a.Z)(t); !(n = r()).done;) {
                    n.value.substituted = !1
                }
            }

            function ss(e, t) {
                for (var n, r = (0, a.Z)(t); !(n = r()).done;) {
                    var i = n.value;
                    i.substituted && i.features.rphf && (i.shaperInfo.category = "R")
                }
            }

            function os(e, t) {
                for (var n, r = (0, a.Z)(t); !(n = r()).done;) {
                    var i = n.value;
                    i.substituted && (i.shaperInfo.category = "VPre")
                }
            }

            function ls(e, t) {
                for (var n = e.glyphForCodePoint(9676).id, r = 0, i = us(t, 0); r < t.length; i = us(t, r = i)) {
                    var a = void 0,
                        s = void 0,
                        o = t[r].shaperInfo,
                        l = o.syllableType;
                    if ("virama_terminated_cluster" === l || "standard_cluster" === l || "broken_cluster" === l) {
                        if ("broken_cluster" === l && n) {
                            var u = new Xi(e, n, [9676]);
                            for (u.shaperInfo = o, a = r; a < i && "R" === t[a].shaperInfo.category; a++);
                            t.splice(++a, 0, u), i++
                        }
                        if ("R" === o.category && i - r > 1)
                            for (a = r + 1; a < i; a++)
                                if (hs(o = t[a].shaperInfo) || cs(t[a])) {
                                    cs(t[a]) && a--, t.splice.apply(t, [r, 0].concat(t.splice(r + 1, a - r), [t[a]]));
                                    break
                                }
                        for (a = r, s = i; a < i; a++) hs(o = t[a].shaperInfo) || cs(t[a]) ? s = cs(t[a]) ? a + 1 : a : ("VPre" === o.category || "VMPre" === o.category) && s < a && t.splice.apply(t, [s, 1, t[a]].concat(t.splice(s, a - s)))
                    }
                }
            }

            function us(e, t) {
                if (t >= e.length) return t;
                for (var n = e[t].shaperInfo.syllable; ++t < e.length && e[t].shaperInfo.syllable === n;);
                return t
            }

            function cs(e) {
                return "H" === e.shaperInfo.category && !e.isLigated
            }

            function hs(e) {
                return "B" === e.category || "GB" === e.category
            }
            var fs = {
                arab: ji,
                mong: ji,
                syrc: ji,
                "nko ": ji,
                phag: ji,
                mand: ji,
                mani: ji,
                phlp: ji,
                hang: Ji,
                bng2: Ea,
                beng: Ea,
                dev2: Ea,
                deva: Ea,
                gjr2: Ea,
                gujr: Ea,
                guru: Ea,
                gur2: Ea,
                knda: Ea,
                knd2: Ea,
                mlm2: Ea,
                mlym: Ea,
                ory2: Ea,
                orya: Ea,
                taml: Ea,
                tml2: Ea,
                telu: Ea,
                tel2: Ea,
                khmr: Ea,
                bali: ts,
                batk: ts,
                brah: ts,
                bugi: ts,
                buhd: ts,
                cakm: ts,
                cham: ts,
                dupl: ts,
                egyp: ts,
                gran: ts,
                hano: ts,
                java: ts,
                kthi: ts,
                kali: ts,
                khar: ts,
                khoj: ts,
                sind: ts,
                lepc: ts,
                limb: ts,
                mahj: ts,
                mtei: ts,
                modi: ts,
                hmng: ts,
                rjng: ts,
                saur: ts,
                shrd: ts,
                sidd: ts,
                sinh: ts,
                sund: ts,
                sylo: ts,
                tglg: ts,
                tagb: ts,
                tale: ts,
                lana: ts,
                tavt: ts,
                takr: ts,
                tibt: ts,
                tfng: ts,
                tirh: ts,
                latn: Di,
                DFLT: Di
            };
            for (var ps = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (0, l.Z)(t, e), t.prototype.applyLookup = function(e, t) {
                        var n = this;
                        switch (e) {
                            case 1:
                                var r = this.coverageIndex(t.coverage);
                                if (-1 === r) return !1;
                                var i = this.glyphIterator.cur;
                                switch (t.version) {
                                    case 1:
                                        i.id = i.id + t.deltaGlyphID & 65535;
                                        break;
                                    case 2:
                                        i.id = t.substitute.get(r)
                                }
                                return !0;
                            case 2:
                                var s = this.coverageIndex(t.coverage);
                                if (-1 !== s) {
                                    var o, l = t.sequences.get(s);
                                    if (0 === l.length) return this.glyphs.splice(this.glyphIterator.index, 1), !0;
                                    this.glyphIterator.cur.id = l[0], this.glyphIterator.cur.ligatureComponent = 0;
                                    var u = this.glyphIterator.cur.features,
                                        c = this.glyphIterator.cur,
                                        h = l.slice(1).map((function(e, t) {
                                            var r = new Xi(n.font, e, void 0, u);
                                            return r.shaperInfo = c.shaperInfo, r.isLigated = c.isLigated, r.ligatureComponent = t + 1, r.substituted = !0, r.isMultiplied = !0, r
                                        }));
                                    return (o = this.glyphs).splice.apply(o, [this.glyphIterator.index + 1, 0].concat(h)), !0
                                }
                                return !1;
                            case 3:
                                var f = this.coverageIndex(t.coverage);
                                if (-1 !== f) {
                                    return this.glyphIterator.cur.id = t.alternateSet.get(f)[0], !0
                                }
                                return !1;
                            case 4:
                                var p = this.coverageIndex(t.coverage);
                                if (-1 === p) return !1;
                                for (var d, g = (0, a.Z)(t.ligatureSets.get(p)); !(d = g()).done;) {
                                    var y = d.value,
                                        v = this.sequenceMatchIndices(1, y.components);
                                    if (v) {
                                        for (var m, b = this.glyphIterator.cur, w = b.codePoints.slice(), _ = (0, a.Z)(v); !(m = _()).done;) {
                                            var C = m.value;
                                            w.push.apply(w, this.glyphs[C].codePoints)
                                        }
                                        var S = new Xi(this.font, y.glyph, w, b.features);
                                        S.shaperInfo = b.shaperInfo, S.isLigated = !0, S.substituted = !0;
                                        for (var x = b.isMark, k = 0; k < v.length && x; k++) x = this.glyphs[v[k]].isMark;
                                        S.ligatureID = x ? null : this.ligatureID++;
                                        for (var A, P = b.ligatureID, I = b.codePoints.length, O = I, F = this.glyphIterator.index + 1, D = (0, a.Z)(v); !(A = D()).done;) {
                                            var T = A.value;
                                            if (x) F = T;
                                            else
                                                for (; F < T;) {
                                                    var L = O - I + Math.min(this.glyphs[F].ligatureComponent || 1, I);
                                                    this.glyphs[F].ligatureID = S.ligatureID, this.glyphs[F].ligatureComponent = L, F++
                                                }
                                            P = this.glyphs[F].ligatureID, O += I = this.glyphs[F].codePoints.length, F++
                                        }
                                        if (P && !x)
                                            for (var M = F; M < this.glyphs.length && this.glyphs[M].ligatureID === P; M++) {
                                                L = O - I + Math.min(this.glyphs[M].ligatureComponent || 1, I);
                                                this.glyphs[M].ligatureComponent = L
                                            }
                                        for (var G = v.length - 1; G >= 0; G--) this.glyphs.splice(v[G], 1);
                                        return this.glyphs[this.glyphIterator.index] = S, !0
                                    }
                                }
                                return !1;
                            case 5:
                                return this.applyContext(t);
                            case 6:
                                return this.applyChainingContext(t);
                            case 7:
                                return this.applyLookup(t.lookupType, t.extension);
                            default:
                                throw new Error("GSUB lookupType " + e + " is not supported")
                        }
                    }, t
                }(Ki), ds = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n.applyPositionValue = function(e, t) {
                        var n = this.positions[this.glyphIterator.peekIndex(e)];
                        null != t.xAdvance && (n.xAdvance += t.xAdvance), null != t.yAdvance && (n.yAdvance += t.yAdvance), null != t.xPlacement && (n.xOffset += t.xPlacement), null != t.yPlacement && (n.yOffset += t.yPlacement);
                        var r = this.font._variationProcessor,
                            i = this.font.GDEF && this.font.GDEF.itemVariationStore;
                        r && i && (t.xPlaDevice && (n.xOffset += r.getDelta(i, t.xPlaDevice.a, t.xPlaDevice.b)), t.yPlaDevice && (n.yOffset += r.getDelta(i, t.yPlaDevice.a, t.yPlaDevice.b)), t.xAdvDevice && (n.xAdvance += r.getDelta(i, t.xAdvDevice.a, t.xAdvDevice.b)), t.yAdvDevice && (n.yAdvance += r.getDelta(i, t.yAdvDevice.a, t.yAdvDevice.b)))
                    }, n.applyLookup = function(e, t) {
                        switch (e) {
                            case 1:
                                var n = this.coverageIndex(t.coverage);
                                if (-1 === n) return !1;
                                switch (t.version) {
                                    case 1:
                                        this.applyPositionValue(0, t.value);
                                        break;
                                    case 2:
                                        this.applyPositionValue(0, t.values.get(n))
                                }
                                return !0;
                            case 2:
                                var r = this.glyphIterator.peek();
                                if (!r) return !1;
                                var i = this.coverageIndex(t.coverage);
                                if (-1 === i) return !1;
                                switch (t.version) {
                                    case 1:
                                        for (var s, o = t.pairSets.get(i), l = (0, a.Z)(o); !(s = l()).done;) {
                                            var u = s.value;
                                            if (u.secondGlyph === r.id) return this.applyPositionValue(0, u.value1), this.applyPositionValue(1, u.value2), !0
                                        }
                                        return !1;
                                    case 2:
                                        var c = this.getClassID(this.glyphIterator.cur.id, t.classDef1),
                                            h = this.getClassID(r.id, t.classDef2);
                                        if (-1 === c || -1 === h) return !1;
                                        var f = t.classRecords.get(c).get(h);
                                        return this.applyPositionValue(0, f.value1), this.applyPositionValue(1, f.value2), !0
                                }
                            case 3:
                                var p = this.glyphIterator.peekIndex(),
                                    d = this.glyphs[p];
                                if (!d) return !1;
                                var g = t.entryExitRecords[this.coverageIndex(t.coverage)];
                                if (!g || !g.exitAnchor) return !1;
                                var y = t.entryExitRecords[this.coverageIndex(t.coverage, d.id)];
                                if (!y || !y.entryAnchor) return !1;
                                var v = this.getAnchor(y.entryAnchor),
                                    m = this.getAnchor(g.exitAnchor),
                                    b = this.positions[this.glyphIterator.index],
                                    w = this.positions[p];
                                switch (this.direction) {
                                    case "ltr":
                                        b.xAdvance = m.x + b.xOffset;
                                        var _ = v.x + w.xOffset;
                                        w.xAdvance -= _, w.xOffset -= _;
                                        break;
                                    case "rtl":
                                        _ = m.x + b.xOffset, b.xAdvance -= _, b.xOffset -= _, w.xAdvance = v.x + w.xOffset
                                }
                                return this.glyphIterator.flags.rightToLeft ? (this.glyphIterator.cur.cursiveAttachment = p, b.yOffset = v.y - m.y) : (d.cursiveAttachment = this.glyphIterator.index, b.yOffset = m.y - v.y), !0;
                            case 4:
                                var C = this.coverageIndex(t.markCoverage);
                                if (-1 === C) return !1;
                                for (var S = this.glyphIterator.index; --S >= 0 && (this.glyphs[S].isMark || this.glyphs[S].ligatureComponent > 0););
                                if (S < 0) return !1;
                                var x = this.coverageIndex(t.baseCoverage, this.glyphs[S].id);
                                if (-1 === x) return !1;
                                var k = t.markArray[C],
                                    A = t.baseArray[x][k.class];
                                return this.applyAnchor(k, A, S), !0;
                            case 5:
                                var P = this.coverageIndex(t.markCoverage);
                                if (-1 === P) return !1;
                                for (var I = this.glyphIterator.index; --I >= 0 && this.glyphs[I].isMark;);
                                if (I < 0) return !1;
                                var O = this.coverageIndex(t.ligatureCoverage, this.glyphs[I].id);
                                if (-1 === O) return !1;
                                var F = t.ligatureArray[O],
                                    D = this.glyphIterator.cur,
                                    T = this.glyphs[I],
                                    L = T.ligatureID && T.ligatureID === D.ligatureID && D.ligatureComponent > 0 ? Math.min(D.ligatureComponent, T.codePoints.length) - 1 : T.codePoints.length - 1,
                                    M = t.markArray[P],
                                    G = F[L][M.class];
                                return this.applyAnchor(M, G, I), !0;
                            case 6:
                                var B = this.coverageIndex(t.mark1Coverage);
                                if (-1 === B) return !1;
                                var E = this.glyphIterator.peekIndex(-1),
                                    R = this.glyphs[E];
                                if (!R || !R.isMark) return !1;
                                var V = this.glyphIterator.cur,
                                    z = !1;
                                if (V.ligatureID === R.ligatureID ? V.ligatureID ? V.ligatureComponent === R.ligatureComponent && (z = !0) : z = !0 : (V.ligatureID && !V.ligatureComponent || R.ligatureID && !R.ligatureComponent) && (z = !0), !z) return !1;
                                var U = this.coverageIndex(t.mark2Coverage, R.id);
                                if (-1 === U) return !1;
                                var N = t.mark1Array[B],
                                    Z = t.mark2Array[U][N.class];
                                return this.applyAnchor(N, Z, E), !0;
                            case 7:
                                return this.applyContext(t);
                            case 8:
                                return this.applyChainingContext(t);
                            case 9:
                                return this.applyLookup(t.lookupType, t.extension);
                            default:
                                throw new Error("Unsupported GPOS table: " + e)
                        }
                    }, n.applyAnchor = function(e, t, n) {
                        var r = this.getAnchor(t),
                            i = this.getAnchor(e.markAnchor);
                        this.positions[n];
                        var a = this.positions[this.glyphIterator.index];
                        a.xOffset = r.x - i.x, a.yOffset = r.y - i.y, this.glyphIterator.cur.markAttachment = n
                    }, n.getAnchor = function(e) {
                        var t = e.xCoordinate,
                            n = e.yCoordinate,
                            r = this.font._variationProcessor,
                            i = this.font.GDEF && this.font.GDEF.itemVariationStore;
                        return r && i && (e.xDeviceTable && (t += r.getDelta(i, e.xDeviceTable.a, e.xDeviceTable.b)), e.yDeviceTable && (n += r.getDelta(i, e.yDeviceTable.a, e.yDeviceTable.b))), {
                            x: t,
                            y: n
                        }
                    }, n.applyFeatures = function(t, n, r) {
                        e.prototype.applyFeatures.call(this, t, n, r);
                        for (var i = 0; i < this.glyphs.length; i++) this.fixCursiveAttachment(i);
                        this.fixMarkAttachment()
                    }, n.fixCursiveAttachment = function(e) {
                        var t = this.glyphs[e];
                        if (null != t.cursiveAttachment) {
                            var n = t.cursiveAttachment;
                            t.cursiveAttachment = null, this.fixCursiveAttachment(n), this.positions[e].yOffset += this.positions[n].yOffset
                        }
                    }, n.fixMarkAttachment = function() {
                        for (var e = 0; e < this.glyphs.length; e++) {
                            var t = this.glyphs[e];
                            if (null != t.markAttachment) {
                                var n = t.markAttachment;
                                if (this.positions[e].xOffset += this.positions[n].xOffset, this.positions[e].yOffset += this.positions[n].yOffset, "ltr" === this.direction)
                                    for (var r = n; r < e; r++) this.positions[e].xOffset -= this.positions[r].xAdvance, this.positions[e].yOffset -= this.positions[r].yAdvance;
                                else
                                    for (var i = n + 1; i < e + 1; i++) this.positions[e].xOffset += this.positions[i].xAdvance, this.positions[e].yOffset += this.positions[i].yAdvance
                            }
                        }
                    }, t
                }(Ki), gs = function() {
                    function e(e) {
                        this.font = e, this.glyphInfos = null, this.plan = null, this.GSUBProcessor = null, this.GPOSProcessor = null, this.fallbackPosition = !0, e.GSUB && (this.GSUBProcessor = new ps(e, e.GSUB)), e.GPOS && (this.GPOSProcessor = new ds(e, e.GPOS))
                    }
                    var t = e.prototype;
                    return t.setup = function(e) {
                        var t = this;
                        this.glyphInfos = e.glyphs.map((function(e) {
                            return new Xi(t.font, e.id, [].concat(e.codePoints))
                        }));
                        var n = null;
                        for (var r in this.GPOSProcessor && (n = this.GPOSProcessor.selectScript(e.script, e.language, e.direction)), this.GSUBProcessor && (n = this.GSUBProcessor.selectScript(e.script, e.language, e.direction)), this.shaper = function(e) {
                                Array.isArray(e) || (e = [e]);
                                for (var t, n = (0, a.Z)(e); !(t = n()).done;) {
                                    var r = t.value,
                                        i = fs[r];
                                    if (i) return i
                                }
                                return Di
                            }(n), this.plan = new ki(this.font, n, e.direction), this.shaper.plan(this.plan, this.glyphInfos, e.features), this.plan.allFeatures) e.features[r] = !0
                    }, t.substitute = function(e) {
                        var t = this;
                        this.GSUBProcessor && (this.plan.process(this.GSUBProcessor, this.glyphInfos), e.glyphs = this.glyphInfos.map((function(e) {
                            return t.font.getGlyph(e.id, e.codePoints)
                        })))
                    }, t.position = function(e) {
                        return "BEFORE_GPOS" === this.shaper.zeroMarkWidths && this.zeroMarkAdvances(e.positions), this.GPOSProcessor && this.plan.process(this.GPOSProcessor, this.glyphInfos, e.positions), "AFTER_GPOS" === this.shaper.zeroMarkWidths && this.zeroMarkAdvances(e.positions), "rtl" === e.direction && (e.glyphs.reverse(), e.positions.reverse()), this.GPOSProcessor && this.GPOSProcessor.features
                    }, t.zeroMarkAdvances = function(e) {
                        for (var t = 0; t < this.glyphInfos.length; t++) this.glyphInfos[t].isMark && (e[t].xAdvance = 0, e[t].yAdvance = 0)
                    }, t.cleanup = function() {
                        this.glyphInfos = null, this.plan = null, this.shaper = null
                    }, t.getAvailableFeatures = function(e, t) {
                        var n = [];
                        return this.GSUBProcessor && (this.GSUBProcessor.selectScript(e, t), n.push.apply(n, Object.keys(this.GSUBProcessor.features))), this.GPOSProcessor && (this.GPOSProcessor.selectScript(e, t), n.push.apply(n, Object.keys(this.GPOSProcessor.features))), n
                    }, e
                }(), ys = function() {
                    function e(e) {
                        this.font = e, this.unicodeLayoutEngine = null, this.kernProcessor = null, this.font.morx ? this.engine = new xi(this.font) : (this.font.GSUB || this.font.GPOS) && (this.engine = new gs(this.font))
                    }
                    var t = e.prototype;
                    return t.layout = function(e, t, n, r, i) {
                        if ("string" === typeof t && (i = r, r = n, n = t, t = []), "string" === typeof e) {
                            null == n && (n = function(e) {
                                for (var t = e.length, n = 0; n < t;) {
                                    var r = e.charCodeAt(n++);
                                    if (55296 <= r && r <= 56319 && n < t) {
                                        var i = e.charCodeAt(n);
                                        56320 <= i && i <= 57343 && (n++, r = ((1023 & r) << 10) + (1023 & i) + 65536)
                                    }
                                    var a = f.default.getScript(r);
                                    if ("Common" !== a && "Inherited" !== a && "Unknown" !== a) return Qr[a]
                                }
                                return Qr.Unknown
                            }(e));
                            var s = this.font.glyphsForString(e)
                        } else {
                            if (null == n) {
                                for (var o, l = [], u = (0, a.Z)(e); !(o = u()).done;) {
                                    var c = o.value;
                                    l.push.apply(l, c.codePoints)
                                }
                                n = function(e) {
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t],
                                            r = f.default.getScript(n);
                                        if ("Common" !== r && "Inherited" !== r && "Unknown" !== r) return Qr[r]
                                    }
                                    return Qr.Unknown
                                }(l)
                            }
                            s = e
                        }
                        var h = new oi(s, t, n, r, i);
                        return 0 === s.length ? (h.positions = [], h) : (this.engine && this.engine.setup && this.engine.setup(h), this.substitute(h), this.position(h), this.hideDefaultIgnorables(h.glyphs, h.positions), this.engine && this.engine.cleanup && this.engine.cleanup(), h)
                    }, t.substitute = function(e) {
                        this.engine && this.engine.substitute && this.engine.substitute(e)
                    }, t.position = function(e) {
                        e.positions = e.glyphs.map((function(e) {
                            return new li(e.advanceWidth)
                        }));
                        var t = null;
                        this.engine && this.engine.position && (t = this.engine.position(e)), t || this.engine && !this.engine.fallbackPosition || (this.unicodeLayoutEngine || (this.unicodeLayoutEngine = new Xr(this.font)), this.unicodeLayoutEngine.positionGlyphs(e.glyphs, e.positions)), t && t.kern || !1 === e.features.kern || !this.font.kern || (this.kernProcessor || (this.kernProcessor = new Kr(this.font)), this.kernProcessor.process(e.glyphs, e.positions), e.features.kern = !0)
                    }, t.hideDefaultIgnorables = function(e, t) {
                        for (var n = this.font.glyphForCodePoint(32), r = 0; r < e.length; r++) this.isDefaultIgnorable(e[r].codePoints[0]) && (e[r] = n, t[r].xAdvance = 0, t[r].yAdvance = 0)
                    }, t.isDefaultIgnorable = function(e) {
                        var t = e >> 16;
                        if (0 === t) switch (e >> 8) {
                            case 0:
                                return 173 === e;
                            case 3:
                                return 847 === e;
                            case 6:
                                return 1564 === e;
                            case 23:
                                return 6068 <= e && e <= 6069;
                            case 24:
                                return 6155 <= e && e <= 6158;
                            case 32:
                                return 8203 <= e && e <= 8207 || 8234 <= e && e <= 8238 || 8288 <= e && e <= 8303;
                            case 254:
                                return 65024 <= e && e <= 65039 || 65279 === e;
                            case 255:
                                return 65520 <= e && e <= 65528;
                            default:
                                return !1
                        } else switch (t) {
                            case 1:
                                return 113824 <= e && e <= 113827 || 119155 <= e && e <= 119162;
                            case 14:
                                return 917504 <= e && e <= 921599;
                            default:
                                return !1
                        }
                    }, t.getAvailableFeatures = function(e, t) {
                        var n = [];
                        return this.engine && n.push.apply(n, this.engine.getAvailableFeatures(e, t)), this.font.kern && -1 === n.indexOf("kern") && n.push("kern"), n
                    }, t.stringsForGlyph = function(e) {
                        for (var t, n = new Set, r = this.font._cmapProcessor.codePointsForGlyph(e), i = (0, a.Z)(r); !(t = i()).done;) {
                            var s = t.value;
                            n.add(String.fromCodePoint(s))
                        }
                        if (this.engine && this.engine.stringsForGlyph)
                            for (var o, l = (0, a.Z)(this.engine.stringsForGlyph(e)); !(o = l()).done;) {
                                var u = o.value;
                                n.add(u)
                            }
                        return Array.from(n)
                    }, e
                }(), vs = {
                    moveTo: "M",
                    lineTo: "L",
                    quadraticCurveTo: "Q",
                    bezierCurveTo: "C",
                    closePath: "Z"
                }, ms = function() {
                    function e() {
                        this.commands = [], this._bbox = null, this._cbox = null
                    }
                    var t = e.prototype;
                    return t.toFunction = function() {
                        var e = this;
                        return function(t) {
                            e.commands.forEach((function(e) {
                                return t[e.command].apply(t, e.args)
                            }))
                        }
                    }, t.toSVG = function() {
                        return this.commands.map((function(e) {
                            var t = e.args.map((function(e) {
                                return Math.round(100 * e) / 100
                            }));
                            return "" + vs[e.command] + t.join(" ")
                        })).join("")
                    }, t.mapPoints = function(t) {
                        for (var n, r = new e, i = (0, a.Z)(this.commands); !(n = i()).done;) {
                            for (var s = n.value, o = [], l = 0; l < s.args.length; l += 2) {
                                var u = t(s.args[l], s.args[l + 1]),
                                    c = u[0],
                                    h = u[1];
                                o.push(c, h)
                            }
                            r[s.command].apply(r, o)
                        }
                        return r
                    }, t.transform = function(e, t, n, r, i, a) {
                        return this.mapPoints((function(s, o) {
                            return [s = e * s + n * o + i, o = t * s + r * o + a]
                        }))
                    }, t.translate = function(e, t) {
                        return this.transform(1, 0, 0, 1, e, t)
                    }, t.rotate = function(e) {
                        var t = Math.cos(e),
                            n = Math.sin(e);
                        return this.transform(t, n, -n, t, 0, 0)
                    }, t.scale = function(e, t) {
                        return void 0 === t && (t = e), this.transform(e, 0, 0, t, 0, 0)
                    }, (0, s.Z)(e, [{
                        key: "cbox",
                        get: function() {
                            if (!this._cbox) {
                                for (var e, t = new Jr, n = (0, a.Z)(this.commands); !(e = n()).done;)
                                    for (var r = e.value, i = 0; i < r.args.length; i += 2) t.addPoint(r.args[i], r.args[i + 1]);
                                this._cbox = Object.freeze(t)
                            }
                            return this._cbox
                        }
                    }, {
                        key: "bbox",
                        get: function() {
                            if (this._bbox) return this._bbox;
                            for (var e, t = new Jr, n = 0, r = 0, i = function(e) {
                                    return Math.pow(1 - e, 3) * _[k] + 3 * Math.pow(1 - e, 2) * e * C[k] + 3 * (1 - e) * Math.pow(e, 2) * S[k] + Math.pow(e, 3) * x[k]
                                }, s = (0, a.Z)(this.commands); !(e = s()).done;) {
                                var o = e.value;
                                switch (o.command) {
                                    case "moveTo":
                                    case "lineTo":
                                        var l = o.args,
                                            u = l[0],
                                            c = l[1];
                                        t.addPoint(u, c), n = u, r = c;
                                        break;
                                    case "quadraticCurveTo":
                                    case "bezierCurveTo":
                                        if ("quadraticCurveTo" === o.command) var h = o.args,
                                            f = h[0],
                                            p = h[1],
                                            d = n + 2 / 3 * (f - n),
                                            g = r + 2 / 3 * (p - r),
                                            y = (b = h[2]) + 2 / 3 * (f - b),
                                            v = (w = h[3]) + 2 / 3 * (p - w);
                                        else var m = o.args,
                                            b = (d = m[0], g = m[1], y = m[2], v = m[3], m[4]),
                                            w = m[5];
                                        t.addPoint(b, w);
                                        for (var _ = [n, r], C = [d, g], S = [y, v], x = [b, w], k = 0; k <= 1; k++) {
                                            var A = 6 * _[k] - 12 * C[k] + 6 * S[k],
                                                P = -3 * _[k] + 9 * C[k] - 9 * S[k] + 3 * x[k];
                                            if (o = 3 * C[k] - 3 * _[k], 0 !== P) {
                                                var I = Math.pow(A, 2) - 4 * o * P;
                                                if (!(I < 0)) {
                                                    var O = (-A + Math.sqrt(I)) / (2 * P);
                                                    0 < O && O < 1 && (0 === k ? t.addPoint(i(O), t.maxY) : 1 === k && t.addPoint(t.maxX, i(O)));
                                                    var F = (-A - Math.sqrt(I)) / (2 * P);
                                                    0 < F && F < 1 && (0 === k ? t.addPoint(i(F), t.maxY) : 1 === k && t.addPoint(t.maxX, i(F)))
                                                }
                                            } else {
                                                if (0 === A) continue;
                                                var D = -o / A;
                                                0 < D && D < 1 && (0 === k ? t.addPoint(i(D), t.maxY) : 1 === k && t.addPoint(t.maxX, i(D)))
                                            }
                                        }
                                        n = b, r = w
                                }
                            }
                            return this._bbox = Object.freeze(t)
                        }
                    }]), e
                }(), bs = function() {
                    var e = _s[ws];
                    ms.prototype[e] = function() {
                        this._bbox = this._cbox = null;
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return this.commands.push({
                            command: e,
                            args: n
                        }), this
                    }
                }, ws = 0, _s = ["moveTo", "lineTo", "quadraticCurveTo", "bezierCurveTo", "closePath"]; ws < _s.length; ws++) bs();
            var Cs, Ss, xs = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"],
                ks = (Cs = function() {
                    function e(e, t, n) {
                        this.id = e, this.codePoints = t, this._font = n, this.isMark = this.codePoints.length > 0 && this.codePoints.every(f.default.isMark), this.isLigature = this.codePoints.length > 1
                    }
                    var t = e.prototype;
                    return t._getPath = function() {
                        return new ms
                    }, t._getCBox = function() {
                        return this.path.cbox
                    }, t._getBBox = function() {
                        return this.path.bbox
                    }, t._getTableMetrics = function(e) {
                        if (this.id < e.metrics.length) return e.metrics.get(this.id);
                        var t = e.metrics.get(e.metrics.length - 1);
                        return {
                            advance: t ? t.advance : 0,
                            bearing: e.bearings.get(this.id - e.metrics.length) || 0
                        }
                    }, t._getMetrics = function(e) {
                        if (this._metrics) return this._metrics;
                        var t, n = this._getTableMetrics(this._font.hmtx),
                            r = n.advance,
                            i = n.bearing;
                        if (this._font.vmtx) var a = this._getTableMetrics(this._font.vmtx),
                            s = a.advance,
                            o = a.bearing;
                        else if ("undefined" !== typeof e && null !== e || (e = this.cbox), (t = this._font["OS/2"]) && t.version > 0) s = Math.abs(t.typoAscender - t.typoDescender), o = t.typoAscender - e.maxY;
                        else {
                            var l = this._font.hhea;
                            s = Math.abs(l.ascent - l.descent), o = l.ascent - e.maxY
                        }
                        return this._font._variationProcessor && this._font.HVAR && (r += this._font._variationProcessor.getAdvanceAdjustment(this.id, this._font.HVAR)), this._metrics = {
                            advanceWidth: r,
                            advanceHeight: s,
                            leftBearing: i,
                            topBearing: o
                        }
                    }, t.getScaledPath = function(e) {
                        var t = 1 / this._font.unitsPerEm * e;
                        return this.path.scale(t)
                    }, t._getName = function() {
                        var e = this._font.post;
                        if (!e) return null;
                        switch (e.version) {
                            case 1:
                                return xs[this.id];
                            case 2:
                                var t = e.glyphNameIndex[this.id];
                                return t < xs.length ? xs[t] : e.names[t - xs.length];
                            case 2.5:
                                return xs[this.id + e.offsets[this.id]];
                            case 4:
                                return String.fromCharCode(e.map[this.id])
                        }
                    }, t.render = function(e, t) {
                        e.save();
                        var n = 1 / this._font.head.unitsPerEm * t;
                        e.scale(n, n), this.path.toFunction()(e), e.fill(), e.restore()
                    }, (0, s.Z)(e, [{
                        key: "cbox",
                        get: function() {
                            return this._getCBox()
                        }
                    }, {
                        key: "bbox",
                        get: function() {
                            return this._getBBox()
                        }
                    }, {
                        key: "path",
                        get: function() {
                            return this._getPath()
                        }
                    }, {
                        key: "advanceWidth",
                        get: function() {
                            return this._getMetrics().advanceWidth
                        }
                    }, {
                        key: "advanceHeight",
                        get: function() {
                            return this._getMetrics().advanceHeight
                        }
                    }, {
                        key: "ligatureCaretPositions",
                        get: function() {}
                    }, {
                        key: "name",
                        get: function() {
                            return this._getName()
                        }
                    }]), e
                }(), (0, o.Z)(Cs.prototype, "cbox", [x], Object.getOwnPropertyDescriptor(Cs.prototype, "cbox"), Cs.prototype), (0, o.Z)(Cs.prototype, "bbox", [x], Object.getOwnPropertyDescriptor(Cs.prototype, "bbox"), Cs.prototype), (0, o.Z)(Cs.prototype, "path", [x], Object.getOwnPropertyDescriptor(Cs.prototype, "path"), Cs.prototype), (0, o.Z)(Cs.prototype, "advanceWidth", [x], Object.getOwnPropertyDescriptor(Cs.prototype, "advanceWidth"), Cs.prototype), (0, o.Z)(Cs.prototype, "advanceHeight", [x], Object.getOwnPropertyDescriptor(Cs.prototype, "advanceHeight"), Cs.prototype), (0, o.Z)(Cs.prototype, "name", [x], Object.getOwnPropertyDescriptor(Cs.prototype, "name"), Cs.prototype), Cs),
                As = new(i().Struct)({
                    numberOfContours: i().int16,
                    xMin: i().int16,
                    yMin: i().int16,
                    xMax: i().int16,
                    yMax: i().int16
                }),
                Ps = function() {
                    function e(e, t, n, r) {
                        void 0 === n && (n = 0), void 0 === r && (r = 0), this.onCurve = e, this.endContour = t, this.x = n, this.y = r
                    }
                    return e.prototype.copy = function() {
                        return new e(this.onCurve, this.endContour, this.x, this.y)
                    }, e
                }(),
                Is = function(e, t, n) {
                    this.glyphID = e, this.dx = t, this.dy = n, this.pos = 0, this.scaleX = this.scaleY = 1, this.scale01 = this.scale10 = 0
                },
                Os = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n._getCBox = function(e) {
                        if (this._font._variationProcessor && !e) return this.path.cbox;
                        var t = this._font._getTableStream("glyf");
                        t.pos += this._font.loca.offsets[this.id];
                        var n = As.decode(t),
                            r = new Jr(n.xMin, n.yMin, n.xMax, n.yMax);
                        return Object.freeze(r)
                    }, n._parseGlyphCoord = function(e, t, n, r) {
                        if (n) {
                            var i = e.readUInt8();
                            r || (i = -i), i += t
                        } else if (r) i = t;
                        else i = t + e.readInt16BE();
                        return i
                    }, n._decode = function() {
                        var e = this._font.loca.offsets[this.id];
                        if (e === this._font.loca.offsets[this.id + 1]) return null;
                        var t = this._font._getTableStream("glyf");
                        t.pos += e;
                        var n = t.pos,
                            r = As.decode(t);
                        return r.numberOfContours > 0 ? this._decodeSimple(r, t) : r.numberOfContours < 0 && this._decodeComposite(r, t, n), r
                    }, n._decodeSimple = function(e, t) {
                        e.points = [];
                        var n = new(i().Array)(i().uint16, e.numberOfContours).decode(t);
                        e.instructions = new(i().Array)(i().uint8, i().uint16).decode(t);
                        for (var r = [], a = n[n.length - 1] + 1; r.length < a;) {
                            var s = t.readUInt8();
                            if (r.push(s), 8 & s)
                                for (var o = t.readUInt8(), l = 0; l < o; l++) r.push(s)
                        }
                        for (var u = 0; u < r.length; u++) {
                            s = r[u];
                            var c = new Ps(!!(1 & s), n.indexOf(u) >= 0, 0, 0);
                            e.points.push(c)
                        }
                        var h = 0;
                        for (u = 0; u < r.length; u++) {
                            s = r[u];
                            e.points[u].x = h = this._parseGlyphCoord(t, h, 2 & s, 16 & s)
                        }
                        var f = 0;
                        for (u = 0; u < r.length; u++) {
                            s = r[u];
                            e.points[u].y = f = this._parseGlyphCoord(t, f, 4 & s, 32 & s)
                        }
                        if (this._font._variationProcessor) {
                            var p = e.points.slice();
                            p.push.apply(p, this._getPhantomPoints(e)), this._font._variationProcessor.transformPoints(this.id, p), e.phantomPoints = p.slice(-4)
                        }
                    }, n._decodeComposite = function(e, t, n) {
                        void 0 === n && (n = 0), e.components = [];
                        for (var r = !1, i = 32; 32 & i;) {
                            i = t.readUInt16BE();
                            var a = t.pos - n,
                                s = t.readUInt16BE();
                            if (r || (r = 0 !== (256 & i)), 1 & i) var o = t.readInt16BE(),
                                l = t.readInt16BE();
                            else o = t.readInt8(), l = t.readInt8();
                            (h = new Is(s, o, l)).pos = a, 8 & i ? h.scaleX = h.scaleY = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824 : 64 & i ? (h.scaleX = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824, h.scaleY = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824) : 128 & i && (h.scaleX = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824, h.scale01 = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824, h.scale10 = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824, h.scaleY = (t.readUInt8() << 24 | t.readUInt8() << 16) / 1073741824), e.components.push(h)
                        }
                        if (this._font._variationProcessor) {
                            for (var u = [], c = 0; c < e.components.length; c++) {
                                var h = e.components[c];
                                u.push(new Ps(!0, !0, h.dx, h.dy))
                            }
                            u.push.apply(u, this._getPhantomPoints(e)), this._font._variationProcessor.transformPoints(this.id, u), e.phantomPoints = u.splice(-4, 4);
                            for (var f = 0; f < u.length; f++) {
                                var p = u[f];
                                e.components[f].dx = p.x, e.components[f].dy = p.y
                            }
                        }
                        return r
                    }, n._getPhantomPoints = function(e) {
                        var t = this._getCBox(!0);
                        null == this._metrics && (this._metrics = ks.prototype._getMetrics.call(this, t));
                        var n = this._metrics,
                            r = n.advanceWidth,
                            i = n.advanceHeight,
                            a = n.leftBearing,
                            s = n.topBearing;
                        return [new Ps(!1, !0, e.xMin - a, 0), new Ps(!1, !0, e.xMin - a + r, 0), new Ps(!1, !0, 0, e.yMax + s), new Ps(!1, !0, 0, e.yMax + s + i)]
                    }, n._getContours = function() {
                        var e = this._decode();
                        if (!e) return [];
                        var t = [];
                        if (e.numberOfContours < 0)
                            for (var n, r = (0, a.Z)(e.components); !(n = r()).done;)
                                for (var i = n.value, s = this._font.getGlyph(i.glyphID)._getContours(), o = 0; o < s.length; o++)
                                    for (var l = s[o], u = 0; u < l.length; u++) {
                                        var c = l[u],
                                            h = c.x * i.scaleX + c.y * i.scale01 + i.dx,
                                            f = c.y * i.scaleY + c.x * i.scale10 + i.dy;
                                        t.push(new Ps(c.onCurve, c.endContour, h, f))
                                    } else t = e.points || [];
                        e.phantomPoints && !this._font.directory.tables.HVAR && (this._metrics.advanceWidth = e.phantomPoints[1].x - e.phantomPoints[0].x, this._metrics.advanceHeight = e.phantomPoints[3].y - e.phantomPoints[2].y, this._metrics.leftBearing = e.xMin - e.phantomPoints[0].x, this._metrics.topBearing = e.phantomPoints[2].y - e.yMax);
                        for (var p = [], d = [], g = 0; g < t.length; g++) {
                            var y = t[g];
                            d.push(y), y.endContour && (p.push(d), d = [])
                        }
                        return p
                    }, n._getMetrics = function() {
                        if (this._metrics) return this._metrics;
                        var t = this._getCBox(!0);
                        return e.prototype._getMetrics.call(this, t), this._font._variationProcessor && !this._font.HVAR && this.path, this._metrics
                    }, n._getPath = function() {
                        for (var e = this._getContours(), t = new ms, n = 0; n < e.length; n++) {
                            var r = e[n],
                                i = r[0],
                                a = r[r.length - 1],
                                s = 0;
                            if (i.onCurve) {
                                var o = null;
                                s = 1
                            } else o = i = a.onCurve ? a : new Ps(!1, !1, (i.x + a.x) / 2, (i.y + a.y) / 2);
                            t.moveTo(i.x, i.y);
                            for (var l = s; l < r.length; l++) {
                                var u = r[l],
                                    c = 0 === l ? i : r[l - 1];
                                if (c.onCurve && u.onCurve) t.lineTo(u.x, u.y);
                                else if (c.onCurve && !u.onCurve) o = u;
                                else if (c.onCurve || u.onCurve) {
                                    if (c.onCurve || !u.onCurve) throw new Error("Unknown TTF path state");
                                    t.quadraticCurveTo(o.x, o.y, u.x, u.y);
                                    o = null
                                } else {
                                    var h = (c.x + u.x) / 2,
                                        f = (c.y + u.y) / 2;
                                    t.quadraticCurveTo(c.x, c.y, h, f);
                                    var o = u
                                }
                            }
                            o && t.quadraticCurveTo(o.x, o.y, i.x, i.y), t.closePath()
                        }
                        return t
                    }, t
                }(ks),
                Fs = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n._getName = function() {
                        return this._font.CFF2 ? e.prototype._getName.call(this) : this._font["CFF "].getGlyphName(this.id)
                    }, n.bias = function(e) {
                        return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768
                    }, n._getPath = function() {
                        var e = this._font.CFF2 || this._font["CFF "],
                            t = e.stream,
                            n = e.topDict.CharStrings[this.id],
                            r = n.offset + n.length;
                        t.pos = n.offset;
                        var i, a, s = new ms,
                            o = [],
                            l = [],
                            u = null,
                            c = 0,
                            h = 0,
                            f = 0,
                            p = !1;
                        this._usedGsubrs = i = {}, this._usedSubrs = a = {};
                        var d = e.globalSubrIndex || [],
                            g = this.bias(d),
                            y = e.privateDictForGlyph(this.id) || {},
                            v = y.Subrs || [],
                            m = this.bias(v),
                            b = e.topDict.vstore && e.topDict.vstore.itemVariationStore,
                            w = y.vsindex,
                            _ = this._font._variationProcessor;

                        function C() {
                            null == u && (u = o.shift() + y.nominalWidthX)
                        }

                        function S() {
                            return o.length % 2 !== 0 && C(), c += o.length >> 1, o.length = 0
                        }

                        function x(e, t) {
                            p && s.closePath(), s.moveTo(e, t), p = !0
                        }
                        return function n() {
                            for (; t.pos < r;) {
                                var u = t.readUInt8();
                                if (u < 32) switch (u) {
                                        case 1:
                                        case 3:
                                        case 18:
                                        case 23:
                                            S();
                                            break;
                                        case 4:
                                            o.length > 1 && C(), f += o.shift(), x(h, f);
                                            break;
                                        case 5:
                                            for (; o.length >= 2;) h += o.shift(), f += o.shift(), s.lineTo(h, f);
                                            break;
                                        case 6:
                                        case 7:
                                            for (var y = 6 === u; o.length >= 1;) y ? h += o.shift() : f += o.shift(), s.lineTo(h, f), y = !y;
                                            break;
                                        case 8:
                                            for (; o.length > 0;) {
                                                var k = h + o.shift(),
                                                    A = f + o.shift(),
                                                    P = k + o.shift(),
                                                    I = A + o.shift();
                                                h = P + o.shift(), f = I + o.shift(), s.bezierCurveTo(k, A, P, I, h, f)
                                            }
                                            break;
                                        case 10:
                                            var O = o.pop() + m,
                                                F = v[O];
                                            if (F) {
                                                a[O] = !0;
                                                var D = t.pos,
                                                    T = r;
                                                t.pos = F.offset, r = F.offset + F.length, n(), t.pos = D, r = T
                                            }
                                            break;
                                        case 11:
                                            if (e.version >= 2) break;
                                            return;
                                        case 14:
                                            if (e.version >= 2) break;
                                            o.length > 0 && C(), p && (s.closePath(), p = !1);
                                            break;
                                        case 15:
                                            if (e.version < 2) throw new Error("vsindex operator not supported in CFF v1");
                                            w = o.pop();
                                            break;
                                        case 16:
                                            if (e.version < 2) throw new Error("blend operator not supported in CFF v1");
                                            if (!_) throw new Error("blend operator in non-variation font");
                                            for (var L = _.getBlendVector(b, w), M = o.pop(), G = M * L.length, B = o.length - G, E = B - M, R = 0; R < M; R++) {
                                                for (var V = o[E + R], z = 0; z < L.length; z++) V += L[z] * o[B++];
                                                o[E + R] = V
                                            }
                                            for (; G--;) o.pop();
                                            break;
                                        case 19:
                                        case 20:
                                            S(), t.pos += c + 7 >> 3;
                                            break;
                                        case 21:
                                            o.length > 2 && C(), h += o.shift(), f += o.shift(), x(h, f);
                                            break;
                                        case 22:
                                            o.length > 1 && C(), x(h += o.shift(), f);
                                            break;
                                        case 24:
                                            for (; o.length >= 8;) {
                                                k = h + o.shift(), A = f + o.shift(), P = k + o.shift(), I = A + o.shift();
                                                h = P + o.shift(), f = I + o.shift(), s.bezierCurveTo(k, A, P, I, h, f)
                                            }
                                            h += o.shift(), f += o.shift(), s.lineTo(h, f);
                                            break;
                                        case 25:
                                            for (; o.length >= 8;) h += o.shift(), f += o.shift(), s.lineTo(h, f);
                                            k = h + o.shift(), A = f + o.shift(), P = k + o.shift(), I = A + o.shift();
                                            h = P + o.shift(), f = I + o.shift(), s.bezierCurveTo(k, A, P, I, h, f);
                                            break;
                                        case 26:
                                            for (o.length % 2 && (h += o.shift()); o.length >= 4;) k = h, A = f + o.shift(), P = k + o.shift(), I = A + o.shift(), h = P, f = I + o.shift(), s.bezierCurveTo(k, A, P, I, h, f);
                                            break;
                                        case 27:
                                            for (o.length % 2 && (f += o.shift()); o.length >= 4;) k = h + o.shift(), A = f, P = k + o.shift(), I = A + o.shift(), h = P + o.shift(), f = I, s.bezierCurveTo(k, A, P, I, h, f);
                                            break;
                                        case 28:
                                            o.push(t.readInt16BE());
                                            break;
                                        case 29:
                                            if (O = o.pop() + g, F = d[O]) {
                                                i[O] = !0;
                                                D = t.pos, T = r;
                                                t.pos = F.offset, r = F.offset + F.length, n(), t.pos = D, r = T
                                            }
                                            break;
                                        case 30:
                                        case 31:
                                            for (var U = 31 === u; o.length >= 4;) U ? (k = h + o.shift(), A = f, P = k + o.shift(), I = A + o.shift(), f = I + o.shift(), h = P + (1 === o.length ? o.shift() : 0)) : (k = h, A = f + o.shift(), P = k + o.shift(), I = A + o.shift(), h = P + o.shift(), f = I + (1 === o.length ? o.shift() : 0)), s.bezierCurveTo(k, A, P, I, h, f), U = !U;
                                            break;
                                        case 12:
                                            switch (u = t.readUInt8()) {
                                                case 3:
                                                    var N = o.pop(),
                                                        Z = o.pop();
                                                    o.push(N && Z ? 1 : 0);
                                                    break;
                                                case 4:
                                                    N = o.pop(), Z = o.pop(), o.push(N || Z ? 1 : 0);
                                                    break;
                                                case 5:
                                                    N = o.pop(), o.push(N ? 0 : 1);
                                                    break;
                                                case 9:
                                                    N = o.pop(), o.push(Math.abs(N));
                                                    break;
                                                case 10:
                                                    N = o.pop(), Z = o.pop(), o.push(N + Z);
                                                    break;
                                                case 11:
                                                    N = o.pop(), Z = o.pop(), o.push(N - Z);
                                                    break;
                                                case 12:
                                                    N = o.pop(), Z = o.pop(), o.push(N / Z);
                                                    break;
                                                case 14:
                                                    N = o.pop(), o.push(-N);
                                                    break;
                                                case 15:
                                                    N = o.pop(), Z = o.pop(), o.push(N === Z ? 1 : 0);
                                                    break;
                                                case 18:
                                                    o.pop();
                                                    break;
                                                case 20:
                                                    var q = o.pop(),
                                                        j = o.pop();
                                                    l[j] = q;
                                                    break;
                                                case 21:
                                                    j = o.pop(), o.push(l[j] || 0);
                                                    break;
                                                case 22:
                                                    var H = o.pop(),
                                                        Y = o.pop(),
                                                        W = o.pop(),
                                                        K = o.pop();
                                                    o.push(W <= K ? H : Y);
                                                    break;
                                                case 23:
                                                    o.push(Math.random());
                                                    break;
                                                case 24:
                                                    N = o.pop(), Z = o.pop(), o.push(N * Z);
                                                    break;
                                                case 26:
                                                    N = o.pop(), o.push(Math.sqrt(N));
                                                    break;
                                                case 27:
                                                    N = o.pop(), o.push(N, N);
                                                    break;
                                                case 28:
                                                    N = o.pop(), Z = o.pop(), o.push(Z, N);
                                                    break;
                                                case 29:
                                                    (j = o.pop()) < 0 ? j = 0 : j > o.length - 1 && (j = o.length - 1), o.push(o[j]);
                                                    break;
                                                case 30:
                                                    var X = o.pop(),
                                                        J = o.pop();
                                                    if (J >= 0)
                                                        for (; J > 0;) {
                                                            for (var Q = o[X - 1], $ = X - 2; $ >= 0; $--) o[$ + 1] = o[$];
                                                            o[0] = Q, J--
                                                        } else
                                                            for (; J < 0;) {
                                                                Q = o[0];
                                                                for (var ee = 0; ee <= X; ee++) o[ee] = o[ee + 1];
                                                                o[X - 1] = Q, J++
                                                            }
                                                    break;
                                                case 34:
                                                    k = h + o.shift(), A = f, P = k + o.shift(), I = A + o.shift();
                                                    var te = P + o.shift(),
                                                        ne = I,
                                                        re = te + o.shift(),
                                                        ie = ne,
                                                        ae = re + o.shift(),
                                                        se = ie,
                                                        oe = ae + o.shift(),
                                                        le = se;
                                                    h = oe, f = le, s.bezierCurveTo(k, A, P, I, te, ne), s.bezierCurveTo(re, ie, ae, se, oe, le);
                                                    break;
                                                case 35:
                                                    for (var ue = [], ce = 0; ce <= 5; ce++) h += o.shift(), f += o.shift(), ue.push(h, f);
                                                    s.bezierCurveTo.apply(s, ue.slice(0, 6)), s.bezierCurveTo.apply(s, ue.slice(6)), o.shift();
                                                    break;
                                                case 36:
                                                    k = h + o.shift(), A = f + o.shift(), P = k + o.shift(), ie = ne = I = A + o.shift(), ae = (re = (te = P + o.shift()) + o.shift()) + o.shift(), se = ie + o.shift(), oe = ae + o.shift(), h = oe, f = le = se, s.bezierCurveTo(k, A, P, I, te, ne), s.bezierCurveTo(re, ie, ae, se, oe, le);
                                                    break;
                                                case 37:
                                                    var he = h,
                                                        fe = f;
                                                    ue = [];
                                                    for (var pe = 0; pe <= 4; pe++) h += o.shift(), f += o.shift(), ue.push(h, f);
                                                    Math.abs(h - he) > Math.abs(f - fe) ? (h += o.shift(), f = fe) : (h = he, f += o.shift()), ue.push(h, f), s.bezierCurveTo.apply(s, ue.slice(0, 6)), s.bezierCurveTo.apply(s, ue.slice(6));
                                                    break;
                                                default:
                                                    throw new Error("Unknown op: 12 " + u)
                                            }
                                            break;
                                        default:
                                            throw new Error("Unknown op: " + u)
                                    } else if (u < 247) o.push(u - 139);
                                    else if (u < 251) {
                                    var de = t.readUInt8();
                                    o.push(256 * (u - 247) + de + 108)
                                } else if (u < 255) {
                                    de = t.readUInt8();
                                    o.push(256 * -(u - 251) - de - 108)
                                } else o.push(t.readInt32BE() / 65536)
                            }
                        }(), p && s.closePath(), s
                    }, t
                }(ks),
                Ds = new(i().Struct)({
                    originX: i().uint16,
                    originY: i().uint16,
                    type: new(i().String)(4),
                    data: new(i().Buffer)((function(e) {
                        return e.parent.buflen - e._currentOffset
                    }))
                }),
                Ts = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n.getImageForSize = function(e) {
                        for (var t = 0; t < this._font.sbix.imageTables.length; t++) {
                            var n = this._font.sbix.imageTables[t];
                            if (n.ppem >= e) break
                        }
                        var r = n.imageOffsets,
                            i = r[this.id],
                            a = r[this.id + 1];
                        return i === a ? null : (this._font.stream.pos = i, Ds.decode(this._font.stream, {
                            buflen: a - i
                        }))
                    }, n.render = function(t, n) {
                        var r = this.getImageForSize(n);
                        if (null != r) {
                            var i = n / this._font.unitsPerEm;
                            t.image(r.data, {
                                height: n,
                                x: r.originX,
                                y: (this.bbox.minY - r.originY) * i
                            })
                        }
                        this._font.sbix.flags.renderOutlines && e.prototype.render.call(this, t, n)
                    }, t
                }(Os),
                Ls = function(e, t) {
                    this.glyph = e, this.color = t
                },
                Ms = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n._getBBox = function() {
                        for (var e = new Jr, t = 0; t < this.layers.length; t++) {
                            var n = this.layers[t].glyph.bbox;
                            e.addPoint(n.minX, n.minY), e.addPoint(n.maxX, n.maxY)
                        }
                        return e
                    }, n.render = function(e, t) {
                        for (var n, r = (0, a.Z)(this.layers); !(n = r()).done;) {
                            var i = n.value,
                                s = i.glyph,
                                o = i.color;
                            e.fillColor([o.red, o.green, o.blue], o.alpha / 255 * 100), s.render(e, t)
                        }
                    }, (0, s.Z)(t, [{
                        key: "layers",
                        get: function() {
                            for (var e = this._font.CPAL, t = this._font.COLR, n = 0, r = t.baseGlyphRecord.length - 1; n <= r;) {
                                var i = n + r >> 1,
                                    a = t.baseGlyphRecord[i];
                                if (this.id < a.gid) r = i - 1;
                                else {
                                    if (!(this.id > a.gid)) {
                                        var s = a;
                                        break
                                    }
                                    n = i + 1
                                }
                            }
                            if (null == s) {
                                var o = this._font._getBaseGlyph(this.id);
                                return [new Ls(o, c = {
                                    red: 0,
                                    green: 0,
                                    blue: 0,
                                    alpha: 255
                                })]
                            }
                            for (var l = [], u = s.firstLayerIndex; u < s.firstLayerIndex + s.numLayers; u++) {
                                a = t.layerRecords[u];
                                var c = e.colorRecords[a.paletteIndex];
                                o = this._font._getBaseGlyph(a.gid);
                                l.push(new Ls(o, c))
                            }
                            return l
                        }
                    }]), t
                }(ks),
                Gs = function() {
                    function e(e, t) {
                        this.font = e, this.normalizedCoords = this.normalizeCoords(t), this.blendVectors = new Map
                    }
                    var t = e.prototype;
                    return t.normalizeCoords = function(e) {
                        for (var t = [], n = 0; n < this.font.fvar.axis.length; n++) {
                            var r = this.font.fvar.axis[n];
                            e[n] < r.defaultValue ? t.push((e[n] - r.defaultValue + Number.EPSILON) / (r.defaultValue - r.minValue + Number.EPSILON)) : t.push((e[n] - r.defaultValue + Number.EPSILON) / (r.maxValue - r.defaultValue + Number.EPSILON))
                        }
                        if (this.font.avar)
                            for (n = 0; n < this.font.avar.segment.length; n++)
                                for (var i = this.font.avar.segment[n], a = 0; a < i.correspondence.length; a++) {
                                    var s = i.correspondence[a];
                                    if (a >= 1 && t[n] < s.fromCoord) {
                                        var o = i.correspondence[a - 1];
                                        t[n] = ((t[n] - o.fromCoord) * (s.toCoord - o.toCoord) + Number.EPSILON) / (s.fromCoord - o.fromCoord + Number.EPSILON) + o.toCoord;
                                        break
                                    }
                                }
                        return t
                    }, t.transformPoints = function(e, t) {
                        if (this.font.fvar && this.font.gvar) {
                            var n = this.font.gvar;
                            if (!(e >= n.glyphCount)) {
                                var r = n.offsets[e];
                                if (r !== n.offsets[e + 1]) {
                                    var i = this.font.stream;
                                    if (i.pos = r, !(i.pos >= i.length)) {
                                        var a = i.readUInt16BE(),
                                            s = r + i.readUInt16BE();
                                        if (32768 & a) {
                                            var o = i.pos;
                                            i.pos = s;
                                            var l = this.decodePoints();
                                            s = i.pos, i.pos = o
                                        }
                                        var u = t.map((function(e) {
                                            return e.copy()
                                        }));
                                        a &= 4095;
                                        for (var c = 0; c < a; c++) {
                                            var h = i.readUInt16BE(),
                                                f = i.readUInt16BE();
                                            if (32768 & f)
                                                for (var p = [], d = 0; d < n.axisCount; d++) p.push(i.readInt16BE() / 16384);
                                            else {
                                                if ((4095 & f) >= n.globalCoordCount) throw new Error("Invalid gvar table");
                                                p = n.globalCoords[4095 & f]
                                            }
                                            if (16384 & f) {
                                                for (var g = [], y = 0; y < n.axisCount; y++) g.push(i.readInt16BE() / 16384);
                                                for (var v = [], m = 0; m < n.axisCount; m++) v.push(i.readInt16BE() / 16384)
                                            }
                                            var b = this.tupleFactor(f, p, g, v);
                                            if (0 !== b) {
                                                o = i.pos;
                                                if (i.pos = s, 8192 & f) var w = this.decodePoints();
                                                else w = l;
                                                var _ = 0 === w.length ? t.length : w.length,
                                                    C = this.decodeDeltas(_),
                                                    S = this.decodeDeltas(_);
                                                if (0 === w.length)
                                                    for (var x = 0; x < t.length; x++) {
                                                        var k = t[x];
                                                        k.x += Math.round(C[x] * b), k.y += Math.round(S[x] * b)
                                                    } else {
                                                        for (var A = u.map((function(e) {
                                                                return e.copy()
                                                            })), P = t.map((function() {
                                                                return !1
                                                            })), I = 0; I < w.length; I++) {
                                                            var O = w[I];
                                                            if (O < t.length) {
                                                                var F = A[O];
                                                                P[O] = !0, F.x += Math.round(C[I] * b), F.y += Math.round(S[I] * b)
                                                            }
                                                        }
                                                        this.interpolateMissingDeltas(A, u, P);
                                                        for (var D = 0; D < t.length; D++) {
                                                            var T = A[D].x - u[D].x,
                                                                L = A[D].y - u[D].y;
                                                            t[D].x += T, t[D].y += L
                                                        }
                                                    }
                                                s += h, i.pos = o
                                            } else s += h
                                        }
                                    }
                                }
                            }
                        }
                    }, t.decodePoints = function() {
                        var e = this.font.stream,
                            t = e.readUInt8();
                        128 & t && (t = (127 & t) << 8 | e.readUInt8());
                        for (var n = new Uint16Array(t), r = 0, i = 0; r < t;)
                            for (var a = e.readUInt8(), s = 1 + (127 & a), o = 128 & a ? e.readUInt16 : e.readUInt8, l = 0; l < s && r < t; l++) i += o.call(e), n[r++] = i;
                        return n
                    }, t.decodeDeltas = function(e) {
                        for (var t = this.font.stream, n = 0, r = new Int16Array(e); n < e;) {
                            var i = t.readUInt8(),
                                a = 1 + (63 & i);
                            if (128 & i) n += a;
                            else
                                for (var s = 64 & i ? t.readInt16BE : t.readInt8, o = 0; o < a && n < e; o++) r[n++] = s.call(t)
                        }
                        return r
                    }, t.tupleFactor = function(e, t, n, r) {
                        for (var i = this.normalizedCoords, a = this.font.gvar, s = 1, o = 0; o < a.axisCount; o++)
                            if (0 !== t[o]) {
                                if (0 === i[o]) return 0;
                                if (0 === (16384 & e)) {
                                    if (i[o] < Math.min(0, t[o]) || i[o] > Math.max(0, t[o])) return 0;
                                    s = (s * i[o] + Number.EPSILON) / (t[o] + Number.EPSILON)
                                } else {
                                    if (i[o] < n[o] || i[o] > r[o]) return 0;
                                    s = i[o] < t[o] ? s * (i[o] - n[o] + Number.EPSILON) / (t[o] - n[o] + Number.EPSILON) : s * (r[o] - i[o] + Number.EPSILON) / (r[o] - t[o] + Number.EPSILON)
                                }
                            }
                        return s
                    }, t.interpolateMissingDeltas = function(e, t, n) {
                        if (0 !== e.length)
                            for (var r = 0; r < e.length;) {
                                for (var i = r, a = r, s = e[a]; !s.endContour;) s = e[++a];
                                for (; r <= a && !n[r];) r++;
                                if (!(r > a)) {
                                    var o = r,
                                        l = r;
                                    for (r++; r <= a;) n[r] && (this.deltaInterpolate(l + 1, r - 1, l, r, t, e), l = r), r++;
                                    l === o ? this.deltaShift(i, a, l, t, e) : (this.deltaInterpolate(l + 1, a, l, o, t, e), o > 0 && this.deltaInterpolate(i, o - 1, l, o, t, e)), r = a + 1
                                }
                            }
                    }, t.deltaInterpolate = function(e, t, n, r, i, a) {
                        if (!(e > t))
                            for (var s = ["x", "y"], o = 0; o < s.length; o++) {
                                var l = s[o];
                                if (i[n][l] > i[r][l]) {
                                    var u = n;
                                    n = r, r = u
                                }
                                var c = i[n][l],
                                    h = i[r][l],
                                    f = a[n][l],
                                    p = a[r][l];
                                if (c !== h || f === p)
                                    for (var d = c === h ? 0 : (p - f) / (h - c), g = e; g <= t; g++) {
                                        var y = i[g][l];
                                        y <= c ? y += f - c : y >= h ? y += p - h : y = f + (y - c) * d, a[g][l] = y
                                    }
                            }
                    }, t.deltaShift = function(e, t, n, r, i) {
                        var a = i[n].x - r[n].x,
                            s = i[n].y - r[n].y;
                        if (0 !== a || 0 !== s)
                            for (var o = e; o <= t; o++) o !== n && (i[o].x += a, i[o].y += s)
                    }, t.getAdvanceAdjustment = function(e, t) {
                        var n, r;
                        if (t.advanceWidthMapping) {
                            var i = e;
                            i >= t.advanceWidthMapping.mapCount && (i = t.advanceWidthMapping.mapCount - 1), t.advanceWidthMapping.entryFormat;
                            var a = t.advanceWidthMapping.mapData[i];
                            n = a.outerIndex, r = a.innerIndex
                        } else n = 0, r = e;
                        return this.getDelta(t.itemVariationStore, n, r)
                    }, t.getDelta = function(e, t, n) {
                        if (t >= e.itemVariationData.length) return 0;
                        var r = e.itemVariationData[t];
                        if (n >= r.deltaSets.length) return 0;
                        for (var i = r.deltaSets[n], a = this.getBlendVector(e, t), s = 0, o = 0; o < r.regionIndexCount; o++) s += i.deltas[o] * a[o];
                        return s
                    }, t.getBlendVector = function(e, t) {
                        var n = e.itemVariationData[t];
                        if (this.blendVectors.has(n)) return this.blendVectors.get(n);
                        for (var r = this.normalizedCoords, i = [], a = 0; a < n.regionIndexCount; a++) {
                            for (var s = 1, o = n.regionIndexes[a], l = e.variationRegionList.variationRegions[o], u = 0; u < l.length; u++) {
                                var c = l[u];
                                s *= c.startCoord > c.peakCoord || c.peakCoord > c.endCoord || c.startCoord < 0 && c.endCoord > 0 && 0 !== c.peakCoord || 0 === c.peakCoord ? 1 : r[u] < c.startCoord || r[u] > c.endCoord ? 0 : r[u] === c.peakCoord ? 1 : r[u] < c.peakCoord ? (r[u] - c.startCoord + Number.EPSILON) / (c.peakCoord - c.startCoord + Number.EPSILON) : (c.endCoord - r[u] + Number.EPSILON) / (c.endCoord - c.peakCoord + Number.EPSILON)
                            }
                            i[a] = s
                        }
                        return this.blendVectors.set(n, i), i
                    }, e
                }(),
                Bs = Promise.resolve(),
                Es = function() {
                    function e(e) {
                        this.font = e, this.glyphs = [], this.mapping = {}, this.includeGlyph(0)
                    }
                    var t = e.prototype;
                    return t.includeGlyph = function(e) {
                        return "object" === typeof e && (e = e.id), null == this.mapping[e] && (this.glyphs.push(e), this.mapping[e] = this.glyphs.length - 1), this.mapping[e]
                    }, t.encodeStream = function() {
                        var e = this,
                            t = new(i().EncodeStream);
                        return Bs.then((function() {
                            return e.encode(t), t.end()
                        })), t
                    }, e
                }(),
                Rs = function() {
                    function e() {}
                    return e.size = function(e) {
                        return e >= 0 && e <= 255 ? 1 : 2
                    }, e.encode = function(e, t) {
                        t >= 0 && t <= 255 ? e.writeUInt8(t) : e.writeInt16BE(t)
                    }, e
                }(),
                Vs = new(i().Struct)({
                    numberOfContours: i().int16,
                    xMin: i().int16,
                    yMin: i().int16,
                    xMax: i().int16,
                    yMax: i().int16,
                    endPtsOfContours: new(i().Array)(i().uint16, "numberOfContours"),
                    instructions: new(i().Array)(i().uint8, i().uint16),
                    flags: new(i().Array)(i().uint8, 0),
                    xPoints: new(i().Array)(Rs, 0),
                    yPoints: new(i().Array)(Rs, 0)
                }),
                zs = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.encodeSimple = function(e, t) {
                        void 0 === t && (t = []);
                        for (var n = [], r = [], a = [], s = [], o = 0, l = 0, u = 0, c = 0, h = 0, f = 0; f < e.commands.length; f++) {
                            for (var p = e.commands[f], d = 0; d < p.args.length; d += 2) {
                                var g = p.args[d],
                                    y = p.args[d + 1],
                                    v = 0;
                                if ("quadraticCurveTo" === p.command && 2 === d) {
                                    var m = e.commands[f + 1];
                                    if (m && "quadraticCurveTo" === m.command) {
                                        var b = (l + m.args[0]) / 2,
                                            w = (u + m.args[1]) / 2;
                                        if (g === b && y === w) continue
                                    }
                                }
                                "quadraticCurveTo" === p.command && 0 === d || (v |= 1), v = this._encodePoint(g, l, r, v, 2, 16), (v = this._encodePoint(y, u, a, v, 4, 32)) === c && o < 255 ? (s[s.length - 1] |= 8, o++) : (o > 0 && (s.push(o), o = 0), s.push(v), c = v), l = g, u = y, h++
                            }
                            "closePath" === p.command && n.push(h - 1)
                        }
                        e.commands.length > 1 && "closePath" !== e.commands[e.commands.length - 1].command && n.push(h - 1);
                        var _ = e.bbox,
                            C = {
                                numberOfContours: n.length,
                                xMin: _.minX,
                                yMin: _.minY,
                                xMax: _.maxX,
                                yMax: _.maxY,
                                endPtsOfContours: n,
                                instructions: t,
                                flags: s,
                                xPoints: r,
                                yPoints: a
                            },
                            S = Vs.size(C),
                            x = 4 - S % 4,
                            k = new(i().EncodeStream)(S + x);
                        return Vs.encode(k, C), 0 !== x && k.fill(0, x), k.buffer
                    }, t._encodePoint = function(e, t, n, r, i, a) {
                        var s = e - t;
                        return e === t ? r |= a : (-255 <= s && s <= 255 && (r |= i, s < 0 ? s = -s : r |= a), n.push(s)), r
                    }, e
                }(),
                Us = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).glyphEncoder = new zs, n
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n._addGlyph = function(e) {
                        var t = this.font.getGlyph(e),
                            n = t._decode(),
                            r = this.font.loca.offsets[e],
                            i = this.font.loca.offsets[e + 1],
                            s = this.font._getTableStream("glyf");
                        s.pos += r;
                        var o = s.readBuffer(i - r);
                        if (n && n.numberOfContours < 0) {
                            o = _.from(o);
                            for (var l, u = (0, a.Z)(n.components); !(l = u()).done;) {
                                var c = l.value;
                                e = this.includeGlyph(c.glyphID), o.writeUInt16BE(e, c.pos)
                            }
                        } else n && this.font._variationProcessor && (o = this.glyphEncoder.encodeSimple(t.path, n.instructions));
                        return this.glyf.push(o), this.loca.offsets.push(this.offset), this.hmtx.metrics.push({
                            advance: t.advanceWidth,
                            bearing: t._getMetrics().leftBearing
                        }), this.offset += o.length, this.glyf.length - 1
                    }, n.encode = function(e) {
                        this.glyf = [], this.offset = 0, this.loca = {
                            offsets: [],
                            version: this.font.loca.version
                        }, this.hmtx = {
                            metrics: [],
                            bearings: []
                        };
                        for (var t = 0; t < this.glyphs.length;) this._addGlyph(this.glyphs[t++]);
                        var n = m()(this.font.maxp);
                        n.numGlyphs = this.glyf.length, this.loca.offsets.push(this.offset);
                        var r = m()(this.font.head);
                        r.indexToLocFormat = this.loca.version;
                        var i = m()(this.font.hhea);
                        i.numberOfMetrics = this.hmtx.metrics.length, qr.encode(e, {
                            tables: {
                                head: r,
                                hhea: i,
                                loca: this.loca,
                                maxp: n,
                                "cvt ": this.font["cvt "],
                                prep: this.font.prep,
                                glyf: this.glyf,
                                hmtx: this.hmtx,
                                fpgm: this.font.fpgm
                            }
                        })
                    }, t
                }(Es),
                Ns = function(e) {
                    function t(t) {
                        var n;
                        if ((n = e.call(this, t) || this).cff = n.font["CFF "], !n.cff) throw new Error("Not a CFF Font");
                        return n
                    }(0, l.Z)(t, e);
                    var n = t.prototype;
                    return n.subsetCharstrings = function() {
                        this.charstrings = [];
                        for (var e, t = {}, n = (0, a.Z)(this.glyphs); !(e = n()).done;) {
                            var r = e.value;
                            this.charstrings.push(this.cff.getCharString(r));
                            var i = this.font.getGlyph(r);
                            for (var s in i.path, i._usedGsubrs) t[s] = !0
                        }
                        this.gsubrs = this.subsetSubrs(this.cff.globalSubrIndex, t)
                    }, n.subsetSubrs = function(e, t) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var i = e[r];
                            t[r] ? (this.cff.stream.pos = i.offset, n.push(this.cff.stream.readBuffer(i.length))) : n.push(_.from([11]))
                        }
                        return n
                    }, n.subsetFontdict = function(e) {
                        e.FDArray = [], e.FDSelect = {
                            version: 0,
                            fds: []
                        };
                        for (var t, n = {}, r = [], i = (0, a.Z)(this.glyphs); !(t = i()).done;) {
                            var s = t.value,
                                o = this.cff.fdForGlyph(s);
                            if (null != o) {
                                n[o] || (e.FDArray.push(Object.assign({}, this.cff.topDict.FDArray[o])), r.push({})), n[o] = !0, e.FDSelect.fds.push(e.FDArray.length - 1);
                                var l = this.font.getGlyph(s);
                                for (var u in l.path, l._usedSubrs) r[r.length - 1][u] = !0
                            }
                        }
                        for (var c = 0; c < e.FDArray.length; c++) {
                            var h = e.FDArray[c];
                            delete h.FontName, h.Private && h.Private.Subrs && (h.Private = Object.assign({}, h.Private), h.Private.Subrs = this.subsetSubrs(h.Private.Subrs, r[c]))
                        }
                    }, n.createCIDFontdict = function(e) {
                        for (var t, n = {}, r = (0, a.Z)(this.glyphs); !(t = r()).done;) {
                            var i = t.value,
                                s = this.font.getGlyph(i);
                            for (var o in s.path, s._usedSubrs) n[o] = !0
                        }
                        var l = Object.assign({}, this.cff.topDict.Private);
                        return this.cff.topDict.Private && this.cff.topDict.Private.Subrs && (l.Subrs = this.subsetSubrs(this.cff.topDict.Private.Subrs, n)), e.FDArray = [{
                            Private: l
                        }], e.FDSelect = {
                            version: 3,
                            nRanges: 1,
                            ranges: [{
                                first: 0,
                                fd: 0
                            }],
                            sentinel: this.charstrings.length
                        }
                    }, n.addString = function(e) {
                        return e ? (this.strings || (this.strings = []), this.strings.push(e), ce.length + this.strings.length - 1) : null
                    }, n.encode = function(e) {
                        this.subsetCharstrings();
                        var t = {
                                version: this.charstrings.length > 255 ? 2 : 1,
                                ranges: [{
                                    first: 1,
                                    nLeft: this.charstrings.length - 2
                                }]
                            },
                            n = Object.assign({}, this.cff.topDict);
                        n.Private = null, n.charset = t, n.Encoding = null, n.CharStrings = this.charstrings;
                        for (var r = 0, i = ["version", "Notice", "Copyright", "FullName", "FamilyName", "Weight", "PostScript", "BaseFontName", "FontName"]; r < i.length; r++) {
                            var a = i[r];
                            n[a] = this.addString(this.cff.string(n[a]))
                        }
                        n.ROS = [this.addString("Adobe"), this.addString("Identity"), 0], n.CIDCount = this.charstrings.length, this.cff.isCIDFont ? this.subsetFontdict(n) : this.createCIDFontdict(n);
                        var s = {
                            version: 1,
                            hdrSize: this.cff.hdrSize,
                            offSize: 4,
                            header: this.cff.header,
                            nameIndex: [this.cff.postscriptName],
                            topDictIndex: [n],
                            stringIndex: this.strings,
                            globalSubrIndex: this.gsubrs
                        };
                        pt.encode(e, s)
                    }, t
                }(Es),
                Zs = (Ss = function() {
                    function e(e, t) {
                        for (var n in void 0 === t && (t = null), this.defaultLanguage = null, this.stream = e, this.variationCoords = t, this._directoryPos = this.stream.pos, this._tables = {}, this._glyphs = {}, this._decodeDirectory(), this.directory.tables) {
                            var r = this.directory.tables[n];
                            Ur[n] && r.length > 0 && Object.defineProperty(this, n, {
                                get: this._getTable.bind(this, r)
                            })
                        }
                    }
                    e.probe = function(e) {
                        var t = e.toString("ascii", 0, 4);
                        return "true" === t || "OTTO" === t || t === String.fromCharCode(0, 1, 0, 0)
                    };
                    var t = e.prototype;
                    return t.setDefaultLanguage = function(e) {
                        void 0 === e && (e = null), this.defaultLanguage = e
                    }, t._getTable = function(e) {
                        if (!(e.tag in this._tables)) try {
                            this._tables[e.tag] = this._decodeTable(e)
                        } catch (t) {
                            C.logErrors && (console.error("Error decoding table " + e.tag), console.error(t.stack))
                        }
                        return this._tables[e.tag]
                    }, t._getTableStream = function(e) {
                        var t = this.directory.tables[e];
                        return t ? (this.stream.pos = t.offset, this.stream) : null
                    }, t._decodeDirectory = function() {
                        return this.directory = qr.decode(this.stream, {
                            _startOffset: 0
                        })
                    }, t._decodeTable = function(e) {
                        var t = this.stream.pos,
                            n = this._getTableStream(e.tag),
                            r = Ur[e.tag].decode(n, this, e.length);
                        return this.stream.pos = t, r
                    }, t.getName = function(e, t) {
                        void 0 === t && (t = this.defaultLanguage || C.defaultLanguage);
                        var n = this.name && this.name.records[e];
                        return n && (n[t] || n[this.defaultLanguage] || n[C.defaultLanguage] || n.en || n[Object.keys(n)[0]]) || null
                    }, t.hasGlyphForCodePoint = function(e) {
                        return !!this._cmapProcessor.lookup(e)
                    }, t.glyphForCodePoint = function(e) {
                        return this.getGlyph(this._cmapProcessor.lookup(e), [e])
                    }, t.glyphsForString = function(e) {
                        for (var t = [], n = e.length, r = 0, i = -1, a = -1; r <= n;) {
                            var s = 0,
                                o = 0;
                            if (r < n) {
                                if (55296 <= (s = e.charCodeAt(r++)) && s <= 56319 && r < n) {
                                    var l = e.charCodeAt(r);
                                    56320 <= l && l <= 57343 && (r++, s = ((1023 & s) << 10) + (1023 & l) + 65536)
                                }
                                o = 65024 <= s && s <= 65039 || 917760 <= s && s <= 917999 ? 1 : 0
                            } else r++;
                            0 === a && 1 === o ? t.push(this.getGlyph(this._cmapProcessor.lookup(i, s), [i, s])) : 0 === a && 0 === o && t.push(this.glyphForCodePoint(i)), i = s, a = o
                        }
                        return t
                    }, t.layout = function(e, t, n, r, i) {
                        return this._layoutEngine.layout(e, t, n, r, i)
                    }, t.stringsForGlyph = function(e) {
                        return this._layoutEngine.stringsForGlyph(e)
                    }, t.getAvailableFeatures = function(e, t) {
                        return this._layoutEngine.getAvailableFeatures(e, t)
                    }, t._getBaseGlyph = function(e, t) {
                        return void 0 === t && (t = []), this._glyphs[e] || (this.directory.tables.glyf ? this._glyphs[e] = new Os(e, t, this) : (this.directory.tables["CFF "] || this.directory.tables.CFF2) && (this._glyphs[e] = new Fs(e, t, this))), this._glyphs[e] || null
                    }, t.getGlyph = function(e, t) {
                        return void 0 === t && (t = []), this._glyphs[e] || (this.directory.tables.sbix ? this._glyphs[e] = new Ts(e, t, this) : this.directory.tables.COLR && this.directory.tables.CPAL ? this._glyphs[e] = new Ms(e, t, this) : this._getBaseGlyph(e, t)), this._glyphs[e] || null
                    }, t.createSubset = function() {
                        return this.directory.tables["CFF "] ? new Ns(this) : new Us(this)
                    }, t.getVariation = function(t) {
                        if (!this.directory.tables.fvar || !(this.directory.tables.gvar && this.directory.tables.glyf || this.directory.tables.CFF2)) throw new Error("Variations require a font with the fvar, gvar and glyf, or CFF2 tables.");
                        if ("string" === typeof t && (t = this.namedVariations[t]), "object" !== typeof t) throw new Error("Variation settings must be either a variation name or settings object.");
                        var n = this.fvar.axis.map((function(e, n) {
                                var r = e.axisTag.trim();
                                return r in t ? Math.max(e.minValue, Math.min(e.maxValue, t[r])) : e.defaultValue
                            })),
                            r = new(i().DecodeStream)(this.stream.buffer);
                        r.pos = this._directoryPos;
                        var a = new e(r, n);
                        return a._tables = this._tables, a
                    }, t.getFont = function(e) {
                        return this.getVariation(e)
                    }, (0, s.Z)(e, [{
                        key: "postscriptName",
                        get: function() {
                            return this.getName("postscriptName")
                        }
                    }, {
                        key: "fullName",
                        get: function() {
                            return this.getName("fullName")
                        }
                    }, {
                        key: "familyName",
                        get: function() {
                            return this.getName("fontFamily")
                        }
                    }, {
                        key: "subfamilyName",
                        get: function() {
                            return this.getName("fontSubfamily")
                        }
                    }, {
                        key: "copyright",
                        get: function() {
                            return this.getName("copyright")
                        }
                    }, {
                        key: "version",
                        get: function() {
                            return this.getName("version")
                        }
                    }, {
                        key: "ascent",
                        get: function() {
                            return this.hhea.ascent
                        }
                    }, {
                        key: "descent",
                        get: function() {
                            return this.hhea.descent
                        }
                    }, {
                        key: "lineGap",
                        get: function() {
                            return this.hhea.lineGap
                        }
                    }, {
                        key: "underlinePosition",
                        get: function() {
                            return this.post.underlinePosition
                        }
                    }, {
                        key: "underlineThickness",
                        get: function() {
                            return this.post.underlineThickness
                        }
                    }, {
                        key: "italicAngle",
                        get: function() {
                            return this.post.italicAngle
                        }
                    }, {
                        key: "capHeight",
                        get: function() {
                            var e = this["OS/2"];
                            return e ? e.capHeight : this.ascent
                        }
                    }, {
                        key: "xHeight",
                        get: function() {
                            var e = this["OS/2"];
                            return e ? e.xHeight : 0
                        }
                    }, {
                        key: "numGlyphs",
                        get: function() {
                            return this.maxp.numGlyphs
                        }
                    }, {
                        key: "unitsPerEm",
                        get: function() {
                            return this.head.unitsPerEm
                        }
                    }, {
                        key: "bbox",
                        get: function() {
                            return Object.freeze(new Jr(this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax))
                        }
                    }, {
                        key: "_cmapProcessor",
                        get: function() {
                            return new Wr(this.cmap)
                        }
                    }, {
                        key: "characterSet",
                        get: function() {
                            return this._cmapProcessor.getCharacterSet()
                        }
                    }, {
                        key: "_layoutEngine",
                        get: function() {
                            return new ys(this)
                        }
                    }, {
                        key: "availableFeatures",
                        get: function() {
                            return this._layoutEngine.getAvailableFeatures()
                        }
                    }, {
                        key: "variationAxes",
                        get: function() {
                            var e = {};
                            if (!this.fvar) return e;
                            for (var t, n = (0, a.Z)(this.fvar.axis); !(t = n()).done;) {
                                var r = t.value;
                                e[r.axisTag.trim()] = {
                                    name: r.name.en,
                                    min: r.minValue,
                                    default: r.defaultValue,
                                    max: r.maxValue
                                }
                            }
                            return e
                        }
                    }, {
                        key: "namedVariations",
                        get: function() {
                            var e = {};
                            if (!this.fvar) return e;
                            for (var t, n = (0, a.Z)(this.fvar.instance); !(t = n()).done;) {
                                for (var r = t.value, i = {}, s = 0; s < this.fvar.axis.length; s++) {
                                    i[this.fvar.axis[s].axisTag.trim()] = r.coord[s]
                                }
                                e[r.name.en] = i
                            }
                            return e
                        }
                    }, {
                        key: "_variationProcessor",
                        get: function() {
                            if (!this.fvar) return null;
                            var e = this.variationCoords;
                            return e || this.CFF2 ? (e || (e = this.fvar.axis.map((function(e) {
                                return e.defaultValue
                            }))), new Gs(this, e)) : null
                        }
                    }]), e
                }(), (0, o.Z)(Ss.prototype, "bbox", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "bbox"), Ss.prototype), (0, o.Z)(Ss.prototype, "_cmapProcessor", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "_cmapProcessor"), Ss.prototype), (0, o.Z)(Ss.prototype, "characterSet", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "characterSet"), Ss.prototype), (0, o.Z)(Ss.prototype, "_layoutEngine", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "_layoutEngine"), Ss.prototype), (0, o.Z)(Ss.prototype, "variationAxes", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "variationAxes"), Ss.prototype), (0, o.Z)(Ss.prototype, "namedVariations", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "namedVariations"), Ss.prototype), (0, o.Z)(Ss.prototype, "_variationProcessor", [x], Object.getOwnPropertyDescriptor(Ss.prototype, "_variationProcessor"), Ss.prototype), Ss),
                qs = new(i().Struct)({
                    tag: new(i().String)(4),
                    offset: new(i().Pointer)(i().uint32, "void", {
                        type: "global"
                    }),
                    compLength: i().uint32,
                    length: i().uint32,
                    origChecksum: i().uint32
                }),
                js = new(i().Struct)({
                    tag: new(i().String)(4),
                    flavor: i().uint32,
                    length: i().uint32,
                    numTables: i().uint16,
                    reserved: new(i().Reserved)(i().uint16),
                    totalSfntSize: i().uint32,
                    majorVersion: i().uint16,
                    minorVersion: i().uint16,
                    metaOffset: i().uint32,
                    metaLength: i().uint32,
                    metaOrigLength: i().uint32,
                    privOffset: i().uint32,
                    privLength: i().uint32,
                    tables: new(i().Array)(qs, "numTables")
                });
            js.process = function() {
                for (var e, t = {}, n = (0, a.Z)(this.tables); !(e = n()).done;) {
                    var r = e.value;
                    t[r.tag] = r
                }
                this.tables = t
            };
            var Hs = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, l.Z)(t, e), t.probe = function(e) {
                        return "wOFF" === e.toString("ascii", 0, 4)
                    };
                    var n = t.prototype;
                    return n._decodeDirectory = function() {
                        this.directory = js.decode(this.stream, {
                            _startOffset: 0
                        })
                    }, n._getTableStream = function(e) {
                        var t = this.directory.tables[e];
                        if (t) {
                            if (this.stream.pos = t.offset, t.compLength < t.length) {
                                this.stream.pos += 2;
                                var n = _.alloc(t.length),
                                    r = w()(this.stream.readBuffer(t.compLength - 2), n);
                                return new(i().DecodeStream)(r)
                            }
                            return this.stream
                        }
                        return null
                    }, t
                }(Zs),
                Ys = new(i().VersionedStruct)(i().uint32, {
                    65536: {
                        numFonts: i().uint32,
                        offsets: new(i().Array)(i().uint32, "numFonts")
                    },
                    131072: {
                        numFonts: i().uint32,
                        offsets: new(i().Array)(i().uint32, "numFonts"),
                        dsigTag: i().uint32,
                        dsigLength: i().uint32,
                        dsigOffset: i().uint32
                    }
                }),
                Ws = function() {
                    function e(e) {
                        if (this.stream = e, "ttcf" !== e.readString(4)) throw new Error("Not a TrueType collection");
                        this.header = Ys.decode(e)
                    }
                    return e.probe = function(e) {
                        return "ttcf" === e.toString("ascii", 0, 4)
                    }, e.prototype.getFont = function(e) {
                        for (var t, n = (0, a.Z)(this.header.offsets); !(t = n()).done;) {
                            var r = t.value,
                                s = new(i().DecodeStream)(this.stream.buffer);
                            s.pos = r;
                            var o = new Zs(s);
                            if (o.postscriptName === e) return o
                        }
                        return null
                    }, (0, s.Z)(e, [{
                        key: "fonts",
                        get: function() {
                            for (var e, t = [], n = (0, a.Z)(this.header.offsets); !(e = n()).done;) {
                                var r = e.value,
                                    s = new(i().DecodeStream)(this.stream.buffer);
                                s.pos = r, t.push(new Zs(s))
                            }
                            return t
                        }
                    }]), e
                }(),
                Ks = new(i().String)(i().uint8);
            new(i().Struct)({
                len: i().uint32,
                buf: new(i().Buffer)("len")
            });
            var Xs = new(i().Struct)({
                    id: i().uint16,
                    nameOffset: i().int16,
                    attr: i().uint8,
                    dataOffset: i().uint24,
                    handle: i().uint32
                }),
                Js = new(i().Struct)({
                    name: new(i().String)(4),
                    maxTypeIndex: i().uint16,
                    refList: new(i().Pointer)(i().uint16, new(i().Array)(Xs, (function(e) {
                        return e.maxTypeIndex + 1
                    })), {
                        type: "parent"
                    })
                }),
                Qs = new(i().Struct)({
                    length: i().uint16,
                    types: new(i().Array)(Js, (function(e) {
                        return e.length + 1
                    }))
                }),
                $s = new(i().Struct)({
                    reserved: new(i().Reserved)(i().uint8, 24),
                    typeList: new(i().Pointer)(i().uint16, Qs),
                    nameListOffset: new(i().Pointer)(i().uint16, "void")
                }),
                eo = new(i().Struct)({
                    dataOffset: i().uint32,
                    map: new(i().Pointer)(i().uint32, $s),
                    dataLength: i().uint32,
                    mapLength: i().uint32
                }),
                to = function() {
                    function e(e) {
                        this.stream = e, this.header = eo.decode(this.stream);
                        for (var t, n = (0, a.Z)(this.header.map.typeList.types); !(t = n()).done;) {
                            for (var r, i = t.value, s = (0, a.Z)(i.refList); !(r = s()).done;) {
                                var o = r.value;
                                o.nameOffset >= 0 ? (this.stream.pos = o.nameOffset + this.header.map.nameListOffset, o.name = Ks.decode(this.stream)) : o.name = null
                            }
                            "sfnt" === i.name && (this.sfnt = i)
                        }
                    }
                    return e.probe = function(e) {
                        var t = new(i().DecodeStream)(e);
                        try {
                            var n = eo.decode(t)
                        } catch (o) {
                            return !1
                        }
                        for (var r, s = (0, a.Z)(n.map.typeList.types); !(r = s()).done;) {
                            if ("sfnt" === r.value.name) return !0
                        }
                        return !1
                    }, e.prototype.getFont = function(e) {
                        if (!this.sfnt) return null;
                        for (var t, n = (0, a.Z)(this.sfnt.refList); !(t = n()).done;) {
                            var r = t.value,
                                s = this.header.dataOffset + r.dataOffset + 4,
                                o = new(i().DecodeStream)(this.stream.buffer.slice(s)),
                                l = new Zs(o);
                            if (l.postscriptName === e) return l
                        }
                        return null
                    }, (0, s.Z)(e, [{
                        key: "fonts",
                        get: function() {
                            for (var e, t = [], n = (0, a.Z)(this.sfnt.refList); !(e = n()).done;) {
                                var r = e.value,
                                    s = this.header.dataOffset + r.dataOffset + 4,
                                    o = new(i().DecodeStream)(this.stream.buffer.slice(s));
                                t.push(new Zs(o))
                            }
                            return t
                        }
                    }]), e
                }();
            C.registerFormat(Zs), C.registerFormat(Hs), C.registerFormat(Ws), C.registerFormat(to)
        }
    }
]);