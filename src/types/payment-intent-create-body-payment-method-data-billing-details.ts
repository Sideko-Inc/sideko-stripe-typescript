import {
  External$PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
  PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./payment-intent-create-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataBillingDetails
 */
export type PaymentIntentCreateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | External$PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataBillingDetails: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0.out,
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetails = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataBillingDetails,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataBillingDetails,
};
