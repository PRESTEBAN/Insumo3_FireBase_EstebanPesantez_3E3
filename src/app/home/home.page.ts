import { Component } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private db: Firestore) {}

  rutadetabla: any;
  ledstatus: boolean = false;
  ledstatus2: boolean = false;
  ledstatus3: boolean = false;
  ledstatus4: boolean = false;

  
  async toggleState() {
    this.ledstatus = !this.ledstatus;
    this.rutadetabla = doc(this.db, 'controlLED', 'LED1');
    await setDoc(this.rutadetabla, { encender: this.ledstatus});
    console.log(this.ledstatus);
  }

  async toggleState2() {
    this.ledstatus2 = !this.ledstatus2;
    this.rutadetabla = doc(this.db, 'controlLED', 'LED2');
    await setDoc(this.rutadetabla, { encender: this.ledstatus2});
    console.log(this.ledstatus2);
  }

  async toggleState3() {
    this.ledstatus3 = !this.ledstatus3;
    this.rutadetabla = doc(this.db, 'controlLED', 'LED3');
    await setDoc(this.rutadetabla, { encender: this.ledstatus3});
    console.log(this.ledstatus3);
  }

  async toggleState4() {
    this.ledstatus4 = !this.ledstatus4;
    this.rutadetabla = doc(this.db, 'controlLED', 'LED1');
    await setDoc(this.rutadetabla, { encender: this.ledstatus4 });
    console.log(this.ledstatus4);
  
    this.rutadetabla = doc(this.db, 'controlLED', 'LED2');
    await setDoc(this.rutadetabla, { encender: this.ledstatus4 });
  
    this.rutadetabla = doc(this.db, 'controlLED', 'LED3');
    await setDoc(this.rutadetabla, { encender: this.ledstatus4 });
  
    this.rutadetabla = doc(this.db, 'controlLED', 'LED4');
    await setDoc(this.rutadetabla, { encender: this.ledstatus4 });
  
    this.ledstatus = this.ledstatus4;
    this.ledstatus2 = this.ledstatus4;
    this.ledstatus3 = this.ledstatus4;
  }
  

}
