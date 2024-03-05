import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: {
      productName: "ICER Front Brake Pad A3 2022 Limosine",
      fixedPrice: "6,000",
      currentPrice: "5042",
      available: 2,
      relatedProducts: [
        {
          name: "ICER Front Brake Pads",
          category: "Brake Pads",
          price: "3,609",
          image: "/other-product-image.png",
        },
      ],
      images: [
        {
          path: "/product-image-1.png",
        },
        {
          path: "/product-image-2.png",
        },
        {
          path: "/product-image-3.png",
        },
        {
          path: "/product-image-4.png",
        },
        {
          path: "/product-image-5.png",
        },
      ],
      specifications: [
        {
          title: "Parts number",
          value: "BRK_001108",
        },
        {
          title: "Category",
          value: "Brake pad",
        },
        {
          title: "Brand",
          value: "ICER",
        },
        {
          title: "Wear indicator",
          value: "On product",
        },
        {
          title: "Axle",
          value: "Front",
        },
      ],
    },
  },
  reducers: {
    updateData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateData } = productSlice;
export default productSlice.reducer;
