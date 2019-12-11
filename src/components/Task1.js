export default {
  name: `Task1`,
  components: {
  },
  data() {
    return {
        log: [],   // {id: number, tPressed: Date, tDelaySec: number, tFinish: Date | undefined}
        logText: ``
    };
  },
  methods: {
    click(id){
        var tDelaySec = this.intRandom(1, 10);
        var item = { id, tPressed: new Date(), tDelaySec };
        this.log.push(item);
        setTimeout(()=>{
            item.tFinish = new Date();
            this.refreshLog();
        }, tDelaySec * 1000);
        return item;      
    },
    reset(){
        this.log = [];
        this.refreshLog();
    },
    refreshLog(){
        var logText = ``;
        for(const item of this.log){
            if (item.tFinish){
                var stFinish = this.formatTime(item.tFinish),
                stPressed = this.formatTime(item.tPressed);
                logText += `${stFinish} Нажата кнопка ${item.id}, задержка ${item.tDelaySec}, время нажатия ${stPressed}\n`;
            }
        }
        this.logText = logText;
    },
    intRandom(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    },
    formatTime(t){
        return moment(t).format('HH:mm:ss DD.MM.YYYY');
    }
  },
  template: `
    <div>
        <h4 class="mb-10">Task 1</h4>
        <div class="flex justify-between mb-10">      
            <button @click="click(1)">Button 1</button>
            <button @click="click(2)">Button 2</button>
            <button @click="click(3)">Button 3</button>
        </div>
        <div class="flex flex-col">
            <textarea class="h-200 mb-10" v-model="logText" />
            <button class="self-end" @click="reset()">Reset</button>
        </div>
    </div>
  `,
};