import React from "react";
import Footer from "../components/footer";

function Pricing() {
  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <thead>
            <tr class="stripe-dark">
              <th class="fw6 tl pa3 bg-white">Membership Package</th>
              <th class="fw6 tl pa3 bg-white">Description</th>
              <th class="fw6 tl pa3 bg-white">Price</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">Basic</td>
              <td class="pa3">Able to Messege the Seller</td>
              <td class="pa3">$1.00</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">Premium</td>
              <td class="pa3">User can create an account</td>
              <td class="pa3">$2.00</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">Ultimate</td>
              <td class="pa3">User can Sell</td>
              <td class="pa3">$3.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
export default Pricing;
