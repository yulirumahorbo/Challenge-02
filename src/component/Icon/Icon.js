import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// icon
import truck from '../../assets/icon/fi_truck.png';
import box from '../../assets/icon/fi_box.png';
import key from '../../assets/icon/fi_key.png';
import camera from '../../assets/icon/fi_camera.png';

const Icon = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <Image source={truck} style={styles.iconSize} />
        </View>
        <Text style={styles.text}>Sewa Mobil</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <Image source={box} style={styles.iconSize} />
        </View>
        <Text style={styles.text}>Oleh-Oleh</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <Image source={key} style={styles.iconSize} />
        </View>
        <Text style={styles.text}>Penginapan</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <Image source={camera} style={styles.iconSize} />
        </View>
        <Text style={styles.text}>Wisata</Text>
      </View>
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  wrapper: {alignItems: 'center'},
  iconSize: {width: 24, height: 24},
  iconWrapper: {
    backgroundColor: '#DEF1DF',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 12},
});
