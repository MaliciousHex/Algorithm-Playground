https://www.hackerrank.com/challenges/a-very-big-sum

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function aVeryBigSum(n, ar) {
    // Complete this function
    var x =0;
    for(var i = 0 ; i < n ; i++){
        x = x + ar[i];
    }
    
    return x;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = aVeryBigSum(n, ar);
    process.stdout.write("" + result + "\n");

}