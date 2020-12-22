import styled from 'styled-components/native'
import { 
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
  Text
} from 'react-native'

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
    position: posi,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecoration: textDecor,
    textOverflow,
  })
)
