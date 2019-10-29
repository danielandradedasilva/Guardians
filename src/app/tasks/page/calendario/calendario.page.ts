import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ToastController, LoadingController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from 'src/app/service/agenda.service';
import { Agenda } from 'src/app/interface/agenda';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  private agendaId: string = null;
  public agenda: Agenda = {};
  private loading: any;
  private agendaSubscription: Subscription;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string,
              private agendaService: AgendaService,
              private activatedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private authService: AuthService,
              private toastCtrl: ToastController) {

                this.agendaId = this.activatedRoute.snapshot.params['id'];

                if (this.agendaId) { this.loadingAgenda(); }
              }

      // tslint:disable-next-line: use-life-cycle-interface
      /*Inicio da programação para salvar no banco de dados bo calendário*/
   ngOnDestroy() {
      if (this.agendaSubscription) { this.agendaSubscription.unsubscribe(); }
              }

              loadingAgenda() {
                this.agendaSubscription = this.agendaService.getAgenda(this.agendaId).subscribe(data => {
                  this.agenda = data;
                });
              }

              async saveAgenda() {
                await this.presentLoading();

                this.agenda.userId = this.authService.getAuth().currentUser.uid;

                if (this.agendaId) {
                  try {
                    await this.agendaService.updateAgenda(this.agendaId, this.agenda);
                    await this.loading.dismiss();

                    this.navCtrl.navigateBack('/calendario');
                  } catch (error) {
                    this.presentToast('Erro ao tentar salvar');
                    this.loading.dismiss();
                  }
                } else {
                  this.agenda.createdAt = new Date().getTime();

                  try {
                    await this.agendaService.addAgenda(this.agenda);
                    await this.loading.dismiss();

                    this.navCtrl.navigateBack('/calendario');
                  } catch (error) {
                    this.presentToast('Erro ao tentar salvar');
                    this.loading.dismiss();
                  }
                }
              }

              async presentLoading() {
                this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
                return this.loading.present();
              }

              async presentToast(message: string) {
                const toast = await this.toastCtrl.create({ message, duration: 2000 });
                toast.present();
              }
      /*Inicio da programação do calendário*/

  ngOnInit() {
    this.resetEvent();

  }
  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };

}

// Create the right event format and reload source
addEvent() {
  let eventCopy = {
    title: this.event.title,
    startTime:  new Date(this.event.startTime),
    endTime: new Date(this.event.endTime),
    allDay: this.event.allDay,
    desc: this.event.desc
  };

  if (eventCopy.allDay) {
    let start = eventCopy.startTime;
    let end = eventCopy.endTime;

    eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
    eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
  }

  this.eventSource.push(eventCopy);
  this.myCal.loadEvents();
  this.resetEvent();
}


// Change current month/week/day
next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}

// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}

// Focus today
today() {
  this.calendar.currentDate = new Date();
}

// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}

// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);

  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'De: ' + start + '<br><br>Até: ' + end,
    buttons: ['OK']
  });
  alert.present();
}

// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}

}

