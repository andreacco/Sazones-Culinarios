interface IProducts {
    products: [Object]
  }
  
  type productState = {
    products: any
    bestSellers: any
    bannerProducts: any
    categories: any
    title: any
    subscribeResponse: any
  }
  
  type productAction = {
    type: string
    payload: IProducts
  }
  
  type DispatchType = (args: productAction) => productAction