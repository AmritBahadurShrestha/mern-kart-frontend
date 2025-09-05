import api from '.'

export const add_to_cart = async(data: {productId:string, quantity: number}) => {

    try {
        
        const response = await api.post(`/cart`, data)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}

// Get cart items
export const get_cart = async () => {
  try {
    const response = await api.get(`/cart`);
    return response.data
  } catch (error: any) {
    throw error.response?.data || error;
  }
};

// Remove from cart
export const remove_from_cart = async (id: string) => {
  try {
    const response = await api.delete(`/cart/item/${id}`  );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};

// Update quantity
export const update_cart_quantity = async ({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) => {
  try {
    const response = await api.put(`/cart/${id}`, { quantity });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
