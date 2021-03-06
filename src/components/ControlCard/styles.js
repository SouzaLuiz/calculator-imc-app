import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'

import { widthDP, heightDP } from '../../utils/responsive'

import LessIcon from '../../assets/less.svg'
import MoreIcon from '../../assets/more.svg'

import colors from '../../styles/colors'

export const Card = styled.View`
  background-color: ${colors.blackColor};
  margin-top: ${heightDP(1.5)}px;
  width: ${widthDP(96)}px;
  padding: ${heightDP(2)}px 0;
  align-items: center;
  border-radius: 8px;
`

Card.Title = styled.Text`
  color: ${colors.whiteColor};
  font-family: 'PoppinsRegular';
  font-size: ${heightDP(2)}px;
`

Card.Value = styled.Text`
  color: ${colors.whiteColor};
  margin-top: 2px;
  font-family: 'PoppinsRegular';
  font-size: ${heightDP(5.2)}px;
`

export const Actions = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-around;
  margin: ${heightDP(1)}px 0;
`

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  height: ${heightDP(5.5)}px;
  width: ${heightDP(5.5)}px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`
const IconStyle = {
  fill: colors.blackColor,
  width: widthDP(8),
  height: heightDP(8)
}

Button.LessIcon = styled(LessIcon).attrs((IconStyle))``

Button.MoreIcon = styled(MoreIcon).attrs((IconStyle))``

export const SliderControl = styled(Slider).attrs({
  thumbTintColor: colors.primaryColor,
  minimumTrackTintColor: '#F1F2F6',
  maximumTrackTintColor: '#A6A8B9'
})`
  width: 70%;
`
