import type ProductData from '@data/faker/product';
import type AddressData from '@data/faker/address';
import type CustomerData from '@data/faker/customer';
import type PaymentMethodData from '@data/faker/paymentMethod';
import type OrderStatusData from '@data/faker/orderStatus';

type OrderCreator = {
  id?: number
  reference?: string
  newClient?: boolean
  customer?: CustomerData
  totalPaid?: number
  paymentMethod?: PaymentMethodData
  status?: OrderStatusData
  delivery?: string
  deliveryAddress?: AddressData
  invoiceAddress?: AddressData
  products?: OrderProduct[]
  discountPercentValue?: number
  discountGiftValue?: number
  totalPrice?: number
  deliveryOption?: OrderDeliveryOption
}

type OrderDeliveryOption = {
  name: string
  freeShipping: boolean
}

type OrderProduct = {
  product: ProductData
  quantity: number
}

type OrderHistory = {
  reference: string
  date: string
  price: string
  paymentType: string
  status: string
  invoice: string
}

export {
  OrderCreator,
  OrderDeliveryOption,
  OrderHistory,
  OrderProduct,
};
