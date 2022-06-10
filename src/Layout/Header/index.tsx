import React from 'react';
import styles from './index.module.scss'
import { Button } from '@douyinfe/semi-ui';
import { IconMinus, IconClose } from '@douyinfe/semi-icons'
interface IProps {

}

interface IState {
    imgurl: string
}

class FormHeader extends React.PureComponent<IProps, IState> {

    state = {
        imgurl: ''
    }

    componentDidMount() {
        const closebt = document.getElementById('closebt')
        const minbt = document.getElementById('minbt')
        minbt?.addEventListener('click', () => {
            (window as any).ipcRenderer.send('window-min');
        })
        closebt?.addEventListener('click', () => {
            (window as any).ipcRenderer.send('window-close');
        })

    }
    render() {
        return (
            <div className={styles.winform}>
                <section>
                    <Button id="closebt" className={styles.btn} ><IconClose /></Button>
                    <Button id="minbt" className={styles.btn} ><IconMinus /></Button>
                </section>

                <div className={styles.topbar_logo_container} style={{ background: `url(${this.state.imgurl})` }} />
            </div>
        )
    }
}

export default FormHeader