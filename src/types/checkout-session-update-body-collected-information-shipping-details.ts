import {
  CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress,
  External$CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress,
  Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress,
} from "./checkout-session-update-body-collected-information-shipping-details-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyCollectedInformationShippingDetails
 */
export type CheckoutSessionUpdateBodyCollectedInformationShippingDetails = {
  address: CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress;
  name: string;
};

/**
 * @internal
 * CheckoutSessionUpdateBodyCollectedInformationShippingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyCollectedInformationShippingDetails =
  {
    address: External$CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress;
    name: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyCollectedInformationShippingDetails
 */
const SchemaIn$CheckoutSessionUpdateBodyCollectedInformationShippingDetails: z.ZodType<
  CheckoutSessionUpdateBodyCollectedInformationShippingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address:
      Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress.in,
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyCollectedInformationShippingDetails
 */
const SchemaOut$CheckoutSessionUpdateBodyCollectedInformationShippingDetails: z.ZodType<
  External$CheckoutSessionUpdateBodyCollectedInformationShippingDetails, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyCollectedInformationShippingDetails // the object to be transformed
> = z
  .object({
    address:
      Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetailsAddress.out,
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
    });
  });

export const Schemas$CheckoutSessionUpdateBodyCollectedInformationShippingDetails =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyCollectedInformationShippingDetails,
    out: SchemaOut$CheckoutSessionUpdateBodyCollectedInformationShippingDetails,
  };
