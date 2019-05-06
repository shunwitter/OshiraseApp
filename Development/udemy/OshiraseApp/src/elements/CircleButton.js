import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = '#FFA500';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#FFA500';
    }



    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor : bgColor }]}>
        {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.circleButtonTitle, { color : textColor }]} />
          ) : null
        }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 40,
    height: 40,
  },
  circleButton: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  },
});

export default CircleButton;
