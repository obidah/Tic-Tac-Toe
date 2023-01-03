let NotWining = true;
document.getElementById('bt1').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
            
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt2').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt3').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt4').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt5').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt6').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt7').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt8').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces)
        console.log(RealPlaces)
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
document.getElementById('bt9').onclick = function() {
    if (this.textContent != "O" && this.textContent != "X") {
        this.textContent = 'X';
        const AllPlaces = [];
        const RealPlaces = [];
        for (i=1;i<=9;i++) {
            if (document.getElementById(`bt${i.toString()}`).textContent == "O" || document.getElementById(`bt${i.toString()}`).textContent == "X") {
                AllPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
                RealPlaces.push(document.getElementById(`bt${i.toString()}`).textContent);
            }else {
                RealPlaces.push(`bt${i.toString()}`);
            }
        }
        console.log(AllPlaces);
        console.log(RealPlaces);
        while (AllPlaces.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById(`bt${randomNumber.toString()}`).textContent != "X" && document.getElementById(`bt${randomNumber.toString()}`).textContent != "O") {
                setTimeout( function(){
                    document.getElementById(`bt${randomNumber.toString()}`).textContent = "O"},
                0)
                break
            }
        }
        CuttedPlaces = [RealPlaces.slice(0,3), RealPlaces.slice(3,6), RealPlaces.slice(6,10), [RealPlaces[0],RealPlaces[3],RealPlaces[8]], [RealPlaces[1],RealPlaces[4],RealPlaces[7]], [RealPlaces[2],RealPlaces[5],RealPlaces[8]], [RealPlaces[0],RealPlaces[4],RealPlaces[8]], [RealPlaces[2],RealPlaces[4],RealPlaces[6]]]
        console.log(CuttedPlaces)
        for(i=0;i<8;i++) {
            if (CuttedPlaces[i][0] == "X" && CuttedPlaces[i][1] == "X" && CuttedPlaces[i][2] == "X"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
            if (CuttedPlaces[i][0] == "O" && CuttedPlaces[i][1] == "O" && CuttedPlaces[i][2] == "O"){
                var WonX = document.getElementById("xwon");
                WonX.style.display = "block";
                break;
            }
        }
    }
}
    
