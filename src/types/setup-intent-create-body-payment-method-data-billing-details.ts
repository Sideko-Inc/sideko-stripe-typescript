import {
  External$SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
  SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./setup-intent-create-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataBillingDetails
 */
export type SetupIntentCreateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0 | string)
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | External$SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataBillingDetails: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetailsAddressObj0.out,
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

export const Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetails = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataBillingDetails,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataBillingDetails,
};
