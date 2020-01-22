<template>
  <div class="calender">
    
    <ul>
      <li class="prev"><i class="fa fa-fw fa-chevron-left" @click="subtractMonth" ></i></li>
      <li class ="next"><i class="fa fa-fw fa-chevron-right" @click="addMonth" ></i></li>
      <li id="monthTitle">{{month + ' - ' + year}}</li>
      
    </ul>
 
    

   
    <ul class ="weekdays">
      <li class = "box " v-for ="(day,index) in days" :key="index">
        {{day}}
      </li>
   </ul>
  


    <ul class = "dates">
      <li class="box" v-for="(blank,index) in firstDayOfMonth" :key="index">&nbsp;
      <li class= "box" v-for="(date,index1) in daysInMonth " :key="index1"
      :class="{'current-day':date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">
      

      <span>{{date}}</span>
        

  
    </li>
    <!-- <div v-for="day in dates"> <span v-if="day > 0">{ day }}</span><div>{{ scheduleItem(day)  }}</div></div> -->
    </ul>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: 'Calender',
  data() {
    return{
      today: moment(),
      dateContext:moment(),
      days:['S','M','T','W','T','F','S']
    }
  }
,
computed:{
  year: function(){
    var t = this;
    return t.dateContext.format('Y');
  },
  month: function() {
    var t = this;
    return t.dateContext.format('MMMM');
  },

  daysInMonth: function(){
    var t =this;
    return t.dateContext.daysInMonth();
  },
  currentDate:function (){
    var t = this;
    return t.dateContext.get('date');
  },
  firstDayOfMonth : function (){
    var t = this;
    var firstDay = moment(t.dateContext).subtract((t.currentDate -1),'days');
    return firstDay.weekday();
  },

  initialDate: function(){
    var t = this;
    return t.today.get('date');
  },
  initialMonth: function(){
    var t= this;
    return t.today.format('MMMM');

  },
  initialYear: function() {
    var t = this;
    return t.today.format('Y');
  }

},

methods: {
  addMonth : function() {
    var t = this;
    t.dateContext = moment(t.dateContext).add(1,'month');
  },
  subtractMonth: function() {
    var t = this;
    t.dateContext = moment(t.dateContext).subtract(1,'month');
  }
}

//   data() {
//     return {
//       today : new DateTime(),
//       date : null,
//       weekdays :null,
//       dates: [1, 31],
//       scheduleList: [
//         {
//           month: 1,
//           day: 19,
//           note: 'activity'
//         }
//       ]
//     }
//   },
//
//   }
// },
// created() {
//   this.setDates();
// },
// methods : {
//   setDates() {
//     this.now = moment();
//     let day = 1;
//     for(let i=0;i<this.now.last;i++) {
//         if(i<firstDay) {
//           this.dates.push(0);
//         } else {
//           this.dates.push(day++);
//         }
//     }
//   }
// }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#monthTitle{
  font-weight: bold;
  text-align: center
}
ul {list-style-type: none;
  
}




.calender{
  padding: 70px 25px;
  width: 100%;



}
.calender ul li{
  color: rgb(46, 52, 68);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  
  

}
.calender .prev {
    float: left;
  padding-top: 10px;
 
  
}

.calender .next{
  float: right;
  padding-top: 10px;
  


}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color:#ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

/* Days (1-31) */
.dates {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.dates li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #777;
}


</style>
