import React from 'react';
import {View, Text, Image} from 'react-native';
import Allura from '../../assets/image/AlluraPark.png';

export default function Akun() {
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Text
        style={{
          marginTop: 18,
          marginLeft: 16,
          marginBottom: 86,
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Akun
      </Text>

      <View style={{alignItems: 'center'}}>
        <Image
          source={Allura}
          style={{width: 312, height: 192, marginBottom: 16}}
        />
        <Text style={{fontSize: 14, marginBottom: 16, textAlign: 'center'}}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah
        </Text>

        <View
          style={{
            backgroundColor: '#5CB85F',
            width: 81,
            height: 36,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>
            Regiter
          </Text>
        </View>
      </View>
    </View>
  );
}
