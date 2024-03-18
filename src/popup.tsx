import TextArea from "~components/textArea"
import { CountButton } from "~features/CountButton"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      {/* <CountButton /> */}
      <TextArea />
    </div>
  )
}

export default IndexPopup
