import {
  External$PaymentPagesCheckoutSessionCheckoutAddressDetails,
  PaymentPagesCheckoutSessionCheckoutAddressDetails,
  Schemas$PaymentPagesCheckoutSessionCheckoutAddressDetails,
} from "./payment-pages-checkout-session-checkout-address-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCollectedInformation = {
  shippingDetails?:
    | PaymentPagesCheckoutSessionCheckoutAddressDetails
    | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCollectedInformation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCollectedInformation = {
  shipping_details?:
    | External$PaymentPagesCheckoutSessionCheckoutAddressDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCollectedInformation
 */
const SchemaIn$PaymentPagesCheckoutSessionCollectedInformation: z.ZodType<
  PaymentPagesCheckoutSessionCollectedInformation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_details:
      Schemas$PaymentPagesCheckoutSessionCheckoutAddressDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_details: "shippingDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCollectedInformation
 */
const SchemaOut$PaymentPagesCheckoutSessionCollectedInformation: z.ZodType<
  External$PaymentPagesCheckoutSessionCollectedInformation, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCollectedInformation // the object to be transformed
> = z
  .object({
    shippingDetails:
      Schemas$PaymentPagesCheckoutSessionCheckoutAddressDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingDetails: "shipping_details",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCollectedInformation = {
  in: SchemaIn$PaymentPagesCheckoutSessionCollectedInformation,
  out: SchemaOut$PaymentPagesCheckoutSessionCollectedInformation,
};
