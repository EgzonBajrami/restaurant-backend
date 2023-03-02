const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

module.exports = {
    checkout: async(params) =>{
     
        const data = params;
        console.log(data);
     
    
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: data.map((item) => {
              console.log(item.title);
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.title,
                  },
                  unit_amount: Math.round(item.price*100),
                },
                quantity: 1,
              }
            }),
            success_url: `${process.env.CLIENT_URL}/checkout/success`,
            cancel_url: `${process.env.CLIENT_URL}/checkout/cancel`,
          })
          return {url:session.url};
    }
}