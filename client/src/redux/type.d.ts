interface IProducts {
    products: [Object]
  }
  
  type productState = {
    products: any
  }
  
  type productAction = {
    type: string
    payload: IProducts
  }
  
  type DispatchType = (args: productAction) => productAction