import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription, from, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit, OnDestroy {

  public addTeacherView: boolean;
  public teacherListView = true;
  subscription: Subscription;
  teachers: AngularFireList<any>;
  teachers$: Observable<any[]>;
  teacher: any = {};
  gender = 'Gender';
  formState: string;
  constructor(private db: AngularFireDatabase) {
    this.teachers = this.db.list('/teachers');
    this.teachers$ = this.teachers.snapshotChanges().pipe(map(action => {
      return action.map(c => ({ key: c.payload.key, ...c.payload.val()
    }));


    // this.teachers = this.teachers$;

    // this.subscription = db.list('/teachers')
    // .valueChanges()
    // .subscribe(teachers => {
    //   this.teachers = teachers;
    //   console.log(this.teachers);
    //   });
  }));
}


  ngOnInit() {
    // this.teachers = this.db.list('/teachers');
    // this.teachers$ = this.teachers.valueChanges();

    // this.subscription = this.db.list('/teachers')
    // .valueChanges()
    // .subscribe(teachers => {
    //   this.teachers = teachers;
    //   console.log(this.teachers);
    //   });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  selectGender(gender) {
    this.gender = gender;
  }

  addTeacher () {
    this.teacher['gender'] = this.gender;
    if (this.teacher.hasOwnProperty('key')) {
        const teacher = this.teacher;
        this.db.object('/teachers/' + teacher.key).update(this.teacher)
          .then(() => {
            console.log('Updated...');
            this.teacher = {};
            this.gender = 'Gender';
          });
    } else {
      this.db.list('teachers').push(this.teacher)
        .then(() => {
          console.log('Success');
          this.teacher = {};
        });
    }
  }

  updateTeacher (teacher) {
    this.teacher = {};
    this.teacher = teacher;
    this.gender = this.teacher['gender'];
    this.addNewTeacher('Update');
  }

  deleteTeacher (teacher) {
    this.db.object('/teachers/' + teacher.key).remove()
      .then(() => {
        console.log('Updated...');
        this.teacher = {};
      });
  }
  public addNewTeacher (formState: string) {
    this.formState = formState;
    this.addTeacherView = true;
    this.teacherListView = false;
  }
  public closeAddNewTeacher () {
    this.addTeacherView = false;
    this.teacherListView = true;
  }
}
