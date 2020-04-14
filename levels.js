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
    5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, "0dc", "0dc", "0dc", 6, 5, 7, 7, 5, 5, 5, // 299
    5, 5, 5, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 6, 6, 0, 0, 6, "0dc", "0dc", "0dc", 5, 5, 5, 5, 5, 5, 5,
    5, 5, 6, 0, 5, 5, 5, 5, 5, 5, 5, 6, 0, "0dc", "0dc", 0, 0, 0, "0do", "0do", 0, 5, 5, 5, 5,
    5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 5, 0, "0dc", "0dc", 0, 0, 0, "0do", "0do", 0, 0, 0, "0e3", 5,
    5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, "0dc", "0dc", 0, 0, 0, "0do", "0do", 0, 5, 5, 5, 5,
    5, 0, 0, 6, 5, 5, 5, 5, 5, 6, 6, 6, "0t1", "0t1", 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, "0t1", "0t1", 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, "0t1", "0t1", 5, 0, 0, 0, "0dc", "0dc", "0dc", 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, "0dc", "0dc", "0dc", 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, "0dc", "0dc", "0dc", 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, "0dc", "0dc", "0dc", 0, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 5, 5, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, "6e5", 5,
    5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 5, 5, "6e6", 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5,
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5,
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5,
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5,
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5,
    5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5,
    5, 5, 5, 0, 6, 6, 6, 0, 5, 5, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 0, 0, 5, 5, 5, 5, 5, 5,
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
    1, 2, 2, 2, 1, 1, 1, 1, 1, 8, 8, 8, 7, 7, 1, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 7, 7, 1, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 7, 7, 1, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1,
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
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 14, 11, 11, 1, 1, 1, 1, 1, 1,
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
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,2,0,0,0,2,3,3],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
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
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,0,2,0,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1],[0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
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

function trap1(victim) {
    victim.pathToTravel.length = 0;
    tileArray[victim.onTile].occupiedBy = "";
    trap1Sprt.setAlpha(1);
    trap1Sprt.setFrame(1);
    tileArray[437].state = 0;
    tileArray[438].state = 0;
    tileArray[462].state = 0;
    tileArray[463].state = 0;
    tileArray[487].state = 0;
    tileArray[488].state = 0;
    if (victim.onTile == 437 || victim.onTile == 438) {
        victim.onTile = 436;
    } else if (victim.onTile == 462 || victim.onTile == 463) {
        victim.onTile = 461;
    } else if (victim.onTile == 487 || victim.onTile == 488) {
        victim.onTile = 486;
    }
    victim.x = tileArray[victim.onTile].x;
    victim.y = tileArray[victim.onTile].y;
    tileArray[victim.onTile].occupiedBy = "figure";
}

function disableTrap1() {
    let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
    if (getRandomInt(activeChar.dieSize, activeChar.explodes) <= 3) {
        activeChar.health -= 1;
        if (activeChar == rogue) {
            showText(textL1[32], activeChar, textL1[33]);
        } else if (activeChar == mage) {
            showText(textL1[34], activeChar, textL1[35]);
        } 
    } else {
        if (activeChar == rogue) {
            showText(textL1[36]);
        } else if (activeChar == mage) {
            showText(textL1[37]);
        } 
    }
    addXP(8);
    showActions(activeChar);
    trap1Sprt.setAlpha(1);
    trap1Sprt.setFrame(1);
    tileArray[437].state = 0;
    tileArray[438].state = 0;
    tileArray[462].state = 0;
    tileArray[463].state = 0;
    tileArray[487].state = 0;
    tileArray[488].state = 0;
}

function doors(char, tile) {
    
    if (fightmode == true) {
        if (char.movementCounter >= 1) {
            char.movementCounter--;
        } else {
            char.actionsCounter--;
        }
    }
    
    if (tile == 290 || tile == 291 || tile == 292 || tile == 340 || tile == 341 || tile == 342) {
        if (tileArray[tile].state == "0dc") {
            tileArray[290].state = "0do";
            tileArray[291].state = "0do";
            tileArray[292].state = "0do";
            tileArray[340].state = "0do";
            tileArray[341].state = "0do";
            tileArray[342].state = "0do";
            door1Img.setAlpha(1);
            eventDispatch(char, "e2");
            tileArray[315].walkable = [0,1,1,1,1,1,0,0];
            tileArray[316].walkable = [1,1,1,1,1,1,1,1];
            tileArray[317].walkable = [1,1,0,0,0,1,1,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[290].state = "0dc";
            tileArray[291].state = "0dc";
            tileArray[292].state = "0dc";
            tileArray[340].state = "0dc";
            tileArray[341].state = "0dc";
            tileArray[342].state = "0dc";
            door1Img.setAlpha(0);
            tileArray[315].walkable = [0,0,0,0,0,0,0,0];
            tileArray[316].walkable = [0,0,0,0,0,0,0,0];
            tileArray[317].walkable = [0,0,0,0,0,0,0,0];
        }
    } else if (tile == 540 || tile == 541 || tile == 542 || tile == 590 || tile == 591 || tile == 592) {
        if (tileArray[tile].state == "0dc") {
            tileArray[540].state = "0do";
            tileArray[541].state = "0do";
            tileArray[542].state = "0do";
            tileArray[590].state = "0do";
            tileArray[591].state = "0do";
            tileArray[592].state = "0do";
            door2Img.setAlpha(1);
            eventDispatch(char, "e4");
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
            tileArray[394].walkable = [0,1,1,1,1,1,0,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[363].state = "0dc";
            tileArray[364].state = "0dc";
            tileArray[388].state = "0dc";
            tileArray[389].state = "0dc";
            tileArray[413].state = "0dc";
            tileArray[413].state = "0dc";
            door5Img.setAlpha(0);
            tileArray[388].walkable = [1,1,0,0,0,1,1,1];
            tileArray[389].walkable = [0,1,1,1,1,1,0,0];
        }
    } else if (tile == 368 || tile == 367 || tile == 393 || tile == 394 || tile == 418 || tile == 419) {
        if (tileArray[tile].state == "0dc") {
            tileArray[368].state = "0do";
            tileArray[367].state = "0do";
            tileArray[393].state = "0do";
            tileArray[394].state = "0do";
            tileArray[418].state = "0do";
            tileArray[418].state = "0do";
            door6Img.setAlpha(1);
            tileArray[393].walkable = [1,1,0,1,0,1,1,1];
            tileArray[394].walkable = [0,1,1,1,1,1,0,1];
        } else if (tileArray[tile].state == "0do") {
            tileArray[368].state = "0dc";
            tileArray[367].state = "0dc";
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
    let fightmodeNow = fightmode;       // Aktueller Spielmodus: Erkuden oder Kampf
    enemyVisibility();                  // Schaut ob durch das Öffnen der Tür mehr Feinde sichtbar wurden und setzt diese in Alarmbereitschaft
    checkFightmode();                   // Sind jetzt Feinde in Alarmbereitschaft, die es vorher nicht waren werden alle Chars deaktiviert und die Aktionen aufgefüllt
    if (fightmodeNow == fightmode) {    // Wenn weiterhin der gleiche Kampf ist oder normal weiter Erkundet wird:
        showActions(char);              // Wird der Char wieder aktiviert und kann normal weitermachen
    }
    
}

var textL1 = [
/*0*/   "In the oldest part of the woods, there is a damp cave. Two adventurers who were sent there by a local\nguardsman, to find his missing daughter Arowia, are climbing deeper and deeper, until they detect two\npale humanoid beings with sharp teeth and black eyes. The heroines observe that these creatures are\nholding a woman captive.\nShe is not the girl they wanted to rescue, but she seems to be in need for their help anyway.\nThe young adventurers hear one of the creatures speaking with a coarse voice.",
/*1*/    "I can't see that.",
/*2*/    "A cold and dark cave. The walls are rough and wet.\nThere is an impressive temple, that was cut out of the stone next to a lake.",
/*3*/    "Even though the water is crystal clear the surface of the lake only reflects the dark surroundings. That makes it impossible to tell how deep the lake truly is.",
/*4*/    "There is a faint glimmer of something at the bottom of the lake.",
/*5*/    "Stairs lead to an ancient propylon. It is carved directly into the rock of the cave. The dark stone gives it a sinister aura.",
/*6*/    "A barren, elongated room. A part of the wall is missing and gives way to a hole in the ground that is filled\nwith rubble. Something seems wrong.",
/*7*/    "There is a trap that was supposed to push victims through a moovable wall into a pit filled with spikes.",
/*8*/    "The pit is about three meters deep. Once the pit was filled with spikes, but most of them rusted away.",
/*9*/    "Click on a Character to activate it\nDepending on Position, you can select various Actions.",
/*10*/    "A stone block engraved with religious runes.",
/*11*/    "A huge, cathedral like room, that is illuminated by blue, flickering candles. There are no pews, only an\naltair in front of a podium. In the middle of the podium there is a pedestral with a dark idol\nstanding upon it. The writhing shadows in the corners of this room seem threatening and darker than they are supposed to.",
/*12*/    "An austere corridor. The walls were cut into the rock in a way to give them a look as if they were made out\nof big, smooth stoneblocks.",
/*13*/    "The room has a dome-like ceiling and columns along the walls. The floor is engraved with intricate runes\nand a circle.",
/*14*/    "An idol of the god in the deep. It looks like it was made during a time when humans had only just learned to\nuse tools. Despite its primitive and threatening looks it still has an aura of superiority\nand knowledge.",
/*15*/    "With his last hissing breath, a pale priest tells Caelith, that Arowia was sent deeper into the tunnels, as a tribute to an allied faction. Then he dies and the room falls silent. The three heroines look at each other in silence and come to the unspoken agreement that they will not surrender until they end their quest, however slim the odds might be. A few hours of rest later, they search the old temple for a way out and find a steep staircase that leads deeper into the darkness. Knowing full well, that their adventure has only just begun, they start their descent, fighting to keep the last spark of hope alive.",
/*16*/    "I can not go there, there is only space enough for one.",
/*17*/    "I can not go there.",
/*18*/    "I don't know how to get there.",
/*19*/    "She is not my enemy.",
/*20*/    "I can not reach that enemy from here.",
/*21*/    "The cast iron portal opens surprisingly smoothly. Silent chanting can be heard from deeper within the temple. Entering feels like an unwelcome intrusion.",
/*22*/    "This corridor leads to some empty rooms. It s hard to guess what they were once used for.",
/*23*/    "I found nothing of value.",
/*24*/    "Caelith tries to retrieve the item from the bottom of the lake. But it is more likely for her to suffer from hypothermia than to reach it.",
/*25*/    "Leng, remind me why I am doing this?",
/*26*/    "Rhiva tries with an iron determination to retrieve the item from the bottom of the lake. After some time she resurfaces almost unconscious.",
/*27*/    "I can try again!",
/*28*/    "Leng dives deep and deeper to the bottom of the icy lake. Her eyes adjust quickly to the complete darkness of the lake. As she reaches for the glowing crystals she feels that something large started moving in the water.",
/*29*/    "I've got it. We should go... \nNow!",
/*30*/    "A calm and very deep lake.",
/*31*/    "We should press on.",
/*32*/    "As Leng tries to disable the trap the old mechanism breaks spraying the surroundings with a hail of wooden and metal shrapnel.",
/*33*/    "...",
/*34*/    "Caelith closes her eyes and invisible tendrils start to manipulate the mechanism. But she misjudges the state of the materials and the trap breaks, spraying the surroundings with a hail of wooden and metal shrapnel.",
/*35*/    "A just reward for not beeing careful enough.",
/*36*/    "With coordinated and fast movements Leng pulls out her tools and starts working through the cracks of the floor in front of her. She unhinges a lever, disabeling the presure plates ahead.",
/*37*/    "Caelith closes her eyes and invisible tendrils start to manipulate the mechanism, unhinging a lever and disabeling the presure plates ahead.",
/*38*/    "The doors open to a huge cathedral like room. The chanting stops immediately.",
/*39*/    "Who are you! My brothers and sisters, protect us from the blind and evil ways of the surface!",
];

var textL1Enemy = [
/*0*/   "We will skin you and let you drown in your own blood as punishment for praying to\ntreacherous Gods!"
];

var textL1Chars = [
/*0*/   "An apprentice mage from the twisted academy with a good heart.",
/*1*/   "A proud warrior, born in a deadly jungle.",
/*2*/   "A rogue from a sunken city.",
/*3*/   "This dog sized, reptile has sharp teeth and translucent skin.",
/*4*/   "This bald, humanoid beeing has murder in its black eyes. A black robe covers his\nsickly, pale skin and a religios symbol is hanging around his neck.",
/*5*/   "A black robe and an unholy symbol show this pale-one‘s sinister power and status. He fanatically swings a vicious iron mace.",
/*6*/   "A large demon made of smoke and coiling black oil. He is unmitigated brutality but something seems to hold him back."
];

