import { Component, OnInit, Inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-reszveny-dialog',
  templateUrl: './save-reszveny-dialog.component.html',
  styleUrls: ['./save-reszveny-dialog.component.scss']
})
export class SaveReszvenyDialogComponent implements OnInit {

  
  private haladasValue: number = 0;
  subscription: Subscription;
  isBetoltve: boolean;
  
  progressbarValue = 0;
  curSec: number = 0;

  constructor(public dialogRef: MatDialogRef<SaveReszvenyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
    this.isBetoltve = true;
    this.save(15);
  }

  save(seconds: number) {

      const time = seconds;
      const timer$ = interval(1000);
  
      const sub = timer$.subscribe((sec) => {
        this.progressbarValue = this.progressbarValue + seconds;
        this.haladasValue = this.progressbarValue;
        this.curSec = sec;
        if(this.haladasValue == 100) {
          this.isBetoltve = true;
        }
  
        if (this.curSec === seconds) {
          sub.unsubscribe();
        }
      });

      // visszaállni a kezdő oldalra üresen
      
    }






    /*const observable = interval(100);

  
     var observer = {
      next: x => {
        this.$haladasValue  = x;
        if(x == 100){
          this.isBetoltve = true;
        }
      }
      , 
      error: error => console.error(error),
      complete: () => console.log('betöltés rendben')
    }

    observable.subscribe(observer);*/

    close(){
      this.dialogRef.close();
    }

    /**
     * Getter $haladasValue
     * @return {number }
     */
	public get $haladasValue(): number  {
		return this.haladasValue;
	}

    /**
     * Setter $haladasValue
     * @param {number } value
     */
	public set $haladasValue(value: number ) {
		this.haladasValue = value;
	}


}
