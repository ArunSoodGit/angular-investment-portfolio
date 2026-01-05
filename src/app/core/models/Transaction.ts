export type Transaction = {
  id: number,
  type: 'BUY' | 'SELL',
  price: number,
  quantity: number,
  symbol: string,
  date: Date,
  positionId: number,
}
