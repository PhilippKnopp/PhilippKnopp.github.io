var level1Type = [
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, // 24
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 5, 5, 5, 5, // 49
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 8, 8, 7, 7, 5, 5, 5, 5, 5, // 74
    5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 5, 5, 5, // 99
    5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 7, 5, 5, // 124
    5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 5, 5, // 149
    5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 7, 7, 5, 5, // 174
    5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 5, // 199
    5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 5, // 224
    5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 5, 5, // 249
    5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 7, 7, 7, 5, 5, // 274
    5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6, 5, 7, 7, 5, 5, 5, // 299
    5, 5, 5, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, // 324
    5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 6, 6, 0, 0, 6, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, // 349
    5, 5, 6, 0, 5, 5, 5, 5, 5, 5, 5, 6, 0, "0dc", "0dc", 0, 0, 0, "0do", "0do", 0, 5, 5, 5, 5, // 374
    5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 5, 0, "0dc", "0dc", 0, 0, 0, "0do", "0do", 0, 0, 0, 0, 5, //399
    5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, "0dc", "0dc", 0, 0, 0, "0do", "0do", 0, 5, 5, 5, 5,
    5, 0, 0, 6, 5, 5, 5, 5, 5, 6, 6, 6, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 0, 0, 5, 0, 0, 0, "0dc", "0dc", "0dc", 5, 5, 5, 5, //499
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, "0dc", "0dc", "0dc", 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, "0dc", "0dc", "0dc", 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, "0dc", "0dc", "0dc", 0, 0, 0, 0, 5, 5, 5, // 599
    5, 5, 5, 5, 5, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 5, // 624
    5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, // 699
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, // 724
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, // 749
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, // 774
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, // 799
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5,
    5, 5, 5, 0, 6, 6, 6, 0, 5, 5, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 6, 0, 0, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
];

var level1Info = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 24
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, // 49
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, // 74
    1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 1, 1, // 99
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 1, // 124
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 1, // 149
    1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 1, // 174
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, // 199
    1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, // 224
    1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, // 249
    1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 2, 3, 3, 3, 1, 1, // 274
    1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 3, 3, 1, 1, 1, // 299
    1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1,
    1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 5, 5, 5, 5, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 5, 6, 6, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1,
    1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 2, 2, 2, 1, 1, 1, 1, 1, 8, 8, 8, 6, 6, 1, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 6, 6, 1, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 6, 6, 1, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1,
    1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 5,
    1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1,
    1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1,
    1, 1, 1, 13, 13, 13, 13, 13, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1,
    1, 1, 13, 13, 13, 13, 13, 13, 13, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1,
    1, 1, 13, 13, 13, 13, 13, 13, 13, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1,
    1, 1, 13, 13, 13, 13, 13, 13, 13, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1,
    1, 1, 13, 13, 13, 13, 13, 13, 13, 1, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10, 1, 1,
    1, 1, 13, 13, 13, 13, 13, 13, 13, 1, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10, 1, 1,
    1, 1, 1, 13, 13, 13, 13, 13, 1, 1, 11, 11, 11, 11, 11, 10, 10, 10, 11, 11, 11, 11, 11, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 10, 11, 11, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

var level1Connections = [
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,2,2,0,1],[2,2,2,2,2,2,2,3],[2,2,2,2,2,2,2,2],[2,2,2,3,2,2,2,2],[1,1,1,1,1,2,2,1],[1,1,1,1,1,1,2,1],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,3,2,2,0,2,3,3],[3,1,1,1,1,1,0,2],[1,1,1,1,1,1,1,1],[1,1,3,1,0,1,1,1],[2,3,3,2,2,2,2,2],[0,0,0,0,0,0,0,0],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,2,0,0,0,2,3,3],[0,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[2,2,2,2,0,2,2,2],[1,1,1,1,0,0,0,1],[1,1,1,1,0,0,0,1],[3,2,0,0,0,0,0,3],[0,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,0,0,0,0,0,0],[0,0,0,1,1,1,0,0],[0,0,0,0,0,1,1,1],[0,0,0,1,1,1,0,0],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,0,0,0,0,1,1,1],[0,0,0,1,1,1,0,0],[1,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0],[1,1,0,0,0,1,1,1],[0,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,0,1,1,1],[0,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0],[1,1,0,0,0,1,1,1],[0,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,0,0,0,0,0,1],[0,1,1,1,1,1,0,0],[1,1,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,3,3,3,2,2,2],[1,1,1,1,1,1,0,6],[1,1,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1],[0,0,0,1,1,1,0,0],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,3,3,3,2,2,2],[0,1,1,1,1,1,0,6],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1],[0,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,3,3,3,2,2,2],[0,1,1,1,1,0,0,6],[1,1,1,1,0,1,0,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1],[0,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,1],[1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1],[0,1,0,1,1,1,1,1],[0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,0,0,1,1,1,1,1],[0,0,0,1,1,1,1,1],[0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,0,2,0,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,0,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,3,2,3,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[7,7,7,7,7,7,7,7],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,2,1,1,1],[1,1,1,1,2,2,0,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[1,1,1,1,0,2,2,1],[1,1,1,1,1,1,2,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,0,2,1,1,1,1],[3,3,1,1,1,1,1,3],[3,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,1],[1,3,3,3,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,3,3,3,3,3,3,3],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
];

var mageStartingPosition = [0,378];
var rogueStartingPosition = [0,353];
var barbStartingPosition = [0,232];

var caveCrawlerStartingPosition = [0,[116,168,192,193]];
var paleAcolyteStartingPosition = [0,[207,258,490,611,744,765,792]];
var palePriestStartingPosition = [0,[703,707,778,782,830,866]];
var ordrakStartingPosition = [0,[755]];

var bgMusic = [0, "lvl_1_BG_Music"];

function returnLevelType(level) {
	if (level == 1) {
		return level1Type;
	}
}
function returnLevelConnections(level) {
	if (level == 1) {
		return level1Connections;
	}
}
function returnLevelInfo(level) {
	if (level == 1) {
		return level1Info;
	}
}

function doors(char, tile) {
    
    if (fightmode == true) {
        if (char.movementCounter >= 1) {
            char.movementCounter--;
        } else {
            char.actionsCounter--;
        }
        updateGUI();
    }
    
    if (tile == 540 || tile == 541 || tile == 542 || tile == 590 || tile == 591 || tile == 592) {
        if (tileArray[tile].state == "0dc") {
            tileArray[540].state = "0do";
            tileArray[541].state = "0do";
            tileArray[542].state = "0do";
            tileArray[590].state = "0do";
            tileArray[591].state = "0do";
            tileArray[592].state = "0do";
            door2Img.setAlpha(1);
            eventDispatch("e4");
            tileArray[565].walkable = [0,1,1,1,1,1,0,0];
            tileArray[566].walkable = [1,1,1,1,1,1,1,1];
            tileArray[567].walkable = [1,1,0,0,0,1,1,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[540].state = "0dc";
            tileArray[541].state = "0dc";
            tileArray[542].state = "0dc";
            tileArray[590].state = "0dc";
            tileArray[591].state = "0dc";
            tileArray[592].state = "0dc";
            door2Img.setAlpha(0);
            tileArray[565].walkable = [0,0,0,0,0,0,0,0];
            tileArray[566].walkable = [0,0,0,0,0,0,0,0];
            tileArray[567].walkable = [0,0,0,0,0,0,0,0];
        }
    } else if (tile == 493 || tile == 494 || tile == 495 || tile == 518 || tile == 519 || tile == 520) {
        if (tileArray[tile].state == "0dc") {
            tileArray[493].state = "0do";
            tileArray[494].state = "0do";
            tileArray[495].state = "0do";
            tileArray[518].state = "0do";
            tileArray[519].state = "0do";
            tileArray[520].state = "0do";
            door4Img.setAlpha(1);
            tileArray[494].walkable = [1,1,1,1,0,1,0,1];
            tileArray[519].walkable = [0,1,0,1,1,1,1,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[493].state = "0dc";
            tileArray[494].state = "0dc";
            tileArray[495].state = "0dc";
            tileArray[518].state = "0dc";
            tileArray[519].state = "0dc";
            tileArray[520].state = "0dc";
            door4Img.setAlpha(0);
            tileArray[494].walkable = [1,1,1,1,0,0,0,1];
            tileArray[519].walkable = [0,0,0,1,1,1,1,1];
        }
    } else if (tile == 363 || tile == 364 || tile == 388 || tile == 389 || tile == 413 || tile == 414) {
        if (tileArray[tile].state == "0dc") {
            tileArray[363].state = "0do";
            tileArray[364].state = "0do";
            tileArray[388].state = "0do";
            tileArray[389].state = "0do";
            tileArray[413].state = "0do";
            tileArray[414].state = "0do";
            door5Img.setAlpha(1);
            tileArray[388].walkable = [1,1,0,1,0,1,1,1];
            tileArray[389].walkable = [0,1,1,1,1,1,0,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[363].state = "0dc";
            tileArray[364].state = "0dc";
            tileArray[388].state = "0dc";
            tileArray[389].state = "0dc";
            tileArray[413].state = "0dc";
            tileArray[414].state = "0dc";
            door5Img.setAlpha(0);
            tileArray[388].walkable = [1,1,0,0,0,1,1,1];
            tileArray[389].walkable = [0,1,1,1,1,1,0,0];
        }
    } else if (tile == 368 || tile == 369 || tile == 393 || tile == 394 || tile == 418 || tile == 419) {
        if (tileArray[tile].state == "0dc") {
            tileArray[368].state = "0do";
            tileArray[369].state = "0do";
            tileArray[393].state = "0do";
            tileArray[394].state = "0do";
            tileArray[418].state = "0do";
            tileArray[419].state = "0do";
            door6Img.setAlpha(1);
            tileArray[393].walkable = [1,1,0,1,0,1,1,1];
            tileArray[394].walkable = [0,1,1,1,1,1,0,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[368].state = "0dc";
            tileArray[369].state = "0dc";
            tileArray[393].state = "0dc";
            tileArray[394].state = "0dc";
            tileArray[418].state = "0dc";
            tileArray[419].state = "0dc";
            door6Img.setAlpha(0);
            tileArray[393].walkable = [1,1,0,0,0,1,1,1];
            tileArray[394].walkable = [0,1,1,1,1,1,0,0];
        }
    }

    clearNodes();
    
    // Ist durch das öffnen der Tür ein Feind in Alarmbereitschaft versetzt worden?
    enemyVisibility();  // Schaut ob durch das Öffnen der Tür mehr Feinde sichtbar wurden und setzt diese in Alarmbereitschaft
    checkFightmode();   // Sind jetzt Feinde in Alarmbereitschaft, die es vorher nicht waren werden die Aktionen aufgefüllt
    showActions(char);
    
}

function ritual(energy, priestDied = false) {
    eventReminder.ritualProgress -= energy;
    if (eventReminder.ritualProgress <= 0) {
        eventReminder.ritualProgress = 0;
        circle1Img.setAlpha(1);
        eventReminder.ritualState = "succesful";
        let ordrak = figuresOnMap[figuresOnMap.findIndex((element) => element.name == "Ordrak")];
        tileArray[755].walkable = [1,1,1,1,1,1,1,1];
        ordrak.setOnMap();
        showText(textL1[45]);
    } else {
        circle1Img.setAlpha(1-(eventReminder.ritualProgress/13));
        eventReminder.ritualState = "started";
    }
    if (priestDied == true && eventReminder.ritualState != "succesful") {
        eventReminder.ritualMembers -= 1;
        if (eventReminder.ritualMembers <= 0) {
            eventReminder.ritualState = "failed";
            circle1Img.setAlpha(0);
            let ordrak = figuresOnMap[figuresOnMap.findIndex((element) => element.name == "Ordrak")];
            ordrak.health = 0;
            tileArray[755].walkable = [1,1,1,1,1,1,1,1];
            swirl1.setVisible(false);
            swirl2.setVisible(false);
            figuresOnMap.splice(figuresOnMap.findIndex(findDeadChar),1);
            addXP(ordrak.loot);
        }
    }
}

var textTravelL1 = [
/*0*/   "In the oldest part of the woods, there is a deep cave. Two adventurers are sent there by a local guardsman, to find his missing daughter Arowia."
]

var textL1 = [
/*0*/   "After climbing for some time, the cave widens to an underground chamber. Two pale humanoid beings with sharp teeth and black eyes are holding a woman captive. She is not the girl they wanted to rescue, but she seems to be in need for their help anyway.",
/*1*/   "I can't see that.",
/*2*/   "A cold and dark cave. The walls are rough and wet. There is an impressive temple, that was cut out of the stone next to a lake.",
/*3*/   "Even though the water is crystal clear the surface of the lake only reflects the dark surroundings. That makes it impossible to tell how deep the lake truly is.",
/*4*/   "There is a faint glimmer of something at the bottom of the lake.",
/*5*/   "Stairs lead to an ancient propylon. It is carved directly into the rock of the cave. The dark stone gives it a sinister aura.",
/*6*/   "A barren, elongated room. A part of the wall is missing and gives way to a hole in the ground that is filled with rubble. Something seems wrong.",
/*7*/   "There is a trap that was supposed to push victims through a moovable wall into a pit filled with spikes.",
/*8*/   "The pit is about three meters deep. Once the pit was filled with spikes, but most of them rusted away.",
/*9*/   "Hover over the tokens on the map to see a portrait or click on one of the heroines to activate her. Depending on the heroines's position and abilities, you can select various actions.",
/*10*/  "A stone block engraved with religious runes.",
/*11*/  "A huge, cathedral like room, that is illuminated by blue, flickering candles. There are no pews, only an altair in front of a podium. In the middle of the podium there is a pedestral with a dark idol, standing upon it. The writhing shadows in the corners of this room seem threatening and darker than they are supposed to.",
/*12*/  "An austere corridor. The walls were cut into the rock in a way to give them a look as if they were made out of big, smooth stoneblocks.",
/*13*/  "The room has a dome-like ceiling and columns along the walls. The floor is engraved with intricate runes and a circle.",
/*14*/  "An idol of the god in the deep. It looks like it was made during a time when humans had only just learned to use tools. Despite its primitive and threatening looks it still has an aura of superiority and knowledge.",
/*15*/  "With his last hissing breath, a pale priest tells Caelith, that Arowia was sent deeper into the tunnels, as a tribute to an allied faction. Then he dies and the room falls silent. The three heroines look at each other in silence and come to the unspoken agreement that they will not surrender until they end their quest, however slim the odds might be. A few hours of rest later, they search the old temple for a way out and find a steep staircase that leads deeper into the darkness. Knowing full well, that their adventure has only just begun, they start their descent, fighting, to keep what little hope they have left, alive.",
/*16*/  "I can not go there, there is only space enough for one.",
/*17*/  "I can not go there.", // Tile ist nicht betretbar
/*18*/  "I don't know how to get there.", // es wird kein Pfad hierher gefunden, Tile ist aber betretbar
/*19*/  "She is not my enemy.",
/*20*/  "I can not reach that enemy from here.",
/*21*/  "The cast iron portal opens surprisingly smoothly. Silent chanting can be heard from deeper within the temple. Entering feels like an unwelcome intrusion.",
/*22*/  "This corridor leads to some empty rooms. It's hard to guess what they were once used for.",
/*23*/  "I found nothing of value.",
/*24*/  "Caelith tries to retrieve the item from the bottom of the lake. But it is more likely for her to suffer from hypothermia than to reach it.",
/*25*/  "Leng, remind me why I am doing this?",
/*26*/  "Rhiva tries with an iron determination to retrieve the item from the bottom of the lake. After some time she resurfaces almost unconscious.",
/*27*/  "I can try again.",
/*28*/  "Leng dives to the bottom of the icy lake. Her eyes adjusting quickly to the complete darkness. As she reaches for the glowing crystals she feels that something large starts to move in the water.",
/*29*/  "I've got it. We should go...  Now!",
/*30*/  "A calm and very deep lake.",
/*31*/  "We should press on.",
/*32*/  "As Leng tries to disable the trap the old mechanism breaks spraying the surroundings with a hail of wooden and metal shrapnel.",
/*33*/  "...",
/*34*/  "Caelith closes her eyes and invisible tendrils start to manipulate the mechanism. But she misjudges the state of the materials and the trap breaks, spraying the surroundings with a hail of wooden and metal shrapnel.",
/*35*/  "A just reward for not beeing careful enough.",
/*36*/  "With coordinated and fast movements Leng pulls out her tools and starts working through the cracks of the floor in front of her. She unhinges a lever, disabeling the presure plates ahead.",
/*37*/  "Caelith closes her eyes and invisible tendrils start to manipulate the mechanism, unhinging a lever and disabeling the presure plates ahead.",
/*38*/  "The doors open to a huge cathedral like room. The chanting stops immediately.",
/*39*/  "",
/*40*/  "Rhiva dives deeper and deeper, with her pride not allowing her to give up. After a while Leng sprints to her retrieving Rhivas unconscious Body from the depths of the icy lake.",
/*41*/  "You are stubborn way past the point of stupidness!",
/*42*/  "Not while there is a fight!",
/*43*/  "An unholy ritual can be heard as the heroines descent further down the stairs",
/*44*/  "It sounds like they are summoning something.",
/*45*/  "Oily smoke and shadows start to form a large figure in the middle of the summoning circle.",
/*46*/  "The ages old relic breaks in half.",
/*47*/  "We might have done something good.",
/*48*/  "... or very dangerous.",
/*49*/  "Something seems to be pushing the adversaries way beyond their capabilities.",
/*50*/  "It feels like something very angry is watching us!",
];

var textL1Enemy = [
/*0*/   "We will skin you and let you drown in your own blood as punishment for praying to treacherous Gods!",
/*1*/   "Who are you! My brothers and sisters, protect us from the blind and evil ways of the surface!",
];

var textL1Chars = [
/*0*/   "An apprentice mage from the twisted academy with a good heart.",
/*1*/   "A proud warrior, born in a deadly jungle.",
/*2*/   "A rogue from a sunken city.",
/*3*/   "This dog sized, reptile has sharp teeth and translucent skin.",
/*4*/   "This bald, humanoid beeing has murder in its black eyes. A black robe covers his sickly, pale skin and a religios symbol is hanging around his neck.",
/*5*/   "A black robe and an unholy symbol show this pale-one‘s sinister power and status. He fanatically swings a vicious iron mace.",
/*6*/   "A large demon made of smoke and coiling black oil. He is unmitigated brutality but something seems to hold him back."
];