interface IProducts {
    products: [Object]
  }
  
  type productState = {
    products: any
    categories: array
  }
  
  type productAction = {
    type: string
    payload: IProducts
  }
  
  type DispatchType = (args: productAction) => productAction