// import { Button } from "mala-ui"
import { Button } from "@mala-ui/components"

const TestButton = () => {
  return (
    <div className="test-button">
      <h2>button组件测试</h2>
      <h3>type属性</h3>
      <Button type="primary" style={{ marginRight: "10px" }}>
        primary
      </Button>
      <Button type="success" style={{ marginRight: "10px" }}>
        success
      </Button>
      <Button type="warning" style={{ marginRight: "10px" }}>
        warning
      </Button>
      <Button type="danger" style={{ marginRight: "10px" }}>
        danger
      </Button>
      <Button type="info">info</Button>
      <h3>theme属性</h3>
      <h5>theme=dark</h5>
      <Button theme="dark" type="primary" style={{ marginRight: "10px" }}>
        primary
      </Button>
      <Button theme="dark" type="success" style={{ marginRight: "10px" }}>
        success
      </Button>
      <Button theme="dark" type="warning" style={{ marginRight: "10px" }}>
        warning
      </Button>
      <Button theme="dark" type="danger" style={{ marginRight: "10px" }}>
        danger
      </Button>
      <Button theme="dark" type="info">
        info
      </Button>
      <h5>theme=none</h5>
      <Button theme="none" type="primary" style={{ marginRight: "10px" }}>
        primary
      </Button>
      <Button theme="none" type="success" style={{ marginRight: "10px" }}>
        success
      </Button>
      <Button theme="none" type="warning" style={{ marginRight: "10px" }}>
        warning
      </Button>
      <Button theme="none" type="danger" style={{ marginRight: "10px" }}>
        danger
      </Button>
      <Button theme="none" type="info">
        info
      </Button>
      <h3>size属性</h3>
      <Button size="large" style={{ marginRight: "10px" }}>
        large
      </Button>
      <Button size="default" style={{ marginRight: "10px" }}>
        default
      </Button>
      <Button size="small">small</Button>
    </div>
  )
}

export default TestButton
