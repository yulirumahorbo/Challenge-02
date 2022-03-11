import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Product from '../../component/Product/Product';

// image
import Mobil from '../../assets/image/Mobil.png';

const Daftar = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View>
        <Text
          style={{
            marginTop: 18,
            marginLeft: 16,
            marginBottom: 20,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Daftar Mobil
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

export default Daftar;

