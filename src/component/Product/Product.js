import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// icon
import BriefCase from '../../assets/icon/fi_briefcase.png';
import Users from '../../assets/icon/fi_users.png';


const Product = props => {
  return (
    <View style={styles.imageWrapper}>
      <Image source={props.gambar} style={styles.imageSize} />

      <View>
        <Text style={styles.mainText}>{props.judul}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <Image
              source={Users}
              style={{width: 12, height: 12, marginRight: 6}}
            />
            <Text style={styles.iconText}>{props.users}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={BriefCase}
              style={{width: 12, height: 12, marginRight: 6}}
            />
            <Text style={styles.iconText}>{props.briefCase}</Text>
          </View>
        </View>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#5CB85F'}}>
          {props.harga}
        </Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  imageSize: {
    width: 40,
    height: 24,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 6,
  },
  mainText: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  iconText: {fontSize: 10},
  imageWrapper: {
    borderWidth: 2,
    borderColor: '#ecf0f1',
    backgroundColor: '#FFFFFF',
    width: 328,
    height: 98,
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 12,
  },
});
