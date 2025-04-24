import {
  CustomerSessionCreateBodyComponentsBuyButton,
  External$CustomerSessionCreateBodyComponentsBuyButton,
  Schemas$CustomerSessionCreateBodyComponentsBuyButton,
} from "./customer-session-create-body-components-buy-button";
import {
  CustomerSessionCreateBodyComponentsPaymentElement,
  External$CustomerSessionCreateBodyComponentsPaymentElement,
  Schemas$CustomerSessionCreateBodyComponentsPaymentElement,
} from "./customer-session-create-body-components-payment-element";
import {
  CustomerSessionCreateBodyComponentsPricingTable,
  External$CustomerSessionCreateBodyComponentsPricingTable,
  Schemas$CustomerSessionCreateBodyComponentsPricingTable,
} from "./customer-session-create-body-components-pricing-table";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration for each component. Exactly 1 component must be enabled.
 */
export type CustomerSessionCreateBodyComponents = {
  buyButton?: CustomerSessionCreateBodyComponentsBuyButton | undefined;
  paymentElement?:
    | CustomerSessionCreateBodyComponentsPaymentElement
    | undefined;
  pricingTable?: CustomerSessionCreateBodyComponentsPricingTable | undefined;
};

/**
 * @internal
 * CustomerSessionCreateBodyComponents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionCreateBodyComponents = {
  buy_button?:
    | External$CustomerSessionCreateBodyComponentsBuyButton
    | undefined;
  payment_element?:
    | External$CustomerSessionCreateBodyComponentsPaymentElement
    | undefined;
  pricing_table?:
    | External$CustomerSessionCreateBodyComponentsPricingTable
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionCreateBodyComponents
 */
const SchemaIn$CustomerSessionCreateBodyComponents: z.ZodType<
  CustomerSessionCreateBodyComponents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buy_button:
      Schemas$CustomerSessionCreateBodyComponentsBuyButton.in.optional(),
    payment_element:
      Schemas$CustomerSessionCreateBodyComponentsPaymentElement.in.optional(),
    pricing_table:
      Schemas$CustomerSessionCreateBodyComponentsPricingTable.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionCreateBodyComponents
 */
const SchemaOut$CustomerSessionCreateBodyComponents: z.ZodType<
  External$CustomerSessionCreateBodyComponents, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionCreateBodyComponents // the object to be transformed
> = z
  .object({
    buyButton:
      Schemas$CustomerSessionCreateBodyComponentsBuyButton.out.optional(),
    paymentElement:
      Schemas$CustomerSessionCreateBodyComponentsPaymentElement.out.optional(),
    pricingTable:
      Schemas$CustomerSessionCreateBodyComponentsPricingTable.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyButton: "buy_button",
      paymentElement: "payment_element",
      pricingTable: "pricing_table",
    });
  });

export const Schemas$CustomerSessionCreateBodyComponents = {
  in: SchemaIn$CustomerSessionCreateBodyComponents,
  out: SchemaOut$CustomerSessionCreateBodyComponents,
};
