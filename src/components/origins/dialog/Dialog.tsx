import { MutableRefObject, useEffect, useRef } from "react";
import { DialogConfig } from "./prop";
import { createRoot } from "react-dom/client";
import './Dialog.css'
function OriginDialog({ children, close, afterClose }) {
    return (
        <>
            {children}
            <button autoFocus onClick={function (e) {
                e.stopPropagation();
                close();
                //    关闭后事件
                afterClose();
            }}>{'关闭'}</button>
        </>
    )
}

function Dialog({ children, open, close, afterClose}) {
    const dialogRef: MutableRefObject<HTMLDialogElement | null> = useRef(null);
    // 渲染完屏幕后再执行  避免相同open情况下重复执行 添加第二个参数
    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [open]);
    return (
        <>
            <dialog ref={dialogRef}>
                <OriginDialog
                    children={children}
                    close={close}
                    afterClose={afterClose}
                >

                </OriginDialog>
            </dialog>
        </>
    )
}

/**
 * 展示模态框
 * @param config 
 */
Dialog.show = function (config: DialogConfig) {
    createDialog(config);
    Dialog.dialogRef.showModal();
    /**
  * 关闭模态框
  */

}

Dialog.close = function () {
    // 默认esc关闭模态框  非模态不会关闭
    Dialog.dialogRef.close();
    Dialog.root.unmount();
    document.body.removeChild(Dialog.dialogRef);
}

/**
 * 创建模态框
 * @param config 
 * @returns 
 */
function createDialog(config: DialogConfig = {}) {
    const dialog = document.createElement('dialog');
    const root = createRoot(dialog);
    root.render(<OriginDialog
        close={function () { Dialog.close() }}
        afterClose={config.afterClose}
        children={config.children}></OriginDialog>);
    document.body.appendChild(dialog);
    Dialog.dialogRef = dialog;
    Dialog.root = root;
}
Dialog.dialogRef = null;
Dialog.root = null;
export default Dialog;