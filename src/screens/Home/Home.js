import React from 'react';
import {View, Text, Image} from 'react-native';
import Product from '../../component/Product/Product';
import {ScrollView} from 'react-native-gesture-handler';

// image
import banner from '../../assets/image/Banner.png';
import profile from '../../assets/image/Profile.png';
import Icon from '../../component/Icon/Icon';
import Mobil from '../../assets/image/Mobil.png';

const Home = () => {
  return (
    <View style={{width: 360, height: 176, backgroundColor: '#D3D9FD'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 68,
            marginBottom: 16,
          }}>
          <View style={{marginRight: 206}}>
            <Text style={{fontSize: 12}}>Hi, Nama</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Your Location
            </Text>
          </View>
          <Image source={profile} style={{width: 28, height: 28}} />
        </View>

        <Image
          source={banner}
          style={{
            width: 328,
            height: 140,
            marginBottom: 40,
          }}
        />
      </View>
      <Icon />

      <View>
        <Text
          style={{
            marginTop: 18,
            marginLeft: 16,
            marginBottom: 20,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Daftar Mobil Pilihan
        </Text>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
            <Product
              judul="Daihatsu Xenia"
              gambar={Mobil}
              briefCase={4}
              users={2}
              harga="Rp. 250.000"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
