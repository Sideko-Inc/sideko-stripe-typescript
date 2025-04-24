import {
  External$PaymentMethodCreateBodyBillingDetailsAddressObj0,
  PaymentMethodCreateBodyBillingDetailsAddressObj0,
  Schemas$PaymentMethodCreateBodyBillingDetailsAddressObj0,
} from "./payment-method-create-body-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
 */
export type PaymentMethodCreateBodyBillingDetails = {
  address?:
    | (PaymentMethodCreateBodyBillingDetailsAddressObj0 | string)
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyBillingDetails = {
  address?:
    | (External$PaymentMethodCreateBodyBillingDetailsAddressObj0 | string)
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyBillingDetails
 */
const SchemaIn$PaymentMethodCreateBodyBillingDetails: z.ZodType<
  PaymentMethodCreateBodyBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentMethodCreateBodyBillingDetailsAddressObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyBillingDetails
 */
const SchemaOut$PaymentMethodCreateBodyBillingDetails: z.ZodType<
  External$PaymentMethodCreateBodyBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentMethodCreateBodyBillingDetailsAddressObj0.out,
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

export const Schemas$PaymentMethodCreateBodyBillingDetails = {
  in: SchemaIn$PaymentMethodCreateBodyBillingDetails,
  out: SchemaOut$PaymentMethodCreateBodyBillingDetails,
};
