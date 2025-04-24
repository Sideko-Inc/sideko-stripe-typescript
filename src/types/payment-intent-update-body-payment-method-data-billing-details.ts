import {
  External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0,
  PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./payment-intent-update-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataBillingDetails
 */
export type PaymentIntentUpdateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetailsAddressObj0.out,
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails,
};
