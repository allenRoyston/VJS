var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { VJScriptLoader } from "../../../assets/js/vjs-scriptloader";
import { VJSThreeloader } from "../../../assets/js/vjs-loaders";
export default {
    props: [],
    data() {
        return {
            game: null,
            store: this.$store,
            scriptLoader: new VJScriptLoader(),
            threeInstance: null
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.loadGame('src/_threeJS/three.test.js');
        },
        loadGame(file) {
            return __awaiter(this, void 0, void 0, function* () {
                let { game, store, scriptLoader, threeInstance } = this;
                if (game !== null) {
                    game = null;
                }
                if (!store.getters._threeJSIsLoaded()) {
                    yield scriptLoader.loadFile(`/node_modules/three/build/three.min.js`);
                    store.commit("setThreeJsIsLoaded", true);
                }
                yield scriptLoader.loadFile(file);
                // load instance
                threeInstance = new VJSThreeloader({ ele: this.$el, component: this, file, width: 800, height: 600 });
                yield threeInstance.createNew();
            });
        }
    },
    destroyed() {
        this.game = null;
    }
};
//# sourceMappingURL=threeComponent.js.map