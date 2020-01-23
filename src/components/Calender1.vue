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
      <li class="box" v-for="(date,index1) in dates" :key="index1">
     
      <span>{{date}}</span>
        

  
    </li>
    <!-- <div v-for="day in dates"> <span v-if="day > 0">{ day }}</span><div>{{ scheduleItem(day)  }}</div></div> -->
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    name:'Calender1',
    data(){
        return{
        
            days:['S','M','T','W','T','F','S'],
            dateContext :moment(),
            dates:null,
            

        
        }
    },
    created(){
        this.setDates();

    },

   computed:{
  year(){
    return this.dateContext.format('Y');
  },
  month() {
    return this.dateContext.format('MMMM');
  }
   },

    methods:{
        setDates(){
            this.dates =[];
           
            let lastDate = this.dateContext.endOf('month').date();
            let startDay = this.dateContext.startOf('month').day() 
            for(let j=0;j< startDay;j++){
                    this.dates.push(" ");
                }

            let day = 1;
            for(let i=0; i<lastDate; i++){
                
                this.dates.push(day++);
            }
        
        },
    
        addMonth() {
            this.dateContext = moment(this.dateContext).add(1,'month');
            this.setDates()
        },
        subtractMonth(){
            this.dateContext = moment(this.dateContext).subtract(1,'month');
            this.setDates()
        },
        
    }

}
</script>

<style scoped>

#monthTitle{
  font-weight: bold;
  text-align: center
}
ul {list-style-type: none;
  
}




.calender{
  margin-top: 70px;
  padding:100px
  
 



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