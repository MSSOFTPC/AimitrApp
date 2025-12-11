import { View, Text } from 'react-native'
import React, { memo } from 'react'
import {Sheet} from 'tamagui'

const Bottomsheet = ({children,open,snapPoints = [70,100],disabledAutoDismissed = false,onClose}) => {
  return (
    <Sheet
        open={open}
        modal
        dismissOnSnapToBottom={!disabledAutoDismissed}
        snapPoints={snapPoints}
        onOpenChange={(e)=>!e && onClose?.()}
        moveOnKeyboardChange
        unmountChildrenWhenHidden
        dismissOnOverlayPress={!disabledAutoDismissed}
      >
        <Sheet.Overlay
          animation="lazy"
          backgroundColor="$shadow6"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame>
            {open && children}
        </Sheet.Frame>
      </Sheet>
  )
}

export default memo(Bottomsheet)