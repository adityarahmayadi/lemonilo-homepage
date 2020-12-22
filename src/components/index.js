import React from 'react'
import styled from 'styled-components/native'
import { 
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
  Text,
  TextInput
} from 'react-native'
import { colors } from '@lemonilo/utils/constants'

const base = ({
  bg,
  c,
  d = 'flex',
  posi,
  p,
  m,
  w,
  minW,
  maxW,
  h,
  minH,
  maxH,
  f,
  fGrow,
  fBasis,
  fShrink,
  fWrap,
  fDir = 'column',
  fJustify,
  fAlign,
  fJustifySelf,
  fAlignSelf,
  b,
  bStyle,
  bColor,
  bBottomCol,
  bBottomW,
  bLeftCol,
  bLeftW,
  bRightCol,
  bRightW,
  bTopCol,
  bTopW,
  r,
  rBottomEnd,
  rBottomStart,
  top,
  left,
  bottom,
  right,
  overflow,
  z
}) => {
  const styles = {
    background: bg,
    color: c,
    display: d,
    position: posi,
    margin: m,
    padding: p,
    width: w === true ? '100%' : w,
    minWidth: minW,
    maxWidth: maxW,
    height: h,
    minHeight: minH,
    maxHeight: maxH,
    flex: f,
    flexGrow: fGrow,
    flexBasis: fBasis,
    flexShrink: fShrink,
    flexDirection: fDir,
    flexWrap: fWrap,
    justifyContent: fJustify,
    alignItems: fAlign,
    justifySelf: fJustifySelf,
    alignSelf: fAlignSelf,
    border: b,
    borderStyle: bStyle,
    borderColor: bColor,
    borderRadius: r,
    borderBottomRightRadius: rBottomEnd,
    borderBottomLeftRadius: rBottomStart,
    borderBottomColor: bBottomCol,
    borderBottomWidth: bBottomW,
    borderLeftColor: bLeftCol,
    borderLeftWidth: bLeftW,
    borderRightColor: bRightCol,
    borderRightWidth: bRightW,
    borderTopColor: bTopCol,
    borderTopWidth: bTopW,
    top,
    left,
    bottom,
    right,
    overflow,
    zIndex: z,
  }
  return styles
}

export const Box = styled(View)(css => ({
  ...base(css),
}))

export const Touch = styled(TouchableOpacity)(css => ({
  ...base(css),
}))

export const Scroll = styled(ScrollView)(css => ({
  ...base(css),
}))

export const List = styled(FlatList)(css => ({
  ...base(css),
}))

export const SafeArea = styled(SafeAreaView)(css => ({
  ...base(css),
}))

export const Images = styled(Image)(({
  f,
  posi,
  p,
  m,
  w,
  minW,
  maxW,
  h = '100%',
  minH,
  maxH,
  r,
  top,
  left,
  bottom,
  right,
  resizeMode,
  aspectRatio,
}) => ({
  flex: f,
  position: posi,
  margin: m,
  padding: p,
  width: w,
  minWidth: minW,
  maxWidth: maxW,
  height: h,
  minHeight: minH,
  maxHeight: maxH,
  borderRadius: r,
  top,
  left,
  bottom,
  right,
  resizeMode,
  aspectRatio,
}))

export const Font = styled(Text)(
  ({
    f,
    fJustify,
    fAlign,
    fAlignSelf,
    c,
    p,
    m,
    fontSize = '12px',
    fontWeight,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecor,
    textOverflow,
    posi = 'relative',
  }) => ({
    flex: f,
    justifyContent: fJustify,
    alignSelf: fAlignSelf,
    alignItems: fAlign,
    color: c,
    margin: m,
    padding: p,
    fontSize,
    fontWeight,
    position: posi,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecoration: textDecor,
    textOverflow,
  })
)

const InputBox = styled(TextInput)(
  ({
    bg = 'white',
    c = 'black',
    d = 'flex',
    posi,
    p = '10px 12px',
    m,
    w = true,
    minW,
    maxW,
    h = '40px',
    minH,
    maxH,
    f,
    fGrow,
    fBasis,
    fShrink,
    fDir = 'column',
    fJustify = 'center',
    fAlign = 'center',
    top,
    left,
    bottom,
    right,
    fontSize,
    weight,
    letterSpacing,
    textAlign,
    lineHeight,
    textOverflow,
    b = `1px solid ${colors.grey10}`,
    bColor = colors.grey10,
    bStyle,
    r = '4px',
    bBottomCol,
    bBottomW,
    bLeftCol,
    bLeftW,
    bRightCol,
    bRightW,
    bTopCol,
    bTopW,
  }) => ({
    background: bg,
    color: c,
    display: d,
    position: posi,
    margin: m,
    padding: p,
    width: w === true ? '100%' : w,
    minWidth: minW,
    maxWidth: maxW,
    height: h,
    minHeight: minH,
    maxHeight: maxH,
    flex: f,
    flexGrow: fGrow,
    flexBasis: fBasis,
    flexShrink: fShrink,
    flexDirection: fDir,
    justifyContent: fJustify,
    alignItems: fAlign,
    top,
    left,
    bottom,
    right,
    fontSize,
    letterSpacing,
    textAlign,
    lineHeight,
    textOverflow,
    border: b,
    borderStyle: bStyle,
    borderColor: bColor,
    borderRadius: r,
    borderBottomColor: bBottomCol,
    borderBottomWidth: bBottomW,
    borderLeftColor: bLeftCol,
    borderLeftWidth: bLeftW,
    borderRightColor: bRightCol,
    borderRightWidth: bRightW,
    borderTopColor: bTopCol,
    borderTopWidth: bTopW,
  })
)

export const Field = props => {
  const { error } = props

  return (
    <>
      <InputBox bColor={error ? colors.red30 : colors.grey10} {...props} />
      <Box h='20px'>
        {error !== '' && (
          <Font m='0' fontSize='12px' c={colors.red30}>
            {error}
          </Font>
        )}
      </Box>
    </>
  )
}