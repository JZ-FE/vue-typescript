import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import { State, Mutation, Getter, Action} from 'vuex-class'
import template from './home.vue'
import Hello from 'components/tags/hello'

@Component({
    name: 'Home',
    mixins: [template],
    components: {
        Hello
    }
})
export default class Home extends Vue {
}
