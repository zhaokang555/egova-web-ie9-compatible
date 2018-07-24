import {Component, Vue} from 'vue-property-decorator';
import iview from "iview";
import IView from "@/components/iview/typings";

@Component
export default class ComponentBase extends Vue {
    /**
     * 获取一个全局加载条实例。
     * @returns IView.ILoadingBarInstance
     */
    protected get $loading(): IView.ILoadingBarInstance {
        return iview.LoadingBar;
    }

    /**
     * 获取一个全局消息提示框实例。
     * @returns IView.IMessageInstance
     */
    protected get $message(): IView.IMessageInstance {
        return iview.Message;
    }

    /**
     * 获取一个全局模态框实例。
     * @returns IView.IModalInstance
     */
    protected get $modal(): IView.IModalInstance {
        return iview.Modal;
    }

    /**
     * 获取一个全局通知提醒实例。
     * @returns IView.INoticeInstance
     */
    protected get $notice(): IView.INoticeInstance {
        return iview.Notice;
    }

    /**
     * 获取一个全局加载中组件实例。
     * @returns IView.ISpin
     */
    protected get $spin(): IView.ISpinInstance {
        return iview.Spin;
    }
}
