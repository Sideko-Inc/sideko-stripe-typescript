import {
  CustomerSessionResourceComponentsResourceBuyButton,
  External$CustomerSessionResourceComponentsResourceBuyButton,
  Schemas$CustomerSessionResourceComponentsResourceBuyButton,
} from "./customer-session-resource-components-resource-buy-button";
import {
  CustomerSessionResourceComponentsResourcePaymentElement,
  External$CustomerSessionResourceComponentsResourcePaymentElement,
  Schemas$CustomerSessionResourceComponentsResourcePaymentElement,
} from "./customer-session-resource-components-resource-payment-element";
import {
  CustomerSessionResourceComponentsResourcePricingTable,
  External$CustomerSessionResourceComponentsResourcePricingTable,
  Schemas$CustomerSessionResourceComponentsResourcePricingTable,
} from "./customer-session-resource-components-resource-pricing-table";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration for the components supported by this Customer Session.
 */
export type CustomerSessionResourceComponents = {
  /**
   * This hash contains whether the buy button is enabled.
   */
  buyButton: CustomerSessionResourceComponentsResourceBuyButton;
  /**
   * This hash contains whether the Payment Element is enabled and the features it supports.
   */
  paymentElement: CustomerSessionResourceComponentsResourcePaymentElement;
  /**
   * This hash contains whether the pricing table is enabled.
   */
  pricingTable: CustomerSessionResourceComponentsResourcePricingTable;
};

/**
 * @internal
 * CustomerSessionResourceComponents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionResourceComponents = {
  buy_button: External$CustomerSessionResourceComponentsResourceBuyButton;
  payment_element: External$CustomerSessionResourceComponentsResourcePaymentElement;
  pricing_table: External$CustomerSessionResourceComponentsResourcePricingTable;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionResourceComponents
 */
const SchemaIn$CustomerSessionResourceComponents: z.ZodType<
  CustomerSessionResourceComponents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buy_button: Schemas$CustomerSessionResourceComponentsResourceBuyButton.in,
    payment_element:
      Schemas$CustomerSessionResourceComponentsResourcePaymentElement.in,
    pricing_table:
      Schemas$CustomerSessionResourceComponentsResourcePricingTable.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buy_button: "buyButton",
      payment_element: "paymentElement",
      pricing_table: "pricingTable",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionResourceComponents
 */
const SchemaOut$CustomerSessionResourceComponents: z.ZodType<
  External$CustomerSessionResourceComponents, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionResourceComponents // the object to be transformed
> = z
  .object({
    buyButton: Schemas$CustomerSessionResourceComponentsResourceBuyButton.out,
    paymentElement:
      Schemas$CustomerSessionResourceComponentsResourcePaymentElement.out,
    pricingTable:
      Schemas$CustomerSessionResourceComponentsResourcePricingTable.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyButton: "buy_button",
      paymentElement: "payment_element",
      pricingTable: "pricing_table",
    });
  });

export const Schemas$CustomerSessionResourceComponents = {
  in: SchemaIn$CustomerSessionResourceComponents,
  out: SchemaOut$CustomerSessionResourceComponents,
};
