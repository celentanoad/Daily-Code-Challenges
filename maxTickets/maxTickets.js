function maxTickets(tickets) {
    // m = size of subsequence
    // s = subsequence
    // determine the max length of a subsequence in which the difference between any elements (in a sorted list) is either 0 or 1
    // ex: tickets = [8, 5, 4, 8, 4]
    // valid subsequences = [4, 4, 5] and [8, 8]
    // m = 3 and 2
    // 3 is the longest so 3 would be the returned value
    let m = 0;
    let sortedTickets = tickets.sort((a, b) => a - b);
    let cache = Array(sortedTickets.length).fill(1);
    let previous = 0;
    let current = 1;
    while (previous < sortedTickets.length) {
        if (Math.abs(sortedTickets[previous]-sortedTickets[current]) <= 1) {
            const newSubsequence = cache[previous] + 1;
            if (newSubsequence > cache[current]) {
                cache[current] = newSubsequence;
            }
        }
        previous++;
        if (previous === current) {
            current++;
            previous = 0;
        }
    }
    
    m = cache.sort((a, b) => a - b)
    return m[m.length-1]
}

    // for (let i = 0; i < sortedTickets.length; i++) {
    //     if (Math.abs(sortedTickets[i]-sortedTickets[i+1])) cache[i] = sortedTickets[i]
    // }
    // return cache

    // function findSubsequence() {
    //     for (let i = start; i< sortedTickets.length; i++) {
    //         if (s.length) {
    //             if (Math.abs(sortedTickets[i]-s[s.length-1]) <= 1) {
    //                 s.push(sortedTickets[i])
    //             } else {
    //                 if (m < s.length) m = s.length;
    //                 s = [];
    //                 start = i
    //                 findSubsequence();
    //             }
    //         } else {
    //             s.push(sortedTickets[i])
    //         }
    //     }
    // }
    // return m;


console.log(maxTickets([87219039,
    87219155,
    87219158,
    87219236,
    87219061,
    87219017,
    87219128,
    87219212,
    527031931,
    397712388,
    87219081,
    87219073,
    546399511,
    87219090,
    87219262,
    87219080,
    87219123,
    136818482,
    87219085,
    87219169,
    87219042,
    87219266,
    87219023,
    87219146,
    88241119,
    87219086,
    770522343,
    217022056,
    87219238,
    87219203,
    87219196,
    87219009,
    87219260,
    982752564,
    87219218,
    87219139,
    87219036,
    87219008,
    87219062,
    318933275,
    87219179,
    87219220,
    87219044,
    87219242,
    399752349,
    87219016,
    87219258,
    87219127,
    87219011,
    87219230,
    560488816,
    87219184,
    87219133,
    87219056,
    87219047,
    87219138,
    87219010,
    87219109,
    87219117,
    826764685,
    87219270,
    87219157,
    162028128,
    87219108,
    185810329,
    87219248,
    87219137,
    87219215,
    87219162,
    87219084,
    446170015,
    87219121,
    87219264,
    87219033,
    87219186,
    87219040,
    87219223,
    87219100,
    87219126,
    87219255,
    87219021,
    87219037,
    87219168,
    87219160,
    87219149,
    87219026,
    369146571,
    87219148,
    308126746,
    87219063,
    87219152,
    87219229,
    87219122,
    389370424,
    87219234,
    87219259,
    904112685,
    87219180,
    87219038,
    87219175]))
console.log(maxTickets([76381259,
    76381138,
    76381070,
    945066526,
    76381167,
    76381145,
    76381108,
    76381144,
    76381152,
    76381038,
    289010257,
    71717155,
    76381174,
    76381184,
    739287854,
    76381137,
    792943612,
    76381151,
    480122360,
    76381045,
    76381086,
    76381134,
    76381303,
    871536345,
    76381199,
    76381040,
    282010633,
    76381322,
    33751031,
    76381127,
    76381039,
    162838412,
    76381056,
    76381150,
    76381253,
    240320388,
    76381176,
    76381301,
    76381143,
    76381173,
    76381083,
    141155113,
    76381090,
    76381271,
    76381092,
    76381072,
    441266868,
    925490857,
    76381141,
    76381304,
    76381274,
    76381139,
    76381125,
    661152981,
    76381306,
    76381329,
    76381252,
    76381105,
    76381061,
    61492366,
    76381317,
    76381229,
    76381046,
    76381264,
    29283549,
    76381088,
    76381132,
    251941860,
    76381324,
    76381206,
    76381182,
    76381312,
    76381220,
    76381183,
    99580322,
    76381180,
    76381251,
    76381313,
    76381297,
    76381305,
    76381197,
    76381159,
    76381164,
    76381194,
    76381284,
    76381237,
    76381115,
    76381245,
    263932632,
    76381099,
    76381170,
    76381101,
    76381258,
    76381202,
    76381136,
    76381189,
    76381082,
    76381318,
    76381041,
    76381231]))
console.log(maxTickets([5681908,
    5681901,
    792878081,
    5681943,
    5682000,
    5681930,
    5681987,
    54441282,
    5681919,
    5681905,
    5681948,
    599119327,
    5681985,
    5682047,
    5681950,
    5682033,
    5682055,
    530256092,
    5682038,
    5681932,
    5681870,
    681051019,
    5682024,
    5681920,
    5681864,
    5681891,
    5682034,
    5681945,
    5682032,
    5682012,
    5681989,
    5682049,
    5681939,
    79884522,
    5682081,
    5682026,
    5681856,
    495470229,
    812656106,
    5681857,
    680630609,
    938542980,
    5681935,
    5682079,
    5682075,
    5681860,
    5681992,
    5682063,
    5682051,
    5681969,
    5681858,
    5681925,
    568603392,
    5681960,
    5681916,
    5681880,
    5681897,
    5682010,
    5681844,
    183454784,
    5682041,
    5681956,
    5681840,
    495067518,
    5681902,
    5681882,
    5682078,
    5681952,
    506817437,
    5681903,
    5682023,
    5681889,
    5681953,
    5682061,
    5681888,
    108998567,
    418363103,
    5681944,
    5681869,
    5681937,
    5681981,
    5682008,
    5681846,
    5681996,
    5681978,
    5681966,
    5681968,
    5681906,
    5681910,
    210394868,
    5681971,
    5681964,
    5681913,
    5681904,
    5681926,
    5681924,
    5681911,
    5682018,
    5681980,
    580224201]))
console.log(maxTickets([ 602494679,
    99764111,
    99764245,
    99764198,
    387597473,
    903851632,
    99764242,
    183550198,
    99764127,
    99764177,
    99764205,
    99764235,
    99764251,
    99764282,
    99764264,
    99764274,
    99764101,
    374008521,
    647021907,
    794092804,
    99764156,
    99764246,
    99764280,
    796240961,
    99764162,
    99764312,
    760754274,
    99764137,
    99764152,
    23797172,
    99764160,
    921725871,
    99764259,
    99764139,
    99764224,
    99764176,
    313705041,
    99764273,
    204585111,
    99764146,
    99764330,
    99764126,
    99764204,
    99764189,
    99764332,
    99764319,
    99764099,
    99764249,
    99764151,
    99764174,
    99764241,
    529765505,
    99764214,
    99764291,
    853021476,
    102639972,
    99764220,
    99764142,
    99764257,
    99764184,
    99764239,
    691435663,
    99764266,
    99764265,
    99764234,
    99764116,
    99764130,
    99764256,
    99764258,
    99764134,
    886077351,
    99764197,
    99764316,
    432777801,
    99764243,
    99764296,
    99764304,
    99764267,
    99764343,
    99764121,
    99764295,
    99764305,
    99764149,
    99764183,
    99764096,
    99764145,
    99764133,
    99764097,
    99764311,
    99764238,
    374858580,
    99764272,
    99764188,
    99764323,
    99764320,
    99764194,
    339948827,
    99764278,
    99764112,
  ]))
console.log(maxTickets([ 49013656,
    49014705,
    49014601,
    49013002,
    49014494,
    49014471,
    49013158,
    49015667,
    49013146,
    49015406,
    49014250,
    49013148,
    49015514,
    49013960,
    49014836,
    49013354,
    49014922,
    49014356,
    49015095,
    49013885,
    49014905,
    49014979,
    759328026,
    49013473,
    49013372,
    49015292,
    49015245,
    49015295,
    49015251,
    49013701,
    49014504,
    49013709,
    49014287,
    49015235,
    49013551,
    49013812,
    49012982,
    49013115,
    49015058,
    49014395,
    49015495,
    49013374,
    49013840,
    49015074,
    49015571,
    49014656,
    49015115,
    49014784,
    49013181,
    49013606,
    449305550,
    49014124,
    49015089,
    49013238,
    49013920,
    268050275,
    49014670,
    972731783,
    49015180,
    49015287,
    49013744,
    49014138,
    49015640,
    49015181,
    49014638,
    49014485,
    49015419,
    49013466,
    49013353,
    49014272,
    49013931,
    49015643,
    49014554,
    49013201,
    881332612,
    49012972,
    49013727,
    49013493,
    49013841,
    49014779,
    49014976,
    49013120,
    310559813,
    49013090,
    49013192,
    49015520,
    49013743,
    49014858,
    49013818,
    49013786,
    482775650,
    49015673,
    49014043,
    49014428,
    49014582,
    49013620,
    49014730,
    49014009,
    49013194,
]))
console.log(maxTickets([ 79209145,
    79211310,
    79209746,
    79209186,
    79210149,
    79210591,
    79210562,
    79209013,
    79209170,
    79209086,
    79211520,
    79210181,
    79211441,
    79210001,
    79210357,
    79212132,
    79209029,
    79209657,
    803691181,
    79211614,
    79211737,
    79210318,
    79209386,
    79209555,
    79209743,
    79212079,
    11755664,
    79209501,
    79209301,
    79211616,
    79210788,
    503739103,
    79211015,
    79210778,
    79209637,
    79210279,
    79209232,
    79210037,
    79210552,
    79211580,
    79210636,
    79211286,
    79210482,
    79209535,
    79210322,
    79209076,
    79209394,
    79210110,
    79210534,
    79209754,
    79209595,
    79210567,
    79211977,
    79210730,
    79210266,
    79212025,
    79209370,
    79210802,
    79211120,
    79211083,
    79209739,
    79209694,
    79211054,
    79209042,
    79209866,
    79211800,
    79210192,
    79210233,
    79209008,
    79209369,
    79211670,
    79211439,
    79210068,
    79210548,
    79209664,
    79211355,
    79210125,
    79211842,
    79210960,
    79211919,
    79209765,
    79209867,
    79211078,
    79210971,
    79211104,
    79210470,
    79211422,
    79212032,
    79209708,
    79209561,
    79209935,
    79210542,
    79211039,
    79211643,
    79210927,
    79211596,
    79210992,
    79210184,
    79212019,
  ]))
console.log(maxTickets([ 92316594,
    92315469,
    92316718,
    92317311,
    92317417,
    92316789,
    325860512,
    92315741,
    92315940,
    92318642,
    92318631,
    92318135,
    92315465,
    92317979,
    92316505,
    92316841,
    92318206,
    92318561,
    92316509,
    92315799,
    92317776,
    92317511,
    92317021,
    92318043,
    92318257,
    92317887,
    92318718,
    92317136,
    92316207,
    92317466,
    92316256,
    92316838,
    92315709,
    92318618,
    92316064,
    92317392,
    648646772,
    92315763,
    92318201,
    92317111,
    92315637,
    92316155,
    92318559,
    92315548,
    92315921,
    92316000,
    92317703,
    639632973,
    92316141,
    92318131,
    92316650,
    92318622,
    92316082,
    92317704,
    92315624,
    884250330,
    92317677,
    92318425,
    92316111,
    92317270,
    92317970,
    92315980,
    92316439,
    800997052,
    92317429,
    92318096,
    188131064,
    92317548,
    92316252,
    92317592,
    92316717,
    92317824,
    92316236,
    223627570,
    92318281,
    92318568,
    92317312,
    92318522,
    92316009,
    92315819,
    92317088,
    92317022,
    92318534,
    92318706,
    92316026,
    92316791,
    92318052,
    92315682,
    92315474,
    437963910,
    92315908,
    92318348,
    92317490,
    92316931,
    92315881,
    92317423,
    92315978,
    92318123,
    92318450,
  ]))
console.log(maxTickets([ 21757954,
    21764211,
    21775445,
    21768303,
    21763049,
    21775401,
    21754770,
    21763201,
    21773401,
    21773246,
    21756201,
    21756161,
    21757643,
    21759668,
    21769831,
    21769120,
    21758243,
    21776581,
    21774601,
    21770182,
    21760881,
    21768818,
    21773038,
    21770349,
    21772215,
    21768122,
    21763175,
    21774023,
    21754811,
    21769574,
    21756707,
    21756291,
    21772617,
    21775211,
    21767843,
    311582542,
    21758310,
    21758464,
    21756604,
    21775786,
    21758166,
    21759749,
    21755497,
    21766879,
    21765222,
    21756335,
    21754111,
    21754415,
    21756560,
    21776204,
    21767677,
    21770613,
    21773341,
    21769509,
    21765637,
    21771752,
    21759129,
    21763254,
    21761416,
    21766909,
    21765675,
    21770404,
    21773864,
    21754806,
    21766941,
    21765301,
    21767401,
    21758766,
    21770666,
    21770343,
    21758003,
    21754840,
    21758700,
    21769094,
    21755571,
    21776323,
    21754365,
    21769227,
    21756462,
    21763184,
    21761954,
    21765073,
    21766032,
    21770912,
    21775706,
    21753987,
    21760336,
    21764552,
    21769179,
    21758267,
    21765914,
    21758630,
    21776056,
    21776231,
    21772608,
    21757847,
    21759489,
    21759693,
    21775782,
]))
console.log(maxTickets([ 50245728,
    50236446,
    50233873,
    50231045,
    50221348,
    50216507,
    50238550,
    50232495,
    50238138,
    50233160,
    50231967,
    50220104,
    50227503,
    50242811,
    50228411,
    50243534,
    50244124,
    50227187,
    50221625,
    50224172,
    50216749,
    50242318,
    50238738,
    50219382,
    50240014,
    50218991,
    50245248,
    50238520,
    50229973,
    50218047,
    50218997,
    50233147,
    50246472,
    50224340,
    50223183,
    50246682,
    50225363,
    50236982,
    50240861,
    50224428,
    50228322,
    50219963,
    50234202,
    50218442,
    50230057,
    50227856,
    50219146,
    50231193,
    50220646,
    50215956,
    50231415,
    50244408,
    50246372,
    50220319,
    50241654,
    50236625,
    50236994,
    50239271,
    50247531,
    50226413,
    50229647,
    50247088,
    50222897,
    50235963,
    50217224,
    50248760,
    50230213,
    50228826,
    50224603,
    50236585,
    50217293,
    50236431,
    50240841,
    50241890,
    50250319,
    50238109,
    50222174,
    50224085,
    50242208,
    50215446,
    50234116,
    50233029,
    50247274,
    50231987,
    50228129,
    50224055,
    50246012,
    50219448,
    50229509,
    50232830,
    50246949,
    50222145,
    50224523,
    50242549,
    50236295,
    50235794,
    50233703,
    50232659,
    50215541,
]))
console.log(maxTickets([ 75147245,
    75154649,
    75164115,
    75204772,
    75234186,
    75189045,
    75224511,
    75200328,
    75173584,
    75177621,
    75226814,
    75159759,
    75237037,
    75172721,
    75213949,
    75179267,
    75212746,
    75162418,
    75231871,
    75146628,
    75171209,
    75148846,
    75149591,
    75188478,
    75160430,
    75187147,
    75165811,
    75185003,
    75205064,
    75237762,
    75231536,
    75165091,
    75227069,
    75145506,
    75215741,
    75241380,
    75229069,
    75218467,
    75210217,
    75225885,
    75156033,
    75149116,
    75166866,
    75191891,
    75187811,
    75158478,
    75185197,
    75149236,
    75152200,
    75200920,
    75186571,
    75153521,
    75215852,
    75211681,
    75152050,
    75236380,
    75219110,
    75182239,
    75202613,
    75177019,
    75199425,
    75182816,
    75172112,
    75230558,
    75178555,
    75206633,
    75171467,
    75150841,
    75240510,
    75206616,
    75213086,
    75208567,
    75227007,
    75147802,
    75209624,
    75197334,
    75235665,
    75206508,
    75160805,
    75150930,
    75160799,
    75237277,
    75152690,
    75210655,
    75231099,
    75182663,
    75175687,
    75230830,
    75241941,
    75192296,
    75181521,
    75172577,
    75236381,
    75178408,
    75227184,
    75195923,
    75182423,
    75238845,
    75160328,
]))
console.log(maxTickets([ 33587718,
    33568856,
    33601891,
    33648615,
    33590105,
    33613712,
    33579614,
    33616398,
    33551398,
    33637271,
    33578207,
    33581295,
    33599438,
    33644111,
    33621846,
    33573943,
    33587901,
    33575538,
    33643960,
    33611868,
    33628999,
    33608388,
    33634338,
    33609007,
    33643939,
    33584537,
    33556499,
    33634705,
    33614342,
    33565396,
    33634086,
    33568341,
    33580254,
    33569067,
    33586425,
    33624619,
    33604530,
    33581686,
    33583402,
    33622003,
    33639979,
    33569781,
    33594728,
    33605461,
    33606931,
    33630752,
    33565787,
    33642734,
    33633570,
    33574614,
    33603410,
    33608264,
    33595974,
    33554820,
    33642377,
    33558765,
    33647707,
    33583376,
    33627735,
    33591035,
    33593252,
    33602917,
    33596462,
    33587268,
    33617427,
    33588102,
    33606893,
    33615802,
    33594457,
    33591626,
    33572742,
    33647480,
    33564585,
    33554271,
    33601775,
    33625807,
    33599997,
    33648614,
    33593911,
    33563568,
    33609131,
    33607824,
    33575394,
    33617555,
    33552325,
    33618353,
    33555376,
    33625524,
    33570473,
    33635589,
    33631683,
    33624566,
    33580467,
    33577759,
    33567635,
    33643328,
    33647156,
    33600178,
    33631865,
]))