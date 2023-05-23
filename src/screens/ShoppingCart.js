import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice';

const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>주문 총액</Text>
                <Text style={styles.text}>{subtotal} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>배달비</Text>
                <Text style={styles.text}>{deliveryFee} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>총합</Text>
                <Text style={styles.textBold}>{total} US$</Text>
            </View>
        </View>
    )
};

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>결제하기</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default ShoppingCart