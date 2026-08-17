/*Manually loaded my semester's timetable into arrays*/
const d1 = [["English","09:45"],
            ["English","10:40"]];
const d2 = [["Physics","12:30"],
            ["Physics","13:20"]];
const d3 = [["EEE","08:00"],
            ["EEE","08:50"],
            ["Linear Algebra/Calculus","10:40"],
            ["Physics","09:45"]];
const d4 = [["Linear Algebra/Calculus","12:30"],
            ["Linear Algebra/Calculus","13:25"],
            ["Physics","14:20"],["DS/AI","15:10"],
            ["EEE","16:00"]];
const d5 = [["DS/AI","08:00"],
            ["DS/AI","08:50"],
            ["EEE","09:45"],
            ["English","10:40"],
            ["Linear Algebra/Calculus","11:35"],
            ["Engineering Graphics","13:25"],
            ["Engineering Graphics","14:20"],
            ["Engineering Graphics","15:10"],
            ["Engineering Graphics","16:00"]];
const days = [d5,d1,d2,d3,d4];

let maincal = CalendarApp.getDefaultCalendar();

function main_script(date, days) {
  let indiv_day = Number(date.slice(8,10));
  let indiv_month = Number(date.slice(5,7));
  let indiv_year = Number(date.slice(0,4));
  
  for (let i=0; i<days.length; i+=1) {
    for (let j=0; j<days[i].length; j+=1) {
      const sub = days[i][j][0];
      let startt = days[i][j][1];

      let starthour = Number(startt.slice(0, 2));
      let startmins = Number(startt.slice(3, 5));

      let formatted_startdate = new Date(indiv_year,(indiv_month-1), indiv_day, starthour, startmins);

      let start_dt = new Date(formatted_startdate);
      let end_dt = new Date(start_dt);

      end_dt.setMinutes(end_dt.getMinutes() + 50);
      /*Each class takes 50 minutes to be done*/
      console.log("Subject:", sub);
      console.log("Start:", start_dt);
      console.log("End:", end_dt);
      console.log("Calendar:", maincal.getName());

      maincal.createEvent(sub,start_dt,end_dt);
    }
    /*Date progression system*/
    if (indiv_month === 1 || indiv_month === 3 || indiv_month === 5 || indiv_month === 7 || indiv_month === 8 || indiv_month === 10 || indiv_month === 12) {
      if (indiv_day === 31) {
        indiv_month += 1;
        indiv_day = 1;
      }
      else {
        indiv_day += 1;
      }
    }
    else if (indiv_month === 4 || indiv_month === 6 || indiv_month === 9 || indiv_month === 11) {
      if (indiv_day === 30) {
        indiv_month += 1;
        indiv_day = 1;
      }
      else {
        indiv_day += 1;
      }
    }
    else if (indiv_month === 2) {
      if (indiv_day === 28) {
        indiv_month += 1;
        indiv_day = 1;
      }
      else {
        indiv_day += 1;
      }
    }
  }
}

main_script("2026-07-13",days)
/*date format = new Date('July 20, 2026 20:00:00 UTC')*/

/*Sample function because google API runs main_script() without this function*/
function test() {
  console.log("Hey.");
}
