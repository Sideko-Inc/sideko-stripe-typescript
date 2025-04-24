import {
  CheckoutSessionUpdateBodyCollectedInformationShippingDetails,
  External$CheckoutSessionUpdateBodyCollectedInformationShippingDetails,
  Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetails,
} from "./checkout-session-update-body-collected-information-shipping-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the customer collected within the Checkout Session.
 */
export type CheckoutSessionUpdateBodyCollectedInformation = {
  shippingDetails?:
    | CheckoutSessionUpdateBodyCollectedInformationShippingDetails
    | undefined;
};

/**
 * @internal
 * CheckoutSessionUpdateBodyCollectedInformation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyCollectedInformation = {
  shipping_details?:
    | External$CheckoutSessionUpdateBodyCollectedInformationShippingDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyCollectedInformation
 */
const SchemaIn$CheckoutSessionUpdateBodyCollectedInformation: z.ZodType<
  CheckoutSessionUpdateBodyCollectedInformation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_details:
      Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_details: "shippingDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyCollectedInformation
 */
const SchemaOut$CheckoutSessionUpdateBodyCollectedInformation: z.ZodType<
  External$CheckoutSessionUpdateBodyCollectedInformation, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyCollectedInformation // the object to be transformed
> = z
  .object({
    shippingDetails:
      Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingDetails: "shipping_details",
    });
  });

export const Schemas$CheckoutSessionUpdateBodyCollectedInformation = {
  in: SchemaIn$CheckoutSessionUpdateBodyCollectedInformation,
  out: SchemaOut$CheckoutSessionUpdateBodyCollectedInformation,
};
