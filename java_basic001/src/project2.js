class Car {
    name = "";
    model = "";
    weight = "";
    color = "";

    start(){
        alert(this.name + "출발합니다");
    }
    drive(){
        alert(this.name + "운전합니다");
    }
    brake(){
        alert(this.name + "브레이크를 밟습니다");
    }
    stop(){
        alert(this.name + "정지합니다");
    }
 }

let fiat500 = new Car();
fiat500.name = "Fiat";
fiat500.model = "500";
fiat500.weight = "850kg";
fiat500.color = "white";
fiat500.start();
fiat500.drive();
fiat500.stop();

let accentMd = new Car("Accent", "MD", "700kg", "gray");
accentMd.start();
accentMd.stop();

