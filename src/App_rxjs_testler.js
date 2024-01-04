import logo from "./logo.svg";
import { useEffect } from "react";
import Test from "./Test"
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import styles from './App.module.css'

/*
const observable = new Observable(observer => {
    observer.next(1);
    observer.next(5);
    observer.next(99);
}).subscribe(data => console.log(data));
*/


/*
const observable = new Observable(data => {
  data.next('hop');
  data.next(1);
  data.next('hoopp');
  data.next(5);
  data.complete();
});
observable.subscribe(data => {
  console.log(data);
})
*/

//Normalde observable.subscribe(data)
//Birden fazla observer çalıştırmak için Subject
const subject = new Subject();
//subscribe - Observer
subject.subscribe(data => { console.log('Birinci ' + data) })
subject.subscribe(data => { console.log('İkinci ' + data) })
subject.next(3);
subject.next(5);
subject.subscribe(data => { console.log('Üçüncü ' + data) })
subject.next(7);
subject.next(9);
subject.next("Okan");



ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data))


function App() {
  return (
    <div className={styles.App}>
        <>
        <h3>{process.env.NODE_ENV}</h3>
            <img src="/logo192.png" alt="" />
            <img src={logo} alt="" width={500} />
        </>
        <Test />
    </div>
  );
}

export default App;
