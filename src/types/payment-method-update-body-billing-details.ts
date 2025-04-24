import {
  External$PaymentMethodUpdateBodyBillingDetailsAddressObj0,
  PaymentMethodUpdateBodyBillingDetailsAddressObj0,
  Schemas$PaymentMethodUpdateBodyBillingDetailsAddressObj0,
} from "./payment-method-update-body-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
 */
export type PaymentMethodUpdateBodyBillingDetails = {
  address?:
    | (PaymentMethodUpdateBodyBillingDetailsAddressObj0 | string)
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * PaymentMethodUpdateBodyBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUpdateBodyBillingDetails = {
  address?:
    | (External$PaymentMethodUpdateBodyBillingDetailsAddressObj0 | string)
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUpdateBodyBillingDetails
 */
const SchemaIn$PaymentMethodUpdateBodyBillingDetails: z.ZodType<
  PaymentMethodUpdateBodyBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentMethodUpdateBodyBillingDetailsAddressObj0.in,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUpdateBodyBillingDetails
 */
const SchemaOut$PaymentMethodUpdateBodyBillingDetails: z.ZodType<
  External$PaymentMethodUpdateBodyBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUpdateBodyBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentMethodUpdateBodyBillingDetailsAddressObj0.out,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$PaymentMethodUpdateBodyBillingDetails = {
  in: SchemaIn$PaymentMethodUpdateBodyBillingDetails,
  out: SchemaOut$PaymentMethodUpdateBodyBillingDetails,
};
