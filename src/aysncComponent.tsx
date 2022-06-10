import{ Component } from 'react'

export default function asyncComponent(importComponent:any, delay = 0) {
  class AsyncComponent extends Component<any, any> {
    constructor(props:any) {
      super(props)
      this.state = {
        component: null,
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      setTimeout(() => {
        this.setState({
          component
        })
      }, delay)
    }

    render() {
      const C = this.state.component

      return C
        ? <C {...this.props} />
        : <div style={{ width: '100%', paddingTop: '20px', textAlign: 'center' }}></div>
    }
  }

  return AsyncComponent
}