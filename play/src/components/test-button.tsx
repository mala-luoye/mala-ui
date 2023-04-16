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
    </div>
  )
}

export default TestButton
